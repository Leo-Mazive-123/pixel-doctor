"use client";

import React from "react";

const Projects: React.FC = () => {
  const projects = [
    { src: "/project1.png", label: "Project 1" },
    { src: "/project2.png", label: "Project 2" },
    { src: "/project3.png", label: "Project 3" },
    { src: "/project4.png", label: "Project 4" },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-100">
       {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Projects</h2>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Transforming Damaged Devices into Reliable Technology
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[15px]">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col items-start">
              <img
                src={project.src}
                alt={project.label}
                className="w-full h-90 object-cover rounded-md"
              />
              <p className="mt-2 text-left font-medium text-gray-700">
                {project.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
