import React, { useState } from "react";
import Closed from "../assets/Closed.png";
import GrowthCard from "./GrowthCard";
import GraphComponent from "./Graph";
const Growth = () => {
  const [cardData, setcarddata] = useState([{title:"Top Months",description:"November" , info:"2019"},{title:"Top Year",description:"2023", info:"96k sold so far"},{title:"Top Buyer"}]);
  return (
    <div className="flex flex-col gap-[15px]">
      <div
        className="flex flex-col  items-start 
      rounded-2xl gap-4 p-6 bg-white text-black 
       transition-width shadow-2xl duration-300 w-[520px] h-[256px] "
      >
        <div
          className='relative font-inter text-base leading-6 tracking-tight text-left"'
          style={{ width: "100%", height: "40px", padding: "0px 0px 16px 0px" }}
        >
          <span className="font-semibold ">Growth</span>
          <span className="inline-flex absolute right-0 ">
            Yearly
            <img src={Closed} />{" "}
          </span>
        </div>
        <GraphComponent />
      </div>
      <div className="flex gap-[10px]">
      {cardData.map((data, index) => (
        <GrowthCard key={index} data={data} />
      ))}
    </div>
    </div>
  );
};

export default Growth;
