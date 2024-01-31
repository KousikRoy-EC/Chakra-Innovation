import React, { useState } from 'react';

const Slider = ({ name, tmpval }) => {
  const [value, setValue] = useState(tmpval);

  const maxValue = 100;
  const gradientPercentage = (value / maxValue) * 100;

  const gradientStyle = {
    background: `linear-gradient(90deg, #FFCD71 -2.57%, rgba(255, 205, 113, 0) ${gradientPercentage}%)`,
  };

  return (
    <div className="flex items-center isolation-isolate w-[270px] justify-between min-h-[30px] rounded-md" style={{ padding: '0px 10px', ...gradientStyle }}>
      <div className="flex-none order-0 flex-grow-0 z-0">
        <div className="w-21 h-17 font-inter font-semibold text-base leading-17 text-uppercase text-black">{name}</div>
      </div>
      <div className="flex-none order-1 flex-grow-0 z-1">
        <div className="">
          <span className="font-inter font-medium text-sm leading-12 text-uppercase text-black">{value}k</span>
        </div>
      </div>
    </div>
  );
};

export default Slider;
