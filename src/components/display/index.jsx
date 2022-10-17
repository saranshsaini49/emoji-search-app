import React, { useEffect, useState } from "react";
import DisplayItem from "./DisplayItem";
import { data } from "/src/data/data.js";

const generateRandom = () => {
  const tempData = [];
  for (let i = 0; i < 70; i++) {
    tempData.push(data[Math.floor(Math.random() * data.length)]);
  }
  return tempData;
};
const DisplayContainer = () => {
  const [currentData, setCurrentData] = useState(generateRandom());
  useEffect(() => {
    setInterval(() => {
      setCurrentData(generateRandom());
    }, 10000);
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 p-5">
        {currentData.map((item, index) => {
          return <DisplayItem key={index} item={item} />;
        })}
      </div>
    </>
  );
};

export default DisplayContainer;
