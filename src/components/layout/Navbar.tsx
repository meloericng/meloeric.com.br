import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/constants/portfolio.constants";
import { scrollToSection } from "@/utils/scroll.utils";

interface NavbarProps {
  activeSection: string;
}

export function Navbar({ activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#4FF0FF]/10 backdrop-blur-xl bg-[#0B132B]/85"
          : "bg-transparent"
      }`}
    >
      <button
        onClick={() => scrollToSection("hero")}
        className="font-mono text-xs tracking-[0.3em] text-[#4FF0FF]/80 uppercase hover:text-[#4FF0FF] transition-colors"
      >
        &lt;DEV /&gt;
      </button>
      <ul className="flex gap-8">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <button
              onClick={() => scrollToSection(link.href)}
              className={`text-xs font-mono tracking-widest uppercase transition-all duration-200 ${
                activeSection === link.href
                  ? "text-[#4FF0FF]"
                  : "text-foreground/35 hover:text-foreground/70"
              }`}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
