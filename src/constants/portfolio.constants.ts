import { Globe, Server, Database, Cpu } from "lucide-react";
import type { NavLink, TimelineEntry, Project } from "@/types/portfolio.types";

export const NAV_LINKS: NavLink[] = [
  { label: "Projetos", href: "projetos" },
  { label: "Tecnologias", href: "tecnologias" },
  { label: "Trajetória", href: "trajetoria" },
  { label: "Sobre", href: "sobre" },
  { label: "Contato", href: "contato" },
];

export const TIMELINE: TimelineEntry[] = [
  {
    year: "2019",
    role: "Engenharia Mecânica",
    company: "PUC Minas",
    description:
      "Início da graduação com foco em processos industriais e resolução de problemas. Primeiro contato com programação em C++ via Arduino.",
  },
  {
    year: "2021",
    role: "Estágio em Manutenção",
    company: "Indústria de Embalagens Plásticas",
    description:
      "Gestão de ordens de serviço e análise de manutenção. Automação de processos com VBA e criação de dashboard de indicadores.",
  },
  {
    year: "2023",
    role: "Consolidação Técnica",
    company: "Formação e estudos",
    description:
      "Aprofundamento em lógica, automação e programação em Python de forma independente.",
  },
  {
    year: "2024",
    role: "Engenharia de Processos",
    company: "Indústria Metalúrgica",
    description:
      "Elaboração de ordens de produção, roteiros de fabricação e automação de tarefas repetitivas com VBA e Python.",
  },
  {
    year: "2025",
    role: "Orçamentista",
    company: "Indústria Metalúrgica",
    description:
      "Elaboração de orçamentos e análise técnica de projetos metalúrgicos.",
  },
  {
    year: "2025",
    role: "Steel Quote",
    company: "Projeto Pessoal",
    description:
      "Aplicação em Python para análise de ativos financeiros com integração a APIs e persistência em banco local.",
  },
  {
    year: "2026",
    role: "Desenvolvedor Full Stack",
    company: "Startup Tech",
    description:
      "Desenvolvimento full stack com React, TypeScript, .NET, PostgreSQL e Docker, criando APIs, interfaces e dashboards.",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "PartnerHub",
    description:
      "Aplicação full stack para gestão de parceiros comerciais. Back-end em .NET com autenticação JWT, front-end em React e banco PostgreSQL containerizado com Docker.",
    tags: ["React", "TypeScript", ".NET", "PostgreSQL", "Docker"],
    status: "Em andamento",
    featured: true,
    repoUrl: "https://github.com/meloericng",
  },
  {
    title: "Releva Dashboard",
    description:
      "Dashboard analítico no Metabase para acompanhamento de métricas de negócio e performance de usuários em tempo real.",
    tags: ["Metabase", "PostgreSQL", "SQL"],
    status: "Concluído",
  },
  {
    title: "Steel Quote",
    description:
      "Aplicação em Python para análise de ativos financeiros, com integração a APIs de mercado e persistência em banco local.",
    tags: ["Python", "SQLite", "APIs REST"],
    status: "Em andamento",
    repoUrl: "https://github.com/meloericng",
  },
];

export const TECH_CATEGORIES = [
  {
    label: "Frontend",
    icon: Globe,
    skills: ["React", "TypeScript", "Tailwind CSS", "JavaScript"],
  },
  {
    label: "Backend",
    icon: Server,
    skills: ["Python", ".NET", "APIs REST"],
  },
  {
    label: "Banco de Dados",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "SQLite"],
  },
  {
    label: "Ferramentas & Infra",
    icon: Cpu,
    skills: ["Docker", "Git", "Metabase", "Azure"],
  },
];
