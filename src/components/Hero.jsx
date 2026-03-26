import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.35, 0.7]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative h-[100vh] min-h-[700px] overflow-hidden bg-on-surface">
      {/* Video Background — cropped bottom to hide watermark */}
      <motion.div className="absolute inset-0 -bottom-[8%]" style={{ scale }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[110%] object-cover"
          src="/hero-video.webm"
        />
      </motion.div>

      {/* Gradient overlays */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-[#31332c] via-[#31332c]/40 to-[#31332c]/20"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content */}
      <motion.div
        className="relative h-full flex flex-col items-center justify-end pb-28 text-center px-6"
        style={{ y: textY }}
      >
        {/* Minimal badge */}
        <motion.div
          className="mb-8 flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <div className="w-8 h-[1px] bg-[#ffddb6]/40" />
          <span className="font-label text-[10px] tracking-[0.4em] uppercase text-[#fbf9f4]/60">
            Est. 1984
          </span>
          <div className="w-8 h-[1px] bg-[#ffddb6]/40" />
        </motion.div>

        {/* Title — clean, single line */}
        <motion.h1
          className="font-headline text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#fbf9f4] mb-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Mobiliario de Autor
        </motion.h1>

        <motion.p
          className="font-body text-sm md:text-base text-[#fbf9f4]/50 max-w-md mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          Carpintería arquitectónica para espacios singulares
        </motion.p>

        {/* CTA */}
        <MagneticButton className="inline-block">
          <motion.a
            className="group inline-flex items-center gap-3 px-10 py-4 border border-[#a0825e]/50 text-[#f5e6d0] tracking-widest uppercase text-[10px] font-semibold hover:bg-[#7a5c3a]/40 hover:border-[#a0825e] transition-all duration-500"
            href="#proyectos"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            Explorar Colecciones
            <span className="material-symbols-outlined text-sm opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
              arrow_forward
            </span>
          </motion.a>
        </MagneticButton>
      </motion.div>

      {/* Scroll Indicator — minimal line */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <div className="w-[1px] h-6 bg-[#fbf9f4]/15 relative overflow-hidden">
          <motion.div
            className="w-full bg-[#ffddb6]/50 absolute top-0"
            animate={{ height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
