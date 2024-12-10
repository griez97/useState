import { useState } from 'react'
import './App.css'
import Home from './pages/Home/Home'

function App() {
  const[night, setNight] = useState<boolean>(true)

  const makeNight = () => {
      setNight(!night)
  }

  return (
    <div className={`${night && "night"}`}>
      <Home/>
      <button onClick={makeNight}>Day n' Night</button>
    </div>
  )
}

export default App
