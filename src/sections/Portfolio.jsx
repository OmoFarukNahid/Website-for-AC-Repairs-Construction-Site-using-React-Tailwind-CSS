// src/sections/Portfolio.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, slideUpVariants, zoomInVariants } from './animation';

// Replace with your actual project images
const projects = [
  { id: 1, category: 'plumbing', title: 'Pipe Replacement', image: 'plumbing1.jpg' },
  { id: 2, category: 'electrical', title: 'Wiring Upgrade', image: 'electrical1.jpg' },
  { id: 3, category: 'carpentry', title: 'Door Installation', image: 'carpentry1.jpg' },
  // Add more projects...
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={slideUpVariants} className="text-yellow-500 text-lg font-semibold mb-2">
            OUR WORK
          </motion.h2>
          <motion.h1 variants={slideUpVariants} className="text-white text-4xl font-bold mb-4">
            Recent Projects
          </motion.h1>
          <motion.div variants={slideUpVariants} className="w-20 h-1 bg-yellow-500 mx-auto"></motion.div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          variants={staggerContainer}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {['all', 'plumbing', 'electrical', 'carpentry'].map((filter) => (
            <motion.button
              key={filter}
              variants={slideUpVariants}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full capitalize ${activeFilter === filter
                  ? 'bg-yellow-500 text-black'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={zoomInVariants}
              whileHover={{ scale: 1.03 }}
              className="relative group overflow-hidden rounded-lg"
            >
              <div className="h-64 bg-gray-800 flex items-center justify-center">
                {/* Replace with actual image */}
                <span className="text-gray-500">[Project: {project.title}]</span>
              </div>
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <h3 className="text-white text-xl font-bold">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;