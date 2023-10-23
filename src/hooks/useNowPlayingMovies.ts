import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../redux/store";
import { OPTIONS } from "../constants/constants";
import { addMovies } from "../redux/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state: RootState) => state.user);

  async function getMoviesData() {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        OPTIONS
      );
      const json = await data.json();
      dispatch(addMovies(json.results));
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    if (user === null) {
      navigate("/");
      return;
    }
    getMoviesData();
  }, []);
};

export default useNowPlayingMovies;
