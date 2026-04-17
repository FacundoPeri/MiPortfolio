"use client";
import { motion, type Variants } from "framer-motion";
import { experiences } from "@/data/experience";
import { CalendarDays } from "lucide-react";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Experience() {
  return (
    <section
      id="experience"
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
            Experiencia
          </p>
          <h3 className="text-4xl font-bold mt-3">
            Trabajo en sistemas reales y de impacto público.
          </h3>
        </motion.div>

        <div className="grid gap-6">
          {experiences.map((experience) => {
            const Icon = experience.icon;
            return (
              <motion.div
                key={experience.company}
                variants={item}
                className="group relative p-6 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50 transition-all duration-300 overflow-hidden"
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${experience.accent}`}
                />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${experience.accent} shrink-0`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold">{experience.company}</h4>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 shrink-0">
                    <CalendarDays className="w-3 h-3" />
                    {experience.period}
                  </span>
                </div>

                <p className="text-zinc-600 dark:text-zinc-400 mt-4 leading-relaxed text-sm">
                  {experience.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {experience.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
