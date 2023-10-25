import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import MovieCard from "./MovieCard";

const BrowseMoviesCardsList: React.FC = () => {
  const nowPlayingMovies = useSelector((state: RootState) => state.movie);

  if (!nowPlayingMovies.moviesList) return;

  const movies: [] = nowPlayingMovies.moviesList;
  return (
    <div>
      <MovieCard movies={movies} />
    </div>
  );
};

export default BrowseMoviesCardsList;
