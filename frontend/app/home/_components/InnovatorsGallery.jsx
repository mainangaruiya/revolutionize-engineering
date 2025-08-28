"use client";

import { motion } from "framer-motion";

const InnovatorsGallery = () => {
  const images = [
    { src: "/images/d4.jpg", alt: "Project image 1" },
    { src: "/images/d1.jpg", alt: "Project image 2" },
    { src: "/images/d3.jpg", alt: "Project image 3" },
  ];

  // Parent animation: handles stagger (cascade effect)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2, // wait a bit before children start
        staggerChildren: 0.3, // time gap between each card
      },
    },
  };

  // Each card fade/slide in
  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="bg-[#0A0A0A] px-4 py-20 font-sans text-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={containerVariants}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center text-center bg-neutral-900 rounded-2xl overflow-hidden shadow-xl cursor-pointer"
              variants={cardVariants}
              whileHover={{
                y: -6, // lift effect
                boxShadow: "0 12px 25px rgba(0, 255, 255, 0.25)", // cyan glow
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
            >
              <PanImage src={image.src} alt={image.alt} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

// 🔹 Smooth zoom-on-hover image
const PanImage = ({ src, alt }) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      className="w-full h-full object-cover rounded-2xl"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: 1.08,
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src =
          "https://placehold.co/400x400/666666/ffffff?text=Image+Error";
      }}
    />
  );
};

export default InnovatorsGallery;
