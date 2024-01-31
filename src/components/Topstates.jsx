import React from "react";
import Customer from "../assets/Customer.png";
import Slider from "./slider";
import { useState } from "react";


const Topstates = () => {
  const [data,setdata] = useState([
    { name: "NA", value: "120" },
    { name: "MA", value: "80" },
    { name: "NH", value: " 70" },
    { name: "OR", value: "50" },
  ]);

  return (
    <>
      <div
        className="flex flex-col  items-start 
      rounded-2xl gap-[15px] p-6 bg-white text-black 
       transition-width shadow-2xl duration-300 w-[320px] h-[231px] "
      >
        <div
          className='font-inter text-base font-semibold leading-6 tracking-tight text-left"'
          style={{ width: "285px", height: "30px" }}
        >
          Top States
        </div>

        {data.map((dataValue,index) => (
          <Slider key={index} name={dataValue.name} tmpval={dataValue.value}/>
        ))}
      </div>
    </>
  );
};

export default Topstates;
