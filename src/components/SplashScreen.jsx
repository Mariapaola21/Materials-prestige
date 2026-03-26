import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);
  const brand = "LINEA PRESTIGE";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onComplete?.(), 600);
    }, 2400);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9998] bg-[#31332c] flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="flex gap-[0.15em] overflow-hidden">
            {brand.split("").map((letter, i) => (
              <motion.span
                key={i}
                className="font-headline text-3xl md:text-5xl tracking-[0.3em] text-[#fbf9f4] font-light"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3 + i * 0.06,
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>
          <motion.div
            className="h-[1px] bg-[#735a3a] mt-6"
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{
              delay: 1.2,
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          />
          <motion.p
            className="font-label text-[10px] uppercase tracking-[0.4em] text-[#735a3a] mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            Bespoke Artistry Since 1984
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
