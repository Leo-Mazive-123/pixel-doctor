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

        {/* Google Map Embed centered on Harare */}
        <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps?q=Harare,+Zimbabwe&output=embed"
            width="100%"
            height="100%"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Harare Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
