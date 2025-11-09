// import React, { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import Container from "../component/Container";
// import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";

// const Navber = () => {
//   const [firstDrop, setFirstDrop] = useState(false);
//   const [chDrop1, setChDrop1] = useState(false);
//   const [chDrop2, setChDrop2] = useState(false);
//   const [chDrop3, setChDrop3] = useState(false);
//   const [chDrop4, setChDrop4] = useState(false);
//   const [mobileMenu, setMobileMenu] = useState(false);

//   const dropdownRef = useRef(null);
//   const chDropRef1 = useRef(null);
//   const chDropRef2 = useRef(null);
//   const chDropRef3 = useRef(null);
//   const chDropRef4 = useRef(null);
//   const handleDropToggle = (dropSetter, isOpen) => {
//     setChDrop1(false);
//     setChDrop2(false);
//     setChDrop3(false);
//     setChDrop4(false);
//     dropSetter(!isOpen);
//   };
//     const handleDropdown = () => {
//     setChDrop1(!chDrop1);
//   };

//   const handleLinkClick = () => {
//     setChDrop1(false); // 👉 link এ ক্লিক করলে dropdown বন্ধ হবে
//   };

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setFirstDrop(false);
//       }
//       if (chDropRef1.current && !chDropRef1.current.contains(event.target)) {
//         setChDrop1(false);
//       }
//       if (chDropRef2.current && !chDropRef2.current.contains(event.target)) {
//         setChDrop2(false);
//       }
//       if (chDropRef3.current && !chDropRef3.current.contains(event.target)) {
//         setChDrop3(false);
//       }
//       if (chDropRef4.current && !chDropRef4.current.contains(event.target)) {
//         setChDrop4(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
//       <Container>
//         <div className="flex justify-between items-center py-4">
//           {/* Logo */}
//           <div className="w-[20%] flex items-center">
//             <Link to="/">
//               <img src="images/Logo.png" alt="Logo" className="h-10" />
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex items-center gap-6 relative">
//             {/* Services Dropdown */}
//             <li className="relative" ref={dropdownRef}>
//               <button
//                 onClick={() => setFirstDrop(!firstDrop)}
//                 className="flex items-center gap-2 font-medium text-[#303030]"
//               >
//                 SEO Services
//                 <FaAngleDown
//                   className={`transition-transform ${
//                     firstDrop ? "rotate-180" : "rotate-0"
//                   }`}
//                 />
//               </button>

//               {firstDrop && (
//                 <div className="absolute top-10 left-0 w-64 bg-[#F3F7FB] shadow-xl p-4 rounded-md z-50">
//                   {/* Dropdown Items */}
//                   <ul className="flex flex-col gap-2">
//                     {/* CMS SEO */}
//                     <li className="relative" ref={chDropRef1}>
//                       <button
//                         onClick={() => setChDrop1(!chDrop1)}
//                         className="w-full text-left px-2 py-1 hover:bg-white rounded"
//                       >
//                         CMS SEO
//                       </button>
//                       {chDrop1 && (
//                         <div className="absolute top-0 left-56 w-48 bg-[#F3F7FB] shadow-md p-2 rounded">
//                           <ul className="flex flex-col gap-1">
//                             <li>
//                               <Link to="/WordPress">WordPress SEO</Link>
//                             </li>
//                             <li>
//                               <Link to="/WIxSeo">Wix SEO</Link>
//                             </li>
//                             <li>Squarespace SEO</li>
//                             <li>Joomla SEO</li>
//                           </ul>
//                         </div>
//                       )}
//                     </li>

//                     {/* E-commerce SEO */}
//                     <li className="relative" ref={chDropRef2}>
//                       <button
//                         onClick={() => setChDrop2(!chDrop2)}
//                         className="w-full text-left px-2 py-1 hover:bg-white rounded"
//                       >
//                         E-commerce SEO
//                       </button>
//                       {chDrop2 && (
//                         <div className="absolute top-0 left-56 w-48 bg-[#F3F7FB] shadow-md p-2 rounded">
//                           <ul className="flex flex-col gap-1">
//                             <li>Shopify SEO</li>
//                             <li>Etsy SEO</li>
//                             <li>Walmart SEO</li>
//                           </ul>
//                         </div>
//                       )}
//                     </li>

//                     {/* Other SEO */}
//                     <li className="relative" ref={chDropRef3}>
//                       <button
//                         onClick={() => setChDrop3(!chDrop3)}
//                         className="w-full text-left px-2 py-1 hover:bg-white rounded"
//                       >
//                         Other SEO Service
//                       </button>
//                       {chDrop3 && (
//                         <div className="absolute top-0 left-56 w-48 bg-[#F3F7FB] shadow-md p-2 rounded">
//                           <ul className="flex flex-col gap-1">
//                             <li>Local SEO</li>
//                             <li>Link Building</li>
//                             <li>On Page SEO</li>
//                           </ul>
//                         </div>
//                       )}
//                     </li>

//                     {/* Generative SEO */}
//                     <li className="relative" ref={chDropRef4}>
//                       <button
//                         onClick={() => setChDrop4(!chDrop4)}
//                         className="w-full text-left px-2 py-1 hover:bg-white rounded"
//                       >
//                         Generative SEO
//                       </button>
//                       {chDrop4 && (
//                         <div className="absolute top-0 left-56 w-48 bg-[#F3F7FB] shadow-md p-2 rounded">
//                           <ul className="flex flex-col gap-1">
//                             <li>AEO</li>
//                             <li>GEO</li>
//                             <li>SXO</li>
//                           </ul>
//                         </div>
//                       )}
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </li>

//             {/* Other Pages */}
//             <li>
//               <Link to="/About" className="hover:text-purple-600">
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link to="/Portfolio" className="hover:text-purple-600">
//                 Portfolio
//               </Link>
//             </li>
//             <li>
//               <Link to="/Blog" className="hover:text-purple-600">
//                 Blog
//               </Link>
//             </li>
//             <li>
//               <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
//                 Contact
//               </button>
//             </li>
//           </ul>

//           {/* Mobile Menu Toggle */}
//           <div className="md:hidden">
//             <button onClick={() => setMobileMenu(!mobileMenu)}>
//               {mobileMenu ? <FaTimes size={24} /> : <FaBars size={24} />}
//             </button>
//           </div>
//         </div>
//       </Container>

//       {/* Mobile Menu */}
//       {mobileMenu && (
//         <div className="md:hidden bg-white shadow-lg w-full">
//           <ul className="flex flex-col gap-2 p-4">
//             <li>
//               <button
//                 onClick={() => setFirstDrop(!firstDrop)}
//                 className="w-full flex justify-between items-center px-2 py-2 font-medium text-[#303030]"
//               >
//                 SEO Services{" "}
//                 <FaAngleDown
//                   className={`${firstDrop ? "rotate-180" : ""} transition`}
//                 />
//               </button>

//               {firstDrop && (
//                 <ul className="flex flex-col pl-4 mt-2 gap-1">
//                   <li>
//                     <button
//                       onClick={() => handleDropToggle(setChDrop1, chDrop1)}
//                       className="w-full text-left px-2 py-1 hover:bg-gray-100 rounded"
//                     >
//                       CMS SEO
//                     </button>
//                     {chDrop1 && (
//                       <ul className="flex flex-col pl-4 mt-1 gap-1">
//                         <li>
//                           <Link to="/WordPress">WordPress SEO</Link>
//                         </li>
//                         <li>
//                           <Link to="/WIxSeo">Wix SEO</Link>
//                         </li>
//                         <li>Squarespace SEO</li>
//                         <li>Joomla SEO</li>
//                       </ul>
//                     )}
//                   </li>
//                   <li>
//                     <button
//                       onClick={() => handleDropToggle(setChDrop2, chDrop2)}
//                       className="w-full text-left px-2 py-1 hover:bg-gray-100 rounded"
//                     >
//                       E-commerce SEO
//                     </button>
//                     {chDrop2 && (
//                       <ul className="flex flex-col pl-4 mt-1 gap-1">
//                         <li>Shopify SEO</li>
//                         <li>Etsy SEO</li>
//                         <li>Walmart SEO</li>
//                       </ul>
//                     )}
//                   </li>
//                   <li>
//                     <button
//                       onClick={() => handleDropToggle(setChDrop3, chDrop3)}
//                       className="w-full text-left px-2 py-1 hover:bg-gray-100 rounded"
//                     >
//                       Other SEO Service
//                     </button>
//                     {chDrop3 && (
//                       <ul className="flex flex-col pl-4 mt-1 gap-1">
//                         <li>Local SEO</li>
//                         <li>Link Building</li>
//                         <li>On Page SEO</li>
//                       </ul>
//                     )}
//                   </li>
//                   <li>
//                     <button
//                       onClick={() => handleDropToggle(setChDrop4, chDrop4)}
//                       className="w-full text-left px-2 py-1 hover:bg-gray-100 rounded"
//                     >
//                       Generative SEO
//                     </button>
//                     {chDrop4 && (
//                       <ul className="flex flex-col pl-4 mt-1 gap-1">
//                         <li>AEO</li>
//                         <li>GEO</li>
//                         <li>SXO</li>
//                       </ul>
//                     )}
//                   </li>
//                 </ul>
//               )}
//             </li>

//             <li>
//               <Link to="/" className="px-2 py-2 block">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/About" className="px-2 py-2 block">
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link to="/Portfolio" className="px-2 py-2 block">
//                 Portfolio
//               </Link>
//             </li>
//             <li>
//               <Link to="/Blog" className="px-2 py-2 block">
//                 Blog
//               </Link>
//             </li>
//             <li>
//               <button className="bg-purple-600 text-white px-4 py-2 rounded w-full mt-2">
//                 Contact
//               </button>
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navber;

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../component/Container";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";

const Navber = () => {
  const [firstDrop, setFirstDrop] = useState(false);
  const [chDrop1, setChDrop1] = useState(false);
  const [chDrop2, setChDrop2] = useState(false);
  const [chDrop3, setChDrop3] = useState(false);
  const [chDrop4, setChDrop4] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const dropdownRef = useRef(null);
  const chDropRef1 = useRef(null);
  const chDropRef2 = useRef(null);
  const chDropRef3 = useRef(null);
  const chDropRef4 = useRef(null);

  const handleDropToggle = (dropSetter, isOpen) => {
    setChDrop1(false);
    setChDrop2(false);
    setChDrop3(false);
    setChDrop4(false);
    dropSetter(!isOpen);
  };

  const handleLinkClick = () => {
    setChDrop1(false);
    setChDrop2(false);
    setChDrop3(false);
    setChDrop4(false);
    setFirstDrop(false);
    setMobileMenu(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setFirstDrop(false);
      if (chDropRef1.current && !chDropRef1.current.contains(event.target)) setChDrop1(false);
      if (chDropRef2.current && !chDropRef2.current.contains(event.target)) setChDrop2(false);
      if (chDropRef3.current && !chDropRef3.current.contains(event.target)) setChDrop3(false);
      if (chDropRef4.current && !chDropRef4.current.contains(event.target)) setChDrop4(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
      <Container>
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="w-[20%] flex items-center">
            <Link to="/">
              <img src="images/Logo.png" alt="Logo" className="h-10" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6 relative">
            <li className="relative" ref={dropdownRef}>
              <button
                onClick={() => setFirstDrop(!firstDrop)}
                className="flex items-center gap-2 font-medium text-[#303030]"
              >
                SEO Services
                <FaAngleDown className={`transition-transform ${firstDrop ? "rotate-180" : "rotate-0"}`} />
              </button>

              {firstDrop && (
                <div className="absolute top-10 left-0 w-64 bg-[#F3F7FB] shadow-xl p-4 rounded-md z-50">
                  <ul className="flex flex-col gap-2">
                    {/* CMS SEO */}
                    <li className="relative" ref={chDropRef1}>
                      <button
                        onClick={() => handleDropToggle(setChDrop1, chDrop1)}
                        className="w-full text-left px-2 py-1 hover:bg-white rounded"
                      >
                        CMS SEO
                      </button>
                      {chDrop1 && (
                        <div className="absolute top-0 left-56 w-48 bg-[#F3F7FB] shadow-md p-2 rounded z-50">
                          <ul className="flex flex-col gap-1">
                            <li>
                              <Link to="/wordpress" onClick={handleLinkClick}>WordPress SEO</Link>
                            </li>
                            <li>
                              <Link to="/wixseo" onClick={handleLinkClick}>Wix SEO</Link>
                            </li>
                            <li>
                              <Link to="/squarespace" onClick={handleLinkClick}>Squarespace SEO</Link>
                            </li>
                            <li>
                              <Link to="/joomla" onClick={handleLinkClick}>Joomla SEO</Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>

                    {/* E-commerce SEO */}
                    <li className="relative" ref={chDropRef2}>
                      <button
                        onClick={() => handleDropToggle(setChDrop2, chDrop2)}
                        className="w-full text-left px-2 py-1 hover:bg-white rounded"
                      >
                        E-commerce SEO
                      </button>
                      {chDrop2 && (
                        <div className="absolute top-0 left-56 w-48 bg-[#F3F7FB] shadow-md p-2 rounded z-50">
                          <ul className="flex flex-col gap-1">
                            <li>Shopify SEO</li>
                            <li>Etsy SEO</li>
                            <li>Walmart SEO</li>
                          </ul>
                        </div>
                      )}
                    </li>

                    {/* Other SEO */}
                    <li className="relative" ref={chDropRef3}>
                      <button
                        onClick={() => handleDropToggle(setChDrop3, chDrop3)}
                        className="w-full text-left px-2 py-1 hover:bg-white rounded"
                      >
                        Other SEO Service
                      </button>
                      {chDrop3 && (
                        <div className="absolute top-0 left-56 w-48 bg-[#F3F7FB] shadow-md p-2 rounded z-50">
                          <ul className="flex flex-col gap-1">
                            <li>Local SEO</li>
                            <li>Link Building</li>
                            <li>On Page SEO</li>
                          </ul>
                        </div>
                      )}
                    </li>

                    {/* Generative SEO */}
                    <li className="relative" ref={chDropRef4}>
                      <button
                        onClick={() => handleDropToggle(setChDrop4, chDrop4)}
                        className="w-full text-left px-2 py-1 hover:bg-white rounded"
                      >
                        Generative SEO
                      </button>
                      {chDrop4 && (
                        <div className="absolute top-0 left-56 w-48 bg-[#F3F7FB] shadow-md p-2 rounded z-50">
                          <ul className="flex flex-col gap-1">
                            <li>AEO</li>
                            <li>GEO</li>
                            <li>SXO</li>
                          </ul>
                        </div>
                      )}
                    </li>
                  </ul>
                </div>
              )}
            </li>

            {/* Other Pages */}
            <li>
              <Link to="/about" className="hover:text-purple-600">About</Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-purple-600">Portfolio</Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-purple-600">Blog</Link>
            </li>
            <li>
              <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Contact</button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenu(!mobileMenu)}>
              {mobileMenu ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-white shadow-lg w-full max-h-[90vh] overflow-y-auto">
          <ul className="flex flex-col gap-2 p-4">
            <li>
              <button
                onClick={() => setFirstDrop(!firstDrop)}
                className="w-full flex justify-between items-center px-2 py-2 font-medium text-[#303030]"
              >
                SEO Services
                <FaAngleDown className={`${firstDrop ? "rotate-180" : ""} transition`} />
              </button>

              {firstDrop && (
                <ul className="flex flex-col pl-4 mt-2 gap-1">
                  <li>
                    <button
                      onClick={() => handleDropToggle(setChDrop1, chDrop1)}
                      className="w-full text-left px-2 py-1 hover:bg-gray-100 rounded"
                    >
                      CMS SEO
                    </button>
                    {chDrop1 && (
                      <ul className="flex flex-col pl-4 mt-1 gap-1">
                        <li>
                          <Link to="/wordpress" onClick={handleLinkClick}>WordPress SEO</Link>
                        </li>
                        <li>
                          <Link to="/wixseo" onClick={handleLinkClick}>Wix SEO</Link>
                        </li>
                        <li>
                          <Link to="/squarespace" onClick={handleLinkClick}>Squarespace SEO</Link>
                        </li>
                        <li>
                          <Link to="/joomla" onClick={handleLinkClick}>Joomla SEO</Link>
                        </li>
                      </ul>
                    )}
                  </li>

                  {/* Other CMS / E-commerce / Generative */}
                  {/* Repeat similar structure as desktop */}
                  <li>
                    <button onClick={() => handleDropToggle(setChDrop2, chDrop2)} className="w-full text-left px-2 py-1 hover:bg-gray-100 rounded">
                      E-commerce SEO
                    </button>
                    {chDrop2 && (
                      <ul className="flex flex-col pl-4 mt-1 gap-1">
                        <li>Shopify SEO</li>
                        <li>Etsy SEO</li>
                        <li>Walmart SEO</li>
                      </ul>
                    )}
                  </li>

                  <li>
                    <button onClick={() => handleDropToggle(setChDrop3, chDrop3)} className="w-full text-left px-2 py-1 hover:bg-gray-100 rounded">
                      Other SEO Service
                    </button>
                    {chDrop3 && (
                      <ul className="flex flex-col pl-4 mt-1 gap-1">
                        <li>Local SEO</li>
                        <li>Link Building</li>
                        <li>On Page SEO</li>
                      </ul>
                    )}
                  </li>

                  <li>
                    <button onClick={() => handleDropToggle(setChDrop4, chDrop4)} className="w-full text-left px-2 py-1 hover:bg-gray-100 rounded">
                      Generative SEO
                    </button>
                    {chDrop4 && (
                      <ul className="flex flex-col pl-4 mt-1 gap-1">
                        <li>AEO</li>
                        <li>GEO</li>
                        <li>SXO</li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/about" className="px-2 py-2 block" onClick={handleLinkClick}>About</Link>
            </li>
            <li>
              <Link to="/portfolio" className="px-2 py-2 block" onClick={handleLinkClick}>Portfolio</Link>
            </li>
            <li>
              <Link to="/blog" className="px-2 py-2 block" onClick={handleLinkClick}>Blog</Link>
            </li>
            <li>
              <button className="bg-purple-600 text-white px-4 py-2 rounded w-full mt-2" onClick={handleLinkClick}>Contact</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navber;
