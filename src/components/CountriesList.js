import React from "react";
import CountryShow from "../components/CountryShow"
import {ListDiv} from "../styles/CountryListStyles"

const CountriesList = ({results}) => {


const renderCountries = () => {
     return (
          results.map(country => <CountryShow key={country.name} country={country}/>)
     )
}

return (
     <>
<ListDiv>
     {renderCountries()}
 </ListDiv>

</>
)

}

export default CountriesList