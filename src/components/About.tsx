"use client";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const cards = [
  { title: "Stack principal", content: "C#, ASP.NET Core, SQL Server, APIs REST" },
  { title: "Intereses", content: "Arquitectura limpia, buenas prácticas, performance y evolución profesional." },
  { title: "Ubicación", content: "La Plata, Buenos Aires, Argentina" },
];

export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-24 border-t border-zinc-200 dark:border-zinc-800"
    >
      <motion.div
        className="grid md:grid-cols-2 gap-12"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={item} className="space-y-5">
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
            Tengo experiencia trabajando en organismos públicos, desarrollando
            soluciones reales, APIs y mantenimiento evolutivo. Me apasiona
            escribir código limpio, escalable y fácil de mantener.
          </p>
        </motion.div>

        <motion.div variants={item} className="space-y-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="p-5 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
            >
              <h4 className="font-semibold">{card.title}</h4>
              <p className="text-zinc-600 dark:text-zinc-400 mt-2">{card.content}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
