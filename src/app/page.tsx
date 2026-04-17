"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";

import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import facuImg from "@/images/yo.jpg";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  const [darkMode, setDarkMode] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <main className="min-h-screen md:pl-16 bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white transition-colors duration-300">
      <Navbar darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />

      {/* Hero */}
      <div className="relative overflow-hidden">
        {/* Background blobs — full width */}
        <div className="pointer-events-none absolute -top-48 right-0 w-[800px] h-[800px] rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-48 left-0 w-[700px] h-[700px] rounded-full bg-violet-500/10 blur-3xl" />

      <section className="relative max-w-6xl mx-auto px-6 py-28">
        <div className="relative grid md:grid-cols-2 gap-14 items-center">
          <motion.div
            className="space-y-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.p
              variants={item}
              className="uppercase tracking-[0.3em] text-sm text-indigo-500 dark:text-indigo-400 font-medium"
            >
              Software Developer
            </motion.p>

            <motion.h1
              variants={item}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              Construyo software{" "}
              <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
                sólido, claro y útil.
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed"
            >
              Desarrollador con experiencia en .NET, APIs y sistemas reales.
              Interesado en arquitectura limpia, buenas prácticas y evolución
              constante.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-violet-600 text-white rounded-xl font-medium hover:scale-105 transition shadow-lg shadow-indigo-500/25"
              >
                Ver proyectos
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 rounded-xl font-medium hover:scale-105 hover:border-indigo-400 dark:hover:border-indigo-500 transition"
              >
                Contactarme
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 blur-md opacity-50" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl">
                <Image
                  src={facuImg}
                  alt="Facundo Peri"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      </div>

      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
