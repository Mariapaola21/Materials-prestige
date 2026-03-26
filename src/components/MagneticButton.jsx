import { useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * MagneticButton — wraps children with a magnetic hover effect.
 * The content shifts slightly toward the cursor on hover.
 */
export default function MagneticButton({
  children,
  className = "",
  strength = 0.3,
  as: Tag = "div",
  ...props
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setPosition({
      x: (clientX - centerX) * strength,
      y: (clientY - centerY) * strength,
    });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 15, mass: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
