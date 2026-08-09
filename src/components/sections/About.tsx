import { SectionLabel } from "@/components/common/SectionLabel";
import { Reveal } from "@/components/common/Reveal";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { TIMELINE } from "@/constants/portfolio.constants";

const INFO_ROWS = [
  { label: "Localização", value: "Brasil" },
  { label: "Experiência", value: "1 ano" },
  { label: "Especialidade", value: "Full Stack" },
  { label: "Disponível", value: "PJ & CLT" },
];

export function About() {
  return (
    <section id="sobre" className="py-32 px-6 md:px-20 max-w-6xl mx-auto">
      <SectionLabel number="01">Sobre Mim</SectionLabel>

      <div className="grid md:grid-cols-5 gap-16 mb-28">
        <Reveal className="md:col-span-3">
          <h2
            className="text-3xl md:text-4xl font-bold leading-tight mb-7"
            style={{ fontFamily: "Oxanium, sans-serif" }}
          >
            Engenharia aplicada
            <br />
            ao desenvolvimento full stack.
          </h2>
          <p className="text-foreground/50 leading-relaxed mb-4 text-sm">
            Engenheiro Mecânico formado, atualmente em transição para Engenharia de Software,
            com experiência em desenvolvimento de soluções para automação de processos,
            análise de dados e sistemas internos. Nos últimos anos atuei na indústria metalúrgica,
            participando da análise de projetos, orçamentos, processos de fabricação e
            desenvolvimento de ferramentas que reduziram atividades manuais através de Python,
            VBA, SQL e integrações entre sistemas.
          </p>
          <p className="text-foreground/50 leading-relaxed text-sm">
            Atualmente concentro meus estudos em desenvolvimento Back-end com ASP.NET Core,
            Python e PostgreSQL, aplicando os conhecimentos em projetos próprios com foco em
            arquitetura limpa, qualidade de código e desenvolvimento de páginas como essa.
          </p>
        </Reveal>

        <Reveal delay={0.12} className="md:col-span-2">
          <div className="border border-[#4FF0FF]/10">
            {INFO_ROWS.map(({ label, value }, i) => (
              <div
                key={label}
                className={`flex items-center justify-between px-5 py-4 ${
                  i < INFO_ROWS.length - 1 ? "border-b border-[#4FF0FF]/10" : ""
                }`}
              >
                <span className="text-[10px] font-mono text-foreground/30 tracking-[0.2em] uppercase">
                  {label}
                </span>
                <span className="text-sm text-foreground/70">{value}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal>
        <p className="text-[10px] font-mono tracking-[0.25em] text-foreground/30 uppercase mb-10">
          Minha Trajetória
        </p>
      </Reveal>

      <div className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[#4FF0FF]/12 pointer-events-none" />
        <div className="space-y-0">
          {TIMELINE.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
