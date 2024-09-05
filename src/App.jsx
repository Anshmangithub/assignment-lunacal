import { useState } from 'react'

import Box1 from "./components/Box1"
import './App.css'
import Box2 from './components/Box2'

function App() {


  return (
    <div className='contianer bg-[#272B30]  w-screen h-screen md:flex relative' >
     <div className='w-1/2 h-full  md:visible invisible '></div>
     <div className='md:w-1/2 h-full  w-full top-0 absolute md:right-0  p-8' >
    

  <Box1/>
  <div className='w-[612px] h-[6px] rounded-[2.4px]  bg-gradient-to-b from-[#2828281A] to-[#F8F8F81A] mx-auto mt-3'></div>
<Box2/>

  <div className='w-[612px] h-[6px] rounded-[2.4px]  bg-gradient-to-b from-[#2828281A] to-[#F8F8F81A] mx-auto mt-3'></div>
     </div>
    </div>    
  )
}

export default App
