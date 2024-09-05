import React, { useRef , useState} from 'react'
import { BsQuestionCircle } from "react-icons/bs";
import { BiGridVertical } from "react-icons/bi";
import { TfiArrowLeft, TfiArrowRight } from "react-icons/tfi";
import { motion } from 'framer-motion';

const Box2 = () => {
  const slidref =  useRef()
  const fileInput = useRef()

 const [images, setimages] = useState([
    { src: 'image3.jpg' },
    { src: 'luncalImage.jpeg' },
    { src: 'luncalImage.jpeg' },
    { src: 'image3.jpg' },
    { src: 'luncalImage.jpeg' },
    { src: 'image3.jpg' },
  ])
  
   const scrollRight = ()=>{
    if(slidref.current){
      slidref.current.scrollLeft += 200;
    }
   }

  
   const scrollLeft = ()=>{
    if(slidref.current){
      slidref.current.scrollLeft -= 200;
    }
   }

   const fileHandlerUpload =(e)=>{
    
     const file = e.target.files[0];
     if(file){
      const imageUrl = URL.createObjectURL(file);
      setimages([...images , {src : imageUrl}])
     }
   }

    const fileHandlerClick = ()=>{
      fileInput.current.click()
    }

  return (
    

     <div className='w-[720px] bg-[#363C43] h-[316px] flex flex-wrap relative py-6 px-4 mt-3 rounded-[18.89px] shadow-[5.67px_5.67px_3.78px_0px] shadow-[#00000066]'>
   <div>
     <BsQuestionCircle className='size-6 text-gray-400' />
     <BiGridVertical  className='size-12  text-[#4A4E54] my-20 mx-[-10px]'/>
     </div>
      
      <button className='w-[149px] h-[62px] bg-[#171717] mr-44 rounded-[20px] text-white text-xl mx-4'>Gallery</button>
      <div className=''>
     <button className='w-[131.32px] h-[46px] rounded-[104px]  mt-2 text-white text-sm mr-8
      shadow-[0px_3.26px_3.26px_0px_#FFFFFF26_inset,0px_0px_48.91px_0px_#FFFFFF0D_inset,9px_10px_7.1px_0px_#00000066,-0.5px_-0.5px_6.9px_0px_#FFFFFF40]' 
      onClick={fileHandlerClick}
      >
      + ADD IMAGE
      <input type="file"
       className='hidden'
      ref={fileInput}
     accept='image/*'
     onChange={fileHandlerUpload}
      />
     </button>
     
     </div>
      
      <button onClick={scrollLeft} className='w-[45px] h-[45px]  mt-3 mr-5 rounded-full 
      shadow-[4px_5px_30px_5px_#101213,-5px_-3px_30px_-10px_#96BEE7]
     bg-gradient-to-br from-[#303439] to-[#161718]
     flex justify-center items-center
      '>
        <TfiArrowLeft className='text-[#6F787C] size-5'  />
      </button>
      <button onClick={scrollRight} className='w-[45px] h-[45px] bg-[#171717] mt-3 rounded-full
      shadow-[4px_5px_30px_5px_#101213,-5px_-3px_30px_-10px_#96BEE7]
       bg-gradient-to-br from-[#303439] to-[#161718]
       flex justify-center items-center
      '>
        <TfiArrowRight className='text-[#6F787C] size-5 '/>
      </button>
      <div 
       ref={slidref}
      className='w-[611px] h-[200px]  overflow-x-hidden absolute  mt-20 mx-10'>
        
      <div 
      className=' h-[200px] absolute  overflow-hidden  gap-4 flex items-center'>
    
      {images.map((image , index)=> 
      
      <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{
      scale: 1.09,
      transition: { duration: 1 },
}}
      key={index} className=' h-[179px]  w-[190px]  rounded-[24px] overflow-hidden '> 
        <img src={image.src} className='grayscale' alt="" />
      </motion.div>
    
      
      )}


      </div>

      </div>
    </div>

  )
}

export default Box2