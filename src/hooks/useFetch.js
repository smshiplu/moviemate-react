import { useEffect, useState } from "react";

export const useFetch = (endPoint, queryTerm="") => {

  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${endPoint}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;
  
  useEffect(() => {
    async function fetchMovies() {
      document.body.classList.add("loading");
      const response = await fetch(url);
      const json = await response.json();
      document.body.classList.remove("loading");
      setData(json.results);
    }
    fetchMovies();
  }, [url]);

  return { data };
}
