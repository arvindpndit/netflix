import React from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { removeUser } from '../redux/userSlice'

const BrowsePage : React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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