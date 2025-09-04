"use client";

import { motion } from "framer-motion";

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-[#EAEAEA] text-black p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-[#00A3A3] mb-8 text-center">
          Accessibility Statement
        </h1>

        <div className="space-y-6 text-gray-700">
          <p>
            Revolutionize is committed to ensuring accessibility for all users, including those
            with disabilities. We strive to provide a platform that is navigable, readable,
            and usable by everyone.
          </p>

          <p>
            If you encounter accessibility issues, please contact
            <span className="text-[#00A3A3]"> <a href="mailto:dukatechsolutions@gmail.com">dukatechsolutions@gmail.com</a></span> so we can
            improve your experience.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
