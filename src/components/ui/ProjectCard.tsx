import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/types/portfolio.types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.25, ease: "easeOut" } }}
      className="group relative p-6 bg-card border border-[#4FF0FF]/10 hover:border-[#4FF0FF]/28 transition-colors duration-300 hover:shadow-[0_8px_40px_rgba(79,240,255,0.07)] cursor-default"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-[#4FF0FF] opacity-0 group-hover:opacity-30 transition-opacity duration-300" />

      <div className="flex items-start justify-between mb-5">
        <span
          className={`text-[9px] font-mono tracking-[0.2em] px-2 py-1 border uppercase ${
            project.status === "Em andamento"
              ? "text-[#4FF0FF] bg-[#4FF0FF]/8 border-[#4FF0FF]/20"
              : "text-foreground/35 bg-foreground/4 border-foreground/10"
          }`}
        >
          {project.status}
        </span>
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <a href="#" className="text-foreground/30 hover:text-[#4FF0FF] transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href="#" className="text-foreground/30 hover:text-[#4FF0FF] transition-colors">
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      <h3
        className="text-lg font-bold mb-3 text-foreground/80 group-hover:text-[#4FF0FF] transition-colors duration-250"
        style={{ fontFamily: "Oxanium, sans-serif" }}
      >
        {project.title}
      </h3>
      <p className="text-sm text-foreground/40 leading-relaxed mb-6">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[9px] font-mono px-2 py-1 bg-[#0B132B] text-foreground/35 border border-foreground/8 tracking-wide"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
