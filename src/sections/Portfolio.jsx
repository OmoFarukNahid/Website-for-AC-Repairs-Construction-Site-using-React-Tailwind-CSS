// src/sections/Portfolio.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, slideUpVariants, zoomInVariants } from './animation';
import useLegalModal from './useLegalModel'; // Import the modal hook

// Import images
import plumbing1 from '../assets/plumbing1.jpg';
import plumbing2 from '../assets/plumbing2.jpg'; // Added for modal
import plumbing3 from '../assets/plumbing3.jpg'; // Added for modal
import electrical1 from '../assets/electrical1.jpg';
import electrical2 from '../assets/electrical2.jpg'; // Added for modal
import electrical3 from '../assets/electrical3.jpg'; // Added for modal
import carpentry1 from '../assets/carpentry1.jpg';
import carpentry3 from '../assets/carpentry3.jpg'; // Added for modal
import ac1 from '../assets/ac1.jpg';
import ac2 from '../assets/ac2.jpg'; // Added for modal
import ac3 from '../assets/ac3.jpg'; // Added for modal
import maintenance2 from '../assets/maintenance2.jpg'; // Added for modal
import maintenance3 from '../assets/maintenance3.jpg'; // Added for modal
import plaster1 from '../assets/plaster1.jpg';
import plaster2 from '../assets/plaster2.jpg'; // Added for modal
import plaster3 from '../assets/plaster3.jpg'; // Added for modal
import wall from '../assets/wal.jpg'; // Example image for modal
import wal2 from '../assets/wal2.jpg'; // Example image for modal
import main from '../assets/main.jpg'; // Example image for modal
import tile2 from '../assets/tile2.jpg'; // Added for modal
import tile3 from '../assets/tile3.jpg'; // Added for modal
import tile4 from '../assets/tile3.jpg'; // Added for modal
import clt from '../assets/clt.jpg'; // Example image for modal

// Import Videos
import demo from '../assets/pul v.mp4'; // Example video for modal
import demo2 from '../assets/pipe.mp4'; // Example video for modal
import demo3 from '../assets/tile.mp4'; // Example video for modal
import demo6 from '../assets/demo6.mp4'; // Example video for modal
import demo7 from '../assets/demo7.mp4';
//
const projects = [
  {
    id: 1,
    category: 'plumbing',
    title: 'Pipe Replacement',
    image: plumbing1,
    modalImages: [demo2,plumbing1, plumbing2, plumbing3 ] // Added related images
  },
  {
    id: 2,
    category: 'electrical',
    title: 'Wiring Upgrade',
    image: electrical1,
    modalImages: [electrical1,carpentry1, demo, demo6, demo7, electrical2 ]// Added related images
  },
  {
    id: 3,
    category: 'Floor & Wall Tiling',
    title: 'Floor & Wall Tiling',
    image: tile2,
    modalImages: [demo3, tile2, tile3, tile4, carpentry3, wal2] // Added related images
  },
  {
    id: 4,
    category: 'air conditioning',
    title: 'AC Installation',
    image: ac1,
    modalImages: [ac1, ac2, ac3] // Added related images
  },
  {
    id: 5,
    category: 'maintenance',
    title: 'Routine Checkup',
    image: maintenance2,
    modalImages: [ maintenance2, maintenance3, main] // Added related images
  },
  {
    id: 6,
    category: 'plaster works',
    title: 'Wall Plastering',
    image: plaster1,
    modalImages: [plaster1, wall, plaster2, clt, plaster3] // Added related images
  },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { openModal, modalElement } = useLegalModal(); // Use the modal hook

  const handleProjectClick = (project) => {
    openModal('project', {
      title: project.title,
      images: project.modalImages, // old image array
    });
  };

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gray-700">
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
          {['all', 'plumbing', 'electrical', 'Floor & Wall Tiling', 'air conditioning', 'maintenance', 'plaster works'].map((filter) => (
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
              className="relative group overflow-hidden rounded-lg cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />

              {/* Pulsing Gallery Badge */}
              <span className="absolute bottom-2 right-2 bg-white text-black px-2 py-1 rounded-full text-xs font-medium animate-pulse shadow-md">
                📷 Gallery
              </span>

              {/* Hover Overlay */}
              <div
                className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
              >
                <h3 className="text-white text-xl font-bold">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {modalElement} {/* Render the modal */}
      </div>
    </section>
  );
};

export default Portfolio;