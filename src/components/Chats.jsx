import React from 'react'
import Customer from "../assets/Customer.png"

const Chats = () => {
  return (
   <>
    <div className='flex flex-col  items-start 
      rounded-2xl gap-[4px] p-6 bg-white text-black 
       transition-width shadow-2xl duration-300 w-[320px] h-[231px] '>
        <div className='font-inter text-base font-semibold leading-6 tracking-tight text-left"' style={{"width": "285px", "height": "30px"}}>
            Chats
        </div>

        <div className='flex flex-col justify-start items-start gap-[15px]'>
            <span className='font-inter text-sm font-normal leading-5 tracking-tighter text-left'>2 unread messages</span>
        </div>

        <div className='h-[100px] flex items-center text-amber-800 links font-inter text-sm font-normal leading-5 tracking-tighter text-left'>
            <img src={Customer}/>
        </div>
    </div>
   </>
  )
}

export default Chats