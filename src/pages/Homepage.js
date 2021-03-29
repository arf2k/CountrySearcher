import React from "react";
import useResults from "../hooks/useResults";
import CountriesList from "../components/CountriesList";

const Homepage = () => {
  const [searchCountries, results, error] = useResults();

  return (
    <>
      <CountriesList results={results} />
    </>
  );
};

export default Homepage;
