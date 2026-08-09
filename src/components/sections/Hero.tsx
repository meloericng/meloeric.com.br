import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { Starfield } from "@/components/common/Starfield";
import { scrollToSection } from "@/utils/scroll.utils";
import { useMouseParallax } from "@/hooks/useMouseParallax";

export function Hero() {
  const mouse = useMouseParallax();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <Starfield />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 55% 55% at ${50 + mouse.x * 6}% ${50 + mouse.y * 6}%, rgba(71,18,107,0.45) 0%, transparent 68%)`,
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0B132B] to-transparent pointer-events-none" />

      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[10px] font-mono tracking-[0.35em] text-[#4FF0FF]/60 uppercase mb-8"
        >
          Engenharia • Software • Dados
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="text-7xl md:text-9xl font-extrabold tracking-tight leading-none mb-5"
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
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-base text-foreground/40 max-w-sm mx-auto mb-12 font-light tracking-wide"
        >
          Construindo soluções através de software, automação e análise de dados.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex gap-4 justify-center"
        >
          <button
            onClick={() => scrollToSection("projetos")}
            className="px-7 py-3 bg-[#4FF0FF] text-[#0B132B] text-xs font-mono font-bold tracking-[0.15em] uppercase hover:bg-[#4FF0FF]/90 transition-all duration-200 hover:shadow-[0_0_28px_rgba(79,240,255,0.45)]"
          >
            Ver Projetos
          </button>
          <button
            onClick={() => scrollToSection("contato")}
            className="px-7 py-3 border border-[#4FF0FF]/35 text-[#4FF0FF] text-xs font-mono tracking-[0.15em] uppercase hover:border-[#4FF0FF]/70 hover:bg-[#4FF0FF]/5 transition-all duration-200"
          >
            Contato
          </button>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollToSection("sobre")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#4FF0FF]/30 hover:text-[#4FF0FF]/60 transition-colors"
      >
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </motion.button>
    </section>
  );
}
