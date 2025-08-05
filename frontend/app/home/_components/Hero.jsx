"use client";

import { motion } from "framer-motion";

/**
 * A Hero component for the "Revolutionize Engineering" platform,
 * designed with a "Futuristic Horizon" theme. It features a prominent title
 * and mission statement with responsive styling and dynamic fade-in
 * animations using Framer Motion. The background includes an image
 * with a dark overlay to ensure text readability, and a new call-to-action
 * button has been added. The font has been changed to sans-serif.
 */
const Hero = () => {
  // Animation variants for the text elements (title and mission statement).
  // This provides a subtle vertical slide and fade-in effect from the bottom.
  const textVariants = {
    initial: {
      y: 20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  // Animation variants for the button's entrance, hover, and tap effects
  const buttonVariants = {
    // Entrance animation
    initial: {
      y: 20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        delay: 1.0, // Delay the button animation to appear after the text
      },
    },
    // Hover animation
    hover: {
      scale: 1.05,
      boxShadow: "0 0 20px #00FFFF",
      transition: { duration: 0.3 },
    },
    // Tap animation
    tap: {
      scale: 0.95,
    },
  };

  return (
    <div
      className="relative flex items-center justify-center h-[92svh] px-4 py-16 font-sans text-white bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: "url('/images/1.jpg')" }}
    >
      {/* Dark overlay to ensure text is readable against the background image */}
      <div className="absolute inset-0 bg-black/77"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Main title with a fade-in and slide-up animation */}
        <motion.h1
          className="text-4xl md:text-7xl font-extrabold leading-none tracking-tight mb-4"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          Revolutionize Engineering: Empowering Africa's
          Innovators.
        </motion.h1>

        {/* Mission statement with a delayed fade-in and slide-up animation */}
        <motion.p
          className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-8"
          variants={textVariants}
          initial="initial"
          animate="animate"
          transition={{ ...textVariants.animate.transition, delay: 0.5 }}
        >
          We offer engineering students practical experience on live projects
          with industry leaders, preparing them for a fast-evolving tech
          landscape and future employment.
        </motion.p>

        {/* Call-to-action button with entrance, hover, and tap animations */}
        <motion.a
          href="#projects"
          className="inline-block bg-[#00FFFF] text-neutral-900 font-bold py-3 px-8 rounded-full shadow-lg"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          initial="initial"
          animate="animate"
        >
          Explore Projects
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;
