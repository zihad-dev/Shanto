

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

//   const handleLinkClick = () => {
//     setChDrop1(false);
//     setChDrop2(false);
//     setChDrop3(false);
//     setChDrop4(false);
//     setFirstDrop(false);
//     setMobileMenu(false);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setFirstDrop(false);
//       if (chDropRef1.current && !chDropRef1.current.contains(event.target)) setChDrop1(false);
//       if (chDropRef2.current && !chDropRef2.current.contains(event.target)) setChDrop2(false);
//       if (chDropRef3.current && !chDropRef3.current.contains(event.target)) setChDrop3(false);
//       if (chDropRef4.current && !chDropRef4.current.contains(event.target)) setChDrop4(false);
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <div className="fixed top-0 left-0 w-[100%] bg-white z-50 shadow-sm ">
//       <Container>
//         <div className="flex justify-between md:items-center py-4 ">
//           {/* Logo */}
//           <div className="md:w-[20%] md:h-[25px] w-[40%] h-[30px] ml-2">
//             <Link to="/">
//               <img
//                 src="/images/Logo.svg"
//                 alt="Logo"
//                 className="md:h-18 object-contain h-17 "
//               />
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex items-center gap-6 relative">
//             <li className="relative" ref={dropdownRef}>
//               <button
//                 onClick={() => setFirstDrop(!firstDrop)}
//                 className="flex items-center gap-2 font-medium text-[#303030]"
//               >
//                 SEO Services
//                 <FaAngleDown className={`transition-transform ${firstDrop ? "rotate-180" : "rotate-0"}`} />
//           
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../component/Container";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";

const Navber = () => {
  /* ================= DESKTOP STATES ================= */
  const [firstDrop, setFirstDrop] = useState(false);
  const [ch1, setCh1] = useState(false);
  const [ch2, setCh2] = useState(false);
  const [ch3, setCh3] = useState(false);
  const [ch4, setCh4] = useState(false);

  /* ================= MOBILE STATES ================= */
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mFirst, setMFirst] = useState(false);
  const [m1, setM1] = useState(false);
  const [m2, setM2] = useState(false);
  const [m3, setM3] = useState(false);
  const [m4, setM4] = useState(false);

  /* ================= REFS (DESKTOP) ================= */
  const dropdownRef = useRef(null);

  /* ================= HELPERS ================= */
  const resetDesktop = () => {
    setCh1(false);
    setCh2(false);
    setCh3(false);
    setCh4(false);
  };

  const resetMobile = () => {
    setM1(false);
    setM2(false);
    setM3(false);
    setM4(false);
  };

  const handleLinkClick = () => {
    setFirstDrop(false);
    setMobileMenu(false);
    resetDesktop();
    resetMobile();
    setMFirst(false);
  };

  /* ================= CLICK OUTSIDE (DESKTOP ONLY) ================= */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setFirstDrop(false);
        resetDesktop();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
      <Container>
        <div className="flex justify-between items-center py-4">
          {/* LOGO */}
          <Link to="/" className="w-[140px]">
            <img src="/images/Logo.svg" alt="Logo" />
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <ul className="hidden md:flex items-center gap-6 relative">
            <li ref={dropdownRef} className="relative">
              <button
                onClick={() => setFirstDrop(!firstDrop)}
                className="flex items-center gap-1 font-medium cursor-pointer"
              >
                SEO Services
                <FaAngleDown
                  className={`transition ${firstDrop ? "rotate-180" : ""}`}
                />
              </button>

              {firstDrop && (
                <div className="absolute top-10 left-0 w-64 bg-[#F3F7FB] shadow-xl p-4 rounded-md md:z-50 ">
                  <ul className="flex flex-col gap-2">
                    <li >
                      <button onClick={() => { resetDesktop(); setCh1(!ch1); }} className="w-full text-left px-2 py-1 hover:bg-white rounded cursor-pointer">
                        CMS SEO
                      </button>
                      {ch1 && (
                        <ul className="absolute top-0 left-56 w-48 bg-[#F3F7FB] shadow-md p-2 rounded md:z-50">
                          <li><Link to="/wordpress" onClick={handleLinkClick}>WordPress SEO</Link></li>
                          <li><Link to="/wixseo" onClick={handleLinkClick}>Wix SEO</Link></li>
                          <li><Link to="/squarespace" onClick={handleLinkClick}>Squarespace SEO</Link></li>
                          <li><Link to="/joomla" onClick={handleLinkClick}>Joomla SEO</Link></li>
                        </ul>
                      )}
                    </li>

                    <li>
                      <button onClick={() => { resetDesktop(); setCh2(!ch2); }}  className="w-full text-left px-2 py-1 hover:bg-white rounded cursor-pointer">
                        E-commerce SEO
                      </button>
                      {ch2 && (
                        <ul className="absolute top-0 left-56 w-48 bg-[#F3F7FB] shadow-md p-2 rounded md:z-50">
                          <li>Shopify SEO</li>
                          <li>Etsy SEO</li>
                          <li>Walmart SEO</li>
                        </ul>
                      )}
                    </li>

                    <li>
                      <button onClick={() => { resetDesktop(); setCh3(!ch3); }}  className="w-full text-left px-2 py-1 hover:bg-white rounded cursor-pointer">
                        Other SEO
                      </button>
                      {ch3 && (
                        <ul className="absolute top-0 left-56 w-48 bg-[#F3F7FB] shadow-md p-2 rounded md:z-50">
                          <li>Local SEO</li>
                          <li>Link Building</li>
                          <li>On Page SEO</li>
                        </ul>
                      )}
                    </li>

                    <li>
                      <button onClick={() => { resetDesktop(); setCh4(!ch4); }}  className="w-full text-left px-2 py-1 hover:bg-white rounded cursor-pointer">
                        Generative SEO
                      </button>
                      {ch4 && (
                        <ul className="absolute top-0 left-56 w-48 bg-[#F3F7FB] shadow-md p-2 rounded md:z-50">
                          <li>AEO</li>
                          <li>GEO</li>
                          <li>SXO</li>
                        </ul>
                      )}
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li><Link to="/about">About</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li>
              <button className="bg-purple-600 text-white px-4 py-2 rounded">
                Contact
              </button>
            </li>
          </ul>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </Container>

      {/* ================= MOBILE MENU ================= */}
      {mobileMenu && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="p-4 space-y-2">
            <li>
              <button
                onClick={() => setMFirst(!mFirst)}
                className="flex justify-between w-full"
              >
                SEO Services
                <FaAngleDown className={`${mFirst ? "rotate-180" : ""}`} />
              </button>

              {mFirst && (
                <ul className="pl-4 mt-2 space-y-2">
                  <li>
                    <button onClick={() => { resetMobile(); setM1(!m1); }}>
                      CMS SEO
                    </button>
                    {m1 && (
                      <ul className="pl-4 mt-1 space-y-1">
                        <li><Link to="/wordpress" onClick={handleLinkClick}>WordPress SEO</Link></li>
                        <li><Link to="/wixseo" onClick={handleLinkClick}>Wix SEO</Link></li>
                        <li><Link to="/squarespace" onClick={handleLinkClick}>Squarespace SEO</Link></li>
                        <li><Link to="/joomla" onClick={handleLinkClick}>Joomla SEO</Link></li>
                      </ul>
                    )}
                  </li>

                  <li>
                    <button onClick={() => { resetMobile(); setM2(!m2); }}>
                      E-commerce SEO
                    </button>
                    {m2 && (
                      <ul className="pl-4 mt-1 space-y-1">
                        <li>Shopify SEO</li>
                        <li>Etsy SEO</li>
                        <li>Walmart SEO</li>
                      </ul>
                    )}
                  </li>

                  <li>
                    <button onClick={() => { resetMobile(); setM3(!m3); }}>
                      Other SEO
                    </button>
                    {m3 && (
                      <ul className="pl-4 mt-1 space-y-1">
                        <li>Local SEO</li>
                        <li>Link Building</li>
                        <li>On Page SEO</li>
                      </ul>
                    )}
                  </li>

                  <li>
                    <button onClick={() => { resetMobile(); setM4(!m4); }}>
                      Generative SEO
                    </button>
                    {m4 && (
                      <ul className="pl-4 mt-1 space-y-1">
                        <li>AEO</li>
                        <li>GEO</li>
                        <li>SXO</li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>

            <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
            <li><Link to="/portfolio" onClick={handleLinkClick}>Portfolio</Link></li>
            <li><Link to="/blog" onClick={handleLinkClick}>Blog</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navber;
 {/* Mobile Menu */}
//       {mobileMenu && (
//         <div className="md:hidden bg-white shadow-lg w-full max-h-[90vh] overflow-y-auto">
//           <ul className="flex flex-col gap-2 p-4">
//             <li>
//               <button
//                 onClick={() => setFirstDrop(!firstDrop)}
//                 className="w-full flex justify-between items-center px-2 py-2 font-medium text-[#303030]"
//               >
//                 SEO Services
//                 <FaAngleDown className={`${firstDrop ? "rotate-180" : ""} transition`} />
//               </button>

//               {firstDrop && (
//                 <ul className="flex flex-col pl-4 mt-2 gap-1">
//                   <li >
//                     <button
//                       onClick={() => handleDropToggle(setChDrop1, chDrop1)}
//                       className="w-full text-left px-2 py-1 hover:bg-gray-100 rounded"
//                     >
//                       CMS SEO
//                     </button>
//                     {chDrop1 && (
//                       <ul className="flex flex-col pl-4 mt-1 gap-1  z-50">
//                         <li>
//                           <Link to="/wordpress" onClick={handleLinkClick}>WordPress SEO</Link>
//                         </li>
//                         <li>
//                           <Link to="/wixseo" onClick={handleLinkClick}>Wix SEO</Link>
//                         </li>
//                         <li>
//                           <Link to="/squarespace" onClick={handleLinkClick}>Squarespace SEO</Link>
//                         </li>
//                         <li>
//                           <Link to="/joomla" onClick={handleLinkClick}>Joomla SEO</Link>
//                         </li>
//                       </ul>
//                     )}
//                   </li>

//                   {/* Other CMS / E-commerce / Generative */}
//                   {/* Repeat similar structure as desktop */}
//                   <li>
//                     <button onClick={() => handleDropToggle(setChDrop2, chDrop2)} className="w-full text-left px-2 py-1 hover:bg-gray-100 rounded">
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
//                     <button onClick={() => handleDropToggle(setChDrop3, chDrop3)} className="w-full text-left px-2 py-1 hover:bg-gray-100 rounded">
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
//                     <button onClick={() => handleDropToggle(setChDrop4, chDrop4)} className="w-full text-left px-2 py-1 hover:bg-gray-100 rounded">
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
//               <Link to="/about" className="px-2 py-2 block" onClick={handleLinkClick}>About</Link>
//             </li>
//             <li>
//               <Link to="/portfolio" className="px-2 py-2 block" onClick={handleLinkClick}>Portfolio</Link>
//             </li>
//             <li>
//               <Link to="/blog" className="px-2 py-2 block" onClick={handleLinkClick}>Blog</Link>
//             </li>
//             <li>
//               <button className="bg-purple-600 text-white px-4 py-2 rounded w-full mt-2" onClick={handleLinkClick}>Contact</button>
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navber;