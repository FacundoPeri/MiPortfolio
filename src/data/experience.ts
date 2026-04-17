import { LucideIcon, Building2, Landmark } from "lucide-react";

export type Experience = {
  company: string;
  period: string;
  description: string;
  stack: string[];
  icon: LucideIcon;
  accent: string;
};

export const experiences: Experience[] = [
  {
    company: "Ministerio de Economía de Buenos Aires",
    period: "Agosto 2025 - Actualidad",
    description:
      "Desarrollo y mantenimiento de sistemas internos, mejoras evolutivas, aplicaciones web y APIs.",
    stack: [".NET Framework", ".NET Core", "Oracle", "PL/SQL", "REST APIs", "MVC APPs"],
    icon: Landmark,
    accent: "from-indigo-500 to-violet-500",
  },
  {
    company: "IOMA",
    period: "Marzo 2023 - Agosto 2025",
    description:
      "Participación en mantenimiento y desarrollo de sistemas administrativos.",
    stack: [".NET Framework", ".NET Core", "SQL Server", "REST APIs", "MVC APPs"],
    icon: Building2,
    accent: "from-violet-500 to-purple-500",
  },
];