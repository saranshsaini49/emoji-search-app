import { data } from "/src/data/data.js";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [randomEmoji, setRandomEmoji] = useState(
    data[Math.floor(Math.random() * data.length)].emoji
  );
  useEffect(() => {
    setInterval(() => {
      setRandomEmoji(data[Math.floor(Math.random() * data.length)].emoji);
    }, 5000);
  }, []);

  return (
    <div className="flex justify-center py-4 ">
      <div className="flex gap-3 text-2xl text-white">
        <p>{randomEmoji}</p>
        <h4>Search Emoji</h4>
        <p>{randomEmoji}</p>
      </div>
    </div>
  );
};

export default Header;
