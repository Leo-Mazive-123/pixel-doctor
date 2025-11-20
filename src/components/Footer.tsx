"use client";

import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  const [copied, setCopied] = useState<"email" | "phone" | "">("");

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 2000);
  };

  const scrollOffset = -80;

  return (
    <footer id="footer" className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large screens: grid layout */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Pixel <span className="text-red-500">Doctor</span>
            </h2>
            <p className="text-gray-400">
              Expert laptop and mobile device repair in Harare. Swift, affordable and reliable solutions.
            </p>
            <h3 className="text-xl font-bold mt-2 mb-2">Working Hours</h3>
            <p className="text-gray-400">Monday - Friday from 8am to 5pm!</p>
          </div>

          {/* Quick Links */}
          <div className="md:ml-12">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={scrollOffset}
                  className="cursor-pointer hover:text-blue-500 transition"
                >
                  About Us
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="services"
                  smooth={true}
                  duration={500}
                  offset={scrollOffset}
                  className="cursor-pointer hover:text-blue-500 transition"
                >
                  Services
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={500}
                  offset={scrollOffset}
                  className="cursor-pointer hover:text-blue-500 transition"
                >
                  Projects
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={scrollOffset}
                  className="cursor-pointer hover:text-blue-500 transition"
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">Harare, Zimbabwe</p>
            <p className="text-gray-400 mb-2">
              Email:{" "}
              <span
                className="cursor-pointer hover:text-blue-500 underline"
                onClick={() => handleCopy("cmanjemanje@gmail.com", "email")}
              >
                cmanjemanje@gmail.com
              </span>
              {copied === "email" && (
                <span className="text-green-400 ml-2">Copied!</span>
              )}
            </p>
            <p className="text-gray-400 mb-2">
              Phone:{" "}
              <span
                className="cursor-pointer hover:text-blue-500 underline"
                onClick={() => handleCopy("+263718482174", "phone")}
              >
                +263 71 848 2174
              </span>
              {copied === "phone" && (
                <span className="text-green-400 ml-2">Copied!</span>
              )}
            </p>

            {/* WhatsApp Icon BELOW Contact Info */}
            <div className="mt-1">
              <a
                href="https://wa.me/263718482174"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-500 transition"
              >
                <FaWhatsapp className="text-2xl" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Small screens */}
        <div className="md:hidden flex flex-col gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Pixel <span className="text-red-500">Doctor</span>
            </h2>
            <p className="text-gray-400">
              Expert laptop and mobile device repair in Harare. Swift, affordable and reliable solutions.
            </p>
            <h3 className="text-xl font-bold mt-2 mb-2">Working Hours</h3>
            <p className="text-gray-400">Monday - Friday from 8am to 5pm!</p>
          </div>

          {/* Quick Links + Contact */}
          <div className="flex justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <ScrollLink
                    to="about"
                    smooth={true}
                    duration={500}
                    offset={scrollOffset}
                    className="cursor-pointer hover:text-blue-500 transition"
                  >
                    About Us
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="services"
                    smooth={true}
                    duration={500}
                    offset={scrollOffset}
                    className="cursor-pointer hover:text-blue-500 transition"
                  >
                    Services
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="projects"
                    smooth={true}
                    duration={500}
                    offset={scrollOffset}
                    className="cursor-pointer hover:text-blue-500 transition"
                  >
                    Projects
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={500}
                    offset={scrollOffset}
                    className="cursor-pointer hover:text-blue-500 transition"
                  >
                    Contact
                  </ScrollLink>
                </li>
              </ul>
            </div>

            <div className="mr-10">
              <h3 className="text-xl font-semibold mb-11">Contact Us</h3>
              <div>
                <p className="text-gray-400 mb-2">Harare, Zimbabwe</p>
                <p className="text-gray-400 mb-2">
                  Email:{" "}
                  <span
                    className="cursor-pointer hover:text-blue-500 underline"
                    onClick={() => handleCopy("cmanjemanje@gmail.com", "email")}
                  >
                    cmanjemanje@gmail.com
                  </span>
                  {copied === "email" && <span className="text-green-400 ml-2">Copied!</span>}
                </p>
                <p className="text-gray-400 mb-2">
                  Phone:{" "}
                  <span
                    className="cursor-pointer hover:text-blue-500 underline"
                    onClick={() => handleCopy("+263718482174", "phone")}
                  >
                    +263 71 848 2174
                  </span>
                  {copied === "phone" && <span className="text-green-400 ml-2">Copied!</span>}
                </p>

                {/* WhatsApp Icon BELOW Contact Info */}
                <div className="mt-3">
                  <a
                    href="https://wa.me/263718482174"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-400 hover:text-green-500 transition"
                  >
                    <FaWhatsapp className="text-xl" />
                    <span>Chat</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
       &copy; {new Date().getFullYear()} Pixel <span className="text-red-500">Doctor</span>. All rights reserved. Developed by Leo T. Mazive
      </div>
    </footer>
  );
};

export default Footer;
