import { Mail, Github, Linkedin } from "lucide-react";
import { SectionLabel } from "@/components/common/SectionLabel";
import { Reveal } from "@/components/common/Reveal";

const CONTACT_LINKS = [
  { icon: Mail, label: "meloericng@gmail.com", href: "mailto:meloericng@gmail.com" },
  { icon: Github, label: "github.com/meloericng", href: "https://github.com/meloericng" },
  { icon: Linkedin, label: "linkedin.com/in/meloeric", href: "https://linkedin.com/in/meloeric" },
];

export function Contact() {
  return (
    <section id="contato" className="py-32 px-6 md:px-20 max-w-6xl mx-auto">
      <SectionLabel number="04">Contato</SectionLabel>
      <div className="max-w-xl">
        <Reveal>
          <h2
            className="text-4xl font-bold mb-5 leading-tight"
            style={{ fontFamily: "Oxanium, sans-serif" }}
          >
            Vamos construir
            <br />
            algo?
          </h2>
          <p className="text-foreground/40 mb-10 text-sm leading-relaxed">
            Sempre disponível nos contatos abaixo.
            Se você tem uma ideia, manda uma mensagem!
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex flex-col gap-3">
            {CONTACT_LINKS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="group flex items-center gap-4 px-5 py-4 border border-[#4FF0FF]/12 hover:border-[#4FF0FF]/45 hover:bg-[#4FF0FF]/4 transition-all duration-250"
              >
                <Icon className="w-4 h-4 text-[#4FF0FF]/60 group-hover:text-[#4FF0FF] transition-colors duration-200 shrink-0" />
                <span className="text-sm font-mono text-foreground/45 group-hover:text-foreground/80 transition-colors duration-200">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
