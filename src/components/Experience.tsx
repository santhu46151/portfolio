"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 mx-auto max-w-4xl px-6 py-20 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
          Work <span className="text-primary">Experience</span>
        </h2>

        <div className="relative border-l border-white/20 pl-8 md:pl-0 md:border-none">
          {/* Timeline line for desktop */}
          <div className="absolute left-1/2 hidden h-full w-px -translate-x-1/2 bg-white/20 md:block" />

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mb-12 md:flex md:justify-between md:even:flex-row-reverse"
          >
            {/* Timeline dot */}
            <div className="absolute -left-10 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary ring-4 ring-black md:static md:mx-auto md:mt-6 md:-translate-x-1/2">
              <div className="h-2 w-2 rounded-full bg-white" />
            </div>

            <div className="md:w-5/12">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-sm transition-colors hover:border-primary/50">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-primary">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Data Analytics Intern</h3>
                    <p className="text-sm text-accent font-medium">YHills <span className="text-gray-400">| Duration: 3 months</span></p>
                  </div>
                </div>
                
                <ul className="ml-4 list-disc space-y-2 text-sm text-gray-300">
                  <li>Data Cleaning and preprocessing for large datasets.</li>
                  <li>Dashboard Development using Power BI and Tableau.</li>
                  <li>Data Visualization to highlight key business metrics.</li>
                  <li>Reporting and presenting actionable insights to stakeholders.</li>
                </ul>
              </div>
            </div>
            
            {/* Empty div for spacing on desktop */}
            <div className="hidden md:block md:w-5/12" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
