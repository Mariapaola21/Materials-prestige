import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", icon: "home_mini", label: "Home" },
  { to: "/proyectos", icon: "grid_view", label: "Proyectos" },
  { to: "/proyecto-3d", icon: "view_in_ar", label: "3D" },
  { to: "/materiales", icon: "layers", label: "Materiales" },
  { to: "/servicios-premium", icon: "star", label: "Premium" },
];

export default function BottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 w-full z-50 bg-[#fbf9f4]/90 dark:bg-[#31332c]/90 backdrop-blur-lg border-t border-[#797c73]/10 h-20 flex justify-around items-center px-4 pb-safe">
      {navLinks.map(({ to, icon, label }) => (
        <NavLink
          key={to}
          to={to}
          end={to === "/"}
          className={({ isActive }) =>
            `flex flex-col items-center transition-transform ${
              isActive
                ? "text-[#735a3a] scale-110"
                : "text-[#31332c]/40 hover:text-[#735a3a]"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <span
                className="material-symbols-outlined"
                style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
              >
                {icon}
              </span>
              <span className="font-label text-[10px] uppercase tracking-widest mt-1">
                {label}
              </span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}
