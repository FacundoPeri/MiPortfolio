export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} Facundo Peri</p>
        <div className="flex gap-6">
          <a
            href="https://github.com/FacundoPeri"
            target="_blank"
            className="hover:text-zinc-900 dark:hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/facundoperi/"
            target="_blank"
            className="hover:text-zinc-900 dark:hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:facundoperi01@gmail.com"
            className="hover:text-zinc-900 dark:hover:text-white transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
