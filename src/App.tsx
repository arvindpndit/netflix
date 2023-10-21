import React from 'react'
import LoginPage from './components/LoginPage'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import BrowsePage from './components/BrowsePage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>
  },
  {
    path: "/browse",
    element: <BrowsePage/>
  }
])

const App : React.FC = () => {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>      
    </div>
  )
}

export default App
