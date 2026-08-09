export interface NavLink {
  label: string;
  href: string;
}

export interface TimelineEntry {
  year: string;
  role: string;
  company: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  status: "Em andamento" | "Concluído";
}

export interface TechCategory {
  label: string;
  skills: string[];
}
