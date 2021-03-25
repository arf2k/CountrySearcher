import { useState, useEffect } from "react";
import RestCountries from "../api/RestCountries";

export default () => {

     const [results, setResults] = useState([])
     const [error, setError] = useState("")

  const searchCountries = async (term) => {
    try {
      const response = await RestCountries.get("/all", {
        params: {
          term: term,
        },
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    searchCountries();
  }, []);
};
