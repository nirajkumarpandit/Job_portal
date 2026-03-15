import React from "react";
import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-8">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left */}
        <p className="text-sm">
          © {new Date().getFullYear()} MyWebsite. All rights reserved.
        </p>

        {/* Middle - Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition text-xl"
          >
            <FaInstagramSquare />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition text-xl"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition text-xl"
          >
            <FaGithub />
          </a>
        </div>

        {/* Right */}
        <div className="flex space-x-6 text-sm">
          <a href="#" className="hover:text-white transition">Privacy</a>
          <a href="#" className="hover:text-white transition">Terms</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
