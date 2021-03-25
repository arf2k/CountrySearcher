import React, {useState} from "react";
import useResults from "../hooks/useResults";
import CountriesList from "../components/CountriesList"
import SearchBar from "../components/SearchBar"

const Homepage = () => {
     const [term, setTerm] = useState("")
     
const [searchCountries, results, error] = useResults()

// const countriesFilter = country => {
//      return results.filter(country => country.name.toLowerCase().includes(term.toLowerCase()))
// }

     return (
          <>
<SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchCountries(term)}/>
<CountriesList results={results}/>
</>
     )
}

export default Homepage