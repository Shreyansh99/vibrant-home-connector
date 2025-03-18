
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import Hero from '@/components/Hero';
import WhyUs from '@/components/WhyUs';
import DepartmentTab from '@/components/DepartmentTab';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Home = () => {
  // Add scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    const revealElements = document.querySelectorAll('.reveal, .reveal-children');
    revealElements.forEach(el => observer.observe(el));
    
    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E0F7FF] to-white">
      <Navbar />
      <Hero />
      <WhyUs />
      <DepartmentTab />
      <Contact />
      <Footer />
      
      {/* Scroll to top button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: typeof window !== 'undefined' && window.scrollY > 500 ? 1 : 0,
          y: typeof window !== 'undefined' && window.scrollY > 500 ? 0 : 20 
        }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </div>
  );
};

export default Home;
