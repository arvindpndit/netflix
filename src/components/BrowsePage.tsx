import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Header from './Header'
import { removeUser } from '../redux/userSlice'
import { RootState } from '../redux/store'
import { OPTIONS } from '../constants/constants'
import { addMovies } from '../redux/movieSlice'

const BrowsePage : React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state : RootState) => state.user);

  async function getMoviesData() {
    try {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', OPTIONS)
      const json = await data.json();
      dispatch(addMovies(json.results));
    } catch (error) {
      throw error;
    }
  }
  
  useEffect(() => {
    if (user === null)  navigate("/");   
    getMoviesData();
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