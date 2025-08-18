"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * The main navigation bar for the "Revolutionize Engineering" platform.
 * It features a logo, a set of navigation links, and dynamic buttons for
 * user authentication and project posting. The navbar is responsive,
 * changes its appearance on scroll, and includes a mobile-first menu.
 * It uses localStorage to persist user authentication state.
 */
const Navbar = () => {
  // State for controlling the mobile menu's open/close status
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State to track if the page has been scrolled past a certain point
  const [isScrolled, setIsScrolled] = useState(false);
  // State to store the authenticated user's data
  const [user, setUser] = useState(null);
  // State to control the visibility of the user dropdown menu
  const [showUserMenu, setShowUserMenu] = useState(false);

  // Toggles the mobile menu's state
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  /**
   * Handles the user logout process.
   * It removes the authentication token and user data from localStorage,
   * resets the user state, and hides the user menu.
   */
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setShowUserMenu(false);
  };

  /**
   * Effect hook to load user data from localStorage on component mount.
   * This ensures the user's logged-in state is maintained across page reloads.
   */
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
      } catch {
        // If parsing fails, remove invalid user data
        localStorage.removeItem("user");
      }
    }
  }, []);

  /**
   * Effect hook to handle the scroll event.
   * It updates the `isScrolled` state based on the scroll position,
   * enabling visual changes to the navbar (e.g., backdrop-blur).
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Array of navigation links
  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Events", href: "#events" },
    { name: "Partners", href: "#partners" },
    { name: "About", href: "#about" },
  ];

  // Animation variants for the mobile menu
  const menuVariants = {
    hidden: { y: "-100%", transition: { duration: 0.5, ease: "easeInOut" } },
    visible: { y: "0%", transition: { duration: 0.5, ease: "easeInOut" } },
  };

  // Animation variants for link hover effects
  const linkHoverVariants = {
    hover: { color: "#00FFFF", transition: { duration: 0.2 } },
  };

  // Inline SVG for the hamburger menu icon
  const BarsIcon = ({ size = 24 }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
    </svg>
  );

  // Inline SVG for the times/close icon
  const TimesIcon = ({ size = 24 }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="m16.192 6.31-4.243 4.242-4.242-4.242-1.414 1.414 4.242 4.243-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414-4.242-4.242 4.242-4.243z"></path>
    </svg>
  );

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
          <a href="/home" className="flex items-center gap-3">
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
            {user ? (
              <>
                <motion.a
                  href="/post-project"
                  className="bg-[#00FFFF] text-neutral-900 font-bold py-2 px-6 rounded-full transition-colors duration-300 hover:bg-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Post a Project
                </motion.a>
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
              </>
            ) : (
              <a
                href="/auth"
                className="bg-[#00FFFF] text-neutral-900 font-bold py-2 px-6 rounded-full transition-colors duration-300 hover:bg-[#00AAAA]"
              >
                Login
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? <TimesIcon size={24} /> : <BarsIcon size={24} />}
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
                <TimesIcon size={30} />
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
              {user ? (
                <>
                  <a
                    href="/post-project"
                    className="bg-[#00FFFF] text-neutral-900 font-bold py-3 px-8 mt-4 rounded-full text-xl"
                    onClick={toggleMenu}
                  >
                    Post a Project
                  </a>
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
                </>
              ) : (
                <a
                  href="/auth"
                  className="bg-[#00FFFF] text-neutral-900 font-bold py-3 px-8 mt-4 rounded-full text-xl"
                  onClick={toggleMenu}
                >
                  Login
                </a>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
