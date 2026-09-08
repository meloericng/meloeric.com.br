import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Technologies } from "@/components/sections/Technologies";
import { Trajetoria } from "@/components/sections/Trajetoria";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const SECTION_IDS = [
  "hero",
  "projetos",
  "tecnologias",
  "trajetoria",
  "sobre",
  "contato",
];

export function Home() {
  const activeSection = useScrollSpy(SECTION_IDS);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar activeSection={activeSection} />
      <Hero />
      <Projects />
      <Technologies />
      <Trajetoria />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
