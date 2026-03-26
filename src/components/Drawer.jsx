import { AnimatePresence, motion } from "framer-motion";

export default function Drawer({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-on-surface/40 backdrop-blur-sm z-[59]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          {/* Panel */}
          <motion.aside
            className="fixed top-0 left-0 h-full w-80 bg-surface-container-low shadow-2xl shadow-on-surface/10 z-[60] flex flex-col p-8 gap-6"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="flex justify-between items-center mb-4">
              <div className="font-headline italic text-2xl text-primary">
                LINEA
              </div>
              <button
                onClick={onClose}
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {[
                { icon: "architecture", label: "The Atelier" },
                { icon: "chair", label: "Collections", active: false },
                { icon: "layers", label: "Bespoke Process", active: true },
                { icon: "menu_book", label: "Journal" },
                { icon: "mail", label: "Contact" },
              ].map((item) => (
                <a
                  key={item.label}
                  className={`font-headline text-lg tracking-wide py-3 px-4 flex items-center gap-4 transition-all duration-300 hover:translate-x-2 hover:bg-primary/5 ${
                    item.active
                      ? "text-primary font-semibold bg-primary/5"
                      : "text-on-surface/70 hover:text-on-surface"
                  }`}
                  href="#"
                >
                  <span className="material-symbols-outlined text-xl">
                    {item.icon}
                  </span>
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-auto pt-6 border-t border-outline-variant/20">
              <p className="font-body text-xs text-on-surface-variant leading-relaxed mb-3">
                atelier@lineaprestige.com
              </p>
              <p className="font-body text-xs text-on-surface-variant">
                +34 912 345 678
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
