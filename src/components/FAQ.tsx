"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "What are your business hours?",
    answer: "Monday - Friday from 9am to 5pm! You can also check our footer below.",
  },
  {
    question: "How can I contact you?",
    answer: "Feel free to give me a call at the phone number provided, or send me a message using the Get in Touch form!",
  },
  {
    question: "What type of services do you offer?",
    answer: "We have a basic service and a premium service. We also do custom services — contact us for a quote!",
  },
  {
    question: "What devices do you repair?",
    answer: "We repair laptops, mobile phones, tablets, and other personal devices. Our certified technicians handle hardware and software issues.",
  },
  {
    question: "How long does a repair take?",
    answer: "Most repairs are completed within 12-24 hours, depending on the complexity of the issue and availability of replacement parts.",
  },
  {
    question: "Do you offer warranty on repairs?",
    answer: "Yes! All our repairs come with a 7-day warranty to ensure your device works perfectly after service.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-6 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              {/* Question row */}
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">{faq.question}</span>
                <span className="text-xl font-bold">{openIndex === index ? "-" : "+"}</span>
              </div>

              {/* Answer with smooth transition */}
              <div
                className={`mt-4 text-gray-700 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
