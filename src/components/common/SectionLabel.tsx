import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface SectionLabelProps {
  number: string;
  children: React.ReactNode;
}

export function SectionLabel({ number, children }: SectionLabelProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="mb-14"
    >
      <div className="flex items-center gap-4">
        <span className="text-[10px] font-mono tracking-[0.3em] text-[#4FF0FF]/40 uppercase">
          {number}
        </span>
        <div className="flex-1 h-px bg-[#4FF0FF]/10" />
      </div>
      <p className="mt-3 text-xs font-mono tracking-[0.2em] text-[#4FF0FF] uppercase">
        {children}
      </p>
    </motion.div>
  );
}
