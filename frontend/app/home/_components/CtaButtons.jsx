"use client";

import { motion } from "framer-motion";
import { AiOutlineProject, AiOutlineFileAdd } from "react-icons/ai";
import { MdAssignment } from "react-icons/md";

/**
 * CtaButtons Component
 * Displays three animated call-to-action cards for the platform.
 * Includes subtle scroll-triggered entrance animations with slight offsets
 * and smooth hover/tap interactions for a polished feel.
 */
const CtaButtons = () => {
  // CTA items data
  const ctaItems = [
    {
      icon: <AiOutlineProject size={40} className="text-[#00FFFF]" />,
      title: "View Listed Projects",
      description:
        "Students can explore innovative projects across emerging technologies, learn about the objectives, required skills, and apply to work on them.",
      href: "/view-projects",
    },
    {
      icon: <MdAssignment size={40} className="text-[#00FFFF]" />,
      title: "Apply to Work",
      description:
        "Students can apply to work on projects, gaining real-world experience and contributing to industry-led solutions.",
      href: "/apply-project",
    },
    {
      icon: <AiOutlineFileAdd size={40} className="text-[#00FFFF]" />,
      title: "Post a Project",
      description:
        "Industry professionals, startups, and academic institutions can post projects, inviting talented students to collaborate, innovate, and contribute fresh perspectives.",
      href: "/post-project",
    },
  ];

  // Parent container animation (controls stagger + slight offset)
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delayChildren: 0.2, // small delay before children start animating
        staggerChildren: 0.15, // slight offsets for cascading effect
      },
    },
  };

  // Individual card animation
  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    tap: { scale: 0.98 },
  };

  return (
    <div className="flex flex-col items-center bg-gray-50 font-sans text-gray-900">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 mt-8">
        How It Works
      </h2>
      <div className="flex items-center justify-center p-8 bg-gray-50 font-sans text-gray-900">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {ctaItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 flex flex-col items-start justify-between shadow-xl cursor-pointer"
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <div className="flex items-center mb-4">
                {item.icon}
                <h3 className="text-2xl font-bold ml-4">{item.title}</h3>
              </div>
              <p className="text-gray-700 text-lg mb-6">{item.description}</p>
              <a
                href={item.href}
                className="bg-[#00FFFF] text-neutral-900 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
              >
                Learn More
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CtaButtons;
