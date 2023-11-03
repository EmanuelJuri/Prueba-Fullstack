import { useState, useEffect } from 'react'
import Auth from './pages/Auth/Auth'
import Bill from './pages/Bill/Bill'
import Navbar from './components/Navbar/Navbar'

import './App.css'

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('sesionPrueba')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setCurrentUser(user)
    }
  }, [])

  return (
    <>
      {
        currentUser
          ?
          <>
            <Navbar user={currentUser} />
            <Bill />
          </>
          : <Auth />
      }
    </>
  )
}

export default App
