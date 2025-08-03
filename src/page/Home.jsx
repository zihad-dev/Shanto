import React from "react";
import Container from "../component/Container";

const Home = () => {
  return (
    <>
      <div className="pt-[130px]">
        <Container>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="max-w-[575px] font-['Work Sans'] font-semibold text-[72px] leading-[84px] text-[#132238] mb-6">
                Hello, I’m Brooklyn Gilbert
              </h1>
              <p className="max-w-[648px] font-['Work Sans'] font-normal text-[18px] leading-[24px] text-[#556070] mb-6 z-10">I'm a Freelance <span className=" cursor-pointer text-[#132238] relative after:content-[''] after:w-full after:h-[10px] after:absolute after:left-0 after:bottom-0 after:bg-[#FFC8C8] after:-z-10">UI/UX Designer</span> and<span className=" cursor-pointer text-[#132238] relative after:content-[''] after:w-full after:h-[10px] after:absolute after:left-0 after:bottom-0 after:bg-[#FFC8C8] after:-z-10">Developer</span>  based in London, England. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.</p>
              <button className="font-['Work Sans'] font-semibold text-[17px] leading-[25px] text-[#FFFFFF] py-[12px] px-[24px] bg-[#A53DFF] rounded-[8px] cursor-pointer ">Say Hello!</button>
              <div className="mt-[142px] flex gap-[2px]">
                <div className=" w-[200px] py-[17px] bg-[#F6EBFE] cursor-pointer flex flex-col items-center justify-center">
                  <h4 className="font-['Work Sans'] font-semibold text-[32px] leading-[40px] text-[#424E60] mb-2">15 Y.</h4>
                  <p className="font-['Work Sans'] font-semibold text-[16px] leading-[24px] text-[#697484]">Experience</p>
                </div>
                <div className=" w-[200px] py-[17px] bg-[#F6EBFE] cursor-pointer flex flex-col items-center justify-center">
                  <h4 className="font-['Work Sans'] font-semibold text-[32px] leading-[40px] text-[#424E60] mb-2">157+</h4>
                  <p className="font-['Work Sans'] font-semibold text-[16px] leading-[24px] text-[#697484]">Project Completed</p>
                </div>
                <div className=" w-[200px] py-[17px] bg-[#F6EBFE] cursor-pointer flex flex-col items-center justify-center">
                  <h4 className="font-['Work Sans'] font-semibold text-[32px] leading-[40px] text-[#424E60] mb-2">58</h4>
                  <p className="font-['Work Sans'] font-semibold text-[16px] leading-[24px] text-[#697484]">Happy Client</p>
                </div>
             
              </div>
            </div>
            <div>
              <div className="w-[535px] h-[590px] bg-red-500 rounded-[15px] "></div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Home;
