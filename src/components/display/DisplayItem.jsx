import React from "react";

const DisplayItem = ({ item }) => {
  return (
    <div className="border border-black py-4 flex flex-col items-center gap-2">
      <p className="text-3xl">{item.emoji}</p>
      <p className="text-center">{item.group}</p>
    </div>
  );
};

export default DisplayItem;
