import { Globe, Server, Database, Cpu } from "lucide-react";
import type { NavLink, TimelineEntry, Project } from "@/types/portfolio.types";

export const NAV_LINKS: NavLink[] = [
  { label: "Sobre", href: "sobre" },
  { label: "Projetos", href: "projetos" },
  { label: "Tecnologias", href: "tecnologias" },
  { label: "Contato", href: "contato" },
];

export const TIMELINE: TimelineEntry[] = [
  {
    year: "2019",
    role: "Engenharia Mecânica",
    company: "PUC Minas",
    description:
      "Início da graduação com foco em processos industriais e resolução de problemas.\nPrimeiro contato com programação em C++ utilizando Arduino.",
  },
  {
    year: "2021",
    role: "Estágio em Manutenção",
    company: "Primeiro contato com VBA",
    description:
      "Gestão de ordens de serviço e análise de manutenção.\nAutomação de processos com VBA e criação de dashboard.",
  },
  {
    year: "2023",
    role: "Consolidação Técnica",
    company: "PUC Minas / Estudos",
    description:
      "Aprofundamento em lógica, automação e programação em Python de forma independente.",
  },
  {
    year: "2024",
    role: "Engenharia de Processos",
    company: "Setor Metalúrgico",
    description:
      "Planejamento de produção, roteiros de fabricação, leitura de desenhos técnicos e automação de tarefas com VBA.",
  },
  {
    year: "2025",
    role: "Rectangle Nesting",
    company: "Projeto Pessoal",
    description:
      "Início da elaboração de projetos pessoais para acelerar tarefas rotineiras em Python.",
  },
  {
    year: "2025",
    role: "Steel Quote",
    company: "Projeto Pessoal",
    description:
      "Aplicação em Python para análise de ativos financeiros e integração com APIs, visando melhor acompanhamento da carteira de ativos.",
  },
  {
    year: "2026",
    role: "Full Stack Developer",
    company: "Startup Tech",
    description:
      "Desenvolvimento full stack com React, TypeScript, .NET, PostgreSQL e Docker, criando APIs, interfaces, automações e dashboards.",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "PartnerHub",
    description:
      "Aplicação full stack para gestão de parceiros, com APIs em .NET e interface em React integrada ao PostgreSQL.",
    tags: ["React", "TypeScript", ".NET", "PostgreSQL", "Docker"],
    status: "Em andamento",
  },
    {
    title: "Steel Quote",
    description:
      "Aplicação em Python para análise de ativos financeiros, com integração a APIs e persistência em banco local.",
    tags: ["Python", "SQLite", "APIs"],
    status: "Em andamento",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Dashboard analítico no Metabase para acompanhamento de métricas de negócio e performance de usuários.",
    tags: ["Metabase", "PostgreSQL", "SQL"],
    status: "Concluído",
  },
];

export const TECH_CATEGORIES = [
  {
    label: "Frontend",
    icon: Globe,
    skills: ["React", "TypeScript", "Tailwind CSS"],
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
    skills: ["Docker", "Metabase", "Git"],
  },
];
