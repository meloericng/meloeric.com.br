import { SectionLabel } from "@/components/common/SectionLabel";
import { Reveal } from "@/components/common/Reveal";

export function About() {
  return (
    <section id="sobre" className="py-32 px-6 md:px-20 max-w-6xl mx-auto">
      <SectionLabel number="04">Sobre</SectionLabel>

      <Reveal className="max-w-2xl">
        <h2
          className="text-2xl md:text-3xl font-bold leading-tight mb-7"
          style={{ fontFamily: "Oxanium, sans-serif" }}
        >
          Da engenharia para o desenvolvimento.
        </h2>
        <div className="space-y-4 text-sm text-foreground/55 leading-relaxed">
          <p>
            Me formei em Engenharia Mecânica na PUC Minas e trabalho há alguns anos na
            indústria metalúrgica — elaboração de ordens de produção, orçamentos, processos.
            Nesse período comecei a automatizar as tarefas mais repetitivas com VBA e
            Python, criando também interfaces pra facilitar preenchimentos manuais,e percebi
            que era isso que me interessava de verdade.
          </p>
          <p>
            Desde então venho estudando para migrar para o desenvolvimento full stack.
            Estou estudando arquitetura back-end com ASP.NET Core e
            PostgreSQL, construindo projetos reais e aplicando o que aprendo no
            trabalho atual em uma Startup Tech.
          </p>
          <p>
            Pretendo continuar solucionando problemas, só que agora, com código.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
