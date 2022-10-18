import React from "react";
import SearchBar from "./SearchBar";
import Header from "./Header";

const SearchContainer = ({ search, handleSearch }) => {
  return (
    <div className="bg-blue-600">
      <Header />
      <SearchBar handleSearch={handleSearch} search={search} />
    </div>
  );
};

export default SearchContainer;
