"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

/**
 * A Navbar component for the "Revolutionize Engineering" landing page.
 * It features a responsive design with a fixed position, a full-screen mobile
 * menu, and dynamic animations using Framer Motion. The styling now uses a
 * solid black background at all times, with a blur effect appearing on scroll,
 * and a sans-serif font. The mobile menu also covers the full screen and
 * includes a prominent close icon.
 */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle the mobile menu's state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Effect to handle the scroll state change for the blur effect
  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled past 50 pixels
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add event listener for the scroll event
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  // Define navigation links
  const navLinks = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "Projects", href: "#projects" },
    { name: "Events", href: "#events" },
    { name: "Partners", href: "#partners" },
    { name: "About", href: "#about" },
  ];

  // Animation variants for the mobile menu's slide-down effect
  const menuVariants = {
    hidden: {
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    visible: {
      y: "0%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  // Animation variants for the hover effect on desktop links
  const linkHoverVariants = {
    hover: {
      color: "#00FFFF", // Accent color
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 px-4 py-4 font-sans text-white bg-[#0A0A0A] bg-opacity-90 shadow-lg transition-all duration-500
        ${isScrolled ? "backdrop-blur-sm" : ""}`} // Apply blur only when scrolled
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Platform Name / Logo */}
        <a href="#" className="flex items-center gap-3">
          <img
            src="/images/logo.png" // Logo image source
            alt="Revolutionize Engineering Logo"
            className="h-10 w-10 rounded-full object-cover" // Rounded logo styling
          />
          <span className="text-2xl font-bold tracking-wide">
            Revolutionize Engineering
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="hover:underline transition-colors duration-300"
              variants={linkHoverVariants}
              whileHover="hover"
            >
              {link.name}
            </motion.a>
          ))}
          {/* Desktop CTA Button */}
          <motion.a
            href="#"
            className="bg-[#00FFFF] text-neutral-900 font-bold py-2 px-6 rounded-full transition-colors duration-300 hover:bg-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Post a Project
          </motion.a>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle navigation menu">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 w-full h-screen bg-[#0A0A0A] bg-opacity-90 backdrop-blur-sm z-[51] flex flex-col items-center justify-center gap-8"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {/* Close button for mobile menu */}
            <button
              onClick={toggleMenu}
              className="absolute top-6 right-6 text-white"
              aria-label="Close navigation menu"
            >
              <FaTimes size={30} />
            </button>

            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-3xl font-bold hover:text-[#00FFFF] transition-colors duration-300"
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            ))}
            {/* Mobile CTA Button */}
            <a
              href="#"
              className="bg-[#00FFFF] text-neutral-900 font-bold py-3 px-8 mt-4 rounded-full text-xl"
              onClick={toggleMenu}
            >
              Post a Project
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
