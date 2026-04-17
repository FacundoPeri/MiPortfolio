export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 py-24 border-t border-zinc-800"
    >
      <div className="max-w-3xl space-y-8">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Contacto
          </p>

          <h3 className="text-4xl font-bold mt-3">
            ¿Hablamos?
          </h3>

          <p className="text-zinc-600 dark:text-zinc-400 mt-4 leading-relaxed">
            Estoy abierto a oportunidades, proyectos interesantes
            y conversaciones sobre tecnología.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <a
            href="mailto:tuemail@ejemplo.com"
            className="p-5 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition"
          >
            <p className="font-semibold">Email</p>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-1">
              tuemail@ejemplo.com
            </p>
          </a>

          <a
            href="https://github.com/FacundoPeri"
            target="_blank"
            className="p-5 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition"
          >
            <p className="font-semibold">GitHub</p>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-1">
              Ver repositorios
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/facundoperi/"
            target="_blank"
            className="p-5 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition"
          >
            <p className="font-semibold">LinkedIn</p>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-1">
              Perfil profesional
            </p>
          </a>

          <div className="p-5 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-800">
            <p className="font-semibold">Ubicación</p>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-1">
              La Plata, Buenos Aires, Argentina
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}