import { useRef } from "react";
import { motion, useInView } from "motion/react";
import type { LucideIcon } from "lucide-react";

interface TechCardProps {
  label: string;
  icon: LucideIcon;
  skills: string[];
  index: number;
}

export function TechCard({ label, icon: Icon, skills, index }: TechCardProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="group p-6 bg-card border border-[#4FF0FF]/10 hover:border-[#4FF0FF]/25 transition-colors duration-300"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-[#4FF0FF]/8 group-hover:bg-[#4FF0FF]/16 transition-colors duration-200">
          <Icon className="w-4 h-4 text-[#4FF0FF]" />
        </div>
        <span className="text-[10px] font-mono tracking-[0.2em] text-foreground/40 uppercase">
          {label}
        </span>
      </div>
      <ul className="space-y-2.5">
        {skills.map((skill, i) => (
          <motion.li
            key={skill}
            initial={{ opacity: 0, x: -8 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.08 + i * 0.04 + 0.15 }}
            className="text-sm text-foreground/55 flex items-center gap-2.5 group-hover:text-foreground/75 transition-colors duration-200"
          >
            <span className="w-1 h-1 bg-[#4FF0FF]/35 rounded-full shrink-0" />
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
