// src/sections/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, staggerContainer } from './animation';
import aboutImage from '../assets/Project5.jpg'; // Adjust the path to your image

const About = () => {
  return (
    <section id="about" className="bg-gray-700 section-padding"> {/* Added transparency with bg-black/80 */}
      <div className="container-width">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
        >
          <motion.div 
            variants={slideUpVariants}
            className="lg:w-1/2 w-full space-y-8"
          >
            <div className="section-header lg:text-left">
              <motion.h2 variants={slideUpVariants} className="section-title">
                ABOUT US
              </motion.h2>
              <motion.h1 variants={slideUpVariants} className="section-heading lg:text-left">
                Trusted Repair & Maintenance Services
              </motion.h1>
              <motion.div variants={slideUpVariants} className="divider lg:mx-0" />
            </div>
            
            <motion.p variants={slideUpVariants} className="text-black/90 text-lg">
              We are a team of skilled professionals dedicated to providing top-quality repair and maintenance services. With years of experience in the industry, we guarantee satisfaction for all our clients.
            </motion.p>
            
            <motion.ul variants={staggerContainer} className="space-y-4">
              {[
                "24/7 Emergency Services",
                "Licensed & Insured Professionals",
                "Free Estimates",
                "100% Satisfaction Guarantee"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  variants={slideUpVariants}
                  className="flex items-center gap-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-white">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div 
            variants={slideUpVariants}
            className="lg:w-1/2 w-full relative"
          >
            <div className="relative aspect-w-16 aspect-h-9 bg-gray-800 rounded-xl overflow-hidden">
              {/* Image implementation */}
              <img 
                src={aboutImage} 
                alt="Our team working on repair services" 
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 p-6 rounded-lg shadow-xl">
                <p className="text-black text-2xl font-bold">10+</p>
                <p className="text-black">Years Experience</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;