import { SectionLabel } from "@/components/common/SectionLabel";
import { Reveal } from "@/components/common/Reveal";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { TIMELINE } from "@/constants/portfolio.constants";

export function Trajetoria() {
  return (
    <section id="trajetoria" className="py-32 px-6 md:px-20 max-w-6xl mx-auto">
      <SectionLabel number="03">Trajetória</SectionLabel>

      <Reveal>
        <p className="text-sm text-foreground/40 max-w-lg mb-14 leading-relaxed">
          Da Engenharia Mecânica ao desenvolvimento de software — uma transição
          construída na prática, passando pela indústria, pela automação e pelos
          próprios projetos.
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
