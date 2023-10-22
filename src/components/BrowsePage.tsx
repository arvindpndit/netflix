import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Header from './Header'
import { removeUser } from '../redux/userSlice'
import LoginPage from './LoginPage'
import { RootState } from '../redux/store'

const BrowsePage : React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state : RootState) => state.user);
  if (user === null) return <LoginPage/>;
  
  const handleClick = () => {
    navigate("/");
    dispatch(removeUser())
  }

  return (
    <div>
      <div >
        <Header/>
        <button className=" mt-48 p-2 bg-red-600" onClick={handleClick}>Sign out</button>
      </div>
    </div>
  )
}

export default BrowsePage