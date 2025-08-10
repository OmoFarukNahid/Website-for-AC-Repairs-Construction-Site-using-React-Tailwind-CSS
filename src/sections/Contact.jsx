// src/sections/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, staggerContainer } from './animation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={slideUpVariants} className="text-yellow-500 text-lg font-semibold mb-2">
            GET IN TOUCH
          </motion.h2>
          <motion.h1 variants={slideUpVariants} className="text-white text-4xl font-bold mb-4">
            Contact Us
          </motion.h1>
          <motion.div variants={slideUpVariants} className="w-20 h-1 bg-yellow-500 mx-auto"></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form 
            onSubmit={handleSubmit}
            variants={slideUpVariants}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-white mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-white mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-white mb-2">Your Message</label>
              <textarea
                id="message"
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              ></textarea>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg hover:bg-yellow-400 transition-colors"
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* Map & Contact Info */}
          <motion.div 
            variants={slideUpVariants}
            className="space-y-8"
          >
            <div className="h-64 bg-gray-800 rounded-lg overflow-hidden">
              {/* Replace with actual map component */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                [Google Maps Embed]
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-gray-300">123 Construction St, Building City, BC 12345</p>
              </div>
              
              <div className="flex items-start gap-4">
  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mt-1">
    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  </div>
  <div className="flex flex-col">
    <a 
      href="https://wa.me/+971502088575" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-gray-300 hover:text-yellow-500 transition-colors"
    >
      +971502088575 (WhatsApp)
    </a>
    <a 
      href="tel:+971522334008" 
      className="text-gray-300 hover:text-yellow-500 transition-colors"
    >
      +971522334008 (Call)
    </a>
  </div>
</div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a 
  href="mailto:mdfaruk208@gmail.com" 
  className="text-gray-300 hover:text-yellow-500 transition-colors"
>
  mdfaruk208@gmail.com
</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;