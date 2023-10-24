import React, { useEffect, useState } from "react";
import { OPTIONS } from "../constants/constants";

interface Props {
  id: string;
}

const VideoPlayback: React.FC<Props> = ({ id }) => {
  const [movieUrl, setMovieUrl] = useState("");
  async function getMovieTrailer() {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        OPTIONS
      );
      const json = await response.json();
      console.log(json.results);
      const randomIndex: number = Math.floor(
        Math.random() * json.results.length
      );
      const { key } = json.results[randomIndex];
      console.log(key);
      setMovieUrl(`https://www.youtube.com/embed/${key}?si=ZspcenVAqDt2_jWf`);
    } catch (error) {
      throw error;
    }
  }
  useEffect(() => {
    getMovieTrailer();
  }, [movieUrl]);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={movieUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoPlayback;
