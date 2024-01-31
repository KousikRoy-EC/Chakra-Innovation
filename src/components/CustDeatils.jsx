import React from "react";
import opt from "../assets/opt.png";
import { useState } from "react";

const CustDeatils = (props) => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className="w-full p-2 rounded-2xl hoverbg justify-between flex"  onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
        <div className="flex justify-normal items-center gap-[10px]">
          <div className="flex gap-[10px] justify-normal items-center">
            <img src={props.data.avatar} />
            <div>
              <div className="text-sm font-semibold">{props.data.name}</div>
              <div className="text-xs">{props.data.company}</div>
            </div>
          </div>
          
        </div>
       { isHovered && <div>
            <img src={opt}></img>
          </div>}
      </div>
    </>
  );
};

export default CustDeatils;
