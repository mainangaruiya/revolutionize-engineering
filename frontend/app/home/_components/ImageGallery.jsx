"use client";

import { motion } from "framer-motion";
import {
  AiOutlineProject,
  AiOutlineFileAdd,
  MdAssignment,
} from "react-icons/ai"; // Keeping react-icons import as it was specified in the initial prompt

/**
 * A React component that displays a gallery of past project images
 * with captions. Designed for the "Revolutionize Engineering" platform
 * following the "Futuristic Horizon" theme, it features a responsive
 * grid layout, dynamic animations, and clear typography.
 */
const ImageGallery = () => {
  // Data for the image gallery items, including placeholder image sources.
  const projects = [
    {
      src: "https://placehold.co/600x400/1a1a1a/00FFFF?text=MamaPesa",
      alt: "Screenshot of MamaPesa app",
      caption:
        "MamaPesa: A Generative AI-powered financial inclusion app for women in Kenya.",
    },
    {
      src: "https://placehold.co/600x400/1a1a1a/00FFFF?text=ShopOkoa",
      alt: "Screenshot of ShopOkoa platform",
      caption: "ShopOkoa: Kenya's first digital shopkeeper credit platform.",
    },
    {
      src: "https://placehold.co/600x400/1a1a1a/00FFFF?text=Biz+Mkononi",
      alt: "Screenshot of Biz Mkononi app",
      caption:
        "Biz Mkononi: An AI-powered mobile app for SME business analytics.",
    },
  ];

  // Animation variants for the container to fade in the entire section.
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  // Animation variants for each individual image card.
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    hover: {
      scale: 1.03,
      boxShadow: "0 0 25px rgba(0, 255, 255, 0.4)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      className="bg-[#0A0A0A] px-4 py-20 font-serif text-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Success Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-neutral-900 rounded-2xl overflow-hidden shadow-xl cursor-pointer"
              variants={itemVariants}
              whileHover="hover"
            >
              <img
                src={project.src}
                alt={project.alt}
                className="w-full h-64 object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/600x400/666666/ffffff?text=Image+Error";
                }}
              />
              <div className="p-6">
                <p className="text-lg text-neutral-300 leading-relaxed">
                  {project.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ImageGallery;
