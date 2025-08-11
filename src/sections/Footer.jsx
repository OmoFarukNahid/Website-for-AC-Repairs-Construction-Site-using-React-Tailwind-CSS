import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, staggerContainer } from "./animation";

import useLegalModal from "../sections/useLegalModel";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { openModal, modalElement } = useLegalModal();

  const links = [
    {
      title: "Quick Links",
      items: [
        { name: "Home", href: "#hero" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Services",
      items: [
        { name: "AC, Ventilation & Filtration", href: "#air-conditioning-ventilation-air-filtration" },
        { name: "Air System Inst. & Maint", href: "#air-system-installation-maintenance" },
        { name: "Plaster Works", href: "#plaster-works" },
        { name: "Floor & Wall Tiling", href: "#floor-wall-tiling-works" },
        { name: "Electromech. Equip. Inst. & Maint", href: "#electromechanical-equipment-installation-maintenance" },
        { name: "Plumbing & Sanitary Inst", href: "#plumbing-sanitary-installation" },
      ],
    },
    {
      title: "Legal",
      items: [
        { name: "Privacy Policy", onClick: () => openModal("privacy") },
        { name: "Terms of Service", onClick: () => openModal("terms") },
        { name: "Licenses", onClick: () => openModal("licenses") },
      ],
    },
  ];

  return (
    <>
      <footer className="bg-gray-900 pt-20 pb-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12"
          >
            {/* Company Info - UPDATED with Arabic + English styled title */}
            <motion.div variants={slideUpVariants}>
              <motion.a
                href="#"
                variants={slideUpVariants}
                initial="hidden"
                animate="visible"
                className="group flex flex-col items-center text-center mb-6"
              >
                <span className="text-yellow-500 font-bold text-2xl">
                  ةينفلا تامدخلل مياص نيب رمع |{" "}
                  <span className="text-white group-hover:text-orange-500 transition-colors duration-300">
                    Omar Bin{" "}
                  </span>
                  <span className="text-green-500 group-hover:text-orange-500 transition-colors duration-300">
                    Sayem
                  </span>
                </span>
                <span className="mt-1">
                  <span className="text-lg font-semibold text-blue-400 group-hover:text-orange-400 transition-colors duration-300">
                    Technical
                  </span>{" "}
                  <span className="text-base text-gray-300 group-hover:text-orange-400 transition-colors duration-300">
                    Services
                  </span>
                </span>
              </motion.a>

              <p className="text-gray-400 mb-6 text-center">
                Professional repair and maintenance services with over 10 years of
                experience serving residential and commercial clients.
              </p>
            </motion.div>

            {/* Footer Links */}
            {links.map((group, index) => (
              <motion.div key={index} variants={slideUpVariants}>
                <h4 className="text-white text-lg font-semibold mb-6">{group.title}</h4>
                <ul className="space-y-3">
                  {group.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      {item.onClick ? (
                        <button
                          onClick={item.onClick}
                          className="text-gray-400 hover:text-yellow-500 transition-colors"
                        >
                          {item.name}
                        </button>
                      ) : (
                        <a
                          href={item.href}
                          className="text-gray-400 hover:text-yellow-500 transition-colors"
                        >
                          {item.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Newsletter - REMOVED as requested */}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="border-t border-gray-800 pt-8 text-center"
          >
            <p className="text-gray-500">
              &copy; {currentYear} Omar Bin Sayem - Technical Services. All Rights Reserved.
            </p>
          </motion.div>
        </div>
      </footer>

      {modalElement}
    </>
  );
}
