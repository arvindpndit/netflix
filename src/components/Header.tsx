import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { removeUser } from "../redux/userSlice";
import { RootState } from "../redux/store";

const Header: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (): void => {
    navigate("/");
    dispatch(removeUser());
  };

  return (
    <div className="h-24 w-full z-50 absolute bg-gradient-to-b from-black ">
      <img
        className="h-full px-3"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />

      {user === null ? null : (
        <button
          className="mt-4 ml-96 z-50 p-2 bg-red-600 text-white hover:bg-red-700 absolute"
          onClick={handleClick}
        >
          Sign out
        </button>
      )}
    </div>
  );
};

export default Header;
