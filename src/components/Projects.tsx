import { projects } from "@/data/projects";

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
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-6 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-800 space-y-4"
            >
              <h4 className="text-xl font-semibold">{project.title}</h4>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {project.description}
              </p>
              <p className="text-zinc-500 text-sm">
                {project.stack.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}