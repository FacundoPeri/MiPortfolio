"use client";
import { motion, type Variants } from "framer-motion";
import { skills } from "@/data/skills";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section
      id="skills"
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
            Habilidades
          </p>
          <h3 className="text-4xl font-bold mt-3">
            Tecnologías que uso día a día.
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group) => (
            <motion.div
              key={group.category}
              variants={item}
              className="p-5 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-4"
            >
              <h4 className="font-semibold text-xs uppercase tracking-widest text-zinc-500">
                {group.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
