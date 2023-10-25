import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  Auth,
  UserCredential,
} from "firebase/auth";

interface Params {
  auth: Auth;
  email: string;
  password: string;
  setShowLoginValidErrorMsg: React.Dispatch<React.SetStateAction<string>>;
}

export async function signUpUser(params: Params) {
  const { auth, email, password, setShowLoginValidErrorMsg } = params;
  try {
    const userCredential: UserCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch (error: any) {
    const errorMessage = error.message;
    setShowLoginValidErrorMsg(errorMessage);
  }
}

export async function signInUser(params: Params) {
  const { auth, email, password, setShowLoginValidErrorMsg } = params;
  try {
    const userCredential: UserCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch (error: any) {
    const errorMessage = error.message;
    setShowLoginValidErrorMsg(errorMessage);
  }
}
