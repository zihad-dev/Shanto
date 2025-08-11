import React from "react";
import { IoLocationOutline } from "react-icons/io5";

const Discuss = () => {
  return (
    <>
      <div className=" relative z-20 max-w-[1320px] h-auto bg-white p-[88px] mb-[100px] rounded-[15px] shadow-[0px_4px_20px_rgba(0,0,0,0.1)] mx-auto ">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-[Work Sans] font-semibold text-[38px] text-[#132238] leading-[50px] mb-[8px] ">
              Let’s discuss your Project
            </h3>
            <p className="font-[Work Sans] font-normal text-[18px] text-[#87909D] leading-[24px] mb-[35px] max-w-[480px] ">
              There are many variations of passages of Lorem Ipsu available. but
              the majority have suffered alte.
            </p>
            <div className="flex flex-col gap-[12px]">
              <div
                className="p-[24px] max-w-[335px] bg-transparent cursor-pointer flex items-center gap-[16px] group hover:bg-[#FFFFFF] rounded-[10px] transition-all duration-300"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 12px 64px 0 rgba(28,25,25,0.12)")
                }
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
              >
                <div className="p-[12px] bg-[#F6EBFF] max-w-[48px] rounded group-hover:bg-[#A53DFF] transition-all duration-300">
                  <IoLocationOutline className="text-[20px] text-[#A53DFF] group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-[Work Sans] font-normal text-[14px] text-[#424E60] leading-[20px] mb-[4px] ">
                    Address:
                  </h4>
                  <h3 className="font-[Work Sans] font-medium text-[16px] text-[#132238] leading-[24px] ">
                    New Mexico 31134
                  </h3>
                </div>
              </div>
              <div
                className="p-[24px] max-w-[335px] bg-transparent cursor-pointer flex items-center gap-[16px] group hover:bg-[#FFFFFF] rounded-[10px] transition-all duration-300"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 12px 64px 0 rgba(28,25,25,0.12)")
                }
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
              >
                <div className="p-[12px] bg-[#F6EBFF] max-w-[48px] rounded group-hover:bg-[#A53DFF] transition-all duration-300">
                  <IoLocationOutline className="text-[20px] text-[#A53DFF] group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-[Work Sans] font-normal text-[14px] text-[#424E60] leading-[20px] mb-[4px] ">
                    My Email:
                  </h4>
                  <h3 className="font-[Work Sans] font-medium text-[16px] text-[#132238] leading-[24px] ">
                    zihadvai42@gmail.com
                  </h3>
                </div>
              </div>
              <div
                className="p-[24px] max-w-[335px] bg-transparent cursor-pointer flex items-center gap-[16px] group hover:bg-[#FFFFFF] rounded-[10px] transition-all duration-300"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 12px 64px 0 rgba(28,25,25,0.12)")
                }
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
              >
                <div className="p-[12px] bg-[#F6EBFF] max-w-[48px] rounded group-hover:bg-[#A53DFF] transition-all duration-300">
                  <IoLocationOutline className="text-[20px] text-[#A53DFF] group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-[Work Sans] font-normal text-[14px] text-[#424E60] leading-[20px] mb-[4px] ">
                    Call Me Now:
                  </h4>
                  <h3 className="font-[Work Sans] font-medium text-[16px] text-[#132238] leading-[24px] ">
                    01749286221
                  </h3>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[12px] mt-[24px]">
              <div className="p-[12px] bg-[#F6EBFF] max-w-[48px] rounded hover:bg-[#A53DFF] transition-all duration-300">
                <IoLocationOutline className="text-[20px] text-[#A53DFF] hover:text-white" />
              </div>
              <div className="p-[12px] bg-[#F6EBFF] max-w-[48px] rounded hover:bg-[#A53DFF] transition-all duration-300">
                <IoLocationOutline className="text-[20px] text-[#A53DFF] hover:text-white" />
              </div>
              <div className="p-[12px] bg-[#F6EBFF] max-w-[48px] rounded hover:bg-[#A53DFF] transition-all duration-300">
                <IoLocationOutline className="text-[20px] text-[#A53DFF] hover:text-white" />
              </div>
              <div className="p-[12px] bg-[#F6EBFF] max-w-[48px] rounded hover:bg-[#A53DFF] transition-all duration-300">
                <IoLocationOutline className="text-[20px] text-[#A53DFF] hover:text-white" />
              </div>
              <div className="p-[12px] bg-[#F6EBFF] max-w-[48px] rounded hover:bg-[#A53DFF] transition-all duration-300">
                <IoLocationOutline className="text-[20px] text-[#A53DFF] hover:text-white" />
              </div>
            </div>
          </div>
          <div>
            <p>
              There are many variations of passages of Lorem Ipsu available, but
              the majority have suffered alte.
            </p>
            <form action="#" className="flex flex-col gap-[24px] ">
              <div className="relative after:content-[''] after:absolute after:bottom-[-15px] after:left-0 after:bg-[#E6E8EB] after:w-full after:h-[2px]">
                <input
                  className="outline-none w-full"
                  type="text"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="relative after:content-[''] after:absolute after:bottom-[-15px] after:left-0 after:bg-[#E6E8EB] after:w-full after:h-[2px]">
                <input
                  className="outline-none w-full"
                  type="text"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="relative after:content-[''] after:absolute after:bottom-[-15px] after:left-0 after:bg-[#E6E8EB] after:w-full after:h-[2px]">
                <input className="outline-none w-full" type="text" placeholder="Location" />
              </div>

              <div className="flex flex-row w-full gap-[24px]">
                <div className="relative w-[50%] after:content-[''] after:absolute after:bottom-[-15px] after:left-0 after:bg-[#E6E8EB] after:w-full after:h-[2px]">
                <input className="outline-none w-full" type="text" placeholder="Budget*" />
              </div>
                <div className="relative w-[50%] after:content-[''] after:absolute after:bottom-[-15px] after:left-0 after:bg-[#E6E8EB] after:w-full after:h-[2px]">
                <input className="outline-none w-full" type="text" placeholder="Subject*" />
              </div>
              </div>
               <div className="relative after:content-[''] after:absolute after:bottom-[-15px] after:left-0 after:bg-[#E6E8EB] after:w-full after:h-[2px]">
                <input className="outline-none w-full" type="text" placeholder="Message*" />
              </div>
              <div className="flex justify-start">
                <button className="py-[12px] px-[24px] bg-[#A53DFF] rounded-[4px] cursor-pointer">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discuss;
