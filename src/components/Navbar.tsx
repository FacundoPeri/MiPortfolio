"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type NavbarProps = {
  darkMode: boolean;
  toggleTheme: () => void;
};

const links = [
  { href: "#about", label: "Sobre mí" },
  { href: "#skills", label: "Habilidades" },
  { href: "#experience", label: "Experiencia" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
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
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-zinc-950/70 border-b border-zinc-200 dark:border-zinc-800">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-bold text-lg tracking-tight hover:opacity-80 transition"
        >
          Facundo Peri
        </a>

        <div className="flex items-center gap-4">
          {/* Desktop nav */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-300">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition hover:text-black dark:hover:text-white ${
                  activeSection === link.href.slice(1)
                    ? "text-black dark:text-white font-semibold"
                    : ""
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center hover:scale-110 transition"
            aria-label="Cambiar tema"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md overflow-hidden"
          >
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition py-2"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
