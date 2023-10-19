import React from 'react'
import LoginPage from './components/LoginPage'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const App : React.FC = () => {
  return (
    <div>
      <Provider store={store}>
        <LoginPage/>
      </Provider>      
    </div>
  )
}

export default App
