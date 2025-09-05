"use client";

import { motion } from "framer-motion";

export default function AdvertisePage() {
  return (
    <div className="min-h-screen bg-[#EAEAEA] text-black p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-[#00A3A3] mb-8 text-center">
          Advertise with Us
        </h1>

        <div className="space-y-6 text-gray-700">
          <p>
            Reach a highly engaged community of innovators, developers, and tech enthusiasts
            by advertising on Revolutionize. Our platform connects your brand to a growing network
            of project creators and professionals.
          </p>

          <p>
            For advertising inquiries, pricing, and campaign options, contact us at
            <span className="text-[#00A3A3]"> <a href="mailto:dukatechsolutions@gmail.com">dukatechsolutions@gmail.com</a></span>.
          </p>

          <p>
            We offer banner ads, sponsored projects, and newsletter placements to help your
            brand stand out.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
