import React from "react";
import VideoDescription from "./VideoDescription";
import VideoPlayback from "./VideoPlayback";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const BrowseHeroContainer: React.FC = () => {
  const nowPlayingMovies = useSelector((state: RootState) => state.movie);

  if (!nowPlayingMovies.moviesList) return;

  const movie: [] = nowPlayingMovies.moviesList;
  const randomIndex: number = Math.floor(Math.random() * movie.length);
  const { id, title, overview } = movie[randomIndex];

  return (
    <div>
      <div className="bg-black text-white relative">
        <VideoPlayback id={id} />
        <div className="absolute top-0 left-0 right-0 bottom-0 z-10 bg-black bg-opacity-60">
          <div className="p-4 md:p-8 flex h-full items-center">
            <div className="md:w-1/2">
              <VideoDescription title={title} overview={overview} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseHeroContainer;
