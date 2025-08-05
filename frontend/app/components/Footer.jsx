"use client";

import { FaGithub } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

/**
 * A Footer component for the "Revolutionize Engineering" platform.
 * This component provides key information, partner logos, contact details,
 * and a link to the GitHub repository. It is styled with the "Futuristic Horizon"
 * theme and is fully responsive using Tailwind CSS. The background has been
 * updated to a slightly lighter shade for better visual distinction.
 */
const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white font-serif px-4 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-neutral-800 pt-12">
        {/* About Section */}
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-2xl font-bold mb-4">Revolutionize Engineering</h3>
          <p className="text-neutral-400 leading-relaxed">
            An innovative platform bridging the skills gap in Africa's rapidly
            growing tech industry by empowering the next generation of
            engineers.
          </p>
        </div>

        {/* Partners Section */}
        <div>
          <h4 className="text-xl font-bold mb-4">Partners</h4>
          <ul className="space-y-2 text-neutral-300">
            <li>UNICEF</li>
            <li>Kenyatta University</li>
            <li>Mastercard Foundation</li>
            <li>Royal Academy of Engineering (under the Frontier Programme)</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-xl font-bold mb-4">Contact</h4>
          <ul className="space-y-2 text-neutral-300">
            <li className="flex items-center gap-2">
              <MdEmail className="text-[#00FFFF]" />
              <a
                href="mailto:info@revolutionize.eng"
                className="hover:underline"
              >
                info@revolutionize.eng
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MdPhone className="text-[#00FFFF]" />
              <a href="tel:+254123456789" className="hover:underline">
                +254-123-456789
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section (Copyright and GitHub Link) */}
      <div className="flex flex-col md:flex-row items-center justify-between text-neutral-500 mt-12 pt-8 border-t border-neutral-800">
        <p className="text-sm mb-4 md:mb-0">
          © 2024 Revolutionize Engineering. All rights reserved.
        </p>
        <a
          href="https://github.com/placeholder-repo" // Placeholder GitHub URL
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-neutral-300 hover:text-[#00FFFF] transition-colors duration-300"
        >
          <FaGithub size={20} />
          <span className="hover:underline">GitHub Repository</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
