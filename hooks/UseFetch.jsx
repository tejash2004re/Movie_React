import { useState, useEffect } from "react";

const useFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=002ce80368304310d16fa7d8b3544ed0`;



        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        };
        const json = await response.json();
        setData(json.results || []);
      } catch (err) {
        console.error("Error fetching data:", err.message);
        setError(err.message);
      };
    };
    fetchData();
  }, [apiPath, queryTerm]);

  return { data, error };
};

export default useFetch;
