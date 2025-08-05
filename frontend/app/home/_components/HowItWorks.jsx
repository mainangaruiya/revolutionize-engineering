"use client";

import { motion } from "framer-motion";
import { AiOutlineProject, AiOutlineFileAdd } from "react-icons/ai";
import { MdAssignment } from "react-icons/md";

/**
 * A HowItWorks component for the "Revolutionize Engineering" platform.
 * This section outlines the three core steps for students and professionals.
 * It uses a three-column responsive grid, distinct cards for each step,
 * and Framer Motion for interactive hover and entrance animations. The theme has been
 * updated to a white background with high-contrast dark text and a sans-serif font.
 */
const HowItWorks = () => {
  // Array of steps to display in the component. This makes the component
  // easy to scale and modify by simply updating this array.
  const steps = [
    {
      icon: <AiOutlineProject size={48} className="text-[#00FFFF] mb-4" />,
      title: "View Listed Projects",
      description:
        "Students can explore innovative projects across emerging technologies, learn about the objectives, required skills, and apply to work on them.",
    },
    {
      icon: <MdAssignment size={48} className="text-[#00FFFF] mb-4" />,
      title: "Apply to Work",
      description:
        "Students can apply to work on projects, gaining real-world experience and contributing to industry-led solutions.",
    },
    {
      icon: <AiOutlineFileAdd size={48} className="text-[#00FFFF] mb-4" />,
      title: "Post a Project",
      description:
        "Industry professionals, startups, and academic institutions can post projects, inviting talented students to collaborate, innovate, and contribute fresh perspectives.",
    },
  ];

  // Animation variants for the card entrance effect
  // This makes the cards fade in and slide up from the bottom.
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
  };

  // Animation variants for the card hover effect
  const cardHoverVariants = {
    // Renamed to avoid conflict with itemVariants.visible
    hover: {
      scale: 1.05,
      boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="bg-white px-4 py-20 font-sans text-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300"
              variants={itemVariants} // Apply entrance animation variants here
              initial="hidden"
              whileInView="visible" // Animate when card comes into view
              viewport={{ once: true, amount: 0.3 }} // Animate once when 30% in view
              whileHover="hover" // Apply hover animation here
              transition={{ delay: index * 0.2 }} // Stagger the entrance animation
            >
              {/* Icon for the step */}
              {step.icon}
              {/* Title of the step */}
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              {/* Description of the step */}
              <p className="text-lg text-gray-700">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
