import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/types/portfolio.types";

interface ProjectCardProps {
  project: Project;
  index: number;
  className?: string;
}

export function ProjectCard({ project, index, className = "" }: ProjectCardProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const borderClass = project.featured
    ? "border-[#4FF0FF]/30 hover:border-[#4FF0FF]/55"
    : "border-[#4FF0FF]/10 hover:border-[#4FF0FF]/28";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
      className={`group relative p-6 bg-card border transition-colors duration-300 hover:shadow-[0_8px_40px_rgba(79,240,255,0.07)] cursor-default ${borderClass} ${className}`}
    >
      {/* Featured top accent */}
      {project.featured && (
        <div className="absolute top-0 left-0 right-0 h-px bg-[#4FF0FF] opacity-50" />
      )}

      <div className="absolute top-0 left-0 right-0 h-px bg-[#4FF0FF] opacity-0 group-hover:opacity-25 transition-opacity duration-300" />

      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className={`text-[9px] font-mono tracking-[0.2em] px-2 py-1 border uppercase ${
              project.status === "Em andamento"
                ? "text-[#4FF0FF] bg-[#4FF0FF]/8 border-[#4FF0FF]/20"
                : "text-foreground/35 bg-foreground/4 border-foreground/10"
            }`}
          >
            {project.status}
          </span>
          {project.featured && (
            <span className="text-[9px] font-mono tracking-[0.2em] px-2 py-1 border text-[#F5C542] bg-[#F5C542]/10 border-[#F5C542]/30 uppercase transition-all duration-300 group-hover:bg-[#F5C542]/15 group-hover:border-[#F5C542]/60 group-hover:shadow-[0_0_10px_rgba(245,197,66,0.35)]">
              Destaque
            </span>
          )}
        </div>
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/30 hover:text-[#4FF0FF] transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/30 hover:text-[#4FF0FF] transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      <h3
        className={`font-bold mb-3 text-foreground/80 group-hover:text-[#4FF0FF] transition-colors duration-200 ${
          project.featured ? "text-xl" : "text-lg"
        }`}
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
