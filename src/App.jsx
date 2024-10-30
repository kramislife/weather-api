import React from 'react'
import Navbar from './components/Navbar/Navbar'
import windy from '@/assets/windy.webm'

const App = () => {
  return (
    <div className='bg-base text-surface h-screen w-screen'>
      <Navbar/>
      <video 
        autoPlay 
        loop 
        muted 
        className="w-20 h-20 object-cover"
      >
        <source src={windy} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default App
