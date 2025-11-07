"use client";

import React from "react";

const services = [
  {
    title: "Laptop Hardware Repair",
    description:
      "We diagnose and repair all laptop issues, from hardware failures to software problems.",
    image: "/service1.png",
  },
  {
    title: "Mobile Phone Diagnostics",
    description:
      "Fast and reliable mobile phone diagnostics to identify and fix issues quickly.",
    image: "/service2.png",
  },
  {
    title: "Screen Replacement Service",
    description:
      "High-quality screen replacements for laptops, phones and tablets to restore your device.",
    image: "/service.png",
  },
  {
    title: "Device Accessory Sales",
    description:
      "We provide essential accessories for your devices, including chargers, cases and more.",
    image: "/buds.png",
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-8 space-y-12 bg-gray-100">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
      

      {/* Services List */}
      {services.map((service, index) => (
        <div
          key={index}
          className="relative w-full h-[80vh] rounded-lg overflow-hidden"
          style={{
            backgroundImage: `url(${service.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Text Content  bg-black/40  */}
          <div className="absolute top-6 left-6 md:top-10 md:left-12 text-white max-w-3xlp-4 rounded-lg">   
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              {service.title}
            </h3>
            <p className="text-lg md:text-xl leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
