import { validateForm } from "../utils/validateForm";
import { signUpUser, signInUser } from "./authenticateUser";
import { auth } from "../config/firebase-config";

interface HandleFormProps {
  email: React.RefObject<HTMLInputElement>;
  password: React.RefObject<HTMLInputElement>;
  showSignInForm: boolean;
  setShowLoginValidErrorMsg: React.Dispatch<React.SetStateAction<string>>;
}

export const handleForm = (props: HandleFormProps) => {
  const { email, password, showSignInForm, setShowLoginValidErrorMsg } = props;

  if (email.current && password.current) {
    const isValid = validateForm({
      email: email.current.value,
      password: password.current.value,
    });

    typeof isValid === "string"
      ? setShowLoginValidErrorMsg(isValid)
      : setShowLoginValidErrorMsg("");

    const authencateUserParams = {
      auth: auth,
      email: email.current.value,
      password: password.current.value,
      setShowLoginValidErrorMsg: setShowLoginValidErrorMsg,
    };

    if (showSignInForm) return signInUser(authencateUserParams);
    else return signUpUser(authencateUserParams);
  }
};
