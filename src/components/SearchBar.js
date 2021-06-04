import React from "react";
import { ImSearch } from "react-icons/im";

const SearchBar = ({ searchTerm, searchHandler }) => {
  return (
    <>
      <ImSearch />
      <input
        placeholder="Look for a country"
        value={searchTerm}
        onChange={searchHandler}
      />
    </>
  );
};

export default SearchBar;
