import React, { useState } from "react";

import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import BrowseHeroContainer from "./BrowseHeroContainer";
import BrowseMoviesCardsList from "./BrowseMoviesCardsList";
import GptSearchPage from "./GptSearchPage";

const BrowsePage: React.FC = () => {
  useNowPlayingMovies();

  const [toggleSearchAndBrowse, setToggleSearchAndBrowse] =
    useState<boolean>(true);

  return (
    <div>
      <div>
        <Header
          toggleSearchAndBrowse={toggleSearchAndBrowse}
          setToggleSearchAndBrowse={setToggleSearchAndBrowse}
        />
        {toggleSearchAndBrowse ? (
          <>
            <BrowseHeroContainer />
            <BrowseMoviesCardsList />
          </>
        ) : (
          <GptSearchPage />
        )}
      </div>
    </div>
  );
};

export default BrowsePage;
