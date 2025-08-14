"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [user, setUser] = useState(null); // logged-in user
  const [showUserMenu, setShowUserMenu] = useState(false);

  // Register form state
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerRole, setRegisterRole] = useState("user");

  // Login form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Loading, errors, success
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const openLogin = () => {
    setShowRegister(false);
    setShowLogin(true);
    setError("");
    setSuccess("");
  };
  const closeLogin = () => setShowLogin(false);

  const openRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
    setError("");
    setSuccess("");
  };
  const closeRegister = () => setShowRegister(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setShowUserMenu(false);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: registerName,
          email: registerEmail,
          password: registerPassword,
          role: registerRole,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Something went wrong");
      } else {
        setSuccess("Registration successful! You can now log in.");
        setTimeout(() => {
          closeRegister();
          openLogin();
        }, 1500);
      }
    } catch {
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: loginEmail,
          password: loginPassword,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Invalid credentials");
      } else {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        setUser(data.user);
        setSuccess("Login successful!");
        setTimeout(() => {
          closeLogin();
        }, 1000);
      }
    } catch {
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (typeof savedUser === "string" && savedUser.trim() !== "") {
      try {
        const parsedUser = JSON.parse(savedUser);
        if (parsedUser && typeof parsedUser === "object") {
          setUser(parsedUser);
        } else {
          console.warn("User data in localStorage is not an object, clearing it.");
          localStorage.removeItem("user");
        }
      } catch (err) {
        console.error("Failed to parse user from localStorage:", err);
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

  // Login Modal
  const LoginModal = () => (
    <AnimatePresence>
      {showLogin && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-60 z-[100] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-md w-full text-gray-900 relative">
            <button
              className="absolute top-4 right-4 text-gray-700"
              onClick={closeLogin}
            >
              <FaTimes size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4">Login</h2>

            {error && <p className="text-red-500 mb-2">{error}</p>}
            {success && <p className="text-green-500 mb-2">{success}</p>}

            <form className="flex flex-col gap-4" onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email"
                className="border p-3 rounded text-lg"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="border p-3 rounded text-lg"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-[#00FFFF] text-neutral-900 font-bold py-3 px-6 rounded-full text-lg hover:brightness-110 transition"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
            <p className="mt-4 text-center">
              Don't have an account?{" "}
              <button
                onClick={openRegister}
                className="text-[#00FFFF] font-bold underline"
              >
                Register
              </button>
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Register Modal
  const RegisterModal = () => (
    <AnimatePresence>
      {showRegister && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-60 z-[100] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-md w-full text-gray-900 relative">
            <button
              className="absolute top-4 right-4 text-gray-700"
              onClick={closeRegister}
            >
              <FaTimes size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4">Register</h2>

            {error && <p className="text-red-500 mb-2">{error}</p>}
            {success && <p className="text-green-500 mb-2">{success}</p>}

            <form className="flex flex-col gap-4" onSubmit={handleRegister}>
              <input
                type="text"
                placeholder="Full Name"
                className="border p-3 rounded text-lg"
                value={registerName}
                onChange={(e) => setRegisterName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="border p-3 rounded text-lg"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="border p-3 rounded text-lg"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                required
              />
              <select
                className="border p-3 rounded text-lg"
                value={registerRole}
                onChange={(e) => setRegisterRole(e.target.value)}
                required
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
              <button
                type="submit"
                className="bg-[#00FFFF] text-neutral-900 font-bold py-3 px-6 rounded-full text-lg hover:brightness-110 transition"
                disabled={loading}
              >
                {loading ? "Signing Up..." : "Sign Up"}
              </button>
            </form>
            <p className="mt-4 text-center">
              Already have an account?{" "}
              <button
                onClick={openLogin}
                className="text-[#00FFFF] font-bold underline"
              >
                Login
              </button>
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
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
                className="mt-6 text-white hover:text-[#00FFFF] transition"
              >
                Login
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modals */}
      <LoginModal />
      <RegisterModal />
    </motion.nav>
  );
};

export default Navbar;
