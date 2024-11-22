import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MovieList } from "/src/pages";
const AllRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MovieList title=
          "your Guide to Great Movies" apiPath="movie/no_playing" />} />
        <Route path="movies/popular" element={<MovieList title=
          "Popular Movies" apiPath="movie/popular" />} />
        <Route path="movies/top" element={<MovieList title=
          "Top Rated Movies" apiPath="movie/top_rated" />} />
        <Route path="movies/upcoming" element={<MovieList title=
          "Upcoming Movies" apiPath="movie/upcoming" />} />
      </Routes>
    </>
  )
}

export default AllRouter
