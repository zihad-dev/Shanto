// import React from "react";      

// const Rank = () => {
//   return (
//     <>
//       <div className="flex gap-1 items-start justify-center">
//         <div className="w-[38%]">
//           <div className="w-[400px] h-[400px] bg-red-900 rounded-[5px]"></div>
//         </div>
//         <div className="w-[60%] flex flex-col items-center">
//           <div className="flex flex-col gap-2">
//             <h1 className="font-[Work Sans] font-semibold text-[34px] text-[#303030] leading-[40px] max-w-[600px]">
//               Rank Your WordPress Website On Google, Get Tips From Top Rated
//               WordPress SEO Expert
//             </h1>
//             <div>
//               <form
//                 onSubmit={handleSubmit}
//                 className="mt-5 flex flex-col gap-4"
//               >
//                 <div className="flex flex-col gap-1 w-[250px] ">
//                   <span className="font-[Work Sans] font-semibold text-[16px] text-[#303030]">
//                     Name
//                   </span>
//                   <input
//                     className="font-[Work Sans] p-3 font-normal text-[#303030] border rounded-[8px]"
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="Enter Your Name"
//                     required
//                   />
//                 </div>
//                 <div className="flex flex-col gap-1 w-[250px] ">
//                   <span className="font-[Work Sans] font-semibold text-[16px] text-[#303030]">
//                     Email
//                   </span>
//                   <input
//                     className="font-[Work Sans] p-3 font-normal text-[#303030] border rounded-[8px]"
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="Enter Your Email"
//                     required
//                   />
//                 </div>
//                 <div className="flex flex-col gap-1 w-[250px] ">
//                   <span className="font-[Work Sans] font-semibold text-[16px] text-[#303030]">
//                     Number
//                   </span>
//                   <input
//                     className="font-[Work Sans] p-3 font-normal text-[#303030] border rounded-[8px]"
//                     type="text"
//                     name="number"
//                     value={formData.number}
//                     onChange={handleChange}
//                     placeholder="Enter Your Number"
//                     required
//                   />
//                 </div>
//                 <div className="flex flex-start">
//                   <button
//                     type="submit"
//                     className="p-3 bg-gray-600 rounded-[8px] text-white font-[Work Sans] font-semibold text-[16px] cursor-pointer hover:bg-gray-800 transition-all duration-300"
//                   >
//                     Find Out How
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Rank;
import React, { useState } from "react";

const Rank = () => {
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

    const phoneNumber = "8801749286221"; // তোমার WhatsApp নাম্বার
    const message = `Name: ${formData.name}\nEmail: ${formData.email}\nNumber: ${formData.number}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.location.href = url; // ✅ auto redirect to WhatsApp
  };

  return (
    <>
      <div className="flex gap-1 items-start justify-center">
        <div className="w-[38%]">
          <div className="w-[400px] h-[400px] bg-red-900 rounded-[5px]"></div>
        </div>
        <div className="w-[60%] flex flex-col items-center">
          <div className="flex flex-col gap-2">
            <h1 className="font-[Work Sans] font-semibold text-[34px] text-[#303030] leading-[40px] max-w-[600px]">
              Rank Your WordPress Website On Google, Get Tips From Top Rated
              WordPress SEO Expert
            </h1>
            <div>
              <form
                onSubmit={handleSubmit}
                className="mt-5 flex flex-col gap-4"
              >
                {/* Name */}
                <div className="flex flex-col gap-1 w-[250px] ">
                  <span className="font-[Work Sans] font-semibold text-[16px] text-[#303030]">
                    Name
                  </span>
                  <input
                    className="font-[Work Sans] p-3 font-normal text-[#303030] border rounded-[8px]"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Your Name"
                    required
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1 w-[250px] ">
                  <span className="font-[Work Sans] font-semibold text-[16px] text-[#303030]">
                    Email
                  </span>
                  <input
                    className="font-[Work Sans] p-3 font-normal text-[#303030] border rounded-[8px]"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email"
                    required
                  />
                </div>

                {/* Number */}
                <div className="flex flex-col gap-1 w-[250px] ">
                  <span className="font-[Work Sans] font-semibold text-[16px] text-[#303030]">
                    Number
                  </span>
                  <input
                    className="font-[Work Sans] p-3 font-normal text-[#303030] border rounded-[8px]"
                    type="text"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    placeholder="Enter Your Number"
                    required
                  />
                </div>

                {/* Button */}
                <div className="flex flex-start">
                  <button
                    type="submit"
                    className="p-3 bg-gray-600 rounded-[8px] text-white font-[Work Sans] font-semibold text-[16px] cursor-pointer hover:bg-gray-800 transition-all duration-300"
                  >
                    Find Out How
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rank;
