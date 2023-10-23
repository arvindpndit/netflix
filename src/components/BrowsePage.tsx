import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { removeUser } from "../redux/userSlice";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const BrowsePage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useNowPlayingMovies();

  const handleClick = (): void => {
    navigate("/");
    dispatch(removeUser());
  };

  return (
    <div>
      <div>
        <Header />
        <button
          className="mt-4 ml-96 z-50 p-2 bg-red-600 text-white hover:bg-red-700 absolute"
          onClick={handleClick}
        >
          Sign out
        </button>
      </div>
    </div>
  );
};

export default BrowsePage;
