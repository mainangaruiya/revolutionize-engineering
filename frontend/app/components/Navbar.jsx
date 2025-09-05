"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
    { name: "Home", href: "/home" },
    { name: "Projects", href: "/home#projects" },
    { name: "Events", href: "/home#events" },
    { name: "Partners", href: "/home#partners" },
    { name: "About", href: "/home#cta" },
  ];

  const menuVariants = {
    hidden: { y: "-100%", transition: { duration: 0.5, ease: "easeInOut" } },
    visible: { y: "0%", transition: { duration: 0.5, ease: "easeInOut" } },
  };

  const linkHoverVariants = {
    hover: { color: "#00FFFF", transition: { duration: 0.2 } },
  };

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

  const TimesIcon = ({ size = 24 }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        d="m16.192 6.31-4.243 4.242-4.242-4.242-1.414 1.414 
               4.242 4.243-4.242 4.242 1.414 1.414 
               4.242-4.242 4.243 4.242 1.414-1.414 
               -4.242-4.242 4.242-4.243z"
      ></path>
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
          <div className="hidden md:flex items-center gap-4 text-sm">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="hover: transition-colors duration-300"
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
                  className="bg-[#00FFFF] text-neutral-900 font-bold py-2 px-4 rounded-full transition-colors duration-300 hover:bg-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Post a Project
                </motion.a>

                {/* Profile + dropdown */}
                <div className="relative flex items-center gap-3">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center gap-2 font-bold hover:text-[#00FFFF]"
                  >
                    <img
                      src={user.profilePic || "/images/R.png"}
                      alt="Profile"
                      className="w-8 h-8 rounded-full object-cover border border-neutral-600"
                    />
                    <span className="flex flex-col leading-tight">
                      {user.name
                        ?.split(" ")
                        .slice(0, 2)
                        .map((part, i) => (
                          <span key={i}>{part}</span>
                        ))}
                    </span>
                  </button>

                  {showUserMenu && (
                    <div className="absolute right-0 top-full mt-2 bg-black text-white rounded shadow-lg w-40 hover:text-[#00A3A3]">
                      <Link
                        href="/user-profile"
                        className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                        onClick={() => setShowUserMenu(false)}
                      >
                        Profile
                      </Link>
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
                    <span className="text-white text-2xl">
                      {user.name?.split(" ").slice(0, 2).join(" ")}
                    </span>
                    <Link
                      href="/user-profile"
                      className="text-[#00FFFF] text-lg"
                      onClick={toggleMenu}
                    >
                      Profile
                    </Link>
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
