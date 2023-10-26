import React from "react";

interface Props {
  movies: any;
  title: string;
}

const MovieCard: React.FC<Props> = (props) => {
  const { movies, title } = props;
  console.log(movies);

  return (
    <div className="relative">
      <div className="text-xl bg-black text-white font-semibold py-3 pl-7">
        {title}
      </div>
      <div className="flex overflow-x-auto flex-row gap-4 bg-black ">
        {movies.map((movie) => {
          const moviePosterImagePath: string = movie?.backdrop_path;
          const movieTitle: string = movie?.title;
          const moviePosterUrl: string = `https://image.tmdb.org/t/p/w500/${moviePosterImagePath}`;
          return (
            <div className=" flex-shrink-0">
              <img
                src={moviePosterUrl}
                alt={movieTitle}
                className="w-64 object-cover rounded-lg shadow-lg"
              />
              <div className="mt-2 text-center text-white font-semibold text-sm">
                {movieTitle}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieCard;
