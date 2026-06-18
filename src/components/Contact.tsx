"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 mx-auto max-w-4xl px-6 py-20 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 text-center backdrop-blur-md md:p-16"
      >
        <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
          Let's Work <span className="text-primary">Together</span>
        </h2>
        <p className="mx-auto mb-10 max-w-lg text-gray-300">
          I'm currently looking for new opportunities in Data Analytics. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/santhoshkumarkalla"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:-translate-y-2 hover:bg-[#0A66C2] hover:shadow-[0_0_20px_rgba(10,102,194,0.5)]"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} className="transition-transform group-hover:scale-110" />
          </a>
          <a
            href="https://github.com/santhu46151"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:-translate-y-2 hover:bg-gray-800 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            aria-label="GitHub"
          >
            <FaGithub size={24} className="transition-transform group-hover:scale-110" />
          </a>
          <a
            href="mailto:contact@santhoshkumar.tech"
            className="group flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:-translate-y-2 hover:bg-accent hover:shadow-[0_0_20px_rgba(147,51,234,0.5)]"
            aria-label="Email"
          >
            <Mail size={24} className="transition-transform group-hover:scale-110" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
