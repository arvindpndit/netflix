import React from "react";
import useNowPlayingTrailer from "../hooks/useNowPlayingTrailer";

interface Props {
  id: string;
}

const VideoPlayback: React.FC<Props> = ({ id }) => {
  const movieTrailer = useNowPlayingTrailer(id);

  return (
    <div className="w-full h-full overflow-hidden">
      <iframe
        className="w-screen h-screen"
        src={movieTrailer}
        style={{
          transform: "scale(1.3)",
        }}
        title="YouTube video player"
        allow="accelerometer; autoplay; gyroscope; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoPlayback;
