import { useState } from 'react'
import './App.css'
import Index from './components'
import data from './components/data'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Index menus={data}/>
    </>
  )
}

export default App
