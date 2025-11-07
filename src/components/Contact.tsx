"use client";

import React, { useState, useEffect } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formspreeURL = "https://formspree.io/f/xanlrrew"; // Replace with your Formspree form ID  
                       // https://formspree.io/f/mldoqpyn
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
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  // Automatically clear status after 5 seconds
  useEffect(() => {
    if (status !== "idle") {
      const timer = setTimeout(() => setStatus("idle"), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Get in Touch</h2>
        <p className="text-center text-gray-600 mb-12">
          Have questions or need support? Fill out the form below and we’ll get back to you.
        </p>

        <div className="max-w-3xl mx-auto">
          {status === "success" && (
            <p className="text-center text-green-600 font-semibold mb-6">
              Thank you! Your message has been sent.
            </p>
          )}

          {status === "error" && (
            <p className="text-center text-red-600 font-semibold mb-6">
              Oops! Something went wrong. Please try again.
            </p>
          )}

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
        </div>
      </div>
    </section>
  );
};

export default Contact;
