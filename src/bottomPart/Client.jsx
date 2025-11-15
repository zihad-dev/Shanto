import React from "react";
import Container from "../component/Container";
import Slider from "react-slick";

const Client = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear"
  };

  return (
    <>
      <div className="py-[100px] bg-white">
        <Container>
          {/* Heading */}
          <div className="text-center mb-10 px-4">
            <h3 className="text-lg font-medium text-[#555] mb-2">
              Hello I am Md Hasibur Rahman Shanto
            </h3>
            <h2 className="font-[Work Sans] font-semibold text-[32px] md:text-[48px] text-[#132238] leading-[40px] md:leading-[56px] mb-[16px]">
              Happy Clients
            </h2>
            <p className="font-[Work Sans] font-normal text-[16px] md:text-[18px] text-[#87909D] leading-[26px] max-w-[600px] mx-auto">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
          </div>

          {/* Client Logos */}
          <div>
            <style>
              {`
      .slick-slide > div {
        padding: 5px; /* total gap 5px */
      }
    `}
            </style>

            <Slider {...settings}>
              <div>
                <div className="w-[160px] h-[100px] border flex items-center justify-center bg-[#F6EBFE] rounded-xl shadow cursor-pointer text-center">
                  <h3>1</h3>
                </div>
              </div>
              <div>
                <div className="w-[160px] h-[100px] border flex items-center justify-center bg-[#F6EBFE] rounded-xl shadow cursor-pointer text-center">
                  <h3>1</h3>
                </div>
              </div>
              <div>
                <div className="w-[160px] h-[100px] border flex items-center justify-center bg-[#F6EBFE] rounded-xl shadow cursor-pointer text-center">
                  <h3>1</h3>
                </div>
              </div>
              <div>
                <div className="w-[160px] h-[100px] border flex items-center justify-center bg-[#F6EBFE] rounded-xl shadow cursor-pointer text-center">
                  <h3>1</h3>
                </div>
              </div>
              <div>
                <div className="w-[160px] h-[100px] border flex items-center justify-center bg-[#F6EBFE] rounded-xl shadow cursor-pointer text-center">
                  <h3>1</h3>
                </div>
              </div>
              <div>
                <div className="w-[160px] h-[100px] border flex items-center justify-center bg-[#F6EBFE] rounded-xl shadow cursor-pointer text-center">
                  <h3>1</h3>
                </div>
              </div>
              <div>
                <div className="w-[160px] h-[100px] border flex items-center justify-center bg-[#F6EBFE] rounded-xl shadow cursor-pointer text-center">
                  <h3>1</h3>
                </div>
              </div>
              <div>
                <div className="w-[160px] h-[100px] border flex items-center justify-center bg-[#F6EBFE] rounded-xl shadow cursor-pointer text-center">
                  <h3>1</h3>
                </div>
              </div>

          
            </Slider>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Client;

// import React from "react";
// import Container from "../component/Container";

// // IMPORT THIS — Slider work korbe
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Client = () => {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,   // number of logos per slide
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 1500,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: { slidesToShow: 4 }
//       },
//       {
//         breakpoint: 768,
//         settings: { slidesToShow: 3 }
//       },
//       {
//         breakpoint: 480,
//         settings: { slidesToShow: 2 }
//       }
//     ]
//   };

//   return (
//     <>
//       <div className="py-[100px] bg-white">
//         <Container>
//           {/* Heading */}
//           <div className="text-center mb-10 px-4">
//             <h3 className="text-lg font-medium text-[#555] mb-2">
//               Hello I am Md Hasibur Rahman Shanto
//             </h3>
//             <h2 className="font-[Work Sans] font-semibold text-[32px] md:text-[48px] text-[#132238] leading-[40px] md:leading-[56px] mb-[16px]">
//               Happy Clients
//             </h2>
//             <p className="font-[Work Sans] font-normal text-[16px] md:text-[18px] text-[#87909D] leading-[26px] max-w-[600px] mx-auto">
//               There are many variations of passages of Lorem Ipsum available,
//               but the majority have suffered alteration.
//             </p>
//           </div>

//           {/* Slider */}
//           <Slider {...settings}>
//             {[1, 2, 3, 4, 5, 6].map((num) => (
//               <div key={num} className="p-4">
//                 <div className="w-full h-[120px] bg-[#F6EBFE] flex items-center justify-center rounded-xl shadow">
//                   <h3 className="text-xl font-bold text-[#5e2a84]">{num}</h3>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </Container>
//       </div>
//     </>
//   );
// };

// export default Client;
