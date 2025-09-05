"use client";

import { motion } from "framer-motion";
import { UtensilsCrossed, Users, Heart, Shield } from "lucide-react";

export default function FeedComradePage() {
  const features = [
    {
      icon: <UtensilsCrossed className="w-8 h-8 text-[#00A3A3]" />,
      title: "Food Sharing",
      desc: "Students can access free meals from peers and organizations.",
    },
    {
      icon: <Users className="w-8 h-8 text-[#00A3A3]" />,
      title: "Community-Driven",
      desc: "Building solidarity and support among students.",
    },
    {
      icon: <Heart className="w-8 h-8 text-[#00A3A3]" />,
      title: "Reduce Hunger",
      desc: "Helping combat food insecurity on campuses.",
    },
    {
      icon: <Shield className="w-8 h-8 text-[#00A3A3]" />,
      title: "Safe & Trusted",
      desc: "Secure platform ensuring fairness and transparency.",
    },
  ];

  const gallery = [
    "/images/feed1.jpg",
    "/images/feed2.jpg",
    "/images/feed3.jpg",
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
          src="/images/feed-comrade.png"
          alt="Feed a Comrade Logo"
          className="mx-auto mb-6 w-40 h-auto"
        />
        <h1 className="text-4xl font-bold text-[#00A3A3] mb-4">
          Feed a Comrade
        </h1>
        <p className="text-lg text-gray-800">
          <span className="font-semibold">Feed a Comrade</span> is a platform
          connecting students with food resources, fostering compassion and
          reducing hunger in learning institutions.
        </p>
        <p className="text-lg font-bold mt-4"><a href="https://www.foodforcomrade.com/" className="text-white bg-[#00A3A3] px-4 py-2 rounded-lg">Visit Feed a Comrade</a></p>
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
                alt={`Feed a Comrade ${i + 1}`}
                className="w-full h-64 object-cover hover:scale-110 transition duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
