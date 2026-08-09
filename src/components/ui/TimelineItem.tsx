import { useRef } from "react";
import { motion, useInView } from "motion/react";
import type { TimelineEntry } from "@/types/portfolio.types";

interface TimelineItemProps {
  item: TimelineEntry;
  index: number;
}

export function TimelineItem({ item, index }: TimelineItemProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -18 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="group relative pl-9 pb-10 last:pb-0"
    >
      <div
        className={`absolute left-0 top-[5px] w-[15px] h-[15px] rounded-full border-2 transition-all duration-300 ${
          inView ? "border-[#4FF0FF] bg-[#0B132B]" : "border-foreground/15 bg-[#0B132B]"
        } group-hover:shadow-[0_0_14px_rgba(79,240,255,0.5)] group-hover:bg-[#4FF0FF]/15`}
      />
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
        <span className="text-[10px] font-mono text-[#4FF0FF]/55 tracking-[0.2em]">
          {item.year}
        </span>
        <span
          className="text-base font-semibold text-foreground/85 group-hover:text-foreground transition-colors duration-200"
          style={{ fontFamily: "Oxanium, sans-serif" }}
        >
          {item.role}
        </span>
      </div>
      <p className="text-[11px] font-mono text-foreground/35 mb-2 tracking-wide">
        {item.company}
      </p>
      <p className="text-sm text-foreground/45 leading-relaxed max-w-lg">
        {item.description}
      </p>
    </motion.div>
  );
}
