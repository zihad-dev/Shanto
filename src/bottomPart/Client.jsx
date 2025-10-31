import React from "react";
import Container from "../component/Container";

const Client = () => {
  const logos = ["Logo", "Logo", "Logo", "Logo", "Logo", "Logo"];

  return (
    <>
      <div className="py-[100px] bg-white">
        <Container>
          {/* Heading */}
          <div className="text-center mb-10 px-4">
            <h3 className="text-lg font-medium text-[#555] mb-2">
              Hello I am Md Jihadul Islam
            </h3>
            <h2 className="font-[Work Sans] font-semibold text-[32px] md:text-[48px] text-[#132238] leading-[40px] md:leading-[56px] mb-[16px]">
              Happy Clients
            </h2>
            <p className="font-[Work Sans] font-normal text-[16px] md:text-[18px] text-[#87909D] leading-[26px] max-w-[600px] mx-auto">
              There are many variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration.
            </p>
          </div>

          {/* Client Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4 md:px-0 justify-items-center">
            {logos.map((item, index) => (
              <div
                key={index}
                className="w-[150px] h-[100px] sm:w-[180px] sm:h-[120px] md:w-[200px] md:h-[150px] bg-[#F6EBFE] flex items-center justify-center rounded-[15px] cursor-pointer hover:bg-[#e6d6fa] transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <h5 className="text-[#5e2a84] font-semibold">{item}</h5>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Client;
