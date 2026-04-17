import { Globe, Server, LayoutDashboard, Rocket } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type Project = {
  title: string;
  description: string;
  stack: string[];
  href: string | null;
  icon: LucideIcon;
  accent: string;
};

export const projects: Project[] = [
  {
    title: "Portfolio Personal",
    description:
      "Sitio web desarrollado con Next.js, TypeScript y Tailwind CSS para presentar mi perfil profesional, experiencia y proyectos.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    href: null,
    icon: Globe,
    accent: "from-indigo-500 to-violet-500",
  },
  {
    title: "API de Gestión de Tareas",
    description:
      "Backend REST para administración de tareas con autenticación, CRUD completo y arquitectura limpia.",
    stack: ["ASP.NET Core", "SQL Server", "JWT"],
    href: null,
    icon: Server,
    accent: "from-violet-500 to-purple-500",
  },
  {
    title: "Dashboard Administrativo",
    description:
      "Panel interno para visualización de métricas, usuarios y reportes.",
    stack: ["React", "Charts", "UI Design"],
    href: null,
    icon: LayoutDashboard,
    accent: "from-purple-500 to-indigo-400",
  },
  {
    title: "Próximo Proyecto",
    description:
      "Siempre construyendo nuevas ideas, aprendiendo y mejorando skills.",
    stack: ["In progress..."],
    href: null,
    icon: Rocket,
    accent: "from-indigo-400 to-sky-400",
  },
];