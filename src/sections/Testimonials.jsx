// src/sections/Testimonials.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { clients } from '../export';
import { staggerContainer, slideUpVariants } from './animation';

// Custom hook for scroll-triggered count-up
const useCountUp = (end, duration, trigger) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const increment = end / (duration / 16); // ~60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, trigger]);

  return end % 1 === 0 ? Math.floor(count) : count.toFixed(1);
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === clients.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? clients.length - 1 : prev - 1));
  };

  // Intersection observer to trigger stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Reset and retrigger animation
          setStatsVisible(false);
          setTimeout(() => setStatsVisible(true), 50);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-blue-950/90 via-slate-900/90 to-gray-950/90">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={slideUpVariants} className="text-yellow-500 text-lg font-semibold mb-2">
            TESTIMONIALS
          </motion.h2>
          <motion.h1 variants={slideUpVariants} className="text-white text-4xl font-bold mb-4">
            What Our Clients Say
          </motion.h1>
          <motion.div variants={slideUpVariants} className="w-20 h-1 bg-yellow-500 mx-auto"></motion.div>
        </motion.div>

        <motion.div
          className="relative max-w-3xl mx-auto"
          variants={staggerContainer}
        >
          {/* Testimonial Card */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-8 rounded-lg text-center"
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-yellow-500">
              {/* Client Photo */}
              <img 
                src={clients[currentIndex].image} 
                alt={clients[currentIndex].name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-gray-300 italic mb-6">"{clients[currentIndex].about}"</p>
            <h3 className="text-white text-xl font-bold">{clients[currentIndex].name}</h3>
            <p className="text-yellow-500">{clients[currentIndex].post}</p>
          </motion.div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-yellow-500 p-2 rounded-full"
          >
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-yellow-500 p-2 rounded-full"
          >
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {clients.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-yellow-500' : 'bg-gray-600'
                  }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Statistics Grid - With Count-Up */}
        <motion.div 
          id="stats-section"
          variants={slideUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }} // will animate every time it's visible
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-900/70 to-slate-900/70 border-2 border-yellow-500 rounded-2xl p-8 mt-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-yellow-500 text-3xl font-bold">
                {useCountUp(15, 1500, statsVisible)}K+
              </p>
              <p className="text-white text-sm">Happy Customer</p>
            </div>
            <div className="text-center">
              <p className="text-yellow-500 text-3xl font-bold">
                {useCountUp(4.7, 1500, statsVisible)}
              </p>
              <p className="text-white text-sm">Rating Customer</p>
            </div>
            <div className="text-center">
              <p className="text-yellow-500 text-3xl font-bold">
                {useCountUp(51, 1500, statsVisible)}+
              </p>
              <p className="text-white text-sm">Pro Experts</p>
            </div>
            <div className="text-center">
              <p className="text-yellow-500 text-3xl font-bold">
                {useCountUp(10, 1500, statsVisible)}+
              </p>
              <p className="text-white text-sm">Years Experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
