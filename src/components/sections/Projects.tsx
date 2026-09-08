import { SectionLabel } from "@/components/common/SectionLabel";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/constants/portfolio.constants";

export function Projects() {
  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projetos" className="py-32 px-6 md:px-20 max-w-6xl mx-auto">
      <SectionLabel number="01">Projetos</SectionLabel>

      <div className="flex flex-col gap-5">
        {/* Featured projects — full width */}
        {featured.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}

        {/* Remaining projects — 2-column grid */}
        {rest.length > 0 && (
          <div className="grid md:grid-cols-2 gap-5">
            {rest.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={featured.length + i}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
