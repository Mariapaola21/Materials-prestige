import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollAnimator from "./ScrollAnimator";
import ProgressiveImage from "./ProgressiveImage";

export default function Philosophy() {
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section className="py-32 px-6 md:px-24 bg-surface">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <ScrollAnimator variant="slide-left" className="md:col-span-5 space-y-8">
          <h2 className="font-headline text-3xl md:text-5xl leading-tight text-on-surface">
            Curating spaces where <br />
            <span className="text-primary italic">time stands still.</span>
          </h2>
          <p className="font-body text-lg text-on-surface-variant leading-relaxed max-w-md">
            Our philosophy merges the structural rigor of architecture with the
            soulful warmth of hand-selected timber. Every Linea piece is a
            singular narrative of craft.
          </p>
          <div className="pt-4">
            <button className="font-label text-xs uppercase tracking-[0.2em] text-primary border-b border-primary/20 hover:border-primary transition-colors pb-1">
              Our Process
            </button>
          </div>
        </ScrollAnimator>
        <ScrollAnimator variant="slide-right" className="md:col-span-7 relative">
          <div ref={imgRef} className="aspect-[4/5] bg-surface-container-low overflow-hidden">
            <motion.div className="w-full h-[115%]" style={{ y: imgY }}>
              <ProgressiveImage
                alt="Artisan Craftsmanship"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_DXedX_2YqHWvs5TR8xIxIIJqZ4mGQfZ6WoCJ_QD9EB7NSn_uM9WpzLZpgvU44kfRMHfSvu9zAKpAEh6uhaj-mMTbCbH7txOnDSTBjatiWQICJvS2k7xzOoo6DdY6pfDrizIe1aZEDH0wrkNOsxb7X3miaRDvj0KMWb3wb7uTisN86TD10QBl-IEiBKF63pFWBqYzQ-yRB7y7ILkMKYaQMWFnntOeOBjKXg8p2GydLTzhkQ6cNQh3-HrKp6V2dT9ro3hw2Usthtw"
              />
            </motion.div>
          </div>
          <div className="hidden md:block absolute -bottom-12 -left-24 w-64 aspect-square bg-surface-container-lowest p-6 shadow-2xl shadow-on-surface/5">
            <p className="font-headline italic text-sm text-on-surface-variant mb-4">
              "The detail is not the detail. It is the product."
            </p>
            <span className="font-label text-[10px] uppercase tracking-widest text-primary">
              Charles Eames
            </span>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
}
