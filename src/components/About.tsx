export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-24 border-t border-zinc-800"
    >
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-5">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Sobre mí
          </p>

          <h3 className="text-4xl font-bold">
            Desarrollo software con foco en claridad y calidad.
          </h3>

          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Soy Facundo Peri, desarrollador de software de La Plata,
            especializado en tecnologías .NET y sistemas web.
          </p>

          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Tengo experiencia trabajando en organismos públicos,
            desarrollando soluciones reales, APIs y mantenimiento evolutivo.
          </p>
        </div>

        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-800">
            <h4 className="font-semibold">Stack principal</h4>
            <p className="text-zinc-600 dark:text-zinc-400 mt-2">
              C#, ASP.NET Core, SQL Server, APIs REST
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-800">
            <h4 className="font-semibold">Intereses</h4>
            <p className="text-zinc-600 dark:text-zinc-400 mt-2">
              Arquitectura limpia, buenas prácticas, performance y evolución profesional.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-800">
            <h4 className="font-semibold">Ubicación</h4>
            <p className="text-zinc-600 dark:text-zinc-600 dark:text-zinc-400 mt-2">
              La Plata, Buenos Aires, Argentina
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}