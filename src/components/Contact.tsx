"use client";

import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formspreeURL = "https://formspree.io/f/mldoqpyn"; // <-- Replace with your Formspree form ID

    try {
      const response = await fetch(formspreeURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Get in Touch</h2>
        <p className="text-center text-gray-600 mb-12">
          Have questions or need support? Fill out the form below and we’ll get back to you.
        </p>

        <div className="max-w-3xl mx-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                rows={5}
                required
              />

              <button
                type="submit"
                className="bg-gray-600 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded transition"
              >
                Send Message
              </button>
            </form>
          ) : (
            <p className="text-center text-green-600 font-semibold">
              Thank you! Your message has been sent.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
