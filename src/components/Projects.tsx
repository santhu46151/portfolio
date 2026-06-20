"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export const projects = [
  {
    title: "Sales Dashboard",
    description: "Revenue Analysis dashboard tracking key performance indicators and sales trends.",
    tech: ["Power BI", "Data Modeling"],
    image: "/dashboard-1.png",
    github: "https://github.com/santhu46151/Indian-Ecommerce-Sales-Analytics",
    live: "https://github.com/santhu46151/Indian-Ecommerce-Sales-Analytics",
  },
  {
    title: "HR Analytics Dashboard",
    description: "Employee attrition analysis to identify patterns and improve retention strategies.",
    tech: ["Power BI", "DAX", "Excel"],
    image: "/dashboard-2.png",
    github: "https://github.com/santhu46151/HR-Analytics-Dashboard",
    live: "https://github.com/santhu46151/HR-Analytics-Dashboard",
  },
  {
    title: "Customer Segmentation",
    description: "Clustering customers based on purchasing behavior using machine learning.",
    tech: ["Python", "Pandas", "Matplotlib"],
    image: "/dashboard-3.png",
    github: "https://github.com/santhu46151/Customer-Segmentation",
    live: "https://github.com/santhu46151/Customer-Segmentation",
  },
  {
    title: "Netflix Data Analysis",
    description: "Exploratory Data Analysis (EDA) on Netflix's catalog to uncover content strategies.",
    tech: ["Python", "Seaborn", "Jupyter"],
    image: "/dashboard-4.png",
    github: "https://github.com/santhu46151/Netflix-Data-Analysis",
    live: "https://github.com/santhu46151/Netflix-Data-Analysis",
  },
  {
    title: "IPL Data Analysis",
    description: "Comprehensive analysis of Indian Premier League statistics and player performance.",
    tech: ["Power BI", "SQL"],
    image: "/dashboard-5.png",
    github: "https://github.com/santhu46151/IPL-Data-Analytics",
    live: "https://github.com/santhu46151/IPL-Data-Analytics",
  },
  {
    title: "Weather Forecasting Dashboard",
    description: "Interactive dashboard providing real-time weather analytics and historical climate trends.",
    tech: ["Power BI", "Data Visualization"],
    image: "/dashboard-6.png",
    github: "https://github.com/santhu46151/Weather-forecast-Dashboard",
    live: "https://github.com/santhu46151/Weather-forecast-Dashboard",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-transform hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] cursor-pointer"
              onClick={() => window.open(project.github !== "#" ? project.github : "https://github.com/santhu46151", "_blank")}
            >
              <div className="relative h-48 w-full overflow-hidden bg-black/50">
                {/* Fallback gradient if image fails or isn't loaded */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-100"
                    onError={(e) => {
                      // Hide image if it fails to load
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                ) : null}
              </div>
              
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm text-gray-400 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-medium text-accent">
                      #{tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.github !== "#" ? project.github : "https://github.com/santhu46151"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white"
                    onClick={(e) => e.stopPropagation()} // Prevent double trigger
                  >
                    <FaGithub size={18} /> Code
                  </a>
                  <a
                    href={project.live !== "#" ? project.live : undefined}
                    target={project.live !== "#" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white"
                    onClick={(e) => {
                      if (project.live === "#") e.preventDefault();
                      e.stopPropagation();
                    }}
                  >
                    <ExternalLink size={18} /> View
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
