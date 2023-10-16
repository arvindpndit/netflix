interface Props {
  email: string,
  password: string,
}

export function validateForm (props: Props) {
  const {email, password} = props

  const isValidEmail : boolean = validateEmail(email);
  const isValidPassword : boolean = validatePassword(password);

  if(!isValidEmail) alert("Please put a correct email");
  if(!isValidPassword) alert("Please put a valid password")

  if(isValidEmail && isValidPassword) {
    alert("validation successfull")
  }

}

function validateEmail(email: string): boolean{
  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailPattern.test(email);
}

function validatePassword(password: string): boolean{
  // Password validation criteria:
  // At least 8 characters long
  // Contains at least one uppercase letter
  // Contains at least one lowercase letter
  // Contains at least one digit
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return passwordPattern.test(password);
}