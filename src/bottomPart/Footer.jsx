import React from "react";
import Container from "../component/Container";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-full h-auto bg-[#2B384C] pt-[80px]  md:pt-[160px] md:mt-[-160px] mt-[-50px] relative z-10 text-white">
        <Container>
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0 md:items-start items-center mb-[10px] md:mb-[40px]">
            {/* Logo + About */}
            <div className="md:w-[50%] text-center md:text-left ">
              <h2 className="text-2xl font-bold mb-3">Md Hasibur Rahman</h2>
              <p className="max-w-[320px] text-gray-300 text-sm leading-relaxed">
                We provide top-notch web development and SEO services to help
                your business grow online and stand out in search results.
              </p>
            </div>
            <div className="md:w-1/2 w-full flex flex-col md:flex-row justify-between gap-10">
  {/* Quick Links */}
  <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
    <h3 className="text-[20px] font-semibold mb-4 tracking-wide">Quick Links</h3>
    <ul className="flex flex-col gap-3 text-gray-300 text-sm items-center md:items-start">
      {[
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Contact", path: "/contact" },
        { name: "Blog", path: "/blog" },
      ].map((item) => (
        <li key={item.name}>
          <Link
            to={item.path}
            className="hover:text-blue-400 transition-colors duration-300"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>

  {/* Social Links */}
  <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
    <h3 className="text-[20px]font-semibold mb-4 tracking-wide">Follow Us</h3>
    <div className="flex gap-4">
      <a
        href="https://www.facebook.com/mdhasiburrahman.santo.9"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-white/10 hover:bg-blue-600 transition-all"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://x.com/Hasibur45690"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-white/10 hover:bg-sky-500 transition-all"
      >
        <FaTwitter />
      </a>
      <a
        href="https://www.instagram.com/mr__shant0/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-white/10 hover:bg-pink-500 transition-all"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.linkedin.com/in/md-hasibur-rahman-shanto/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-white/10 hover:bg-blue-700 transition-all"
      >
        <FaLinkedinIn />
      </a>
    </div>
  </div>
</div>


           
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 text-center py-6 text-gray-400 text-sm">
            © {new Date().getFullYear()} hasib. All Rights Reserved.
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
