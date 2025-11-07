import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About"
import Services from "../components/Services"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import MapSection from "../components/MapSection"
import Projects from "../components/Projects"
import FAQ from "../components/FAQ"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import ScrollToTop from "../components/ScrollToTop";
import ScrollToBottom from "../components/ScrollToBottom";


const HomePage: React.FC = () => {
  return (
    <div className="relative">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Stats Section */}
      <Stats />

      {/* MapSecion Section */}
      <MapSection />

      {/* Projcts Section */}
      <Projects />
      
      {/* FAQ Section */}
      <FAQ />

      {/* Contact Section */}
      <Contact />

      {/* Footer Section */}
      <Footer />

      {/* ScrollToTop Section */}
      <ScrollToTop />

      {/* ScrollToBottom Section */}
      <ScrollToBottom />

      

    </div>
  );
};

export default HomePage;
