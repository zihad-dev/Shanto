import React from "react";
import Container from "../component/Container";
import { FaBehance, FaFacebookF, FaInstagram } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { IoEarth } from "react-icons/io5";

const About = () => {
  return (
    <>
      <div className="mt-[200px]">
        <Container>
          <div className="flex justify-between items-center p-[110px] shadow-[0_36px_105px_0_rgba(43,56,76,0.10)] bg-white  ">
            <div className="relative w-[420px] h-[460px] bg-red-300 rounded-[10px]">
              <div className="w-[275px] h-auto p-[14px] bg-white absolute left-[50%] top-[90%] transform -translate-x-1/2 -translate-Y-1/2  rounded-[10px] shadow-lg">
                <ul className="flex justify-between items-center">
                  <li className="p-[15px] text-[20px] text-[#A53DFF] rounded-[4px] hover:bg-[#A53DFF] cursor-pointer hover:text-white duration-300">
                    <IoEarth />
                  </li>
                  <li className="p-[15px] text-[20px] text-[#A53DFF] rounded-[4px] hover:bg-[#A53DFF] cursor-pointer hover:text-white duration-300">
                    <FaFacebookF />
                  </li>
                  <li className="p-[15px] text-[20px] text-[#A53DFF] rounded-[4px] hover:bg-[#A53DFF] cursor-pointer hover:text-white duration-300">
                    <FaInstagram />
                  </li>
                  <li className="p-[15px] text-[20px] text-[#A53DFF] rounded-[4px] hover:bg-[#A53DFF] cursor-pointer hover:text-white duration-300">
                    <GrLinkedinOption />
                  </li>
                  <li className="p-[15px] text-[20px] text-[#A53DFF] rounded-[4px] hover:bg-[#A53DFF] cursor-pointer hover:text-white duration-300">
                    <FaBehance />
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className=" max-w-[536px] font-[Work Sans] font-semibold text-[#303030] text-[38px] mb-[30px] leading-[50px]">
                I am Professional User Experience Designer
              </h2>
              <p className=" max-w-[536px] font-[Work Sans] font-normal text-[#3556070] text-[18px] mb-[16px] leading-[24px]">
                I design and develop services for customers specializing
                creating stylish, modern websites, web services and online
                stores. My passion is to design digital user experiences.
              </p>
              <h5 className=" max-w-[536px] font-[Work Sans] font-normal text-[#3556070] text-[18px] mb-[30px] leading-[24px]">
                I design and develop services for customers specializing
                creating stylish, modern websites, web services.
              </h5>
              <div className="flex gap-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md cursor-pointer hover:bg-blue-700 transition-colors duration-300">
                  My Project
                </button>

                <a
                  href="/Md Jihadul Islam.pdf"
                  download="Md_Jihadul_Islam_CV.pdf"
                >
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-md cursor-pointer hover:bg-green-700 transition-colors duration-300">
                    Download CV
                  </button>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default About;
