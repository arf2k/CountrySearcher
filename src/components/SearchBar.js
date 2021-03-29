import React from "react";

const SearchBar = ({ searchTerm, searchHandler }) => {
  return (
    
      <input
        placeholder="Look for a country"
        value={searchTerm}
        onChange={searchHandler}
      />
  
  );
};

export default SearchBar;
