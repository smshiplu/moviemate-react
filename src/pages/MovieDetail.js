import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDocTitle } from "../hooks";
import BackupImage from "../assets/backup.jpg";

export const MovieDetail = () => {
  const [movie, setMovie] = useState({});
  const param = useParams();
  useDocTitle(movie.original_title);
  const url = `https://api.themoviedb.org/3/movie/${param.id}?api_key=${process.env.REACT_APP_API_KEY}`;

  const imagePath = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : BackupImage;

  useEffect(() => {
    async function fetchMovie() {
      document.body.classList.add("loading");
      const response = await fetch(url);
      const json = await response.json();
      document.body.classList.remove("loading");
      setMovie(json);
    }
    fetchMovie();
  }, [url]);

  return (
    <main>
      <section>
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-3xl mx-auto  dark:border-gray-700 dark:bg-gray-800">
          <img className="object-cover  rounded-t-lg md:max-w-sm h-auto md:rounded-none md:rounded-l-lg" src={imagePath} alt={movie.original_title} />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.original_title}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{movie.overview}</p>
            
            <div className="flex items-center my-4">
              <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">{movie.vote_average}</p>
              <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <p className="text-sm font-medium text-gray-900  dark:text-white">{movie.vote_count} reviews</p>
            </div>

            <p className="text-slate-800 dark:text-gray-400 my-2  font-semibold">Release Date: <span className="font-normal">{movie.release_date}</span></p>

            <p className="text-slate-800 dark:text-gray-400 my-2 font-semibold">Runtime: <span className="font-normal">{movie.runtime} min.</span></p>

            <p className="text-slate-800 dark:text-gray-400 my-2 font-semibold">Budget: <span className="font-normal">{movie.budget}</span></p>

            <p className="text-slate-800 dark:text-gray-400 my-2 font-semibold">Revenue: <span className="font-normal">{movie.revenue}</span></p>

            <p className="text-slate-800 dark:text-gray-400 my-2 font-semibold">Language: <span className="font-normal">{movie.original_language}</span></p>

            <p className="text-slate-800 dark:text-gray-400 my-2 font-semibold">IMDB: <a href={`https://imdb.com/title/${movie.imdb_id}`} className="font-normal underline" target="_blank"  rel="noreferrer">{movie.imdb_id}</a></p>

          </div>
         
        </div>
      </section>
    </main>
  )
}
