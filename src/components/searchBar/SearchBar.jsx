import React from "react";

const SearchBar = () => {
  return (
    <div className="flex justify-center py-2">
      <input
        className=" outline-none px-2 md:w-1/2 h-8 rounded-sm"
        type="text"
        placeholder="Find your emoji..."
      />
    </div>
  );
};

export default SearchBar;
