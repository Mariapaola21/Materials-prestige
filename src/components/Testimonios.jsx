import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollAnimator from "./ScrollAnimator";

const testimonials = [
  {
    quote:
      "Cada pieza que Linea creó para nuestra residencia es una obra de arte. La atención al detalle es incomparable en la industria.",
    author: "Alejandro Martínez",
    role: "Arquitecto, Madrid",
  },
  {
    quote:
      "La cocina que diseñaron transformó completamente nuestro hogar. Es funcional, elegante y absolutamente única.",
    author: "Isabella Torres",
    role: "Cliente Privado, Barcelona",
  },
  {
    quote:
      "Trabajar con el equipo de Linea fue una experiencia excepcional de principio a fin. Profesionalismo y pasión por lo que hacen.",
    author: "Carlos Herrera",
    role: "Diseñador de Interiores, Valencia",
  },
];

export default function Testimonios() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 bg-on-surface text-surface overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <ScrollAnimator>
          <span className="material-symbols-outlined text-primary text-4xl mb-8 block opacity-40">
            format_quote
          </span>
        </ScrollAnimator>

        <div className="relative min-h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <p className="font-headline text-2xl md:text-3xl italic font-light leading-relaxed text-surface/90 mb-10 max-w-3xl">
                "{testimonials[current].quote}"
              </p>
              <div>
                <p className="font-label text-xs uppercase tracking-widest text-primary mb-1">
                  {testimonials[current].author}
                </p>
                <p className="font-body text-xs text-surface/50">
                  {testimonials[current].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-500 ${
                i === current
                  ? "w-8 h-1 bg-primary"
                  : "w-3 h-1 bg-surface/20 hover:bg-surface/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
