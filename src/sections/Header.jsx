// src/sections/Header.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, staggerContainer } from './animation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full bg-black/80 backdrop-blur-sm z-50 border-b border-gray-800 transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Left side: Logo or Compact Title */}
        {!isScrolled ? (
          <motion.a
            href="#"
            variants={slideUpVariants}
            initial="hidden"
            animate="visible"
            className="group flex flex-col items-center text-center"
          >
            <span className="text-yellow-500 font-bold text-2xl">
              ةينفلا تامدخلل مياص نيب رمع |{' '}
              <span className="text-white group-hover:text-orange-500 transition-colors duration-300">
                Omar Bin{' '}
              </span>
              <span className="text-green-500 group-hover:text-orange-500 transition-colors duration-300">
                Sayem
              </span>
            </span>
            <span className="mt-1">
              <span className="text-lg font-semibold text-blue-400 group-hover:text-orange-400 transition-colors duration-300">
                Technical
              </span>{' '}
              <span className="text-base text-gray-300 group-hover:text-orange-400 transition-colors duration-300">
                Services
              </span>
            </span>
          </motion.a>
        ) : (
  <motion.a
    href="#"
    variants={slideUpVariants}
    initial="hidden"
    animate="visible"
    className="group flex items-center"
  >
    <span className="text-yellow-500 font-bold text-lg">
      Omor Bin{' '}
      <span className="text-green-500">Sayem</span>
    </span>
  </motion.a>
)}

        {/* Right side: Desktop Nav or Mobile Toggle */}
        {!isScrolled ? (
          // Desktop nav - unchanged
          <motion.nav
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="hidden md:flex gap-8"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                variants={slideUpVariants}
                href={link.href}
                className="text-white hover:text-yellow-500 transition-colors duration-300 text-sm font-semibold uppercase"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.nav>
        ) : (
          // Compact nav layout
          <>
            <motion.nav
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="hidden md:flex gap-6"
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  variants={slideUpVariants}
                  href={link.href}
                  className="text-white hover:text-yellow-500 transition-colors duration-300 text-sm font-semibold uppercase"
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.nav>

            {/* Mobile hamburger menu */}
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/95 p-4"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white hover:text-yellow-500 transition-colors duration-300 py-2 border-b border-gray-800"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
