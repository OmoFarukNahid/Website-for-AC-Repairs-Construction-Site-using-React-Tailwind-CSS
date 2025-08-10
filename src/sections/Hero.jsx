import React from 'react';
import heroimg from '../assets/heroimg.png';
import backgroundImage from '../assets/homeimg.webp';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants, staggerContainer } from './animation';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 py-24 lg:py-0">
        {/* Text Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, margin: "-100px" }}
          className="lg:w-1/2 w-full space-y-6 lg:space-y-8 text-center lg:text-left"
        >
          <motion.p 
            variants={slideUpVariants}
            className="text-yellow-500 font-semibold tracking-widest text-lg"
          >
            PROFESSIONAL REPAIR SERVICES
          </motion.p>

          <motion.h1
            variants={slideUpVariants}
            className="text-white uppercase text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Expert <span className="text-yellow-500">Maintenance</span> & Renovation Solutions
          </motion.h1>

          <motion.div 
            variants={slideUpVariants}
            className="w-32 h-1.5 bg-yellow-500 mx-auto lg:mx-0"
          ></motion.div>

          <motion.p
            variants={slideUpVariants}
            className="text-gray-300 text-lg md:text-xl max-w-lg"
          >
            Trusted by homeowners and businesses for over a decade. 24/7 emergency services available.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.button
              variants={zoomInVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg shadow-yellow-500/20"
            >
              Get Free Estimate
            </motion.button>
            <motion.button
              variants={zoomInVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white hover:border-yellow-500 hover:text-yellow-500 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300"
            >
              Emergency Call
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          viewport={{ once: true }}
          className="lg:w-1/2 w-full flex justify-center lg:justify-end relative"
        >
          <motion.img
            src={heroimg}
            alt="Repair Technician"
            className="w-full max-w-xl lg:max-w-none lg:h-[700px] object-contain object-center"
            whileHover={{ 
              rotate: 1,
              transition: { duration: 0.5 }
            }}
          />
          <motion.div 
            className="absolute -bottom-10 -left-10 bg-yellow-500 p-6 rounded-lg shadow-2xl hidden lg:block"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-black font-bold text-xl">10+ Years Experience</p>
          </motion.div>
        </motion.div>
      </div>

      
    </section>
  );
};

export default Hero;