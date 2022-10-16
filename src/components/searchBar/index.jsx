import React from "react";
import SearchBar from "./SearchBar";
import Header from "./Header";

const SearchContainer = () => {
  return (
    <div className="bg-indigo-dye border-b-8 border-orange-yellow">
      <Header />
      <SearchBar />
    </div>
  );
};

export default SearchContainer;
