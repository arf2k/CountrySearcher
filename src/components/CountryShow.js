import React from "react";
import {CardContainer, InfoDiv} from "../styles/CountryShowStyles"

const CountryShow = ({country}) => {
     return (
          <CardContainer>
          <h1 style={{textAlign: "center"}}>{country.name}</h1>
          <img src={country.flag} style={{height: "200px", width: "auto"}}/>
          <InfoDiv>
               <h3>Capital: {country.capital}</h3>
               <h3>Population: {country.population}</h3>
               <h3>Region: {country.subregion}</h3>
          </InfoDiv>
          </CardContainer>

     )



}

export default CountryShow