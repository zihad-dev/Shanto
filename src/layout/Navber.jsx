import React from "react";
import { Link } from "react-router-dom";
import Container from "../component/Container";

const Navber = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white z-50">
      <Container>
        <div className="flex justify-between py-[20px]">
          <div className="w-[20%] flex items-center justify-center ">
            <Link to="/">
              <img
                src="images/Logo.png"
                alt="Logo"
                className="cursor-pointer"
              />
            </Link>
          </div>
          <div className="w-[80%] flex justify-end">
            <ul className="flex items-center gap-[24px]">
              <li className="px-[24px] py-[12px]">
                <Link to="/">Home</Link>
              </li>
              <li className="px-[24px] py-[12px]">
                <Link to="/About">About</Link>
              </li>
              <li className="px-[24px] py-[12px]">Process</li>
              <li className="px-[24px] py-[12px]">Portfolio</li>
              <li className="px-[24px] py-[12px]">Blog</li>
              <li className="px-[24px] py-[12px]">Services</li>
              <li>
                <button className="px-[24px] py-[12px] bg-[#A53DFF] text-white rounded-md">
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navber;
