"use client";

import { motion } from "framer-motion";

/**
 * A React component that displays a gallery of images without text or titles.
 * Designed for the "Revolutionize Engineering" platform following the
 * "Futuristic Horizon" theme, it features a responsive grid layout,
 * square images with rounded corners, and dynamic hover and entrance animations.
 */
const InnovatorsGallery = () => {
  // Data for the images, using placeholder sources.
  const images = [
    {
      src: "/images/d4.jpg", // Updated image source
      alt: "Project image 1",
    },
    {
      src: "/images/d1.jpg",
      alt: "Project image 2",
    },
    {
      src: "/images/d3.jpg",
      alt: "Project image 3",
    },
  ];

  // Animation variants for the container to fade in the entire section.
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3, // Delay before children start animating
        staggerChildren: 0.2, // Stagger delay between each child
      },
    },
  };

  // Animation variants for each individual image card's entrance and hover effects.
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05, // Slightly scale up on hover
      boxShadow: "0 0 25px rgba(0, 255, 255, 0.4)", // Glowing border effect
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      className="bg-[#0A0A0A] px-4 py-20 font-sans text-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible" // Animate when the section comes into view
      viewport={{ once: true, amount: 0.3 }} // Only animate once when 30% in view
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center bg-neutral-900 rounded-2xl overflow-hidden shadow-xl cursor-pointer"
              variants={itemVariants} // Apply itemVariants for entrance and hover
              whileHover="hover"
              // Framer Motion's staggerChildren on the parent will handle initial/visible for children
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-2xl"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/400x400/666666/ffffff?text=Image+Error";
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default InnovatorsGallery;
