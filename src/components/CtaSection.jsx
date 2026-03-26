import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollAnimator from "./ScrollAnimator";

export default function CtaSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={ref} className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y: imgY }}>
        <img
          alt="Luxury workshop"
          loading="lazy"
          className="w-full h-[120%] object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_DXedX_2YqHWvs5TR8xIxIIJqZ4mGQfZ6WoCJ_QD9EB7NSn_uM9WpzLZpgvU44kfRMHfSvu9zAKpAEh6uhaj-mMTbCbH7txOnDSTBjatiWQICJvS2k7xzOoo6DdY6pfDrizIe1aZEDH0wrkNOsxb7X3miaRDvj0KMWb3wb7uTisN86TD10QBl-IEiBKF63pFWBqYzQ-yRB7y7ILkMKYaQMWFnntOeOBjKXg8p2GydLTzhkQ6cNQh3-HrKp6V2dT9ro3hw2Usthtw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[#31332c]/70" />

      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <ScrollAnimator>
          <span className="font-label text-xs uppercase tracking-[0.3em] text-[#ffddb6]/70 block mb-6">
            Comience su proyecto
          </span>
          <h2 className="font-headline text-4xl md:text-6xl font-light text-[#fbf9f4] mb-8 max-w-3xl leading-tight">
            Diseñemos juntos
            <br />
            <span className="italic text-[#ffddb6]">su espacio ideal</span>
          </h2>
          <motion.a
            href="#"
            className="inline-flex items-center gap-3 px-12 py-5 bg-primary text-on-primary font-label text-xs uppercase tracking-[0.2em] hover:bg-primary-dim transition-colors duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Solicitar Consulta
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </motion.a>
        </ScrollAnimator>
      </div>
    </section>
  );
}
