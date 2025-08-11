// src/sections/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, staggerContainer } from "./animation";
import aboutImage from "../assets/Project5.jpg";
import useLegalModal from "../sections/useLegalModel";
import { FaCertificate, FaFileAlt, FaFileContract } from "react-icons/fa";

const About = () => {
  const { openModal, modalElement } = useLegalModal();

  return (
    <section id="about" className="bg-gray-700 section-padding">
      <div className="container-width">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
        >
          {/* Text Section */}
          <motion.div variants={slideUpVariants} className="lg:w-1/2 w-full space-y-8 text-justify">
            <div className="section-header lg:text-left">
              <motion.h1 variants={slideUpVariants} className="section-title">
                ABOUT US
              </motion.h1>
              <motion.h5 variants={slideUpVariants} className="section-heading lg:text-left">
                Trusted Repair & Maintenance Services
              </motion.h5>
              <motion.div variants={slideUpVariants} className="divider lg:mx-0" />
            </div>

            <motion.p
              variants={slideUpVariants}
              className="text-gray-300 text-lg leading-relaxed"
            >
              Omor Bin Sayem | Technical Services is a trusted provider of high-quality repair,
              installation, and maintenance solutions in Dubai, delivering expert services for residential, commercial, and industrial clients.
              Our work spans air conditioning, ventilation, and air filtration systems; air system installation and maintenance; plaster works; floor and wall tiling; electromechanical equipment installation and servicing; and comprehensive plumbing and sanitary solutions. With years of hands-on experience, certified professionals, and a commitment to precision, reliability, and customer satisfaction,
              we ensure every project meets the highest standards of quality and safety. Whether it’s creating comfortable indoor climates, enhancing interior finishes, or maintaining complex mechanical systems, we bring technical expertise, timely delivery, and cost-effective solutions to every job.
            </motion.p>

            <motion.ul variants={staggerContainer} className="space-y-4">
              {[
                "24/7 Emergency Services",
                "Licensed & Insured Professionals",
                "Free Estimates",
                "100% Satisfaction Guarantee",
              ].map((item, index) => (
                <motion.li key={index} variants={slideUpVariants} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-white">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Mini Legal & Certifications Section (polished icon style) */}
            <motion.div
              variants={slideUpVariants}
              className="bg-gray-800 rounded-lg shadow-lg p-4 mt-6 border border-yellow-500 hover:shadow-yellow-500/50 transition-all"
            >
              <h4 className="text-yellow-500 font-semibold mb-3">Legal & Certifications</h4>

              <div className="flex flex-wrap gap-4">
                {/* Licensed (opens Licenses images) */}


                {/* Privacy Policy (opens privacy modal) */}
                <button
                  onClick={() => openModal("privacy")}
                  className="flex items-center gap-2 text-white hover:text-yellow-400 transition px-2 py-1 rounded"
                >
                  <FaFileAlt className="text-yellow-500" />
                  <span>Privacy Policy</span>
                </button>

                {/* Terms of Service (opens terms modal) */}
                <button
                  onClick={() => openModal("terms")}
                  className="flex items-center gap-2 text-white hover:text-yellow-400 transition px-2 py-1 rounded"
                >
                  <FaFileContract className="text-yellow-500" />
                  <span>Terms of Service</span>
                </button>
                <button
                  onClick={() => openModal("licenses")}
                  className="flex items-center gap-2 text-white hover:text-yellow-400 transition px-2 py-1 rounded"
                >
                  <FaCertificate className="text-yellow-500" />
                  <span>Licenses</span>
                </button>
              </div>

              <p className="text-gray-400 text-sm mt-2">Click to view our company policies & documentation.</p>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div variants={slideUpVariants} className="lg:w-1/2 w-full relative">
            <div className="relative aspect-w-16 aspect-h-9 bg-gray-800 rounded-xl overflow-hidden">
              <img src={aboutImage} alt="Our team working on repair services" className="w-full h-full object-cover" />
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 p-6 rounded-lg shadow-xl">
                <p className="text-black text-2xl font-bold">10+</p>
                <p className="text-black">Years Experience</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {modalElement}
    </section>
  );
};

export default About;
