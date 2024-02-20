import { useState } from 'react'
import './App.css'
import QrCode from '../component/QrCode'

function App() {

  return (
    <div className='bg-gray-200 h-screen w-full flex justify-center pt-5'>
      <QrCode/>
    </div>
  )
}

export default App
