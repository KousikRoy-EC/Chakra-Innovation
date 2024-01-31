import React, { useState } from "react";
import logo from "../assets/lefticon.png";
import Closed from "../assets/Closed.png";
import CustDeatils from "./CustDeatils";
import Avatar from "../assets/Avatar.png";
import Avatar1 from "../assets/Avatar1.png";
import Avatar2 from "../assets/Avatar2.png";
import Avatar3 from "../assets/Avatar3.png";

const Customer = () => {
  const [cust, setcust] = useState([
    {
      name: "Chris Friedkly",
      avatar: Avatar,
      company: "Supermarket Villanova",
    },
    { name: "Maggie Johnson", avatar: Avatar1, company: "Oasis Organic inc" },
    {
      name: "Gael Harry",
      avatar: Avatar2,
      company: "New York Finest Fruites",
    },
    { name: "Jeena Sullivan", avatar: Avatar3, company: "walmart" },
  ]);

  return (
    <>
      <div
        className="flex flex-col  items-start 
      rounded-2xl gap-4 p-6 bg-white text-black 
       transition-width shadow-2xl duration-300 w-[500px] h-[400px] "
      >
        <div
          className='relative font-inter text-base leading-6 tracking-tight text-left"'
          style={{ width: "100%", height: "40px", padding: "0px 0px 16px 0px" }}
        >
          <span className="font-semibold ">Customer</span>
          <span className="inline-flex absolute right-0 ">
            Sort by Newest
            <img src={Closed} />{" "}
          </span>
        </div>

        {cust.map((data, index) => (
          <CustDeatils key={index} data={data} />
        ))}

        <div className="flex items-center text-amber-800 links font-inter text-sm font-normal leading-5 tracking-tighter text-left">
          All Customer
          <img src={logo} />
        </div>
      </div>
    </>
  );
};

export default Customer;
