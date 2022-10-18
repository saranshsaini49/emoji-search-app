import React, { useEffect, useRef, useState } from "react";
import SearchContainer from "./components/searchBar";
import DisplayContainer from "./components/display";
import { data } from "/src/data/data.js";

const generateRandom = () => {
  const tempData = [];
  for (let i = 0; i < 70; i++) {
    tempData.push(data[Math.floor(Math.random() * data.length)]);
  }
  return tempData;
};
function App() {
  const [displayData, setDisplayData] = useState(generateRandom());
  const [search, setSearch] = useState("");
  const intervalId = useRef(0);
  const searchRef = useRef("");

  useEffect(() => {
    intervalId.current = setInterval(() => {
      if (searchRef.current == "") {
        setDisplayData(generateRandom());
      }
    }, 10000);
  }, []);

  const findEmoji = () => {
    if (searchRef.current == "") {
      setDisplayData(generateRandom());
    } else {
      let newData = data.filter((item) => {
        if (item.name.includes(searchRef.current)) return true;
        else return false;
      });
      setDisplayData(newData);
    }
  };

  const handleSearch = (e) => {
    let value = e.target.value;
    setSearch(value);
    searchRef.current = value;
    const getData = setTimeout(() => {
      findEmoji();
    }, 2000);
    return () => clearTimeout(getData);
  };

  return (
    <div>
      <SearchContainer search={search} handleSearch={handleSearch} />
      <DisplayContainer displayData={displayData} />
    </div>
  );
}

export default App;
