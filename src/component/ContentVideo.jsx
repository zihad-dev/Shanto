// import React, { useState } from "react";
// import Container from "./Container";

// const ContentVideo = () => {
//   const [showVideo, setShowVideo] = useState(false);

//   const handleClick = () => {
//     setShowVideo(true);
//   };

//   const handleClose = () => {
//     setShowVideo(false);
//   };

//   return (
//     <>
//       <div className="my-[100px] relative">
//         <Container>
//           {/* Section Wrapper */}
//           <div className="flex flex-col-reverse lg:flex-row gap-10 justify-center items-center">
            
//             {/* Text Content */}
//             <div className="w-full lg:w-1/2 text-center lg:text-left px-4">
//               <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#132238] mb-[20px]">
//                 WordPress SEO Optimization
//               </h2>
//               <p className="text-[#87909D] text-[16px] sm:text-[18px] leading-[28px]">
//                 SEO is one of the most powerful features of WordPress. However,
//                 just using WordPress as your CMS and using plugins won’t lead to
//                 higher search engine rankings. By having our WordPress SEO
//                 experts optimize your website, you’ll take advantage of the
//                 platform’s full power.
//               </p>
//             </div>

//             {/* Video Thumbnail */}
//             <div className="w-full lg:w-1/2 flex justify-center">
//               <div className="relative group w-[90%] sm:w-[400px] h-[250px] sm:h-[400px] bg-gradient-to-tr from-[#A53DFF] to-[#9333EA] rounded-[12px] flex justify-center items-center overflow-hidden shadow-lg">
//                 <div
//                   onClick={handleClick}
//                   className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] bg-white rounded-full cursor-pointer flex justify-center items-center text-[#A53DFF] text-2xl font-bold transition-all duration-300 group-hover:scale-110"
//                 >
//                   ▶
//                 </div>
//                 <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
//               </div>
//             </div>
//           </div>
//         </Container>

//         {/* Video Modal */}
//         {showVideo && (
//           <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 px-4">
//             <div className="relative w-full max-w-[900px]">
//               <button
//                 onClick={handleClose}
//                 className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-[#A53DFF] transition-colors"
//               >
//                 ✕
//               </button>
//               <iframe
//                 width="100%"
//                 height="500"
//                 src="https://www.youtube.com/embed/dQw4w9WgXcQ"
//                 title="YouTube video player"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 className="rounded-[10px]"
//               ></iframe>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default ContentVideo;
import React, { useState } from "react";
import Container from "./Container";

const ContentVideo = ({
  title,
  description,
  videoUrl,
  gradientFrom = "#A53DFF",
  gradientTo = "#9333EA",
}) => {
  const [showVideo, setShowVideo] = useState(false);

  const handleClick = () => setShowVideo(true);
  const handleClose = () => setShowVideo(false);

  return (
    <>
      <div className="my-[100px] relative">
        <Container>
          {/* Section Wrapper */}
          <div className="flex flex-col-reverse lg:flex-row gap-10 justify-center items-center">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left px-4">
              <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#132238] mb-[20px]">
                {title}
              </h2>
              <p className="text-[#87909D] text-[16px] sm:text-[18px] leading-[28px]">
                {description}
              </p>
            </div>

            {/* Video Thumbnail */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div
                className={`relative group w-[90%] sm:w-[400px] h-[250px] sm:h-[400px] rounded-[12px] flex justify-center items-center overflow-hidden shadow-lg`}
                style={{
                  background: `linear-gradient(to top right, ${gradientFrom}, ${gradientTo})`,
                }}
              >
                <div
                  onClick={handleClick}
                  className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] bg-white rounded-full cursor-pointer flex justify-center items-center text-[#A53DFF] text-2xl font-bold transition-all duration-300 group-hover:scale-110"
                >
                  ▶
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </Container>

        {/* Video Modal */}
        {showVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 px-4">
            <div className="relative w-full max-w-[900px]">
              <button
                onClick={handleClose}
                className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-[#A53DFF] transition-colors"
              >
                ✕
              </button>
              <iframe
                width="100%"
                height="500"
                src={videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-[10px]"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ContentVideo;
