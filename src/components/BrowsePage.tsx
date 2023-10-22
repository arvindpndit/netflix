import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Header from './Header'
import { removeUser } from '../redux/userSlice'
import { RootState } from '../redux/store'
import { OPTIONS } from '../constants/constants'

const BrowsePage : React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state : RootState) => state.user);
  
  useEffect(()=>{
    if (user === null)  navigate("/");   
    
    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', OPTIONS)
    .then(response => response.json())
    .then(response => console.log(response.results))
    .catch(err => console.error(err));
  },[])
  
  const handleClick = () : void => {
    navigate("/");
    dispatch(removeUser())
  }

  return (
    <div>
      <div >
        <Header/>
        <button className="mt-4 ml-96 z-50 p-2 bg-red-600 text-white hover:bg-red-700 absolute" onClick={handleClick}> Sign out
        </button>
      </div>
    </div>
  )
}

export default BrowsePage