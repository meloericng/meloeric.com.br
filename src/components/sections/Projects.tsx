import { SectionLabel } from "@/components/common/SectionLabel";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/constants/portfolio.constants";

export function Projects() {
  return (
    <section id="projetos" className="py-32 px-6 md:px-20 max-w-6xl mx-auto">
      <SectionLabel number="02">Projetos</SectionLabel>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
