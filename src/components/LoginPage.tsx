import React, { useState } from "react";

import Header from "./Header";
import LoginForm from "./LoginForm";

const LoginPage: React.FC = () => {
  const [showSignInForm, setShowSignInForm] = useState<boolean>(true);
  const [toggleSearchAndBrowse, setToggleSearchAndBrowse] =
    useState<boolean>(true);
  return (
    <div className="relative">
      <Header
        toggleSearchAndBrowse={toggleSearchAndBrowse}
        setToggleSearchAndBrowse={setToggleSearchAndBrowse}
      />
      <img
        className="w-full h-screen object-cover max-w-full brightness-50"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt=""
      />
      <LoginForm
        showSignInForm={showSignInForm}
        setShowSignInForm={setShowSignInForm}
      />
    </div>
  );
};

export default LoginPage;
