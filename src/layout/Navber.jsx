import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../component/Container";

const Navber = () => {
  const [firstDrop, setFirstDrop] = useState(false);
  const [chDrop1, setChDrop1] = useState(false);
  const [chDrop2, setChDrop2] = useState(false);
  const [chDrop3, setChDrop3] = useState(false);
  const [chDrop4, setChDrop4] = useState(false);
  const [chDrop5, setChDrop5] = useState(false);
  const dropdownRef = useRef(null);
  const chDropRef1 = useRef(null);
  const chDropRef2 = useRef(null);
  const chDropRef3 = useRef(null);
  const chDropRef4 = useRef(null);
  const chDropRef5 = useRef(null);

  const handleFirstDrop = () => setFirstDrop(!firstDrop);
  const handleChDrop1 = () => setChDrop1(!chDrop1);
  const handleChDrop2 = () => setChDrop2(!chDrop2);
  const handleChDrop3 = () => setChDrop3(!chDrop3);
  const handleChDrop4 = () => setChDrop4(!chDrop4);
  const handleChDrop5 = () => setChDrop5(!chDrop5);

  // close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setFirstDrop(false);
      }
      if (chDropRef1.current && !chDropRef1.current.contains(event.target)) {
        setChDrop1(false);
      }
      if (chDropRef2.current && !chDropRef2.current.contains(event.target)) {
        setChDrop2(false);
      }
      if (chDropRef3.current && !chDropRef3.current.contains(event.target)) {
        setChDrop3(false);
      }
      if (chDropRef4.current && !chDropRef4.current.contains(event.target)) {
        setChDrop4(false);
      }
      if (chDropRef5.current && !chDropRef5.current.contains(event.target)) {
        setChDrop5(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative top-0 left-0 w-full bg-white z-50 shadow-sm">
      <Container>
        <div className="flex justify-between py-[20px]">
          {/* Logo */}
          <div className="w-[20%] flex items-center justify-center">
            <Link to="/">
              <img
                src="images/Logo.png"
                alt="Logo"
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* Menu */}
          <div className="w-[80%] flex justify-end">
            <ul className="flex items-center gap-[24px] relative">
              {/* Services Dropdown */}
              <li className="relative" ref={dropdownRef}>
                <button
                  onClick={handleFirstDrop}
                  className="px-[24px] py-[12px] cursor-pointer"
                >
                  Services
                </button>

                {firstDrop && (
                  <div className="absolute top-[50px] left-0 w-[220px] bg-[#F3F7FB] shadow-xl p-[20px] rounded-md">
                    <ul className="flex flex-col gap-2">
                      {/* One */}
                      <li className="relative" ref={chDropRef1}>
                        <button
                          onClick={handleChDrop1}
                          className="hover:bg-white cursor-pointer px-3 py-2 rounded w-full text-left"
                        >
                          One
                        </button>
                        {chDrop1 && (
                          <div className="absolute top-0 left-[200px] w-[200px] bg-[#F3F7FB] shadow-xl p-[20px] rounded-md">
                            <ul className="flex flex-col gap-2">
                              <li className="hover:bg-white cursor-pointer px-2 py-1 rounded">
                                Six
                              </li>
                              <li className="hover:bg-white cursor-pointer px-2 py-1 rounded">
                                Seven
                              </li>
                              <li className="hover:bg-white cursor-pointer px-2 py-1 rounded">
                                Eight
                              </li>
                              <li className="hover:bg-white cursor-pointer px-2 py-1 rounded">
                                Nine
                              </li>
                              <li className="hover:bg-white cursor-pointer px-2 py-1 rounded">
                                Ten
                              </li>
                            </ul>
                          </div>
                        )}
                      </li>

                      {/* Two */}
                      <li className="relative" ref={chDropRef2}>
                        <button
                          onClick={handleChDrop2}
                          className="hover:bg-white cursor-pointer px-3 py-2 rounded w-full text-left"
                        >
                          Two
                        </button>
                        {chDrop2 && (
                          <div className="absolute top-0 left-[200px] w-[200px] bg-[#F3F7FB] shadow-xl p-[20px] rounded-md">
                            <ul className="flex flex-col gap-2">
                              <li className="hover:bg-white cursor-pointer px-2 py-1 rounded">
                                Alpha
                              </li>
                              <li className="hover:bg-white cursor-pointer px-2 py-1 rounded">
                                Beta
                              </li>
                              <li className="hover:bg-white cursor-pointer px-2 py-1 rounded">
                                Gamma
                              </li>
                              <li className="hover:bg-white cursor-pointer px-2 py-1 rounded">
                                Delta
                              </li>
                            </ul>
                          </div>
                        )}
                      </li>

                      {/* Three */}
                      <li className="relative" ref={chDropRef3}>
                        <button
                          onClick={handleChDrop3}
                          className="hover:bg-white cursor-pointer px-3 py-2 rounded w-full text-left"
                        >
                          Three
                        </button>
                        {chDrop3 && (
                          <div className="absolute top-0 left-[200px] w-[200px] bg-[#F3F7FB] shadow-xl p-[20px] rounded-md">
                            <ul className="flex flex-col gap-2">
                              <li className="hover:bg-white cursor-pointer px-2 py-1 rounded">
                                Option 1
                              </li>
                              <li className="hover:bg-white cursor-pointer px-2 py-1 rounded">
                                Option 2
                              </li>
                              <li className="hover:bg-white cursor-pointer px-2 py-1 rounded">
                                Option 3
                              </li>
                            </ul>
                          </div>
                        )}
                      </li>

                      {/* Four */}
                      <li className="relative" ref={chDropRef4}>
                        <button
                          onClick={handleChDrop4}
                          className="hover:bg-white cursor-pointer px-3 py-2 rounded w-full text-left"
                        >
                          Four
                        </button>
                        {chDrop4 && (
                          <div className="absolute top-0 left-[200px] w-[200px] bg-[#F3F7FB] shadow-xl p-[20px] rounded-md">
                            <ul className="flex flex-col gap-2">
                              <li className="hover:bg-white cursor-pointer px-2 py-1 rounded">
                                Service A
                              </li>
                              <li className="hover:bg-white cursor-pointer px-2 py-1 rounded">
                                Service B
                              </li>
                              <li className="hover:bg-white cursor-pointer px-2 py-1 rounded">
                                Service C
                              </li>
                            </ul>
                          </div>
                        )}
                      </li>

                      {/* Five */}
                      <li className="relative" ref={chDropRef5}>
                        <button
                          onClick={handleChDrop5}
                          className="hover:bg-white cursor-pointer px-3 py-2 rounded w-full text-left"
                        >
                          Five
                        </button>
                        {chDrop5 && (
                          <div className="absolute top-0 left-[200px] w-[200px] bg-[#F3F7FB] shadow-xl p-[20px] rounded-md">
                            <ul className="flex flex-col gap-2">
                              <li className="hover:bg-white cursor-pointer px-2 py-1 rounded">
                                Item X
                              </li>
                              <li className="hover:bg-white cursor-pointer px-2 py-1 rounded">
                                Item Y
                              </li>
                              <li className="hover:bg-white cursor-pointer px-2 py-1 rounded">
                                Item Z
                              </li>
                            </ul>
                          </div>
                        )}
                      </li>
                    </ul>
                  </div>
                )}
              </li>

              {/* Other Pages */}
              <li className="px-[24px] py-[12px]">
                <Link to="/">Home</Link>
              </li>
              <li className="px-[24px] py-[12px]">
                <Link to="/About">About</Link>
              </li>
              <li className="px-[24px] py-[12px]">
                <Link to="/Portfolio">Portfolio</Link>
              </li>
              <li className="px-[24px] py-[12px]">
                <Link to="/Blog">Blog</Link>
              </li>
              <li>
                <button className="px-[24px] py-[12px] bg-[#A53DFF] text-white rounded-md hover:bg-[#922ae6] transition">
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navber;
