export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-24 border-t border-zinc-800"
    >
      <div className="space-y-12">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Proyectos
          </p>

          <h3 className="text-4xl font-bold mt-3">
            Algunas cosas que construí y sigo mejorando.
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-800 space-y-4">
            <h4 className="text-xl font-semibold">
              Portfolio Personal
            </h4>

            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Sitio web desarrollado con Next.js, TypeScript y Tailwind CSS
              para presentar mi perfil profesional, experiencia y proyectos.
            </p>

            <p className="text-zinc-500 text-sm">
              Next.js · TypeScript · Tailwind
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-800 space-y-4">
            <h4 className="text-xl font-semibold">
              API de Gestión de Tareas
            </h4>

            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Backend REST para administración de tareas con autenticación,
              CRUD completo y arquitectura limpia.
            </p>

            <p className="text-zinc-500 text-sm">
              ASP.NET Core · SQL Server · JWT
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-800 space-y-4">
            <h4 className="text-xl font-semibold">
              Dashboard Administrativo
            </h4>

            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Panel interno para visualización de métricas, usuarios y reportes.
            </p>

            <p className="text-zinc-500 text-sm">
              React · Charts · UI Design
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-800 space-y-4">
            <h4 className="text-xl font-semibold">
              Próximo Proyecto
            </h4>

            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Siempre construyendo nuevas ideas, aprendiendo y mejorando skills.
            </p>

            <p className="text-zinc-500 text-sm">
              In progress...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}