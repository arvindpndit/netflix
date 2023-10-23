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
  const { title, overview } = movie[randomIndex];

  return (
    <div>
      <VideoDescription title={title} overview={overview} />
      <VideoPlayback />
    </div>
  );
};

export default BrowseHeroContainer;
