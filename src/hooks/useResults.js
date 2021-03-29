import { useState, useEffect } from "react";
import RestCountries from "../api/RestCountries";

export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const searchCountries = async (term) => {
    try {
      const response = await RestCountries.get("/all", {
        params: {
          limit: 50,
          term: term,
        },
      });
      setResults(response.data);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    searchCountries();
  }, []);

  return [searchCountries, results, error];
};
