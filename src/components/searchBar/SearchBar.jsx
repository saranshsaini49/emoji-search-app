import React from "react";

const SearchBar = ({ search, handleSearch }) => {
  return (
    <div className="flex justify-center py-4">
      <input
        className=" outline-none p-3 md:w-1/2 rounded-md text-lg tracking-widest font-medium "
        type="text"
        placeholder="Find your emoji..."
        value={search}
        onChange={(e) => handleSearch(e)}
      />
    </div>
  );
};

export default SearchBar;
