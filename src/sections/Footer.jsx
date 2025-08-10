import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, staggerContainer } from './animation';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const links = [
    { 
      title: "Quick Links", 
      items: [
        { name: "Home", href: "#hero" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Contact", href: "#contact" }
      ] 
    },
    { 
  title: "Services", 
  items: [
    { name: "AC, Ventilation & Filtration", href: "#air-conditioning-ventilation-air-filtration" },
    { name: "Air System Inst. & Maint", href: "#air-system-installation-maintenance" },
    { name: "Plaster Works", href: "#plaster-works" },
    { name: "Floor & Wall Tiling", href: "#floor-wall-tiling-works" },
    { name: "Electromech. Equip. Inst. & Maint", href: "#electromechanical-equipment-installation-maintenance" },
    { name: "Plumbing & Sanitary Inst", href: "#plumbing-sanitary-installation" }
  ] 
    },
    { 
      title: "Legal", 
      items: [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" },
        { name: "Licenses", href: "#licenses" }
      ] 
    }
  ];

  const socialIcons = [
    { icon: <FaFacebook />, url: "#" },
    { icon: <FaTwitter />, url: "#" },
    { icon: <FaInstagram />, url: "#" },
    { icon: <FaLinkedin />, url: "#" }
  ];

  return (
    <footer className="bg-gray-900 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12"
        >
          {/* Company Info */}
          <motion.div variants={slideUpVariants}>
            <h3 className="text-yellow-500 text-xl font-bold mb-6">RepairPro</h3>
            <p className="text-gray-400 mb-6">
              Professional repair and maintenance services with over 10 years of experience serving residential and commercial clients.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-yellow-500 hover:text-black transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {links.map((group, index) => (
            <motion.div key={index} variants={slideUpVariants}>
              <h4 className="text-white text-lg font-semibold mb-6">{group.title}</h4>
              <ul className="space-y-3">
                {group.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a 
                      href={item.href} 
                      className="text-gray-400 hover:text-yellow-500 transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter */}
          <motion.div variants={slideUpVariants}>
            <h4 className="text-white text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to get updates on our latest offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full"
              />
              <button className="bg-yellow-500 text-black px-4 py-2 rounded-r-lg hover:bg-yellow-400 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="border-t border-gray-800 pt-8 text-center"
        >
          <p className="text-gray-500">
            &copy; {currentYear} RepairPro. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;