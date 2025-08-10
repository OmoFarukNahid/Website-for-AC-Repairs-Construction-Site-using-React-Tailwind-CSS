// src/sections/Services.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { allservices } from '../export';
import { staggerContainer, slideUpVariants } from './animation';

const Services = () => {
  const [highlightedService, setHighlightedService] = useState(null);

  useEffect(() => {
    // Check if URL hash matches a service ID when page loads
    const hash = window.location.hash.substring(1);
    if (hash) setHighlightedService(hash);

    // Listen to hash changes (for clicks from Footer)
    const handleHashChange = () => {
      const newHash = window.location.hash.substring(1);
      setHighlightedService(newHash);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <section id="services" className="bg-gradient-to-b from-cyan-700 to-cyan-700/90 section-padding relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full filter blur-3xl"></div>
      
      <div className="container-width relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="section-header"
        >
          <motion.h2 variants={slideUpVariants} className="section-title">
            OUR SERVICES
          </motion.h2>
          <motion.h1 variants={slideUpVariants} className="section-heading">
            Professional <span className="text-yellow-400">Repair</span> Services
          </motion.h1>
          <motion.div variants={slideUpVariants} className="divider" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {allservices.map((service, index) => {
            const isActive = highlightedService === service.id;

            return (
              <motion.div
                id={service.id}
                key={index}
                variants={slideUpVariants}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(251, 191, 36, 0.1), 0 10px 10px -5px rgba(251, 191, 36, 0.04)"
                }}
                className={`service-card group transition-all duration-300 ${isActive ? 'border-yellow-500 border-2 shadow-yellow-500/50 shadow-lg' : ''}`}
              >
                <div className="service-icon group-hover:bg-yellow-500/20 group-hover:border-yellow-500/40 transition-colors">
                  <img 
                    src={service.icon} 
                    alt={service.title} 
                    className="w-10 h-10 object-contain filter brightness-0 invert opacity-90 group-hover:opacity-100 transition-all" 
                  />
                </div>
                <h3 className="service-title group-hover:text-yellow-400 transition-colors">
                  {service.title}
                </h3>
                <p className="service-about group-hover:text-gray-300 transition-colors">
                  {service.about}
                </p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500/0 via-yellow-500 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          variants={slideUpVariants}
          className="mt-16 text-center"
        >
          <button className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-full hover:shadow-lg hover:shadow-yellow-500/30 transition-all transform hover:scale-105">
            Get a Free Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
