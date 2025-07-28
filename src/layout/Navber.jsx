import React from "react";
import { Link } from "react-router-dom";

const Navber = () => {
  return (
    <>
      <div className="absolute top-0 left-0 flex justify-between bg-white py-[20px] w-full z-50">
        <div className="w-[20%] flex items-center justify-center bg-red-900 text-white">
          MJI
        </div>
        <div className="w-[80%] flex justify-end">
          <ul className="flex items-center gap-[24px]">
            <li className="px-[24px] py-[12px] bg-transparent">
              <Link to="/">Home</Link>
            </li>
            <li className="px-[24px] py-[12px] bg-transparent">
              <Link to="/About">About</Link>
            </li>
            <li className="px-[24px] py-[12px] bg-transparent">Process</li>
            <li className="px-[24px] py-[12px] bg-transparent">Portfolio</li>
            <li className="px-[24px] py-[12px] bg-transparent">Blog</li>
            <li className="px-[24px] py-[12px] bg-transparent">Services</li>
            <li>
              <button className="px-[24px] py-[12px] bg-[#A53DFF] text-white rounded-md">
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navber;

