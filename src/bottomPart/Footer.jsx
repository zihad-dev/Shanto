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
      <div className="w-full h-auto bg-[#2B384C] pt-[160px] mt-[-160px] relative z-10 text-white">
        <Container>
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0 py-10">
            {/* Logo + About */}
            <div className="w-full md:w-1/3">
              <h2 className="text-2xl font-bold mb-3">Md Hasibur Rahman</h2>
              <p className="max-w-[320px] text-gray-300 text-sm leading-relaxed">
                We provide top-notch web development and SEO services to help
                your business grow online and stand out in search results.
              </p>
            </div>

            {/* Useful Links */}
            <div className="w-full md:w-1/3">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <Link
                    to="/"
                    className="hover:text-blue-400 transition-all cursor-pointer"
                  >
                    {" "}
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-blue-400 transition-all cursor-pointer"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-blue-400 transition-all cursor-pointer"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-blue-400 transition-all cursor-pointer"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="hover:text-blue-400 transition-all cursor-pointer"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="w-full md:w-1/3">
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/mdhasiburrahman.santo.9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-blue-500 p-3 rounded-full transition-all "
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://x.com/Hasibur45690"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-blue-400 p-3 rounded-full transition-all"
                >
                  <FaTwitter />
                </a>
                <a
                   href="https://www.instagram.com/mr__shant0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-pink-500 p-3 rounded-full transition-all"
                >
                  <FaInstagram />
                </a>
                <a
                   href="https://www.linkedin.com/in/md-hasibur-rahman-shanto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-blue-700 p-3 rounded-full transition-all"
                >
                  <FaLinkedinIn />
                </a>
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
