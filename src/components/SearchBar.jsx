import React, { useState } from "react";

const SearchBar = ({ setSubreddit }) => {
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setSubreddit(input);
    }
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input
        type="text"
        placeholder="Enter subreddit... "
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
