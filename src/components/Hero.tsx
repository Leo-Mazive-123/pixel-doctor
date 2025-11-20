"use client";

import React from "react";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-top"
      style={{ backgroundImage: "url('/hero.png')" }} 
    >
      {/* Text content */}
      <div className="absolute bottom-10 left-6 md:left-12 lg:left-16 z-10 max-w-3xl px-6 text-white">
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Pixel <span className="text-red-500">Doctor</span>
        </h1>

        <p className="text-base md:text-lg lg:text-xl mb-6 leading-relaxed">
          Pixel Doctor Zimbabwe offers expert laptop and mobile device repair in Harare, delivering swift, affordable solutions with professional IT support for all your digital needs.
        </p>

        <button
          onClick={() => {
            const element = document.getElementById("contact");
            if (element) {
              const yOffset = -80;
              const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
              window.scrollTo({ top: y, behavior: "smooth" });
            }
          }}
          className="inline-block bg-gray-600 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded transition animate-bounce"
        >
          Get in Touch
        </button>

      </div>
    </section>
  );
};

export default Hero;
