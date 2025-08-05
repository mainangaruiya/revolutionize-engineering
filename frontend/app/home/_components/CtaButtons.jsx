"use client";

import { motion } from "framer-motion";
import { AiOutlineProject, AiOutlineFileAdd } from "react-icons/ai";
import { MdAssignment } from "react-icons/md";

/**
 * A CtaButtons component for the "Revolutionize Engineering" platform.
 * This component displays three prominent call-to-action buttons within
 * interactive cards. The design now uses a clean white theme,
 * with Tailwind CSS for a responsive grid layout and Framer Motion for
 * dynamic hover and entrance animations. Each button links to a different page.
 */
const CtaButtons = () => {
  // Array of CTA data, making the component scalable and easy to modify.
  const ctaItems = [
    {
      icon: <AiOutlineProject size={40} className="text-[#00FFFF]" />,
      title: "View Listed Projects",
      description:
        "Explore a wide range of innovative projects and find your next challenge.",
      href: "/projects", // Example URL for the projects page
    },
    {
      icon: <MdAssignment size={40} className="text-[#00FFFF]" />,
      title: "Apply to Work",
      description:
        "Apply for hands-on experience and collaborate on industry-led solutions.",
      href: "/application", // Example URL for the application page
    },
    {
      icon: <AiOutlineFileAdd size={40} className="text-[#00FFFF]" />,
      title: "Post a Project",
      description:
        "Industry professionals can post projects and connect with talented students.",
      href: "/post-project", // Example URL for the project posting page
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

  // Animation variants for each individual card's entrance and hover effects.
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
      scale: 1.05,
      boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <div className="flex items-center justify-center p-16 bg-gray-50 font-sans text-gray-900">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto w-full"
        variants={containerVariants} // Apply container variants here
        initial="hidden"
        whileInView="visible" // Animate when the section comes into view
        viewport={{ once: true, amount: 0.3 }} // Animate once when 30% in view
      >
        {ctaItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl p-8 flex flex-col items-start justify-between shadow-xl cursor-pointer"
            variants={itemVariants} // Apply item variants for individual cards
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
  );
};

export default CtaButtons;
