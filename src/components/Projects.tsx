"use client";
import { motion, type Variants } from "framer-motion";
import { projects } from "@/data/projects";
import { ExternalLink } from "lucide-react";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-24 border-t border-zinc-200 dark:border-zinc-800"
    >
      <motion.div
        className="space-y-12"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={item}>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Proyectos
          </p>
          <h3 className="text-4xl font-bold mt-3">
            Algunas cosas que construí y sigo mejorando.
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                variants={item}
                className="group relative p-6 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50 transition-all duration-300 space-y-4 overflow-hidden"
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.accent}`}
                />

                <div className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${project.accent}`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>

                <h4 className="text-xl font-semibold">{project.title}</h4>

                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs rounded-full bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    className="inline-flex items-center gap-1.5 text-sm text-indigo-500 hover:text-indigo-400 transition"
                  >
                    Ver repositorio <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
