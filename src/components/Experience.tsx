import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto px-6 py-24 border-t border-zinc-800"
    >
      <div className="space-y-12">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Experiencia
          </p>

          <h3 className="text-4xl font-bold mt-3">
            Trabajo en sistemas reales y de impacto público.
          </h3>
        </div>

        <div className="grid gap-6">
          {experiences.map((experience) => (
            <div
              key={experience.company}
              className="p-6 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-800"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <h4 className="text-xl font-semibold">
                  {experience.company}
                </h4>

                <span className="text-zinc-500 text-sm">
                  ({experience.period})
                </span>
              </div>

              <p className="text-zinc-600 dark:text-zinc-400 mt-4 leading-relaxed">
                {experience.description}
              </p>

              <p className="text-zinc-500 mt-3 text-sm">
                {experience.stack.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}