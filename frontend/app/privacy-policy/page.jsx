"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#EAEAEA] text-black p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-[#00A3A3] mb-8 text-center">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-[#00A3A3] mb-2">
              Introduction
            </h2>
            <p>
              At Revolutionize, we value your privacy and are committed to
              protecting your personal data. This policy explains how we
              collect, use, and safeguard your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#00A3A3] mb-2">
              Information We Collect
            </h2>
            <p>
              We may collect personal details such as your name, email address,
              and project submissions. We also collect usage data to improve our
              platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#00A3A3] mb-2">
              How We Use Your Data
            </h2>
            <p>
              Your data is used to showcase projects, improve user experience,
              and notify you of updates. We do not sell or rent your information
              to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#00A3A3] mb-2">
              Data Security
            </h2>
            <p>
              We use encryption and industry-standard practices to keep your
              data safe. However, no system is completely secure, and we
              encourage caution when sharing information online.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#00A3A3] mb-2">
              Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, please reach out
              at <span className="text-[#00A3A3]"><a href="mailto:dukatechsolutions@gmail.com">dukatechsolutions@gmail.com</a></span>.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
