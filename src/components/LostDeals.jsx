import React from 'react'
import logo from "../assets/lefticon.png"

const LostDeals = () => {
  return (
   <>
    <div className='flex flex-col items-start 
      rounded-2xl gap-4 p-4 bg-white text-black 
       transition-width shadow-2xl duration-300 w-[370px] h-[231px] '>
        <div className='font-inter text-base font-semibold leading-6 tracking-tight text-left"' style={{"width": "285px", "height": "40px", "padding":"0px 0px 16px 0px"}}>
            Lost Deals
        </div>

        <div className='flex flex-col justify-start items-start gap-[15px]'>
            <span className='text-4xl font-bold'>4%</span>
            <span className='font-inter text-sm font-normal leading-5 tracking-tighter text-left'>You closed 96 out of 100 deals</span>
        </div>

        <div className='flex items-center text-amber-800 links font-inter text-sm font-normal leading-5 tracking-tighter text-left'>
            All deals 
            <img src={logo}/>
        </div>
    </div>
   </>
  )
}

export default LostDeals