"use client";

import React from "react";

const MapSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Find Us</h2>
        <p className="text-lg text-gray-600 mb-8">
          Visit Pixel Doctor — your trusted tech repair experts in Harare, Zimbabwe.
        </p>

        {/* Google Map Embed */}
        <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.004953994597!2d31.05263507496325!3d-17.82921878391946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a5b40b2f5555%3A0x29d8eeed6c0aaf0!2sHarare%2C%20Zimbabwe!5e0!3m2!1sen!2szw!4v1701184077486!5m2!1sen!2szw"
            width="100%"
            height="100%"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
