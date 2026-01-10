import React from "react";
import Container from "../component/Container";

const Home = () => {
  return (
    <div className="md:pt-[130px] mt-[90px]">
      <Container>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between md:gap-10 gap-6 ml-2 md:ml-0">
          {/* Left Section */}
          <div className="lg:w-1/2">
            <h1 className="md:max-w-full lg:max-w-[575px]  font-['Work Sans'] font-semibold text-2xl md:text-7xl leading-[1.1] text-[#132238] mb-2 ">
              Hello, I’m Md Hasibur Rahman Shanto
            </h1>
            <p className="w-full mdmax-w-[648px] font-['Work Sans'] text-[12px] sm:text-lg leading-7 text-[#556070] mb-3">
              {" "}
              <span className="relative cursor-pointer text-[#132238] after:absolute after:left-0 after:bottom-0 after:w-full after:h-2 after:bg-[#FFC8C8] after:-z-10">
                SEO
              </span>{" "}
              &{" "}
              <span className="relative cursor-pointer text-[#132238] after:absolute after:left-0 after:bottom-0 after:w-full after:h-2 after:bg-[#FFC8C8] after:-z-10">
                AI-Optimization Expert
              </span>{" "}
              I help businesses rank higher, build trust, and convert visibility
              into long-term growth through AEO, GEO, SXO & Local SEO.
            </p>
            <button className="font-['Work Sans'] font-semibold text-base sm:text-lg text-white py-3 px-6 bg-[#A53DFF] rounded-lg hover:bg-[#922ED1] transition-colors duration-300">
              Say Hello!
            </button>

            {/* Stats */}
            <div className="md:mt-10 mt-5 md:flex md:gap-5 flex flex-wrap justify-between grid grid-cols-2 ">
              {[
                { number: "3Y.", label: "Experience" },
                { number: "37+", label: "Experience" },
                { number: "23+", label: "Project Completed" },
                { number: "35", label: "Happy Client" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="flex-1 md:min-w-[150px] w-[120px] py-4 bg-[#F6EBFE] flex flex-col items-center justify-center rounded-lg"
                >
                  <h4 className="font-['Work Sans'] font-semibold md:text-3xl text-[22px] text-[#424E60] mb-2">
                    {stat.number}
                  </h4>
                  <p className="font-['Work Sans'] font-semibold md:text-base text-[13px] text-[#697484]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="md:max-w-[535px] md:h-[400px] sm:h-[500px] lg:h-[590px] rounded-[15px]">
              <div className="w-full h-full overflow-hidden rounded-[8px] md:rounded-[15px]">
                <img src="images/Hasibur Rahman.jpg" alt="Hasib Rahman" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
