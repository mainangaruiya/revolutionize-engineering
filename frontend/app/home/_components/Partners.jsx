"use client";
import { motion } from "framer-motion";

function PartnersSection() {
  const partners = [
    { name: "UNICEF", logo: "/images/unicef.png" },
    { name: "Kenyatta University", logo: "/images/ku-removebg-preview.png" },
    { name: "MasterCard Foundation", logo: "/images/mastercard-removebg-preview.png" },
    { name: "Royal Academy of Engineering (under the Frontier Programme)", logo: "/images/royal.png" },
  ];

  return (
    <motion.section
      className="bg-[#FFFFFF] text-black py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }} 
      // once: true → animates only the first time
      // amount: 0.2 → triggers when 20% of section is visible
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Partners</h2>

        {/* Logos grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">
          {partners.map((p, i) => (
            <motion.div
              key={i}
              className="flex justify-center items-center cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true, amount: 0.3 }} 
              whileHover={{ scale: 1.2 }}
            >
              <img
                src={p.logo}
                alt={p.name}
                className="h-48 md:h-64 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default PartnersSection;
