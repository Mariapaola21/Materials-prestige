import { useEffect, useRef, useState } from "react";
import ScrollAnimator from "./ScrollAnimator";

function AnimatedCounter({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 200, suffix: "+", label: "Proyectos Entregados" },
  { value: 40, suffix: "", label: "Años de Excelencia" },
  { value: 15, suffix: "", label: "Países" },
  { value: 100, suffix: "%", label: "Artesanal" },
];

export default function Stats() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 md:px-24">
        <ScrollAnimator>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            {stats.map((stat, i) => (
              <div key={stat.label} className="text-center">
                <p className="font-headline text-5xl md:text-6xl font-light text-primary/70 mb-3">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2000 + i * 200}
                  />
                </p>
                <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
}
