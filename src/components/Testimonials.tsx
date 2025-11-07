"use client";

import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "Pixel Doctor saved my work laptop after a severe water spill. Their quick response and professional repair exceeded my expectations, getting me back to work within 48 hours.I was amazed by how they do their work.",
    name: "Tendai Mapfumo",
    role: "Marketing Manager, Econet Zimbabwe",
  },
  {
    quote:
      "I was amazed by their mobile phone repair expertise. They fixed my smartphone's charging port perfectly and at a very reasonable price. Highly recommended for anyone with device issues!",
    name: "Chiedza Mudiwa",
    role: "Freelance Graphic Designer",
  },
  {
    quote:
      "As a small business owner, reliable technology is crucial. Pixel Doctor has been my go-to tech support team, providing fast and affordable repairs that keep my business running smoothly.",
    name: "Simba Macheka",
    role: "Owner, Local Retail Store",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Clients Say</h2>

        <div className="flex flex-col md:flex-row justify-between gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 flex-1 flex flex-col justify-between"
              style={{ minHeight: "350px" }}
            >
              {/* Quote */}
              <p className="text-gray-700 text-lg mb-1">"{testimonial.quote}"</p>

              {/* Stars */}
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 mr-1" />
                ))}
              </div>

              {/* Name and role */}
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
