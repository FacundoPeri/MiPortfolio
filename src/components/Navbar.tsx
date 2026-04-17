type NavbarProps = {
  darkMode: boolean;
  toggleTheme: () => void;
};

export default function Navbar({
  darkMode,
  toggleTheme,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-zinc-950/70 border-b border-zinc-200 dark:border-zinc-800">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-bold text-lg tracking-tight hover:opacity-80 transition"
        >
          Facundo Peri
        </a>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-300">
            <a href="#about" className="hover:text-black dark:hover:text-white transition">
              Sobre mí
            </a>

            <a href="#experience" className="hover:text-black dark:hover:text-white transition">
              Experiencia
            </a>

            <a href="#projects" className="hover:text-black dark:hover:text-white transition">
              Proyectos
            </a>

            <a href="#contact" className="hover:text-black dark:hover:text-white transition">
              Contacto
            </a>
          </div>

          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center hover:scale-110 transition"
            aria-label="Cambiar tema"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>
    </header>
  );
}