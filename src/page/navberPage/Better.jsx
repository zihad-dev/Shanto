// import React from 'react'
// import Container from '../../component/Container'

// const Better = () => {
//   return (
//    <>
//    <div>
//     <Container>
//         <div className='flex items-center gap-[40px] my-20'>
//             <div className='w-[60%]'>
//              <div>
//              <h1 className='text-4xl font-bold my-5'>Better way to <span className='text-red-500 cursor-pointer'>Grow</span> your website</h1>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint itaque doloremque corrupti ut cupiditate modi a blanditiis, error consequatur eos nobis adipisci explicabo vero veritatis?</p>
//              </div>
//              <div>
//             <h1 className='text-4xl font-bold my-5'>Better way to <span className='text-red-500 cursor-pointer'>Grow</span> your website</h1>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint itaque doloremque corrupti ut cupiditate modi a blanditiis, error consequatur eos nobis adipisci explicabo vero veritatis?</p>
//              </div>
//             </div>
//                  <div className='w-[40%] h-[400px] bg-red-500 rounded-[10px]'>img</div>
//         </div>
//     </Container>
//    </div>
//    </>
//   )
// }

// export default Better
import React from "react";
import Container from "../../component/Container";

const Better = ({
  sections = [],
  image,
  reverse = false,
  bgColor = "#ef4444", // Tailwind red-500
}) => {
  return (
    <>
      <div className="my-20">
        <Container>
          <div
            className={`flex flex-col ${
              reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center gap-[40px]`}
          >
            {/* Text Section */}
            <div className="w-full lg:w-[60%] space-y-10">
              {sections.map((section, index) => (
                <div key={index}>
                  <h1 className="text-3xl sm:text-4xl font-bold my-5 leading-snug">
                    {section.title}{" "}
                    <span className="text-red-500 cursor-pointer">
                      {section.highlight}
                    </span>{" "}
                    {section.titleEnd}
                  </h1>
                  <p className="text-[#555] text-[16px] sm:text-[18px] leading-relaxed">
                    {section.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Image Section */}
            <div
              className="w-full lg:w-[40%] h-[300px] sm:h-[400px] rounded-[10px] flex justify-center items-center overflow-hidden shadow-lg"
              style={{ backgroundColor: bgColor }}
            >
              {image ? (
                <img
                  src={image}
                  alt="Better Section"
                  className="w-full h-full object-cover rounded-[10px]"
                />
              ) : (
                <span className="text-white text-xl font-semibold">Image</span>
              )}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Better;
