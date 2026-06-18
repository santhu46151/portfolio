"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Programming",
    items: ["Python", "SQL", "JavaScript", "HTML/CSS"],
  },
  {
    category: "Visualization",
    items: ["Power BI", "Tableau", "Excel"],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    category: "AI Tools",
    items: ["ChatGPT", "Gemini", "Claude"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 mx-auto max-w-5xl px-6 py-20 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
          Technical <span className="text-accent">Skills</span>
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm transition-all hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_10px_30px_rgba(30,58,138,0.2)]"
            >
              <h3 className="mb-4 text-xl font-semibold text-white">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-white/10 px-3 py-1 text-sm text-gray-300 transition-colors hover:bg-primary hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
