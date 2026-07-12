"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Certificates", href: "#certifications" },
    { name: "Projects", href: "#projects" },
    { name: "Experiences", href: "#experience" },
    { name: "Contact us", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`fixed top-0 right-0 z-50 w-full transition-all duration-300 md:w-auto md:pr-10 md:pt-6 ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-lg py-4 px-6 md:bg-transparent md:shadow-none md:backdrop-blur-none" : "p-6"
      }`}
    >
      {/* On desktop, we give it a sleek pill shape if scrolled. On mobile, a full bar. */}
      <div className={`ml-auto flex w-max items-center rounded-full transition-all duration-300 ${scrolled ? 'md:bg-black/60 md:backdrop-blur-md md:shadow-[0_0_20px_rgba(0,0,0,0.5)] md:px-8 md:py-3 md:border md:border-white/10' : ''}`}>
        <ul className="flex items-center justify-end gap-4 text-xs font-semibold tracking-wide text-gray-300 sm:gap-8 sm:text-sm md:text-base">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="transition-colors hover:text-white hover:drop-shadow-[0_0_10px_rgba(147,51,234,0.8)]"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
