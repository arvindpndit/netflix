import { validateForm } from '../utils/validateForm'

interface HandleFormProps {
  email: React.RefObject<HTMLInputElement>,
  password: React.RefObject<HTMLInputElement>,
  setShowLoginValidErrorMsg: React.Dispatch<React.SetStateAction<string>>
}

export const handleForm = (props: HandleFormProps) => {
  const {email, password, setShowLoginValidErrorMsg} = props;
  console.log(email , password)

  if(email.current && password.current){
    const isValid = validateForm({
      email: email.current.value,
      password: password.current.value,
    })
    
    if(typeof(isValid )=== "string"){
      setShowLoginValidErrorMsg(isValid)
    }
    if(typeof(isValid )=== "boolean"){
      setShowLoginValidErrorMsg("")
    }
  }
}