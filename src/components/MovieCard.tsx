import React from "react";

interface Props {
  movies: any;
  title: string;
}

const MovieCard: React.FC<Props> = (props) => {
  const { movies, title } = props;

  return (
    <div className="relative -mt-40 px-2 sm:px-16 z-50">
      <div className="text-xl  text-white font-semibold py-3">{title}</div>
      <div className="flex overflow-x-auto flex-row gap-4">
        {movies.map((movie: any) => {
          const moviePosterImagePath: string = movie?.backdrop_path;
          const movieTitle: string = movie?.title;
          const id: number = movie?.id;
          const moviePosterUrl: string = `https://image.tmdb.org/t/p/w500/${moviePosterImagePath}`;
          return (
            <div className="flex-shrink-0" key={id}>
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
