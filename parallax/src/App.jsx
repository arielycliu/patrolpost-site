import { useState } from 'react'
import './App.css'
import ParallaxExample from './Parallax'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ParallaxExample /> 
    </>
  )
}

export default App
