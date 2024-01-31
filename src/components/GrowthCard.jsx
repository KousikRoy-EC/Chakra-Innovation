import React from "react";
import Avatar1 from "../assets/Avatar1.png";

const GrowthCard = (props) => {
  return (
    <>
      <div
        className="flex flex-col  items-start 
      rounded-2xl gap-[20px] p-3 bg-white text-black 
       transition-width shadow-2xl duration-300 w-[165px] h-[128px] "
      >
        <div
          className='font-inter text-base font-semibold leading-6 tracking-tight text-left"'
          style={{ width: "285px", height: "30px", color: "#7D7D7D" }}
        >
          {props.data.title}
        </div>

        {props.data.title === "Top Buyer" && <div className="">
            <img src={Avatar1} />
            <div>
              <div className="text-sm font-semibold">Maggie Johnson</div>
              <div className="text-xs">Oasis Organic inc.</div>
            </div>
          </div>}
        <div className="flex flex-col justify-start items-start gap-[5px]">
          <span
            className="font-semibold font-inter leading-5 tracking-tighter text-left"
            style={{ color: "#734A00", fontSize: "24px" }}
          >
            {props.data.description}
          </span>

          <span
            className="font-semibold font-inter text-base"
            style={{ color: "#FFA500" }}
          >
            {props.data.info}
          </span>
        </div>

      
      </div>
    </>
  );
};

export default GrowthCard;
