import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import MovieCard from "./MovieCard";

const GptSearchPage: React.FC = () => {
  const textInput = useRef<HTMLInputElement>(null);
  const nowPlayingMovies = useSelector((state: RootState) => state.movie);

  if (!nowPlayingMovies.moviesList) return;

  const movies: [] = nowPlayingMovies.moviesList;

  return (
    <div className="bg-[#060604] h-screen flex flex-col items-center justify-center">
      <form
        className="flex items-center space-x-2 w-1/2 mb-40 h-1/3"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={textInput}
          type="text"
          className="bg-gray-800 text-white rounded-lg p-3 focus:outline-none w-full"
          placeholder="Search for movies or shows"
        />
        <button
          type="submit"
          className="bg-red-600 text-white px-5 py-3 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out"
        >
          Search
        </button>
      </form>
      <MovieCard movies={movies} title={"Popular"} />;
    </div>
  );
};

export default GptSearchPage;
