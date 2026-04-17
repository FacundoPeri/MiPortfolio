"use client";
import { useState, useEffect } from "react";
import { User, Code2, Briefcase, FolderKanban, Mail, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type NavbarProps = {
  darkMode: boolean;
  toggleTheme: () => void;
};

const links = [
  { href: "#about", label: "Sobre mí", icon: User },
  { href: "#skills", label: "Habilidades", icon: Code2 },
  { href: "#experience", label: "Experiencia", icon: Briefcase },
  { href: "#projects", label: "Proyectos", icon: FolderKanban },
  { href: "#contact", label: "Contacto", icon: Mail },
];

export default function Navbar({ darkMode, toggleTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionIds = links.map((l) => l.href.slice(1));
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <>
      {/* Sidebar desktop */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-16 flex-col items-center justify-between py-6 z-50 bg-zinc-50 dark:bg-zinc-900 backdrop-blur-md border-r border-zinc-200 dark:border-zinc-700">
        <a
          href="#"
          className="font-bold text-sm tracking-tight hover:opacity-70 transition"
        >
          FP
        </a>

        <nav className="flex flex-col items-center gap-2">
          {links.map(({ href, label, icon: Icon }) => {
            const isActive = activeSection === href.slice(1);
            return (
              <a
                key={href}
                href={href}
                aria-label={label}
                className={`group relative w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/30"
                    : "text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`}
              >
                <Icon className="w-5 h-5" />
                {/* Tooltip */}
                <span className="pointer-events-none absolute left-full ml-3 px-2.5 py-1 text-xs font-medium rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {label}
                </span>
              </a>
            );
          })}
        </nav>

        <button
          onClick={toggleTheme}
          className="w-10 h-10 rounded-xl border border-zinc-200 dark:border-zinc-700 flex items-center justify-center hover:scale-110 transition text-base"
          aria-label="Cambiar tema"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </aside>

      {/* Top bar mobile */}
      <header className="md:hidden sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-zinc-950/80 border-b border-zinc-200 dark:border-zinc-800">
        <div className="px-6 h-14 flex items-center justify-between">
          <a href="#" className="font-bold text-sm tracking-tight">
            FP
          </a>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-sm"
              aria-label="Cambiar tema"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
            <button
              className="w-9 h-9 flex items-center justify-center"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menú"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-1">
                {links.map(({ href, label, icon: Icon }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition py-2"
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
