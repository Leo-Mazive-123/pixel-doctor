"use client";

import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Footer: React.FC = () => {
  const [copied, setCopied] = useState<"email" | "phone" | "">("");

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 2000); // reset after 2 seconds
  };

  const scrollOffset = -80; // adjust this to your navbar height

  return (
    <footer id="footer" className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large screens: grid layout */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Pixel Doctor</h2>
            <p className="text-gray-400">
              Expert laptop and mobile device repair in Harare. Swift, affordable and reliable solutions.
            </p>
            <h3 className="text-xl font-bold mt-2 mb-2">Working Hours</h3>
            <p className="text-gray-400">
              Monday - Friday from 8am to 5pm!
            </p>
          </div>

          {/* Quick Links (pushed right) */}
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
          </div>
        </div>

        {/* Small screens: brand on top, quick links + contact side by side */}
        <div className="md:hidden flex flex-col gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Pixel Doctor</h2>
            <p className="text-gray-400">
              Expert laptop and mobile device repair in Harare. Swift, affordable and reliable solutions.
            </p>
            <h3 className="text-xl font-bold mt-2 mb-2">Working Hours</h3>
            <p className="text-gray-400">
              Monday - Friday from 8am to 5pm!
            </p>
          </div>

          {/* Quick Links + Contact side by side */}
          <div className="flex justify-between">
            {/* Quick Links */}
            <div className="">
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
            <div className="mr-17">
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
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Pixel Doctor. All rights reserved. Developed by Leo T. Mazive
      </div>
    </footer>
  );
};

export default Footer;
