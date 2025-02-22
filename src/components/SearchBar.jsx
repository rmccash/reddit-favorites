
//FileName:     SearchBar.jsx
//Assignment:   Assignment 01
//Author:       Rhys McCash
//Student #:    8825169
//Date:         02/21/2025
//Description:  This component allows users to search for a subreddit, ensuring "r/" is always included in the input.

import React, { useState } from "react";

const SearchBar = ({ setSubreddit }) => {
  const [inputValue, setInputValue] = useState("r/");

  const handleChange = (e) => {
    const value = e.target.value;

    //Prevent users from deleting "r/"
    if (!value.startsWith("r/")) 
    {
      setInputValue("r/");
    } 
    else 
    {
      setInputValue(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subredditName = inputValue.replace(/^r\//, "").trim();
    if (subredditName !== "") 
    {
      setSubreddit(subredditName);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <div className="input-wrapper">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Gaming"
        />
      </div>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
