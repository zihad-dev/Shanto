import React, { useState } from "react";
import Container from "../component/Container";



const portfolioData = [
  {
    category: "UI-UX DESIGN",
    title: "Product Admin Dashboard",
    description:
      "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
  },
  {
    category: "UI-UX DESIGN",
    title: "E-commerce Website",
    description:
      "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
  },
  {
    category: "UI-UX DESIGN",
    title: "Mobile App Design",
    description:
      "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
  },
  {
    category: "UI-UX DESIGN",
    title: "Landing Page Design",
    description:
      "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
  },
  {
    category: "UI-UX DESIGN",
    title: "Dashboard Design",
    description:
      "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
  },
  {
    category: "UI-UX DESIGN",
    title: "Portfolio Website",
    description:
      "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
  },
];

const PortfolioCard = ({ category, title, description }) => (
  <div className="md:max-w-[420px] max-w-[250px] md:h-[480px] h-[320px] bg-white rounded-[15px] shadow-[0px_4px_20px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] transition-all duration-300">
    <div className="w-full md:h-[50%] h-[35%] rounded-t-[15px] bg-gray-800"></div>
    <div className="text-white p-5">
      <p className="text-[#87909D] font-[Work Sans] font-medium text-sm leading-5 md:mb-2">
        {category}
      </p>
      <h4 className="font-[Work Sans] font-semibold text-lg text-[#132238] md:mb-2 mb-1 leading-7">
        {title}
      </h4>
      <p className="font-[Work Sans] font-normal text-sm text-[#556070] mb-4 leading-5">
        {description}
      </p>
      <button className="font-[Work Sans] font-semibold text-sm text-[#A53DFF] p-3 rounded-[5px] border cursor-pointer">
        Case Study
      </button>
    </div>
  </div>
);


const Portfolio = () => {
  return (
    <div className="md:mt-[100px] mt-[80px]">
      <Container>
        <div className="text-center">
          <h2 className="font-[Work Sans] font-semibold text-4xl text-[#132238] md:mb-6 mb-4">
            Portfolio
          </h2>
          <p className="font-[Work Sans] font-normal text-base text-[#87909D] leading-6 md:mb-6 md:max-w-[577px] max-w-[350px] mx-auto">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>

        <div className="md:mt-12 mt-[25px] flex flex-wrap gap-5 justify-center">
          {portfolioData.map((item, idx) => (
            <PortfolioCard key={idx} {...item} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button
   
            className="font-[Work Sans] font-semibold text-base text-white py-3 px-6 bg-[#A53DFF] rounded-lg cursor-pointer hover:bg-[#922ED1] transition-colors duration-300"
          >
            Load More
          </button>
        </div>
        
       
      </Container>
    </div>
  );
};

export default Portfolio;
