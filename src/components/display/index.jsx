import React from "react";
import DisplayItem from "./DisplayItem";

const DisplayContainer = ({ displayData }) => {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 p-5">
        {displayData.map((item, index) => {
          return <DisplayItem key={index} item={item} />;
        })}
      </div>
    </>
  );
};

export default DisplayContainer;
