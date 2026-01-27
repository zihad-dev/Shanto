import React, { useState } from "react";
import Slider from "react-slick";

const Testmonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const [isExpanded, setIsExpanded] = useState(false);

  const text = `Nulla efficitur nisl sit amet velit malesuada dapibus. 
  Duis mollis felis turpis, nec semper odio convallis at. 
  Curabitur imperdiet semper arcu, a finibus arcu suscipit in. 
  Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed,
  tincidunt ut sapien. Morbi ornare elit at libero suscipit porta.`;
  return (
    <>
      <div className=" mt-[10px] pb-[100px] px-4 md:px-8 lg:px-0 overflow-x-hidden">
        {/* Section Header */}
        <div className="text-center md:mb-[70px] mb-[35px] ">
          <h2 className="font-[Work Sans] font-semibold md:text-[32px] text-[25px] lg:text-[48px] text-[#132238] leading-tight mb-[16px]">
            Testimonial
          </h2>
          <p className="font-[Work Sans] font-normal md:text-[16px] text-[14px] text-[#87909D] leading-[24px] max-w-[577px] mx-auto">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>
        <Slider {...settings}>
          <div>
            {/* Testimonial Content */}
            <div className="flex flex-col items-center justify-center gap-[10px] md:gap-[24px] text-center bg-[#F9FAFB] md:py-[40px] md:px-[20px] p-[20px] rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] md:max-w-[900px] w-[95%] mx-auto">
              <div>
                <p className="font-[Work Sans] font-normal md:text-[16px] text-[14px] text-[#2B384C] md:leading-[24px] leading-[18px] mb-[8px]">
                  {isExpanded ? text : text.slice(0, 120) + "..."}
                </p>

                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-blue-600 text-sm font-medium hover:underline"
                >
                  {isExpanded ? "Read less" : "Read more"}
                </button>
              </div>

              <div>
                <h3 className="font-[Work Sans] font-medium text-[18px] sm:text-[20px] text-[#000000] leading-[24px] mb-[4px]">
                  Esther Howard
                </h3>
                <h4 className="font-[Work Sans] font-light text-[14px] sm:text-[16px] text-[#000000] leading-[22px]">
                  Managing Director, ABC Company
                </h4>
              </div>
            </div>
          </div>
          <div>
            {/* Testimonial Content */}
            <div className="flex flex-col items-center justify-center gap-[10px] md:gap-[24px] text-center bg-[#F9FAFB] md:py-[40px] md:px-[20px] p-[20px] rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] md:max-w-[900px] w-[95%] mx-auto">
              <div>
                <p className="font-[Work Sans] font-normal md:text-[16px] text-[14px] text-[#2B384C] md:leading-[24px] leading-[18px] mb-[8px]">
                  {isExpanded ? text : text.slice(0, 120) + "..."}
                </p>

                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-blue-600 text-sm font-medium hover:underline"
                >
                  {isExpanded ? "Read less" : "Read more"}
                </button>
              </div>

              <div>
                <h3 className="font-[Work Sans] font-medium text-[18px] sm:text-[20px] text-[#000000] leading-[24px] mb-[4px]">
                  Esther Howard
                </h3>
                <h4 className="font-[Work Sans] font-light text-[14px] sm:text-[16px] text-[#000000] leading-[22px]">
                  Managing Director, ABC Company
                </h4>
              </div>
            </div>
          </div>
          <div>
            {/* Testimonial Content */}
            <div className="flex flex-col items-center justify-center gap-[10px] md:gap-[24px] text-center bg-[#F9FAFB] md:py-[40px] md:px-[20px] p-[20px] rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] md:max-w-[900px] w-[95%] mx-auto">
              <div>
                <p className="font-[Work Sans] font-normal md:text-[16px] text-[14px] text-[#2B384C] md:leading-[24px] leading-[18px] mb-[8px]">
                  {isExpanded ? text : text.slice(0, 120) + "..."}
                </p>

                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-blue-600 text-sm font-medium hover:underline"
                >
                  {isExpanded ? "Read less" : "Read more"}
                </button>
              </div>

              <div>
                <h3 className="font-[Work Sans] font-medium text-[18px] sm:text-[20px] text-[#000000] leading-[24px] mb-[4px]">
                  Esther Howard
                </h3>
                <h4 className="font-[Work Sans] font-light text-[14px] sm:text-[16px] text-[#000000] leading-[22px]">
                  Managing Director, ABC Company
                </h4>
              </div>
            </div>
          </div>
          <div>
            {/* Testimonial Content */}
            <div className="flex flex-col items-center justify-center gap-[10px] md:gap-[24px] text-center bg-[#F9FAFB] md:py-[40px] md:px-[20px] p-[20px] rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] md:max-w-[900px] w-[95%] mx-auto">
              <div>
                <p className="font-[Work Sans] font-normal md:text-[16px] text-[14px] text-[#2B384C] md:leading-[24px] leading-[18px] mb-[8px]">
                  {isExpanded ? text : text.slice(0, 120) + "..."}
                </p>

                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-blue-600 text-sm font-medium hover:underline"
                >
                  {isExpanded ? "Read less" : "Read more"}
                </button>
              </div>

              <div>
                <h3 className="font-[Work Sans] font-medium text-[18px] sm:text-[20px] text-[#000000] leading-[24px] mb-[4px]">
                  Esther Howard
                </h3>
                <h4 className="font-[Work Sans] font-light text-[14px] sm:text-[16px] text-[#000000] leading-[22px]">
                  Managing Director, ABC Company
                </h4>
              </div>
            </div>
          </div>
          <div>
            {/* Testimonial Content */}
            <div className="flex flex-col items-center justify-center gap-[10px] md:gap-[24px] text-center bg-[#F9FAFB] md:py-[40px] md:px-[20px] p-[20px] rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] md:max-w-[900px] w-[95%] mx-auto">
              <div>
                <p className="font-[Work Sans] font-normal md:text-[16px] text-[14px] text-[#2B384C] md:leading-[24px] leading-[18px] mb-[8px]">
                  {isExpanded ? text : text.slice(0, 120) + "..."}
                </p>

                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-blue-600 text-sm font-medium hover:underline"
                >
                  {isExpanded ? "Read less" : "Read more"}
                </button>
              </div>

              <div>
                <h3 className="font-[Work Sans] font-medium text-[18px] sm:text-[20px] text-[#000000] leading-[24px] mb-[4px]">
                  Esther Howard
                </h3>
                <h4 className="font-[Work Sans] font-light text-[14px] sm:text-[16px] text-[#000000] leading-[22px]">
                  Managing Director, ABC Company
                </h4>
              </div>
            </div>
          </div>
         
          
         
        </Slider>
      </div>
    </>
  );
};

export default Testmonial;
