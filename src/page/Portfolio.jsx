import React from "react";
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
  <div className="max-w-[420px] h-[480px] bg-white rounded-[15px] shadow-[0px_4px_20px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] transition-all duration-300">
    <div className="w-full h-[50%] rounded-t-[15px] bg-gray-800"></div>
    <div className="text-white p-5">
      <p className="text-[#87909D] font-[Work Sans] font-medium text-sm leading-5 mb-2">
        {category}
      </p>
      <h4 className="font-[Work Sans] font-semibold text-lg text-[#132238] mb-2 leading-7">
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
    <div className="mt-[100px]">
      <Container>
        <div className="text-center">
          <h2 className="font-[Work Sans] font-semibold text-4xl text-[#132238] mb-6">
            Portfolio
          </h2>
          <p className="font-[Work Sans] font-normal text-base text-[#87909D] leading-6 mb-6 max-w-[577px] mx-auto">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-5 justify-center">
          {portfolioData.map((item, idx) => (
            <PortfolioCard key={idx} {...item} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="font-[Work Sans] font-semibold text-base text-white py-3 px-6 bg-[#A53DFF] rounded-lg cursor-pointer hover:bg-[#922ED1] transition-colors duration-300">
            Load More
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
