import React, { useState } from 'react'
import Customer from "../assets/Customer.png"
import addicon from "../assets/addicon.png"
import ChipBtn from './ChipBtn'
const NewDeals = () => {

    const [chipBtnData,setchipBtnData]=useState(["Fruit2Go","Marshall's MKT","CCNT","Joana Mini Market","Little Brazil Vegan","Target"])


  return (
   <>
    <div className='flex flex-col  items-start 
      rounded-2xl gap-[4px] p-6 bg-white text-black 
       transition-width shadow-2xl duration-300 w-[360px] h-[231px] '>
        <div className='font-inter text-base font-semibold leading-6 tracking-tight text-left"' style={{"width": "285px", "height": "30px"}}>
            New Deals
        </div>
        <div className='flex flex-wrap gap-[10px]'>
{chipBtnData.map((data)=>(
    <ChipBtn name={data}/>
))}
</div>
    </div>
   </>
  )
}

export default NewDeals;