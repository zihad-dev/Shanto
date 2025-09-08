import Container from "../component/Container";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 800,
  cssEase: "linear",
};
const Blog = () => {
  return (
    <div className="mt-[100px]">
      <Container>
        <div className="text-center">
          <h2 className="font-[Work Sans] font-semibold text-[48px] text-[#132238] mb-[18px]">
            Blog
          </h2>
          <p className="font-[Work Sans] font-normal text-[18px] text-[#87909D] leading-[24px] mb-[24px] max-w-[577px] mx-auto">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>
        <div>
          <Slider {...settings}>
            <div>
              <div className="flex gap-[20px] justify-center ">
                <div className="w-[25%] h-[350px] bg-white rounded-[8px] shadow-[0px_2px_20px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] transition-all duration-300">
                  <div className="w-[100%] h-[50%] rounded-t-[8px] bg-gray-800"></div>

                  <div className="text-white p-[20px]">
                    <p className="text-[#87909D] font-[Work Sans] font-medium text-[14px] leading-[20px] mb-[8px]">
                      UI-UX DESIGN
                    </p>
                    <h4 className="font-[Work Sans] font-semibold text-[18px] text-[#132238] mb-[10px] leading-[28px]">
                      Product Admin Dashboard
                    </h4>
                  </div>
                </div>
                <div className="w-[25%] h-[350px] bg-white rounded-[8px] shadow-[0px_2px_20px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] transition-all duration-300">
                  <div className="w-[100%] h-[50%] rounded-t-[8px] bg-gray-800"></div>

                  <div className="text-white p-[20px]">
                    <p className="text-[#87909D] font-[Work Sans] font-medium text-[14px] leading-[20px] mb-[8px]">
                      UI-UX DESIGN
                    </p>
                    <h4 className="font-[Work Sans] font-semibold text-[18px] text-[#132238] mb-[10px] leading-[28px]">
                      Product Admin Dashboard
                    </h4>
                  </div>
                </div>
                <div className="w-[25%] h-[350px] bg-white rounded-[8px] shadow-[0px_2px_20px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] transition-all duration-300">
                  <div className="w-[100%] h-[50%] rounded-t-[8px] bg-gray-800"></div>

                  <div className="text-white p-[20px]">
                    <p className="text-[#87909D] font-[Work Sans] font-medium text-[14px] leading-[20px] mb-[8px]">
                      UI-UX DESIGN
                    </p>
                    <h4 className="font-[Work Sans] font-semibold text-[18px] text-[#132238] mb-[10px] leading-[28px]">
                      Product Admin Dashboard
                    </h4>
                  </div>
                </div>
                <div className="w-[25%] h-[350px] bg-white rounded-[8px] shadow-[0px_2px_20px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] transition-all duration-300">
                  <div className="w-[100%] h-[50%] rounded-t-[8px] bg-gray-800"></div>

                  <div className="text-white p-[20px]">
                    <p className="text-[#87909D] font-[Work Sans] font-medium text-[14px] leading-[20px] mb-[8px]">
                      UI-UX DESIGN
                    </p>
                    <h4 className="font-[Work Sans] font-semibold text-[18px] text-[#132238] mb-[10px] leading-[28px]">
                      Product Admin Dashboard
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-[20px] justify-center ">
                <div className="w-[25%] h-[350px] bg-white rounded-[8px] shadow-[0px_2px_20px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] transition-all duration-300">
                  <div className="w-[100%] h-[50%] rounded-t-[8px] bg-gray-800"></div>

                  <div className="text-white p-[20px]">
                    <p className="text-[#87909D] font-[Work Sans] font-medium text-[14px] leading-[20px] mb-[8px]">
                      UI-UX DESIGN
                    </p>
                    <h4 className="font-[Work Sans] font-semibold text-[18px] text-[#132238] mb-[10px] leading-[28px]">
                      Product Admin Dashboard
                    </h4>
                  </div>
                </div>
                <div className="w-[25%] h-[350px] bg-white rounded-[8px] shadow-[0px_2px_20px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] transition-all duration-300">
                  <div className="w-[100%] h-[50%] rounded-t-[8px] bg-gray-800"></div>

                  <div className="text-white p-[20px]">
                    <p className="text-[#87909D] font-[Work Sans] font-medium text-[14px] leading-[20px] mb-[8px]">
                      UI-UX DESIGN
                    </p>
                    <h4 className="font-[Work Sans] font-semibold text-[18px] text-[#132238] mb-[10px] leading-[28px]">
                      Product Admin Dashboard
                    </h4>
                  </div>
                </div>
                <div className="w-[25%] h-[350px] bg-white rounded-[8px] shadow-[0px_2px_20px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] transition-all duration-300">
                  <div className="w-[100%] h-[50%] rounded-t-[8px] bg-gray-800"></div>

                  <div className="text-white p-[20px]">
                    <p className="text-[#87909D] font-[Work Sans] font-medium text-[14px] leading-[20px] mb-[8px]">
                      UI-UX DESIGN
                    </p>
                    <h4 className="font-[Work Sans] font-semibold text-[18px] text-[#132238] mb-[10px] leading-[28px]">
                      Product Admin Dashboard
                    </h4>
                  </div>
                </div>
                <div className="w-[25%] h-[350px] bg-white rounded-[8px] shadow-[0px_2px_20px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] transition-all duration-300">
                  <div className="w-[100%] h-[50%] rounded-t-[8px] bg-gray-800"></div>

                  <div className="text-white p-[20px]">
                    <p className="text-[#87909D] font-[Work Sans] font-medium text-[14px] leading-[20px] mb-[8px]">
                      UI-UX DESIGN
                    </p>
                    <h4 className="font-[Work Sans] font-semibold text-[18px] text-[#132238] mb-[10px] leading-[28px]">
                      Product Admin Dashboard
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-[20px] justify-center ">
                <div className="w-[25%] h-[350px] bg-white rounded-[8px] shadow-[0px_2px_20px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] transition-all duration-300">
                  <div className="w-[100%] h-[50%] rounded-t-[8px] bg-gray-800"></div>

                  <div className="text-white p-[20px]">
                    <p className="text-[#87909D] font-[Work Sans] font-medium text-[14px] leading-[20px] mb-[8px]">
                      UI-UX DESIGN
                    </p>
                    <h4 className="font-[Work Sans] font-semibold text-[18px] text-[#132238] mb-[10px] leading-[28px]">
                      Product Admin Dashboard
                    </h4>
                  </div>
                </div>
                <div className="w-[25%] h-[350px] bg-white rounded-[8px] shadow-[0px_2px_20px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] transition-all duration-300">
                  <div className="w-[100%] h-[50%] rounded-t-[8px] bg-gray-800"></div>

                  <div className="text-white p-[20px]">
                    <p className="text-[#87909D] font-[Work Sans] font-medium text-[14px] leading-[20px] mb-[8px]">
                      UI-UX DESIGN
                    </p>
                    <h4 className="font-[Work Sans] font-semibold text-[18px] text-[#132238] mb-[10px] leading-[28px]">
                      Product Admin Dashboard
                    </h4>
                  </div>
                </div>
                <div className="w-[25%] h-[350px] bg-white rounded-[8px] shadow-[0px_2px_20px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] transition-all duration-300">
                  <div className="w-[100%] h-[50%] rounded-t-[8px] bg-gray-800"></div>

                  <div className="text-white p-[20px]">
                    <p className="text-[#87909D] font-[Work Sans] font-medium text-[14px] leading-[20px] mb-[8px]">
                      UI-UX DESIGN
                    </p>
                    <h4 className="font-[Work Sans] font-semibold text-[18px] text-[#132238] mb-[10px] leading-[28px]">
                      Product Admin Dashboard
                    </h4>
                  </div>
                </div>
                <div className="w-[25%] h-[350px] bg-white rounded-[8px] shadow-[0px_2px_20px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] transition-all duration-300">
                  <div className="w-[100%] h-[50%] rounded-t-[8px] bg-gray-800"></div>

                  <div className="text-white p-[20px]">
                    <p className="text-[#87909D] font-[Work Sans] font-medium text-[14px] leading-[20px] mb-[8px]">
                      UI-UX DESIGN
                    </p>
                    <h4 className="font-[Work Sans] font-semibold text-[18px] text-[#132238] mb-[10px] leading-[28px]">
                      Product Admin Dashboard
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-[20px] justify-center ">
                <div className="w-[25%] h-[350px] bg-white rounded-[8px] shadow-[0px_2px_20px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] transition-all duration-300">
                  <div className="w-[100%] h-[50%] rounded-t-[8px] bg-gray-800"></div>

                  <div className="text-white p-[20px]">
                    <p className="text-[#87909D] font-[Work Sans] font-medium text-[14px] leading-[20px] mb-[8px]">
                      UI-UX DESIGN
                    </p>
                    <h4 className="font-[Work Sans] font-semibold text-[18px] text-[#132238] mb-[10px] leading-[28px]">
                      Product Admin Dashboard
                    </h4>
                  </div>
                </div>
                <div className="w-[25%] h-[350px] bg-white rounded-[8px] shadow-[0px_2px_20px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] transition-all duration-300">
                  <div className="w-[100%] h-[50%] rounded-t-[8px] bg-gray-800"></div>

                  <div className="text-white p-[20px]">
                    <p className="text-[#87909D] font-[Work Sans] font-medium text-[14px] leading-[20px] mb-[8px]">
                      UI-UX DESIGN
                    </p>
                    <h4 className="font-[Work Sans] font-semibold text-[18px] text-[#132238] mb-[10px] leading-[28px]">
                      Product Admin Dashboard
                    </h4>
                  </div>
                </div>
                <div className="w-[25%] h-[350px] bg-white rounded-[8px] shadow-[0px_2px_20px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] transition-all duration-300">
                  <div className="w-[100%] h-[50%] rounded-t-[8px] bg-gray-800"></div>

                  <div className="text-white p-[20px]">
                    <p className="text-[#87909D] font-[Work Sans] font-medium text-[14px] leading-[20px] mb-[8px]">
                      UI-UX DESIGN
                    </p>
                    <h4 className="font-[Work Sans] font-semibold text-[18px] text-[#132238] mb-[10px] leading-[28px]">
                      Product Admin Dashboard
                    </h4>
                  </div>
                </div>
                <div className="w-[25%] h-[350px] bg-white rounded-[8px] shadow-[0px_2px_20px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] transition-all duration-300">
                  <div className="w-[100%] h-[50%] rounded-t-[8px] bg-gray-800"></div>

                  <div className="text-white p-[20px]">
                    <p className="text-[#87909D] font-[Work Sans] font-medium text-[14px] leading-[20px] mb-[8px]">
                      UI-UX DESIGN
                    </p>
                    <h4 className="font-[Work Sans] font-semibold text-[18px] text-[#132238] mb-[10px] leading-[28px]">
                      Product Admin Dashboard
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-[20px] justify-center ">
                <div className="w-[25%] h-[350px] bg-white rounded-[8px] shadow-[0px_2px_20px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] transition-all duration-300">
                  <div className="w-[100%] h-[50%] rounded-t-[8px] bg-gray-800"></div>

                  <div className="text-white p-[20px]">
                    <p className="text-[#87909D] font-[Work Sans] font-medium text-[14px] leading-[20px] mb-[8px]">
                      UI-UX DESIGN
                    </p>
                    <h4 className="font-[Work Sans] font-semibold text-[18px] text-[#132238] mb-[10px] leading-[28px]">
                      Product Admin Dashboard
                    </h4>
                  </div>
                </div>
                <div className="w-[25%] h-[350px] bg-white rounded-[8px] shadow-[0px_2px_20px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] transition-all duration-300">
                  <div className="w-[100%] h-[50%] rounded-t-[8px] bg-gray-800"></div>

                  <div className="text-white p-[20px]">
                    <p className="text-[#87909D] font-[Work Sans] font-medium text-[14px] leading-[20px] mb-[8px]">
                      UI-UX DESIGN
                    </p>
                    <h4 className="font-[Work Sans] font-semibold text-[18px] text-[#132238] mb-[10px] leading-[28px]">
                      Product Admin Dashboard
                    </h4>
                  </div>
                </div>
                <div className="w-[25%] h-[350px] bg-white rounded-[8px] shadow-[0px_2px_20px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] transition-all duration-300">
                  <div className="w-[100%] h-[50%] rounded-t-[8px] bg-gray-800"></div>

                  <div className="text-white p-[20px]">
                    <p className="text-[#87909D] font-[Work Sans] font-medium text-[14px] leading-[20px] mb-[8px]">
                      UI-UX DESIGN
                    </p>
                    <h4 className="font-[Work Sans] font-semibold text-[18px] text-[#132238] mb-[10px] leading-[28px]">
                      Product Admin Dashboard
                    </h4>
                  </div>
                </div>
                <div className="w-[25%] h-[350px] bg-white rounded-[8px] shadow-[0px_2px_20px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] transition-all duration-300">
                  <div className="w-[100%] h-[50%] rounded-t-[8px] bg-gray-800"></div>

                  <div className="text-white p-[20px]">
                    <p className="text-[#87909D] font-[Work Sans] font-medium text-[14px] leading-[20px] mb-[8px]">
                      UI-UX DESIGN
                    </p>
                    <h4 className="font-[Work Sans] font-semibold text-[18px] text-[#132238] mb-[10px] leading-[28px]">
                      Product Admin Dashboard
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-[20px] justify-center ">
                <div className="w-[25%] h-[350px] bg-white rounded-[8px] shadow-[0px_2px_20px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] transition-all duration-300">
                  <div className="w-[100%] h-[50%] rounded-t-[8px] bg-gray-800"></div>

                  <div className="text-white p-[20px]">
                    <p className="text-[#87909D] font-[Work Sans] font-medium text-[14px] leading-[20px] mb-[8px]">
                      UI-UX DESIGN
                    </p>
                    <h4 className="font-[Work Sans] font-semibold text-[18px] text-[#132238] mb-[10px] leading-[28px]">
                      Product Admin Dashboard
                    </h4>
                  </div>
                </div>
                <div className="w-[25%] h-[350px] bg-white rounded-[8px] shadow-[0px_2px_20px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] transition-all duration-300">
                  <div className="w-[100%] h-[50%] rounded-t-[8px] bg-gray-800"></div>

                  <div className="text-white p-[20px]">
                    <p className="text-[#87909D] font-[Work Sans] font-medium text-[14px] leading-[20px] mb-[8px]">
                      UI-UX DESIGN
                    </p>
                    <h4 className="font-[Work Sans] font-semibold text-[18px] text-[#132238] mb-[10px] leading-[28px]">
                      Product Admin Dashboard
                    </h4>
                  </div>
                </div>
                <div className="w-[25%] h-[350px] bg-white rounded-[8px] shadow-[0px_2px_20px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] transition-all duration-300">
                  <div className="w-[100%] h-[50%] rounded-t-[8px] bg-gray-800"></div>

                  <div className="text-white p-[20px]">
                    <p className="text-[#87909D] font-[Work Sans] font-medium text-[14px] leading-[20px] mb-[8px]">
                      UI-UX DESIGN
                    </p>
                    <h4 className="font-[Work Sans] font-semibold text-[18px] text-[#132238] mb-[10px] leading-[28px]">
                      Product Admin Dashboard
                    </h4>
                  </div>
                </div>
                <div className="w-[25%] h-[350px] bg-white rounded-[8px] shadow-[0px_2px_20px_rgba(0,0,0,0.1)] cursor-pointer hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] transition-all duration-300">
                  <div className="w-[100%] h-[50%] rounded-t-[8px] bg-gray-800"></div>

                  <div className="text-white p-[20px]">
                    <p className="text-[#87909D] font-[Work Sans] font-medium text-[14px] leading-[20px] mb-[8px]">
                      UI-UX DESIGN
                    </p>
                    <h4 className="font-[Work Sans] font-semibold text-[18px] text-[#132238] mb-[10px] leading-[28px]">
                      Product Admin Dashboard
                    </h4>
                  </div>
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
