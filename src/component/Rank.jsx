// import React, { useState } from "react";

// const Rank = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     number: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const phoneNumber = "8801749286221"; // তোমার WhatsApp নাম্বার
//     const message = `📢 Rank Inquiry\n\n👤 Name: ${formData.name}\n📧 Email: ${formData.email}\n📞 Number: ${formData.number}`;
//     const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

//     window.location.href = url;
//   };

//   return (
//     <>
//       <div className="flex flex-col lg:flex-row items-center justify-center gap-10 my-[100px] px-4">
//         {/* Left Side - Image */}
//         <div className="w-full lg:w-[40%] flex justify-center">
//           <div className="w-[300px] sm:w-[350px] md:w-[400px] h-[300px] sm:h-[350px] md:h-[400px] bg-gradient-to-br from-[#A53DFF] to-[#9333EA] rounded-[12px] flex justify-center items-center text-white text-[24px] font-semibold shadow-lg">
//             Your Image
//           </div>
//         </div>

//         {/* Right Side - Form */}
//         <div className="w-full lg:w-[50%] flex flex-col items-center text-center lg:text-left">
//           <h1 className="font-[Work Sans] font-semibold text-[26px] sm:text-[32px] lg:text-[36px] text-[#303030] leading-[40px] max-w-[600px] mb-6">
//             Rank Your WordPress Website On Google <br />
//             <span className="text-[#A53DFF]">Get Tips From Top SEO Experts</span>
//           </h1>

//           <form
//             onSubmit={handleSubmit}
//             className="mt-2 flex flex-col gap-5 w-full max-w-[350px] sm:max-w-[400px]"
//           >
//             {/* Name */}
//             <div className="flex flex-col text-left">
//               <label className="font-[Work Sans] font-semibold text-[16px] text-[#303030] mb-1">
//                 Name
//               </label>
//               <input
//                 className="font-[Work Sans] p-3 text-[#303030] border border-[#D1D5DB] rounded-[8px] focus:border-[#A53DFF] focus:ring-2 focus:ring-[#A53DFF] outline-none transition-all duration-200"
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Enter your name"
//                 required
//               />
//             </div>

//             {/* Email */}
//             <div className="flex flex-col text-left">
//               <label className="font-[Work Sans] font-semibold text-[16px] text-[#303030] mb-1">
//                 Email
//               </label>
//               <input
//                 className="font-[Work Sans] p-3 text-[#303030] border border-[#D1D5DB] rounded-[8px] focus:border-[#A53DFF] focus:ring-2 focus:ring-[#A53DFF] outline-none transition-all duration-200"
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>

//             {/* Number */}
//             <div className="flex flex-col text-left">
//               <label className="font-[Work Sans] font-semibold text-[16px] text-[#303030] mb-1">
//                 Number
//               </label>
//               <input
//                 className="font-[Work Sans] p-3 text-[#303030] border border-[#D1D5DB] rounded-[8px] focus:border-[#A53DFF] focus:ring-2 focus:ring-[#A53DFF] outline-none transition-all duration-200"
//                 type="text"
//                 name="number"
//                 value={formData.number}
//                 onChange={handleChange}
//                 placeholder="Enter your number"
//                 required
//               />
//             </div>

//             {/* Button */}
//             <button
//               type="submit"
//               className="mt-4 p-3 bg-[#A53DFF] rounded-[8px] text-white font-[Work Sans] font-semibold text-[16px] cursor-pointer hover:bg-[#9333EA] active:scale-95 transition-all duration-300"
//             >
//               🚀 Find Out How
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Rank;
import React, { useState } from "react";

const Rank = ({
  heading,
  highlightText,
  imageText,
  phoneNumber,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `📢 Rank Inquiry\n\n👤 Name: ${formData.name}\n📧 Email: ${formData.email}\n📞 Number: ${formData.number}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.location.href = url;
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 my-[100px] px-4">
        {/* Left Side - Image */}
        <div className="w-full lg:w-[40%] flex justify-center">
          <div className="w-[300px] sm:w-[350px] md:w-[400px] h-[300px] sm:h-[350px] md:h-[400px] bg-gradient-to-br from-[#A53DFF] to-[#9333EA] rounded-[12px] flex justify-center items-center text-white text-[24px] font-semibold shadow-lg">
            {imageText}
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-[50%] flex flex-col items-center text-center lg:text-left">
          <h1 className="font-[Work Sans] font-semibold text-[20px] md:text-[32px] lg:text-[36px] text-[#303030] md:leading-[40px] leading-[20px] max-w-[600px] mb-6">
            {heading} <br />
            <span className="text-[#A53DFF]">{highlightText}</span>
          </h1>

          <form
            onSubmit={handleSubmit}
            className="mt-2 flex flex-col gap-5 w-full max-w-[350px] sm:max-w-[400px]"
          >
            {/* Name */}
            <div className="flex flex-col text-left">
              <label className="font-[Work Sans] font-semibold text-[16px] text-[#303030] mb-1">
                Name
              </label>
              <input
                className="font-[Work Sans] p-3 text-[#303030] border border-[#D1D5DB] rounded-[8px] focus:border-[#A53DFF] focus:ring-2 focus:ring-[#A53DFF] outline-none transition-all duration-200"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col text-left">
              <label className="font-[Work Sans] font-semibold text-[16px] text-[#303030] mb-1">
                Email
              </label>
              <input
                className="font-[Work Sans] p-3 text-[#303030] border border-[#D1D5DB] rounded-[8px] focus:border-[#A53DFF] focus:ring-2 focus:ring-[#A53DFF] outline-none transition-all duration-200"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Number */}
            <div className="flex flex-col text-left">
              <label className="font-[Work Sans] font-semibold text-[16px] text-[#303030] mb-1">
                Number
              </label>
              <input
                className="font-[Work Sans] p-3 text-[#303030] border border-[#D1D5DB] rounded-[8px] focus:border-[#A53DFF] focus:ring-2 focus:ring-[#A53DFF] outline-none transition-all duration-200"
                type="text"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="Enter your number"
                required
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="mt-4 p-3 bg-[#A53DFF] rounded-[8px] text-white font-[Work Sans] font-semibold text-[16px] cursor-pointer hover:bg-[#9333EA] active:scale-95 transition-all duration-300"
            >
               Find Out How
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Rank;
