"use client";

import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-stretch gap-8">
        {/* Left: Image */}
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <img
            src="/phone.webp" // put your image in public folder
            alt="About Pixel Doctor"
            className="rounded-lg w-full h-80 md:h-145 object-cover"
          />
        </div>

        {/* Right: Text */}
        <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Pixel Doctor</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Founded by experienced tech professionals, Pixel Doctor understands the critical role technology plays in your personal and professional life. Our team of certified technicians combines deep technical expertise with a commitment to exceptional customer service. We treat every device with precision and care, ensuring maximum performance and longevity.
          </p>
          <button
  onClick={() => {
    const element = document.getElementById("services");
    if (element) {
      // Get distance from top and subtract header height (e.g., 80px)
      const yOffset = -80; // adjust this to your navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }}
  className="self-center md:self-start bg-gray-600 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded transition animate-bounce"
>
  Learn More
</button>

        </div>
      </div>
    </section>
  );
};

export default About;
