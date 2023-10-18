import { validateForm } from '../utils/validateForm'
import { signUpUser } from './authenticateUser'
import { auth } from "../config/firebase-config";

interface HandleFormProps {
  email: React.RefObject<HTMLInputElement>,
  password: React.RefObject<HTMLInputElement>,
  showSignInForm: boolean,
  setShowLoginValidErrorMsg: React.Dispatch<React.SetStateAction<string>>
}

export const handleForm = (props: HandleFormProps) => {
  const {email, password, showSignInForm, setShowLoginValidErrorMsg} = props;
  console.log(email , password)

  if(email.current && password.current){
    const isValid = validateForm({
      email: email.current.value,
      password: password.current.value,
    })
    
    typeof(isValid ) === "string" ? setShowLoginValidErrorMsg(isValid):setShowLoginValidErrorMsg("");

    if(showSignInForm){
      //sign in logic 
     
    }
    else{
      //sign up
      signUpUser({
        auth: auth,
        email: email.current.value,
        password: password.current.value,
      })
    }
    
  }
}