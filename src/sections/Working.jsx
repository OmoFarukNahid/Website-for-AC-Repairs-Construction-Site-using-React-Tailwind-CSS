// src/sections/Working.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { planning } from '../export';
import { staggerContainer, slideUpVariants } from './animation';

const Working = () => {
  return (
    <section id="process" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 variants={slideUpVariants} className="text-yellow-500 text-lg font-semibold mb-2">
            OUR PROCESS
          </motion.h2>
          <motion.h1 variants={slideUpVariants} className="text-white text-4xl font-bold mb-4">
            How We Work
          </motion.h1>
          <motion.div variants={slideUpVariants} className="w-20 h-1 bg-yellow-500 mx-auto"></motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
        >
          {planning.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={index}
                variants={slideUpVariants}
                whileHover={{ y: -10 }}
                className="bg-gray-800 p-8 rounded-lg text-center"
              >
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="text-black text-2xl" />
                </div>
                <h3 className="text-white text-xl font-bold mb-4 capitalize">{step.title}</h3>
                <p className="text-gray-400">{step.about}</p>
                <div className="mt-6 text-yellow-500 font-bold text-lg">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Working;