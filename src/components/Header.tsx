import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { removeUser } from "../redux/userSlice";
import { RootState } from "../redux/store";

interface Props {
  setToggleSearchAndBrowse: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSearchAndBrowse: boolean;
}

const Header: React.FC<Props> = (props) => {
  const { setToggleSearchAndBrowse, toggleSearchAndBrowse } = props;
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (): void => {
    navigate("/");
    dispatch(removeUser());
  };

  return (
    <div className="px-10 h-24 w-full z-50 absolute bg-gradient-to-b from-black flex items-center">
      <img
        className="h-full"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
      />

      {user === null ? null : (
        <div className="ml-auto mr-5 flex items-center">
          <button
            className="mr-2 px-2 py-3 bg-green-600 text-white hover:bg-green-700 rounded-lg"
            onClick={() => setToggleSearchAndBrowse(!toggleSearchAndBrowse)}
          >
            {toggleSearchAndBrowse ? "GPT SEARCH" : "BROWSE"}
          </button>
          <img
            src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-2fg93funipvqfs9i.webp"
            alt=""
            className="h-12 rounded-lg"
          />
          <button
            className="ml-2 px-2 py-3 bg-red-600 text-white hover:bg-red-700 rounded-lg"
            onClick={handleClick}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
