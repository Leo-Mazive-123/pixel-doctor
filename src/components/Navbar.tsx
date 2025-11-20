"use client";

import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false); // Close menu after click
  };

  return (
    <nav className="bg-black shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Brand */}
          <div className="text-2xl font-bold text-white">
            Pixel <span className="text-red-500">Doctor</span>
          </div>

          {/* Right: Hamburger Menu */}
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    menuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>

            {/* Menu dropdown */}
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md px-2 py-2 space-y-1">
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={600}
                  offset={-70}
                  onClick={handleLinkClick}
                  className="block px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer"
                >
                  Get in Touch
                </ScrollLink>

                <ScrollLink
                  to="footer"
                  smooth={true}
                  duration={600}
                  offset={-50}
                  onClick={handleLinkClick}
                  className="block px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer"
                >
                  Contact
                </ScrollLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
