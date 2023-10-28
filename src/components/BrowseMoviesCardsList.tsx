import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import MovieCard from "./MovieCard";
import shuffleArray from "../utils/shuffleArray";
import { MOVIE_LIST_TITLES } from "../constants/constants";

const BrowseMoviesCardsList: React.FC = () => {
  const nowPlayingMovies = useSelector((state: RootState) => state.movie);

  if (!nowPlayingMovies.moviesList) return;

  const movies: [] = nowPlayingMovies.moviesList;

  return (
    <div>
      {MOVIE_LIST_TITLES.map((title) => {
        let shuffled = shuffleArray(movies);
        return (
          <div className="bg-black h-96">
            <MovieCard movies={shuffled} title={title} />
          </div>
        );
      })}
    </div>
  );
};

export default BrowseMoviesCardsList;
