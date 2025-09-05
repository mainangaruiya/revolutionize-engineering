"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#EAEAEA] text-black p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-[#00A3A3] mb-8 text-center">
          Terms and Conditions
        </h1>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-[#00A3A3] mb-2">
              Acceptance of Terms
            </h2>
            <p>
              By accessing and using Revolutionize, you agree to comply with these terms
              and conditions. If you do not agree, please do not use the platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#00A3A3] mb-2">
              User Responsibilities
            </h2>
            <p>
              Users are responsible for their content submissions, interactions, and maintaining
              confidentiality of account information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#00A3A3] mb-2">
              Intellectual Property
            </h2>
            <p>
              All content on the platform is owned by its creators or Revolutionize.
              Unauthorized use or reproduction is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#00A3A3] mb-2">
              Limitation of Liability
            </h2>
            <p>
              Revolutionize is not liable for any damages resulting from use of the platform.
              Users engage with content and other members at their own risk.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
