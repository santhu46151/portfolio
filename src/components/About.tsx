"use client";

import { motion } from "framer-motion";

export default function About() {
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
        
        <div className="flex justify-center">
          <div className="max-w-3xl space-y-6 text-center text-gray-300">
            <p>
              I am a passionate <strong className="text-white">B.Tech Student</strong> and Data Analyst dedicated to uncovering patterns in complex datasets. My journey includes hands-on experience as a Data Analytics Intern at YHills, and virtual experiences with industry leaders like Deloitte, IBM, and Tata.
            </p>
            <p>
              With a strong foundation in Python, SQL, and Power BI, I specialize in building interactive dashboards and conducting comprehensive data analysis to drive business decisions. I am also actively exploring AI tools to enhance data workflows.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
