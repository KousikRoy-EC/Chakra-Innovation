import React from 'react'
import logo from "../assets/lefticon.png"
import BarGraphCurve from "../assets/BarGraphCurve.png"

const QuaterGoals = () => {
  return (
   <>
    <div className='flex flex-col items-center justify-center 
      rounded-2xl gap-4 p-4 bg-white text-black 
       transition-width shadow-2xl duration-300 w-[260px] h-[231px] '>
        <div className=' justify-center font-inter text-base font-semibold leading-6 tracking-tight text-left"' style={{"height": "40px"}}>
            Quater Goal
        </div>

        <div className='flex flex-col  gap-[15px]'>
            {/* <span className='text-4xl font-bold'>4%</span> */}
          <img src={BarGraphCurve} />
        </div>

        <div className='items-center flex justify-center text-amber-800 links font-inter text-sm font-normal leading-5 tracking-tighter text-left'>
            All goals 
            <img src={logo}/>
        </div>
    </div>
   </>
  )
}

export default QuaterGoals