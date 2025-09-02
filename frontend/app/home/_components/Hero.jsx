"use client";

import { motion } from "framer-motion";

const Hero = () => {
  const textVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  const buttonVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut", delay: 1.0 },
    },
    hover: { scale: 1.05, boxShadow: "0 0 20px #00FFFF", transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  return (
    <div
      className="relative flex items-center justify-center h-[92svh] px-4 py-16 font-sans text-white bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: "url('/images/1.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/77"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-7xl font-extrabold leading-none tracking-tight mb-4"
          variants={textVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.3 }}
        >
          Revolutionize Engineering: Empowering Africa's Innovators.
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-8"
          variants={textVariants}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          We offer engineering students practical experience on live projects
          with industry leaders, preparing them for a fast-evolving tech
          landscape and future employment.
        </motion.p>

        <motion.a
          href="#projects"
          className="inline-block bg-[#00FFFF] text-neutral-900 font-bold py-3 px-8 rounded-full shadow-lg"
          variants={buttonVariants}
          initial="initial"
          whileInView="animate"
          whileHover="hover"
          whileTap="tap"
          viewport={{ once: false, amount: 0.3 }}
        >
          Explore Projects
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;
