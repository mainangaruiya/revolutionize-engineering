"use client";

import { motion } from "framer-motion";
import { Camera, Palette, Users, TrendingUp } from "lucide-react";

export default function SokoBeautyPage() {
  const features = [
    {
      icon: <Camera className="w-8 h-8 text-[#00A3A3]" />,
      title: "AI-Driven Content",
      desc: "Helping Gen Z creators generate beauty content effortlessly.",
    },
    {
      icon: <Palette className="w-8 h-8 text-[#00A3A3]" />,
      title: "Creative Freedom",
      desc: "Tools to customize and express beauty in unique styles.",
    },
    {
      icon: <Users className="w-8 h-8 text-[#00A3A3]" />,
      title: "Community Collaboration",
      desc: "Connects creators, brands, and influencers seamlessly.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#00A3A3]" />,
      title: "Empowering Growth",
      desc: "Helping beauty entrepreneurs grow with AI-powered insights.",
    },
  ];

  const gallery = [
    "/images/sokobeauty-1.png",
    "/images/sokobeauty2.jpg",
    "/images/sokobeauty3.jpg",
  ];

  return (
    <div className="min-h-screen bg-[#EAEAEA] text-black p-6 mb-10 font-sans">
      {/* Logo + Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <img
          src="/images/soko-beauty.png"
          alt="Soko Beauty Logo"
          className="mx-auto mb-6 w-40 h-auto"
        />
        <h1 className="text-4xl font-bold text-[#00A3A3] mb-4">Soko Beauty</h1>
        <p className="text-lg text-gray-800">
          <span className="font-semibold">Soko Beauty</span> is Africa’s first
          AI-powered content creation enabler in the beauty industry, designed
          for Gen Z creators to innovate and thrive.
        </p>
        <p className="text-lg font-bold mt-4"><a href="https://www.sokobeauty.co.ke/" className="text-white bg-[#00A3A3] px-4 py-2 rounded-lg">Visit Soko Beauty</a></p>
      </motion.div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-neutral-300 p-6 rounded-2xl shadow-lg border border-neutral-300 hover:border-[#00A3A3]/50 transition"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-800">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Gallery */}
      <div className="max-w-6xl mx-auto mb-10">
        <h2 className="text-3xl font-bold text-[#00A3A3] mb-6 text-center">
          Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {gallery.map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-xl border border-neutral-300 shadow-lg"
            >
              <img
                src={src}
                alt={`Soko Beauty ${i + 1}`}
                className="w-full h-64 object-cover hover:scale-110 transition duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
