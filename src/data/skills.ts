export type SkillCategory = {
  category: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    category: "Backend",
    items: ["C#", "ASP.NET Core", ".NET Framework", "REST APIs", "JWT", "Entity Framework", "MVC"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    category: "Base de datos",
    items: ["SQL Server", "Oracle", "PL/SQL"],
  },
  {
    category: "Herramientas",
    items: ["Git", "GitHub", "Visual Studio", "VS Code", "Postman"],
  },
];
