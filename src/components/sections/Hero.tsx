import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { scrollToSection } from "@/utils/scroll.utils";
import { useMouseParallax } from "@/hooks/useMouseParallax";

const STACK_PILLS = ["React", "TypeScript", "Python", ".NET", "PostgreSQL"];

export function Hero() {
  const mouse = useMouseParallax();

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center overflow-hidden pt-32 pb-20 md:pt-36 md:pb-24"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 70% 80% at ${50 + mouse.x * 5}% ${30 + mouse.y * 4}%, rgba(71,18,107,0.35) 0%, transparent 65%)`,
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B132B] to-transparent pointer-events-none" />

      <div className="relative z-10 px-6 md:px-20 max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left — name + taglines */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-[10px] font-mono tracking-[0.3em] text-[#4FF0FF]/50 uppercase mb-5"
            >
              Full Stack Developer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-7xl font-extrabold tracking-tight leading-none mb-6"
              style={{ fontFamily: "Oxanium, sans-serif" }}
            >
              Eric
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(90deg, #4FF0FF, #47126B 120%)" }}
              >
                Melo
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-sm text-foreground/40 mb-8 leading-snug"
            >
              Elaborando soluções através de software.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.44 }}
              className="flex gap-3 flex-wrap"
            >
              <button
                onClick={() => scrollToSection("projetos")}
                className="px-6 py-2.5 bg-[#4FF0FF] text-[#0B132B] text-xs font-mono font-bold tracking-[0.12em] uppercase hover:bg-[#4FF0FF]/90 transition-all duration-200 hover:shadow-[0_0_22px_rgba(79,240,255,0.4)]"
              >
                Ver Projetos
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="px-6 py-2.5 border border-[#4FF0FF]/35 text-[#4FF0FF] text-xs font-mono tracking-[0.12em] uppercase hover:border-[#4FF0FF]/65 hover:bg-[#4FF0FF]/5 transition-all duration-200"
              >
                Contato
              </button>
            </motion.div>
          </div>

          {/* Right — stack + quick info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="border border-[#4FF0FF]/12 p-6 bg-[#1C2541]/40 backdrop-blur-sm"
          >
            <p className="text-[10px] font-mono tracking-[0.2em] text-foreground/30 uppercase mb-4">
              Stack principal
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {STACK_PILLS.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-3 py-1.5 bg-[#0B132B] text-[#4FF0FF]/80 border border-[#4FF0FF]/20"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="space-y-0 border-t border-[#4FF0FF]/10 pt-5">
              {[
                { label: "Formação", value: "Eng. Mecânica — PUC Minas" },
                { label: "Atuação", value: "Full Stack" },
                { label: "Disponível", value: "PJ & CLT" },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between py-2.5 border-b border-[#4FF0FF]/8 last:border-0">
                  <span className="text-[10px] font-mono text-foreground/30 tracking-widest uppercase">{label}</span>
                  <span className="text-xs text-foreground/65">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={() => scrollToSection("projetos")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#4FF0FF]/25 hover:text-[#4FF0FF]/50 transition-colors"
      >
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.button>
    </section>
  );
}
