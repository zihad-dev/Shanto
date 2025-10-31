import React from "react";
import { IoLocationOutline } from "react-icons/io5";

const Discuss = () => {
  return (
    <>
      <div className="relative z-20 max-w-[1320px] bg-white p-6 sm:p-10 md:p-[60px] lg:p-[88px] mb-[100px] rounded-[15px] shadow-[0px_4px_20px_rgba(0,0,0,0.1)] mx-auto">
        {/* Responsive Layout */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20">
          {/* Left Info Section */}
          <div className="flex-1">
            <h3 className="font-[Work Sans] font-semibold text-[28px] sm:text-[32px] md:text-[38px] text-[#132238] leading-[40px] sm:leading-[50px] mb-[8px]">
              Let’s discuss your Project
            </h3>
            <p className="font-[Work Sans] font-normal text-[16px] md:text-[18px] text-[#87909D] leading-[24px] mb-[35px] max-w-[480px]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>

            {/* Contact Info Boxes */}
            <div className="flex flex-col gap-[12px]">
              {[
                {
                  title: "Address:",
                  value: "New Mexico 31134",
                },
                {
                  title: "My Email:",
                  value: "zihadvai42@gmail.com",
                },
                {
                  title: "Call Me Now:",
                  value: "01749286221",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-[20px] sm:p-[24px] w-full sm:max-w-[335px] bg-transparent cursor-pointer flex items-center gap-[16px] group hover:bg-[#FFFFFF] rounded-[10px] transition-all duration-300"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 12px 64px 0 rgba(28,25,25,0.12)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow = "none")
                  }
                >
                  <div className="p-[12px] bg-[#F6EBFF] rounded group-hover:bg-[#A53DFF] transition-all duration-300">
                    <IoLocationOutline className="text-[20px] text-[#A53DFF] group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-[Work Sans] font-normal text-[14px] text-[#424E60] mb-[4px]">
                      {item.title}
                    </h4>
                    <h3 className="font-[Work Sans] font-medium text-[16px] text-[#132238]">
                      {item.value}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-[12px] mt-[24px]">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="p-[12px] bg-[#F6EBFF] rounded hover:bg-[#A53DFF] transition-all duration-300"
                >
                  <IoLocationOutline className="text-[20px] text-[#A53DFF] hover:text-white" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Form Section */}
          <div className="flex-1">
            <p className="text-[#87909D] text-[15px] mb-[20px]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
            <form action="#" className="flex flex-col gap-[24px]">
              {/* Name */}
              <div className="relative after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:bg-[#E6E8EB] after:w-full after:h-[2px]">
                <input
                  className="outline-none w-full text-[15px] p-2"
                  type="text"
                  placeholder="Enter Your Name"
                />
              </div>

              {/* Email */}
              <div className="relative after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:bg-[#E6E8EB] after:w-full after:h-[2px]">
                <input
                  className="outline-none w-full text-[15px] p-2"
                  type="text"
                  placeholder="Enter Your Email"
                />
              </div>

              {/* Location */}
              <div className="relative after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:bg-[#E6E8EB] after:w-full after:h-[2px]">
                <input
                  className="outline-none w-full text-[15px] p-2"
                  type="text"
                  placeholder="Location"
                />
              </div>

              {/* Budget + Subject */}
              <div className="flex flex-col sm:flex-row gap-[24px]">
                <div className="relative flex-1 after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:bg-[#E6E8EB] after:w-full after:h-[2px]">
                  <input
                    className="outline-none w-full text-[15px] p-2"
                    type="text"
                    placeholder="Budget*"
                  />
                </div>
                <div className="relative flex-1 after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:bg-[#E6E8EB] after:w-full after:h-[2px]">
                  <input
                    className="outline-none w-full text-[15px] p-2"
                    type="text"
                    placeholder="Subject*"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="relative after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:bg-[#E6E8EB] after:w-full after:h-[2px]">
                <textarea
                  className="outline-none w-full text-[15px] p-2 resize-none"
                  rows="3"
                  placeholder="Message*"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-start">
                <button className="py-[12px] px-[24px] bg-[#A53DFF] text-white rounded-[4px] cursor-pointer hover:bg-[#922ce8] transition-all duration-300">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discuss;
