import React from "react";

import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import BrowseHeroContainer from "./BrowseHeroContainer";
import BrowseMoviesCardsList from "./BrowseMoviesCardsList";

const BrowsePage: React.FC = () => {
  useNowPlayingMovies();

  return (
    <div>
      <div>
        <Header />
        <BrowseHeroContainer />
        <BrowseMoviesCardsList />
      </div>
    </div>
  );
};

export default BrowsePage;
