import React, { useState } from "react";
import CountryShow from "../components/CountryShow";
import { ListDiv } from "../styles/CountryListStyles";
import SearchBar from "../components/SearchBar";

const CountriesList = ({ results }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  const renderCountries = () => {
    return results
      .filter((country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .map((country) => <CountryShow key={country.name} country={country} />);
  };

  return (
    <>
      <SearchBar searchTerm={searchTerm} searchHandler={searchHandler} />
      <ListDiv>{renderCountries()}</ListDiv>
    </>
  );
};

export default CountriesList;
