import { useState } from 'react'
import './App.css'

function App() {
  const [bg,setBg] = useState('white');
  const [bgCol,setBgCol] = useState('white');
  const [textCol,setTextCol] = useState('black');

  const toggleButton = ()=>{
    if(bg=='black'){
      setBgCol('white');
      setTextCol('black');
      setBg('white');
    }
    else{
      setBgCol('black');
      setTextCol('white');
      setBg('black');
    }
  }
  return (
    <div className='min-w-full min-h-screen' style={{backgroundColor:`${bgCol}`,color:`${textCol}`}}>
      <div>
        <button className='rounded-3xl m-5 p-3 ' style={{color:`${bg=='white'?'white':'black'}`,backgroundColor:`${bg=='black'?'white':'black'}`}} onClick={toggleButton}>
          { bg =='black'
          ?
          'White Theme'
          : 'Black Theme'
          }
        </button>
      </div>
      
      <div>
          <h1>Hey this is a sample paragraph for theme switcher</h1>
      </div>
    </div>
  )
}

export default App
