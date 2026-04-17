"use client";
import Image from "next/image";
import { useEffect, useState } from "react";


import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import facuImg from "@/images/yo.jpg";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <main className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white transition-colors duration-300">
      <Navbar darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />

      <section className="max-w-6xl mx-auto px-6 py-28">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          
          <div className="space-y-6">
            <p className="uppercase tracking-[0.3em] text-sm opacity-70">
              Software Developer
            </p>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
              Construyo software sólido, claro y útil.
            </h2>

            <p className="text-lg md:text-xl opacity-70 leading-relaxed">
              Desarrollador con experiencia en .NET, APIs y sistemas reales.
              Interesado en arquitectura limpia, buenas prácticas y evolución constante.
            </p>

            <div className="flex gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-xl font-medium hover:scale-105 transition"
              >
                Ver proyectos
              </a>

              <a
                href="#contact"
                className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 rounded-xl hover:scale-105 transition"
              >
                Contactarme
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-zinc-300 dark:border-zinc-700 shadow-2xl">
              <Image
                src={facuImg}
                alt="Facundo Peri"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}