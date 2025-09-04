"use client";

import { motion } from "framer-motion";

export default function FaqPage() {
  const faqs = [
    {
      q: "What is Revolutionize Engineering?",
      a: "Revolutionize Engineering is a community-driven platform where innovators, students, and professionals can showcase and discover engineering and tech projects.",
    },
    {
      q: "How do I submit a project?",
      a: "You can submit your project through the 'Post a new Project' page. Just fill out the form with your project details and submit.",
    },
    {
      q: "Is submitting a project free?",
      a: "Yes, posting a project is completely free for all users.",
    },
    {
      q: "Who can view my project?",
      a: "All projects are public and visible to community members, potential collaborators, and industry professionals.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#EAEAEA] text-black p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-[#00A3A3] mb-8 text-center">
          Frequently Asked Questions
        </h1>
        <div className="space-y-6">
          {faqs.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl shadow-lg bg-white border border-neutral-300"
            >
              <h3 className="text-xl font-semibold text-[#00A3A3] mb-2">
                {item.q}
              </h3>
              <p className="text-gray-700">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
