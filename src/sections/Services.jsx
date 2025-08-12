// src/sections/Services.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { allservices } from '../export';
import { staggerContainer, slideUpVariants } from './animation';

const Services = () => {
  const [highlightedService, setHighlightedService] = useState(null);
  const [flippedCards, setFlippedCards] = useState({});

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) setHighlightedService(hash);

    const handleHashChange = () => {
      const newHash = window.location.hash.substring(1);
      setHighlightedService(newHash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleFlip = (id) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="services" className="bg-gradient-to-b from-cyan-700 to-cyan-700/90 section-padding relative overflow-hidden">
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
            const isFlipped = flippedCards[service.id];

            return (
              <motion.div
                id={service.id}
                key={index}
                variants={slideUpVariants}
                className={`flip-card ${isActive ? 'border-yellow-500 border-2 shadow-yellow-500/50 shadow-lg' : ''}`}
              >
                <div
                  className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}
                  onClick={() => handleFlip(service.id)}
                >
                  {/* Front Side */}
                  <div className="flip-card-front service-card group transition-all duration-300">
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
                    <p className="mt-4 text-gray-400 text-sm cursor-pointer hover:text-yellow-400 transition-colors">
                      Click to see details
                    </p>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500/0 via-yellow-500 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>

                  {/* Back Side */}
                  <div className="flip-card-back service-card bg-cyan-800 p-6">
                    <h3 className="service-title text-yellow-400 mb-4">
                      {service.title}
                    </h3>
                    <p className="service-about text-gray-200 text-center">
                      {service.about}
                    </p>
                    <button
                      className="mt-6 text-sm text-yellow-400 hover:text-yellow-300 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFlip(service.id);
                      }}
                    >
                      Back to front
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        
      </div>
    </section>
  );
};

export default Services;