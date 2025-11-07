"use client";

import React from "react";

const Stats: React.FC = () => {
  const stats = [
    { number: "25+", label: "Happy Customers" },
    { number: "50+", label: "Projects Completed" },
    { number: "10+", label: "Years in Business" },
    { number: "99%", label: "Customer Satisfaction" },
    
  ];

  return (
    <section className="py-16 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-5xl font-extrabold text-gray-800 mb-2 tracking-wide drop-shadow-lg">
                {stat.number}
              </h3>
              <p className="text-lg font-medium text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
