import Container from "../component/Container";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// var settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   speed: 2000,
//   autoplaySpeed: 800,
//   cssEase: "linear",
// };

var settings = {
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1500, // slide transition smooth speed
  autoplaySpeed: 2500, // time between slides (slower + smooth)
  cssEase: "ease-in-out",
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
            <div className="w-full px-2">
              <div
                className="
      w-full
      bg-white
      rounded-[12px]
      shadow-[0px_2px_20px_rgba(0,0,0,0.1)]
      cursor-pointer
      hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)]
      transition-all
      duration-300
    "
              >
                {/* Image / Thumbnail */}
                <div
                  className="
        w-full
        h-[140px]
        md:h-[180px]
        bg-[#1f2937]
        rounded-t-[12px]
      "
                />

                {/* Content */}
                <div className="p-4 md:p-5">
                  <p
                    className="
          text-[#87909D]
          font-[Work Sans]
          font-medium
          text-[12px]
          md:text-[14px]
          mb-1
          md:mb-2
        "
                  >
                    UI-UX DESIGN
                  </p>

                  <h4
                    className="
          font-[Work Sans]
          font-semibold
          text-[#132238]
          text-[14px]
          md:text-[18px]
          leading-[18px]
          md:leading-[28px]
        "
                  >
                    Product Admin Dashboard
                  </h4>
                </div>
              </div>
            </div>

            {/* <div className="w-full">
                <div className="md:w-[100%] w-[100%] md:h-[350px] h-[220px] bg-white rounded-[8px] shadow-[0px_2px_20px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] transition-all duration-300">
                  <div className="md:w-[100%] w-[90%] h-[50%] rounded-t-[8px] bg-gray-800 m-auto"></div>

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
           <div className="w-full">
                <div className="md:w-[100%] w-[100%] md:h-[350px] h-[220px] bg-white rounded-[8px] shadow-[0px_2px_20px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] transition-all duration-300">
                  <div className="md:w-[100%] w-[90%] h-[50%] rounded-t-[8px] bg-gray-800 m-auto"></div>

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
           <div className="w-full">
                <div className="md:w-[100%] w-[100%] md:h-[350px] h-[220px] bg-white rounded-[8px] shadow-[0px_2px_20px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] transition-all duration-300">
                  <div className="md:w-[100%] w-[90%] h-[50%] rounded-t-[8px] bg-gray-800 m-auto"></div>

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
           <div className="w-full">
                <div className="md:w-[100%] w-[100%] md:h-[350px] h-[220px] bg-white rounded-[8px] shadow-[0px_2px_20px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] transition-all duration-300">
                  <div className="md:w-[100%] w-[90%] h-[50%] rounded-t-[8px] bg-gray-800 m-auto"></div>

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
           <div className="w-full">
                <div className="md:w-[100%] w-[100%] md:h-[350px] h-[220px] bg-white rounded-[8px] shadow-[0px_2px_20px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] transition-all duration-300">
                  <div className="md:w-[100%] w-[90%] h-[50%] rounded-t-[8px] bg-gray-800 m-auto"></div>

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
           <div className="w-full">
                <div className="md:w-[100%] w-[100%] md:h-[350px] h-[220px] bg-white rounded-[8px] shadow-[0px_2px_20px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] transition-all duration-300">
                  <div className="md:w-[100%] w-[90%] h-[50%] rounded-t-[8px] bg-gray-800 m-auto"></div>

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
           <div className="w-full">
                <div className="md:w-[100%] w-[100%] md:h-[350px] h-[220px] bg-white rounded-[8px] shadow-[0px_2px_20px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] transition-all duration-300">
                  <div className="md:w-[100%] w-[90%] h-[50%] rounded-t-[8px] bg-gray-800 m-auto"></div>

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
           <div className="w-full">
                <div className="md:w-[100%] w-[100%] md:h-[350px] h-[220px] bg-white rounded-[8px] shadow-[0px_2px_20px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] transition-all duration-300">
                  <div className="md:w-[100%] w-[90%] h-[50%] rounded-t-[8px] bg-gray-800 m-auto"></div>

                  <div className="text-white p-[20px]">
                    <p className="text-[#87909D] font-[Work Sans] font-medium md:text-[14px] text-[12px] leading-[20px] md:mb-[8px] mb-[4px]">
                      UI-UX DESIGN
                    </p>
                    <h4 className="font-[Work Sans] font-semibold md:text-[18px] text-[14px] text-[#132238] md:mb-[10px] md:leading-[28px] leading-[18px]">
                      Product Admin Dashboard
                    </h4>
                  </div>
                </div>
               
               
            
              </div> */}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
