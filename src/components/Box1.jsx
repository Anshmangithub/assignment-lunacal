import React ,{useEffect, useState} from 'react'
import { BsQuestionCircle } from "react-icons/bs";
import { BiGridVertical } from "react-icons/bi";

const Box1 = () => {

    const [buttonclick, setbuttonclick] = useState(null);
  
   
    const handler =(index )=>{
     setbuttonclick(index)
    }
  return (

    <>
    <div className='w-[720px] bg-[#363C43] h-[316px] flex flex-wrap relative rounded-[18.89px] py-6 px-4 shadow-[5.67px_5.67px_3.78px_0px] shadow-[#00000066]'>
   
    <div>
     <BsQuestionCircle className='size-6 text-gray-400' />
     <BiGridVertical  className='size-12  text-[#4A4E54] my-20 mx-[-10px]'/>
     </div>
     <div className='w-[614px] h-[62px] mx-5 rounded-[23px] bg-[#171717] flex justify-center items-center'>
       <div className='w-[597px] h-[49px]  flex gap-[6px]'>
         <button className='w-1/3 h-full  rounded-[16px]  text-[#A3ADB2] text-xl'
          onClick={()=> handler(1 )} 
          style={{backgroundColor : buttonclick === 1 ? "#28292F" : "#171717" ,
           color : buttonclick === 1 ? "#ffffff" : "#A3ADB2"
               }}
          > About Me
   
         </button>
         <button className='w-1/3 h-full  rounded-[16px]  text-[#A3ADB2] text-xl'
          onClick={()=> handler(2 )} 
          style={{backgroundColor : buttonclick === 2 ? "#28292F" : "#171717" ,
           color : buttonclick === 2 ? "#ffffff" : "#A3ADB2"
               }} >
         Experiences</button>
         <button className='w-1/3 h-full  rounded-[16px]  text-[#A3ADB2] text-xl'
          onClick={()=> handler(3 )} 
          style={{backgroundColor : buttonclick === 3 ? "#28292F" : "#171717" ,
               color : buttonclick === 3 ? "#ffffff" : "#A3ADB2"
               }}  >
         Recommended
         </button>
       </div>
     </div>
     
      <div className='w-[640px] h-[175px] absolute mt-24 mx-12 flex  flex-row overflow-y-auto '>
       {
      buttonclick === 1 &&
       <div className='w-[611px]'>
       <h4 className='text-lg text-[#A3ADB2] text-wrap'>
       Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
  <br />
  <br />
I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
       </h4>
       </div> }
   
       {
      buttonclick === 2 &&
       <div className='w-[611px]'>
       <h4 className='text-xl text-[#A3ADB2] text-wrap'>
        Experience   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, quae! Qui assumenda earum repellat sapiente architecto. Labore, assumenda quo omnis reiciendis exercitationem ab veniam inventore? Eum iure ipsum est voluptates
        <br />
         consectetur non magnam temporibus dolores impedit, laboriosam nemo esse et officia distinctio optio vel suscipit exercitationem labore. Fuga expedita magnam, odit provident repellendus libero dolores, in est ipsa voluptas velit.
       </h4>
       </div> }
       {
      buttonclick === 3 &&
       <div className='w-[611px]'>
       <h4 className='text-xl text-[#A3ADB2] text-wrap'>
        Recommended  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, quae! Qui assumenda earum repellat sapiente architecto. Labore, assumenda quo omnis reiciendis exercitationem ab veniam inventore? Eum iure ipsum est voluptates consectetur non magnam temporibus dolores impedit,
        <br />
        <br />
         laboriosam nemo esse et officia distinctio optio vel suscipit exercitationem labore. Fuga expedita magnam, odit provident repellendus libero dolores, in est ipsa voluptas velit.
       </h4>
       </div> }
       
      </div>
        </div>
        </>
  )
}

export default Box1