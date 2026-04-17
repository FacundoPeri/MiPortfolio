"use client";
import { motion, type Variants } from "framer-motion";
import { Mail, MapPin, ExternalLink } from "lucide-react";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "facundoperi01@gmail.com",
    href: "mailto:facundoperi01@gmail.com",
  },
  {
    icon: ExternalLink,
    label: "GitHub",
    value: "github.com/FacundoPeri",
    href: "https://github.com/FacundoPeri",
  },
  {
    icon: ExternalLink,
    label: "LinkedIn",
    value: "linkedin.com/in/facundoperi",
    href: "https://www.linkedin.com/in/facundoperi/",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "La Plata, Buenos Aires, Argentina",
    href: null,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 py-24 border-t border-zinc-200 dark:border-zinc-800"
    >
      <motion.div
        className="max-w-3xl space-y-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={item}>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Contacto
          </p>
          <h3 className="text-4xl font-bold mt-3">¿Hablamos?</h3>
          <p className="text-zinc-600 dark:text-zinc-400 mt-4 leading-relaxed">
            Estoy abierto a oportunidades, proyectos interesantes y
            conversaciones sobre tecnología.
          </p>
        </motion.div>

        <motion.div variants={item} className="grid sm:grid-cols-2 gap-4">
          {links.map(({ icon: Icon, label, value, href }) => {
            const content = (
              <>
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4 text-indigo-500 shrink-0" />
                  <p className="font-semibold">{label}</p>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-2 pl-7">
                  {value}
                </p>
              </>
            );

            return href ? (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                className="p-5 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50 transition-all duration-300"
              >
                {content}
              </a>
            ) : (
              <div
                key={label}
                className="p-5 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
              >
                {content}
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
