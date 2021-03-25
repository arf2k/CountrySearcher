import React from "react";
import CountryShow from "../components/CountryShow"

const CountriesList = ({results}) => {


const renderCountries = () => {
     return (
          results.map(country => <CountryShow key={country.name} country={country}/>)
     )
}

return (
     <>
<h1>Countries!!!</h1>
{renderCountries()}
</>
)

}

export default CountriesList