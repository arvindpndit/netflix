import { useEffect, useState } from "react";
import { OPTIONS } from "../constants/constants";

const useNowPlayingTrailer = (id: string): string => {
  const [movieUrl, setMovieUrl] = useState<string>("");
  async function getMovieTrailer() {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        OPTIONS
      );
      const json = await response.json();

      const randomIndex: number = Math.floor(
        Math.random() * json.results.length
      );

      const { key } = json.results[randomIndex];
      setMovieUrl(
        `https://www.youtube.com/embed/${key}?autoplay=1&mute=1&loop=1`
      );
      console.log(movieUrl);
    } catch (error) {
      throw error;
    }
  }
  useEffect(() => {
    getMovieTrailer();
  }, [movieUrl]);

  return movieUrl;
};

export default useNowPlayingTrailer;
