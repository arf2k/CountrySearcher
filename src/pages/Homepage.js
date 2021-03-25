import React from "react";
import useResults from "../hooks/useResults";
import CountriesList from "../components/CountriesList"

const Homepage = () => {
     
const [searchCountries, results, error] = useResults()
     return (
          <>
<h1>On the homepage</h1>
<CountriesList results={results}/>
</>
     )
}

export default Homepage