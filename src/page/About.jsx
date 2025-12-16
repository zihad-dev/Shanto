import React from "react";
import Container from "../component/Container";
import { FaBehance, FaFacebookF, FaInstagram } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { IoEarth } from "react-icons/io5";

const About = () => {
  return (
    <div className="mt-20 md:mt-32">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center p-6 md:p-16 bg-white shadow-lg rounded-lg gap-8">
          <div className="relative md:w-[420px] h-[460px] rounded-lg  flex-shrink-0">
              <img
                className="w-full h-full object-contain"
                src="./images/Hasibur Rahman.jpg"
                alt=""
              />
            

            <div className="w-full md:w-[275px] p-4 bg-white absolute left-1/2 bottom-[-30px] transform -translate-x-1/2 rounded-lg shadow-lg">
              <ul className="flex justify-between items-center">
                {[
                  IoEarth,
                  FaFacebookF,
                  FaInstagram,
                  GrLinkedinOption,
                  FaBehance,
                ].map((Icon, idx) => (
                  <li
                    key={idx}
                    className="p-3 text-xl text-[#A53DFF] rounded-md hover:bg-[#A53DFF] hover:text-white cursor-pointer transition duration-300"
                  >
                    <Icon />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="font-[Work Sans] font-semibold text-[#303030] text-3xl sm:text-4xl md:text-5xl mb-4 md:mb-6 leading-snug">
              I am Professional User Experience Designer
            </h2>

            <p className="font-[Work Sans] font-normal text-gray-700 text-base sm:text-lg md:text-[18px] mb-4 leading-relaxed">
              I design and develop services for customers specializing in
              creating stylish, modern websites, web services and online stores.
              My passion is to design digital user experiences.
            </p>

            <h5 className="font-[Work Sans] font-normal text-gray-700 text-base sm:text-lg md:text-[18px] mb-6 leading-relaxed">
              I design and develop services for customers specializing in
              creating stylish, modern websites, web services.
            </h5>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
                My Project
              </button>

              <a
                href="/Md Jihadul Islam.pdf"
                download="Md_Jihadul_Islam_CV.pdf"
              >
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300">
                  Download CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
