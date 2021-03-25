import React from "react";

const CountryShow = ({country}) => {
     return (
          <div class="countryContainer">
          <li>{country.name}</li>
          <img src={country.flag}/>
          </div>

     )



}

export default CountryShow