import Container from "../component/Container";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: false,
  pauseOnHover: true,
};
const Blog = () => {
  return (
    <div className="md:mt-[100px] mt-[60px]">
      <Container>
        <div className="text-center">
          <h2 className="font-[Work Sans] font-semibold text-[48px] text-[#132238] md:mb-[18px] mb-[8px]">
            Blog
          </h2>
          <p className="font-[Work Sans] font-normal text-[18px] text-[#87909D] leading-[24px] mb-[24px] md:max-w-[577px] mx-w-[250px] mx-auto">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>
        <div>
          <Slider {...settings}>
            <div className="w-[300px] h-[300px]">
              <div className="md:w-[20%] h-[350px]  bg-white rounded-[8px] shadow-[0px_2px_20px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] transition-all duration-300 m-auto">
              <div className="md:w-[100%] w-[100%] h-[50%] rounded-t-[8px] bg-gray-800 "></div>

              <div className="text-white p-[20px]">
                <p className="text-[#87909D] font-[Work Sans] font-medium md:text-[14px] text-[12px] leading-[20px] md:mb-[8px] mb-[4px]">
                  UI-UX DESIGN
                </p>
                <h4 className="font-[Work Sans] font-semibold md:text-[18px] text-[14px] text-[#132238] md:mb-[10px] md:leading-[28px] leading-[18px]">
                  Product Admin Dashboard
                </h4>
              </div>
            </div>
            </div>
            <div className="w-[300px] h-[300px]">
              <div className="md:w-[20%] h-[350px]  bg-white rounded-[8px] shadow-[0px_2px_20px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] transition-all duration-300 m-auto">
              <div className="md:w-[100%] w-[100%] h-[50%] rounded-t-[8px] bg-gray-800 "></div>

              <div className="text-white p-[20px]">
                <p className="text-[#87909D] font-[Work Sans] font-medium md:text-[14px] text-[12px] leading-[20px] md:mb-[8px] mb-[4px]">
                  UI-UX DESIGN
                </p>
                <h4 className="font-[Work Sans] font-semibold md:text-[18px] text-[14px] text-[#132238] md:mb-[10px] md:leading-[28px] leading-[18px]">
                  Product Admin Dashboard
                </h4>
              </div>
            </div>
            </div>
            <div className="w-[300px] h-[300px]">
              <div className="md:w-[20%] h-[350px]  bg-white rounded-[8px] shadow-[0px_2px_20px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] transition-all duration-300 m-auto">
              <div className="md:w-[100%] w-[100%] h-[50%] rounded-t-[8px] bg-gray-800 "></div>

              <div className="text-white p-[20px]">
                <p className="text-[#87909D] font-[Work Sans] font-medium md:text-[14px] text-[12px] leading-[20px] md:mb-[8px] mb-[4px]">
                  UI-UX DESIGN
                </p>
                <h4 className="font-[Work Sans] font-semibold md:text-[18px] text-[14px] text-[#132238] md:mb-[10px] md:leading-[28px] leading-[18px]">
                  Product Admin Dashboard
                </h4>
              </div>
            </div>
            </div>
            <div className="w-[300px] h-[300px]">
              <div className="md:w-[20%] h-[350px]  bg-white rounded-[8px] shadow-[0px_2px_20px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] transition-all duration-300 m-auto">
              <div className="md:w-[100%] w-[100%] h-[50%] rounded-t-[8px] bg-gray-800 "></div>

              <div className="text-white p-[20px]">
                <p className="text-[#87909D] font-[Work Sans] font-medium md:text-[14px] text-[12px] leading-[20px] md:mb-[8px] mb-[4px]">
                  UI-UX DESIGN
                </p>
                <h4 className="font-[Work Sans] font-semibold md:text-[18px] text-[14px] text-[#132238] md:mb-[10px] md:leading-[28px] leading-[18px]">
                  Product Admin Dashboard
                </h4>
              </div>
            </div>
            </div>
            <div className="w-[300px] h-[300px]">
              <div className="md:w-[20%] h-[350px]  bg-white rounded-[8px] shadow-[0px_2px_20px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] transition-all duration-300 m-auto">
              <div className="md:w-[100%] w-[100%] h-[50%] rounded-t-[8px] bg-gray-800 "></div>

              <div className="text-white p-[20px]">
                <p className="text-[#87909D] font-[Work Sans] font-medium md:text-[14px] text-[12px] leading-[20px] md:mb-[8px] mb-[4px]">
                  UI-UX DESIGN
                </p>
                <h4 className="font-[Work Sans] font-semibold md:text-[18px] text-[14px] text-[#132238] md:mb-[10px] md:leading-[28px] leading-[18px]">
                  Product Admin Dashboard
                </h4>
              </div>
            </div>
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
