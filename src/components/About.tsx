"use client";

import { motion } from "framer-motion";
import { projects } from "./Projects";
import { certs } from "./Certifications";

export default function About() {
  const stats = [
    { value: projects.length.toString(), label: "Projects" },
    { value: certs.length.toString(), label: "Certifications" },
    { value: projects.length.toString(), label: "Dashboards" },
    { value: "1+", label: "Years Experience" },
  ];

  return (
    <section id="about" className="relative z-10 mx-auto max-w-5xl px-6 py-20 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="mb-10 text-center text-3xl font-bold text-white md:text-4xl">
          About <span className="text-primary">Me</span>
        </h2>
        
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-6 text-gray-300">
            <p>
              I am a passionate <strong className="text-white">B.Tech Student</strong> and Data Analyst dedicated to uncovering patterns in complex datasets. My journey includes hands-on experience as a Data Analytics Intern at 3Skills, and virtual experiences with industry leaders like Deloitte, IBM, and Tata.
            </p>
            <p>
              With a strong foundation in Python, SQL, and Power BI, I specialize in building interactive dashboards and conducting comprehensive data analysis to drive business decisions. I am also actively exploring AI tools to enhance data workflows.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow-lg backdrop-blur-sm transition-colors hover:border-primary/50"
              >
                <span className="text-accent mb-2 text-3xl font-bold md:text-4xl">
                  {stat.value}
                </span>
                <span className="text-sm text-gray-400">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
