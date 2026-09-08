import { SectionLabel } from "@/components/common/SectionLabel";
import { TechCard } from "@/components/ui/TechCard";
import { TECH_CATEGORIES } from "@/constants/portfolio.constants";

export function Technologies() {
  return (
    <section id="tecnologias" className="py-32 px-6 md:px-20 max-w-6xl mx-auto">
      <SectionLabel number="02">Tecnologias</SectionLabel>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {TECH_CATEGORIES.map((cat, i) => (
          <TechCard
            key={cat.label}
            label={cat.label}
            icon={cat.icon}
            skills={cat.skills}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
