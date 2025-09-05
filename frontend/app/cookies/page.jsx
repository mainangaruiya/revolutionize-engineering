"use client";

import { motion } from "framer-motion";

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-[#EAEAEA] text-black p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-[#00A3A3] mb-8 text-center">
          Cookie Policy
        </h1>

        <div className="space-y-6 text-gray-700">
          <p>
            Revolutionize uses cookies to improve your experience, analyze site usage,
            and serve relevant content. Cookies help us understand how you interact with
            the platform.
          </p>

          <p>
            By using the site, you consent to our use of cookies. You may manage
            your preferences through your browser settings.
          </p>

          <p>
            For more details, contact us at
            <span className="text-[#00A3A3]"> privacy@revolutionize.com</span>.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
