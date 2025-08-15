"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

/**
 * A simple email signup component with an improved, sleek design.
 * This component features a single, prominent card with a title, description,
 * and a responsive form. It has been updated to a light theme with
 * dynamic hover and entrance animations using Framer Motion.
 */
const EmailSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/email-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      alert(data.message);
      setEmail('');
    } catch (err) {
      alert('Something went wrong!');
    }
  };

  // Animation variants for the container's entrance and hover effects
  const containerVariants = {
    hidden: { opacity: 0, y: 50 }, // Initial state for entrance animation
    visible: {
      // Final state for entrance animation
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
    hover: {
      // Hover effect
      boxShadow: "0 0 30px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  // Animation variants for the button's hover and tap effects
  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <div className="flex items-center justify-center p-8 bg-white font-sans text-gray-900 min-h-[50vh]">
      <motion.div
        className="w-full max-w-2xl p-8 rounded-3xl bg-gray-50 border border-gray-200 text-center shadow-lg transition-all duration-300"
        variants={containerVariants} // Apply entrance animation variants
        initial="hidden"
        whileInView="visible" // Animate when the component comes into view
        viewport={{ once: true, amount: 0.3 }} // Animate once when 30% in view
        whileHover="hover" // Apply hover animation
      >
        {/* Form Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Stay Updated on Events
        </h2>
        {/* Description Text */}
        <p className="text-lg text-gray-700 mb-8">
          Never miss an opportunity to participate in our next event. Enter your
          email to receive updates on upcoming hackathons, workshops, and other
          exciting opportunities.
        </p>

        {/* The Signup Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-4"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email for Event Updates"
            className="flex-1 bg-gray-100 text-gray-900 placeholder-gray-500 py-3 px-6 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00FFFF] transition-all duration-300"
            required
          />
          <motion.button
            type="submit"
            className="flex items-center justify-center gap-2 bg-[#00FFFF] text-gray-900 font-bold py-3 px-6 rounded-full shadow-lg"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Subscribe <FaArrowRight />
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default EmailSignup;
