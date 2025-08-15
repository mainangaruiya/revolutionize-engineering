"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [user, setUser] = useState(null);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const openLogin = () => {
    setShowRegister(false);
    setShowLogin(true);
  };
  const closeLogin = () => setShowLogin(false);

  const openRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };
  const closeRegister = () => setShowRegister(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setShowUserMenu(false);
  };

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
      } catch {
        localStorage.removeItem("user");
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "Projects", href: "#projects" },
    { name: "Events", href: "#events" },
    { name: "Partners", href: "#partners" },
    { name: "About", href: "#about" },
  ];

  const menuVariants = {
    hidden: { y: "-100%", transition: { duration: 0.5, ease: "easeInOut" } },
    visible: { y: "0%", transition: { duration: 0.5, ease: "easeInOut" } },
  };

  const linkHoverVariants = {
    hover: { color: "#00FFFF", transition: { duration: 0.2 } },
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 px-4 py-4 font-sans text-white bg-[#0A0A0A] bg-opacity-90 shadow-lg transition-all duration-500
        ${isScrolled ? "backdrop-blur-sm" : ""}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="text-2xl font-bold tracking-wide">
              Revolutionize Engineering
            </span>
          </a>

          {/* Desktop Nav */}
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
            <motion.a
              href="/post-project"
              className="bg-[#00FFFF] text-neutral-900 font-bold py-2 px-6 rounded-full transition-colors duration-300 hover:bg-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Post a Project
            </motion.a>
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="font-bold hover:text-[#00FFFF]"
                >
                  {user.name}
                </button>
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-lg w-32">
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={openLogin}
                className="ml-4 text-white hover:text-[#00FFFF] transition"
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed inset-0 w-full h-screen bg-[#0A0A0A] bg-opacity-90 backdrop-blur-sm z-[51] flex flex-col items-center justify-center gap-8"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <button
                onClick={toggleMenu}
                className="absolute top-6 right-6 text-white"
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
              <a
                href="/post-project"
                className="bg-[#00FFFF] text-neutral-900 font-bold py-3 px-8 mt-4 rounded-full text-xl"
                onClick={toggleMenu}
              >
                Post a Project
              </a>
              {user ? (
                <div className="flex flex-col items-center gap-4">
                  <span className="text-white text-2xl">{user.name}</span>
                  <button
                    onClick={() => {
                      handleLogout();
                      toggleMenu();
                    }}
                    className="text-red-500 text-lg"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    toggleMenu();
                    openLogin();
                  }}
                  className="bg-[#00FFFF] text-neutral-900 font-bold py-3 px-8 mt-4 rounded-full text-xl"
                >
                  Login
                </button>

              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Modals (controlled by Navbar state) */}
      <LoginModal
        isOpen={showLogin}
        onClose={closeLogin}
        onSwitchToRegister={openRegister}
        setUser={setUser}
      />
      <RegisterModal
        isOpen={showRegister}
        onClose={closeRegister}
        onSwitchToLogin={openLogin}
      />
    </>
  );
};

export default Navbar;
