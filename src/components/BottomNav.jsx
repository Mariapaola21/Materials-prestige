export default function BottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 w-full z-50 bg-[#fbf9f4]/90 dark:bg-[#31332c]/90 backdrop-blur-lg border-t border-[#797c73]/10 h-20 flex justify-around items-center px-4 pb-safe">
      <a
        className="flex flex-col items-center text-[#735a3a] scale-110 transition-transform"
        href="#"
      >
        <span
          className="material-symbols-outlined"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          home_mini
        </span>
        <span className="font-label text-[10px] uppercase tracking-widest mt-1">
          Home
        </span>
      </a>
      <a
        className="flex flex-col items-center text-[#31332c]/40 hover:text-[#735a3a]"
        href="#"
      >
        <span className="material-symbols-outlined">grid_view</span>
        <span className="font-label text-[10px] uppercase tracking-widest mt-1">
          Projects
        </span>
      </a>
      <a
        className="flex flex-col items-center text-[#31332c]/40 hover:text-[#735a3a]"
        href="#"
      >
        <span className="material-symbols-outlined">handyman</span>
        <span className="font-label text-[10px] uppercase tracking-widest mt-1">
          Services
        </span>
      </a>
      <a
        className="flex flex-col items-center text-[#31332c]/40 hover:text-[#735a3a]"
        href="#"
      >
        <span className="material-symbols-outlined">chat_bubble_outline</span>
        <span className="font-label text-[10px] uppercase tracking-widest mt-1">
          Contact
        </span>
      </a>
    </nav>
  );
}
