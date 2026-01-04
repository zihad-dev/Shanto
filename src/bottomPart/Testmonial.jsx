import React from "react";
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
  return (
    <>
      <div className="pb-[100px] px-4 md:px-8 lg:px-0">
        {/* Section Header */}
        <div className="text-center mb-[70px]">
          <h2 className="font-[Work Sans] font-semibold text-[32px] sm:text-[40px] lg:text-[48px] text-[#132238] leading-tight mb-[16px]">
            Testimonial
          </h2>
          <p className="font-[Work Sans] font-normal text-[16px] sm:text-[18px] text-[#87909D] leading-[24px] max-w-[577px] mx-auto">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>
        <Slider {...settings}>
          <div>
            {/* Testimonial Content */}
            <div className="flex flex-col items-center justify-center gap-[24px] text-center bg-[#F9FAFB] py-[40px] px-[20px] sm:px-[40px] rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] max-w-[900px] mx-auto">
              <p className="font-[Work Sans] font-normal text-[16px] sm:text-[18px] text-[#2B384C] leading-[26px] mb-[24px]">
                “Nulla efficitur nisl sit amet velit malesuada dapibus. Duis
                mollis felis turpis, nec semper odio convallis at. Curabitur
                imperdiet semper arcu, a finibus arcu suscipit in. Donec quis
                placerat nibh. Maecenas est purus, eleifend ac cursus sed,
                tincidunt ut sapien. Morbi ornare elit at libero suscipit
                porta.”
              </p>

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
            <div className="flex flex-col items-center justify-center gap-[24px] text-center bg-[#F9FAFB] py-[40px] px-[20px] sm:px-[40px] rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] max-w-[900px] mx-auto">
              <p className="font-[Work Sans] font-normal text-[16px] sm:text-[18px] text-[#2B384C] leading-[26px] mb-[24px]">
                “Nulla efficitur nisl sit amet velit malesuada dapibus. Duis
                mollis felis turpis, nec semper odio convallis at. Curabitur
                imperdiet semper arcu, a finibus arcu suscipit in. Donec quis
                placerat nibh. Maecenas est purus, eleifend ac cursus sed,
                tincidunt ut sapien. Morbi ornare elit at libero suscipit
                porta.”
              </p>

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
            <div className="flex flex-col items-center justify-center gap-[24px] text-center bg-[#F9FAFB] py-[40px] px-[20px] sm:px-[40px] rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] max-w-[900px] mx-auto">
              <p className="font-[Work Sans] font-normal text-[16px] sm:text-[18px] text-[#2B384C] leading-[26px] mb-[24px]">
                “Nulla efficitur nisl sit amet velit malesuada dapibus. Duis
                mollis felis turpis, nec semper odio convallis at. Curabitur
                imperdiet semper arcu, a finibus arcu suscipit in. Donec quis
                placerat nibh. Maecenas est purus, eleifend ac cursus sed,
                tincidunt ut sapien. Morbi ornare elit at libero suscipit
                porta.”
              </p>

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
            <div className="flex flex-col items-center justify-center gap-[24px] text-center bg-[#F9FAFB] py-[40px] px-[20px] sm:px-[40px] rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] max-w-[900px] mx-auto">
              <p className="font-[Work Sans] font-normal text-[16px] sm:text-[18px] text-[#2B384C] leading-[26px] mb-[24px]">
                “Nulla efficitur nisl sit amet velit malesuada dapibus. Duis
                mollis felis turpis, nec semper odio convallis at. Curabitur
                imperdiet semper arcu, a finibus arcu suscipit in. Donec quis
                placerat nibh. Maecenas est purus, eleifend ac cursus sed,
                tincidunt ut sapien. Morbi ornare elit at libero suscipit
                porta.”
              </p>

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
