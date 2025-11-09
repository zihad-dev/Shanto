// import React from "react";
// import Slider from "react-slick";
// import Container from "../../component/Container";
// import { FaStar } from "react-icons/fa";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Client = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 4, // একসাথে কয়টা দেখাবে
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2500,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: { slidesToShow: 2 },
//       },
//       {
//         breakpoint: 640,
//         settings: { slidesToShow: 1 },
//       },
//     ],
//   };

//   const clients = [
//     {
//       name: "Md Jihadul Islam",
//       position: "CEO, Carbd",
//       review:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quam, quos excepturi sed placeat vero labore.",
//     },
//     {
//       name: "Md Jihadul Islam",
//       position: "CEO, Carbd",
//       review:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quam, quos excepturi sed placeat vero labore.",
//     },
//     {
//       name: "Md Jihadul Islam",
//       position: "CEO, Carbd",
//       review:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quam, quos excepturi sed placeat vero labore.",
//     },
//     {
//       name: "Md Jihadul Islam",
//       position: "CEO, Carbd",
//       review:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quam, quos excepturi sed placeat vero labore.",
//     },
//     {
//       name: "Md Jihadul Islam",
//       position: "CEO, Carbd",
//       review:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quam, quos excepturi sed placeat vero labore.",
//     },
//   ];

//   return (
//     <Container>
//       <div className="my-16">
//         <Slider {...settings}>
//           {clients.map((client, index) => (
//             <div key={index} className="px-3">
//               <div className="bg-gray-200 rounded-lg p-5 text-center relative my-10">
//                 {/* Profile circle */}
//                 <div className="w-[60px] h-[60px] bg-white rounded-full m-auto relative mt-[-45px] mb-2">
//                   <div className="w-[50px] h-[50px] bg-red-700 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
//                 </div>

//                 {/* Info */}
//                 <h3 className="font-semibold">{client.name}</h3>
//                 <p className="text-sm text-gray-500">{client.position}</p>

//                 {/* Stars */}
//                 <div className="flex text-yellow-400 gap-2 justify-center my-2">
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                 </div>

//                 {/* Review */}
//                 <p className="text-gray-600 text-sm">{client.review}</p>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </Container>
//   );
// };

// export default Client;

import React from "react";
import Slider from "react-slick";
import Container from "../../component/Container";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Client = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const clients = [
    {
      name: "Md Jihadul Islam",
      position: "CEO, Carbd",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quam, quos excepturi sed placeat vero labore.",
      img: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    },
    {
      name: "Sarah Khan",
      position: "Founder, WebVista",
      review:
        "Amet consectetur adipisicing elit. Quisquam sequi dolor officia magni expedita libero beatae veniam.",
      img: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
    },
    {
      name: "John Smith",
      position: "CTO, NexaTech",
      review:
        "Corrupti ut cupiditate modi blanditiis, error consequatur eos nobis adipisci explicabo vero veritatis.",
      img: "https://cdn-icons-png.flaticon.com/512/2202/2202112.png",
    },
    {
      name: "Ayesha Akter",
      position: "Manager, DevSoft",
      review:
        "Sint itaque doloremque corrupti ut cupiditate modi a blanditiis, error consequatur eos nobis adipisci explicabo vero veritatis.",
      img: "https://cdn-icons-png.flaticon.com/512/2922/2922561.png",
    },
  ];

  return (
    <Container>
      <div className="my-20">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          What Our <span className="text-red-600">Clients</span> Say
        </h2>

        {/* Slider */}
        <Slider {...settings}>
          {clients.map((client, index) => (
            <div key={index} className="px-3">
              <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300">
                {/* Profile */}
                <div className="flex justify-center mb-4">
                  <img
                    src={client.img}
                    alt={client.name}
                    className="w-[80px] h-[80px] rounded-full border-4 border-red-500 object-cover"
                  />
                </div>

                {/* Info */}
                <h3 className="font-semibold text-lg text-gray-800">
                  {client.name}
                </h3>
                <p className="text-sm text-gray-500">{client.position}</p>

                {/* Stars */}
                <div className="flex justify-center text-yellow-400 gap-1 my-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* Review */}
                <p className="text-gray-600 text-sm leading-relaxed italic">
                  “{client.review}”
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default Client;
