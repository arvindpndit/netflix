import React from "react";
import useNowPlayingTrailer from "../hooks/useNowPlayingTrailer";

interface Props {
  id: string;
}

const VideoPlayback: React.FC<Props> = ({ id }) => {
  const movieTrailer = useNowPlayingTrailer(id);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={movieTrailer}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoPlayback;
