import React from 'react'
import addicon from "../assets/addicon.png"


const ChipBtn = ({name}) => {
  return (
    <>
         <div className='rounded-2xl p-3 chip-btn h-[48px] flex justify-start items-center gap-[4px]'>
        <img src={addicon} />
        <div>{name}</div>
        </div>
    </>
  )
}

export default ChipBtn;