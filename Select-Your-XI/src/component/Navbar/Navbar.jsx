import React from "react";
import navImg from "../../assets/logo.png"
import coinImg from "../../assets/coin.png"
const Navbar = ({available}) => {
  return (
    
     <div className="navbar max-w-[1200px] mx-auto w-full flex justify-between items-center px-4 py-2">
        <div className="flex-1 ">
          <img className="w-[60px] h-[60px]" src={navImg} alt="" />
        </div>
        <div className="flex items-center ">
          <span>{available}</span>
          <img className="w-[30px] h-[30px" src={coinImg} alt="" />
        </div>
      </div>

  );
};

export default Navbar;
