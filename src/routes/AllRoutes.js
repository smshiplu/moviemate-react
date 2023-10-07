import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetail, Search, PageNotFound } from "../pages";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MovieList endPoint="movie/now_playing" docTitle="Home" />} />
      <Route path="movie/:id" element={<MovieDetail />} />
      <Route path="movies/top" element={<MovieList endPoint="movie/top_rated" docTitle="Top rated" />} />
      <Route path="movies/popular" element={<MovieList endPoint="movie/popular" docTitle="Popular" />} />
      <Route path="movies/upcoming" element={<MovieList endPoint="movie/upcoming" docTitle="Upcoming" />} />
      <Route path="search" element={<Search  endPoint="search/movie" />} />
      <Route path="*" element={<PageNotFound docTitle="Page not found" />} />
    </Routes>
  )
}
