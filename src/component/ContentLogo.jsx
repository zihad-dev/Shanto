import React from "react";
import Container from "../component/Container";

const ContentLogo = () => {
  return (
    <>
      <div className="mt-[100px] mb-[100px]">
        <Container>
          {/* Header Text (optional) */}
          <h2 className="text-center text-[28px] sm:text-[36px] font-semibold text-[#132238] mb-[40px]">
            Our Trusted Partners
          </h2>

          {/* Logo Grid */}
          <div className="flex flex-wrap justify-center sm:justify-between items-center bg-[#1E293B] p-5 sm:p-8 rounded-2xl gap-5 sm:gap-8 shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] bg-[#A53DFF] rounded-xl flex items-center justify-center hover:scale-110 hover:bg-[#9333EA] transition-all duration-300"
              >
                <span className="text-white font-semibold text-[18px]">
                  L{i + 1}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default ContentLogo;
