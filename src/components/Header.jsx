import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import useScrollDirection from "../hooks/useScrollDirection";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/proyectos", label: "Proyectos" },
  { to: "/proyecto-3d", label: "3D" },
  { to: "/materiales", label: "Materiales" },
  { to: "/servicios-premium", label: "Servicio Premium" },
];

export default function Header({ onDrawerToggle }) {
  const { scrollDirection, isTop } = useScrollDirection();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHidden = scrollDirection === "down" && !isTop;

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isTop
          ? "bg-transparent border-b border-transparent"
          : "bg-[#fbf9f4]/90 dark:bg-[#31332c]/90 backdrop-blur-md border-b border-[#797c73]/10 shadow-sm shadow-on-surface/5"
      }`}
      animate={{ y: isHidden ? -80 : 0 }}
      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="flex justify-between items-center px-6 h-16 w-full">
        <button
          onClick={onDrawerToggle}
          className={`hover:opacity-70 transition-opacity duration-300 active:scale-95 ${
            isTop ? "text-[#fbf9f4]" : "text-[#735a3a]"
          }`}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>

        <NavLink
          to="/"
          className={`font-headline font-light tracking-[0.3em] text-lg transition-colors duration-500 ${
            isTop ? "text-[#fbf9f4]" : "text-[#31332c] dark:text-[#fbf9f4]"
          }`}
        >
          LINEA PRESTIGE
        </NavLink>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-8">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `font-headline tracking-[0.2em] uppercase text-sm hover:opacity-70 transition-all duration-300 ${
                    isActive
                      ? isTop
                        ? "text-[#fbf9f4]"
                        : "text-[#735a3a]"
                      : isTop
                      ? "text-[#fbf9f4]/60"
                      : "text-[#31332c]/60"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <button
            className={`hover:opacity-70 transition-opacity duration-300 active:scale-95 ${
              isTop ? "text-[#fbf9f4]" : "text-[#735a3a]"
            }`}
          >
            <span className="material-symbols-outlined">shopping_bag</span>
          </button>
        </div>
      </div>

      <div
        className="scroll-progress"
        style={{
          width: `${scrollProgress * 100}%`,
          top: "63px",
          opacity: isTop ? 0 : 1,
        }}
      />
    </motion.header>
  );
}
