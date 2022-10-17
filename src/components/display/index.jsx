import React from "react";
import DisplayItem from "./DisplayItem";
import { data } from "/src/data/data.js";

const DisplayContainer = () => {
  const tempData = [];
  for (let i = 0; i < 70; i++) {
    tempData.push(data[Math.floor(Math.random() * data.length)]);
  }
  console.log(tempData);
  return (
    <>
      <div className=" grid grid-cols-10">
        {tempData.map((item, index) => {
          return <DisplayItem key={index} item={item} />;
        })}
      </div>
    </>
  );
};

export default DisplayContainer;
