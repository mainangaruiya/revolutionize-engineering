"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaXTwitter,
  FaFacebook,
  FaLinkedin,
  FaLocationDot,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa6";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] bg-opacity-90 text-white font-sans px-2 py-4">
      {/* Title */}
      <motion.h3
        className="text-3xl font-bold mb-2 text-center tracking-wide"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        Revolutionize Engineering
      </motion.h3>

      {/* Subtitle */}
      <motion.p
        className="text-neutral-400 text-center font-lighter text-sm mb-2"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        custom={1}
      >
        An innovative platform bridging the skills gap in Africa's rapidly
        growing tech industry by empowering the next generation of engineers.
      </motion.p>

      {/* Main Sections */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-neutral-800 pt-12 mb-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        {/* Follow Section */}
        <motion.div
          className="col-span-1 md:col-span-1 border-r border-neutral-800"
          variants={fadeUp}
          custom={2}
        >
          <h4 className="text-lg font-bold mb-2">Follow Us</h4>
          <ul className="space-y-2 text-neutral-500 grid grid-cols-2">
            <li className="flex items-center gap-2">
              <FaFacebook className="text-[#00FFFF]" />
              <a href="" className="hover:underline">
                Facebook
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaXTwitter className="text-[#00FFFF]" />
              <a href="" className="hover:underline">
                Twitter/X
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaGithub className="text-[#00FFFF]" />
              <a href="" className="hover:underline">
                Github
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaLinkedin className="text-[#00FFFF]" />
              <a href="" className="hover:underline">
                LinkedIn
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          className="col-span-1 md:col-span-1 border-r border-neutral-800"
          variants={fadeUp}
          custom={3}
        >
          <h4 className="text-lg font-bold mb-2">Contact</h4>
          <ul className="space-y-2 text-neutral-500 text-sm">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-[#00FFFF]" />
              <a href="mailto:dukatechsolutions@gmail.com" className="hover:underline">
                dukatechsolutions@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-[#00FFFF]" />
              <a href="tel:+254743800904" className="hover:underline">
                +254-743-800904
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaLocationDot className="text-[#00FFFF]" />
              <a href="https://www.google.com/maps" className="hover:underline">
                2ND Floor, Chandaria Business & Innovation Center, <br />
                Kenyatta University.
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Links Section */}
        <motion.div variants={fadeUp} custom={4}>
          <h4 className="text-lg font-bold mb-2">Links</h4>
          <ul className="space-y-2 text-neutral-500 text-xs grid grid-cols-2 truncate">
            <li className="hover:underline">
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li className="hover:underline">
              <a href="/advertise">Advertise</a>
            </li>
            <li className="hover:underline">
              <a href="/terms-conditions">Terms and Conditions</a>
            </li>
            <li className="hover:underline">
              <a href="/cookies">Cookie Policy</a>
            </li>
            <li className="hover:underline">
              <a href="/accessibility">Accessibility Statement</a>
            </li>
            <li className="hover:underline">
              <a href="/faq">Help</a>
            </li>
            <li className="hover:underline">
              <a href="/faq">FAQ</a>
            </li>
            <li className="hover:underline">
              <a href="/cookies">Manage Cookie Preferences</a>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Footer Bottom */}
      <div><p className="text-sm text-center text-neutral-300">
          © 2025 Revolutionize Engineering. All rights reserved.
        </p></div>
    </footer>
  );
};

export default Footer;
