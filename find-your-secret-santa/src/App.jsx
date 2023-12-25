import { useState ,useEffect} from 'react'

import './App.css'
import Popup from './Components/WelcomeModal'
import Game from './Components/Game'
import AppRouter from './Components/Approuter'

function App() {
 

  return (
    <>
     <AppRouter/>
     <Popup/>
    </>
  )
}

export default App
