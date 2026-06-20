"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

export const certs = [
  { name: "IBM Data Analytics with Python", link: "/certificates/IBM_Data_Analytics.pdf" },
  { name: "Deloitte Data Analytics Job Simulation", link: "/certificates/Deloitte_Data_Analytics.pdf" },
  { name: "Tata GenAI Powered Data Analytics", link: "/certificates/Tata_GenAI.pdf" },
  { name: "Google AI Essentials", link: "#" },
  { name: "Microsoft Power BI", link: "#" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative z-10 mx-auto max-w-5xl px-6 py-20 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
          Licenses & <span className="text-accent">Certifications</span>
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((cert, index) => (
            <motion.a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:border-primary/50 hover:bg-white/10"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent transition-transform group-hover:scale-110">
                <Award size={24} />
              </div>
              <p className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">{cert.name}</p>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
