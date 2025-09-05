"use client";

import { motion } from "framer-motion";

const ImageGallery = () => {
  const projects = [
    {
      src: "/images/mamapesa.png",
      alt: "Screenshot of MamaPesa app",
      caption: (
        <>
          <span className="text-cyan-400 font-semibold text-lg">MamaPesa:</span>{" "}
          <span className="text-neutral-400">
            Generative AI-powered financial inclusion app for women in Kenya.
          </span>
        </>
      ),
      href: "/success-projects/mamapesa",
    },
    {
      src: "/images/img_asset14shopokoa.png",
      alt: "Screenshot of ShopOkoa platform",
      caption: (
        <>
          <span className="text-cyan-400 font-semibold text-lg">ShopOkoa:</span>{" "}
          <span className="text-neutral-400">
            Kenya's first digital shopkeeper credit platform.
          </span>
        </>
      ),
      href: "/success-projects/shopokoa",
    },
    {
      src: "/images/soko-beauty.png",
      alt: "Screenshot of Soko Beauty app",
      caption: (
        <>
          <span className="text-cyan-400 font-semibold text-lg">Soko Beauty:</span>{" "}
          <span className="text-neutral-400">
            Africa's first AI-powered content creation enabler in the beauty
            industry for Gen Zs.
          </span>
        </>
      ),
      href: "/success-projects/sokobeauty",
    },
    {
      src: "/images/feed-comrade.png",
      alt: "Screenshot of Feedacomrade platform",
      caption: (
        <>
          <span className="text-cyan-400 font-semibold text-lg">Feed a Comrade:</span>{" "}
          <span className="text-neutral-400">
            A platform connecting students with food resources.
          </span>
        </>
      ),
      href: "/success-projects/feedacomrade",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0 8px 25px rgba(0, 255, 255, 0.2)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      className="bg-[#0A0A0A] px-6 py-12 font-sans text-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-5 text-white tracking-tight">
          Success Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <a href={project.href} key={index}>
              <motion.div
                variants={itemVariants}
                whileHover="hover"
                className="group bg-gradient-to-b from-neutral-900 to-neutral-950 h-full rounded-2xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative w-full h-56 overflow-hidden">
                  <img
                    src={project.src}
                    alt={project.alt}
                    className="w-full h-full object-fit group-hover:scale-110 transition-transform duration-500 bg-white"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://placehold.co/600x400/666666/ffffff?text=Image+Error";
                    }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition duration-300"></div>
                </div>

                {/* Text */}
                <div className="p-5">
                  <p className="text-sm leading-relaxed">{project.caption}</p>
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ImageGallery;
