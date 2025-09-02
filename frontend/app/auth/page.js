"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/**
 * A comprehensive authentication page component for the "Revolutionize Engineering" platform.
 * It provides a user interface for both logging in and registering, switching between
 * the two states. The component uses Tailwind CSS for styling and Framer Motion for
 * subtle animations. Form submissions are handled with mock asynchronous functions
 * to simulate API calls, complete with loading and success/error state management.
 * User data is stored in localStorage upon successful authentication.
 */
const Auth = () => {
  // State to control which form (Login or Register) is currently visible
  const [isLogin, setIsLogin] = useState(true);

  // State for form input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("student");

  // State to handle UI feedback (loading, error, success messages)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  /**
   * Clears any existing messages (error or success) and resets the form.
   */
  const resetMessages = () => {
    setError(null);
    setSuccess(null);
  };

  /**
   * Handles the login form submission.
   * It simulates an API call and updates the UI state accordingly.
   */
  const handleLogin = async (e) => {
    e.preventDefault();
    resetMessages();
    setLoading(true);

    // Simple form validation
    if (!email || !password) {
      setLoading(false);
      setError("Please fill out all fields.");
      return;
    }

    // Simulate an API call with a delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    try {
      // Mock API success: store a dummy user in localStorage
      const mockUser = { name: "John Doe", email: email };
      localStorage.setItem("user", JSON.stringify(mockUser));
      localStorage.setItem("token", "mock-auth-token-12345");

      setSuccess("Login successful! Redirecting...");
      setLoading(false);

      // Simulate a page redirect after a short delay
      setTimeout(() => {
        window.location.href = "/"; // Redirect to the homepage
      }, 1000);
    } catch (err) {
      setLoading(false);
      setError("An error occurred. Please try again.");
    }
  };

  /**
   * Handles the registration form submission.
   * It simulates an API call and updates the UI state.
   */
  const handleRegister = async (e) => {
    e.preventDefault();
    resetMessages();
    setLoading(true);

    // Simple form validation
    if (!name || !email || !password || !confirmPassword || !role) {
      setLoading(false);
      setError("Please fill out all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Simulate an API call with a delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    try {
      // Mock API success: store a dummy user in localStorage
      const mockUser = { name: name, email: email };
      localStorage.setItem("user", JSON.stringify(mockUser));
      localStorage.setItem("token", "mock-auth-token-12345");

      setSuccess("Registration successful! You are now logged in.");
      setLoading(false);

      // Simulate a page redirect after a short delay
      setTimeout(() => {
        window.location.href = "/complete-profile"; // Redirect to the homepage
      }, 1000);
    } catch (err) {
      setLoading(false);
      setError("An error occurred during registration. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0A0A0A] font-sans p-4">
      <motion.div
        key={isLogin ? "login" : "register"}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-neutral-800 p-8 rounded-xl shadow-2xl w-full max-w-md text-white border border-neutral-700"
      >
        {/* Title of the form */}
        <h2 className="text-3xl font-bold text-center mb-6 text-[#00FFFF]">
          {isLogin ? "Log In" : "Register"}
        </h2>

        {/* Display messages */}
        {error && (
          <div className="bg-red-500 text-white p-3 rounded-lg text-center mb-4">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-500 text-white p-3 rounded-lg text-center mb-4">
            {success}
          </div>
        )}

        {/* The main form */}
        <form onSubmit={isLogin ? handleLogin : handleRegister}>
          {/* Name input (only for registration) */}
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-gray-400 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
                disabled={loading}
              />
            </div>
          )}

          {/* Email input (for both forms) */}
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
              disabled={loading}
            />
          </div>

          {/* {Role for registration} */}
          {!isLogin && (
            <div>
              <label className="block text-gray-400 mb-2" htmlFor="role">
                Role
              </label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
                disabled={loading}
              >
                <option value="student">Student</option>
                <option value="collaborator">Collaborator</option>
                <option value="innovator">Innovator</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          )}

          {/* Password input (for both forms) */}
          <div className="mb-6">
            <label className="block text-gray-400 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
              disabled={loading}
            />
          </div>

          {!isLogin && (
            <div className="mb-6">
            <label
              className="block text-gray-400 mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
              disabled={loading}
            />
          </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            className={`w-full py-3 rounded-full font-bold text-neutral-900 transition-colors duration-300
              ${
                loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : isLogin
                  ? "bg-[#00FFFF] hover:bg-[#00AAAA]"
                  : "bg-[#00FFFF] hover:bg-[#00AAAA]"
              }`}
            disabled={loading}
          >
            {loading ? (
              <span>Processing...</span>
            ) : (
              <span>{isLogin ? "Log In" : "Register"}</span>
            )}
          </button>
        </form>

        {/* Toggle between Login and Register */}
        <div className="mt-6 text-center text-gray-400">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              resetMessages(); // Clear messages on form switch
              setEmail(""); // Reset form fields
              setPassword("");
              setName("");
            }}
            className="text-[#00FFFF] hover:underline font-semibold transition-colors duration-200"
            disabled={loading}
          >
            {isLogin ? "Register here" : "Log In here"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Auth;
