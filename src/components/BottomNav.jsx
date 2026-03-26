export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 w-full z-50 pb-safe bg-[#fbf9f4]/90 dark:bg-[#31332c]/90 backdrop-blur-lg border-t border-[#797c73]/10 flex justify-around items-center h-20 px-4 md:hidden">
      <button className="flex flex-col items-center text-[#31332c]/40 dark:text-[#fbf9f4]/40 hover:text-[#735a3a]">
        <span className="material-symbols-outlined">home_mini</span>
        <span className="font-label text-[10px] uppercase tracking-widest mt-1">
          Home
        </span>
      </button>
      <button className="flex flex-col items-center text-[#735a3a] dark:text-[#ffddb6] scale-110 transition-transform">
        <span className="material-symbols-outlined">grid_view</span>
        <span className="font-label text-[10px] uppercase tracking-widest mt-1">
          Projects
        </span>
      </button>
      <button className="flex flex-col items-center text-[#31332c]/40 dark:text-[#fbf9f4]/40 hover:text-[#735a3a]">
        <span className="material-symbols-outlined">handyman</span>
        <span className="font-label text-[10px] uppercase tracking-widest mt-1">
          Services
        </span>
      </button>
      <button className="flex flex-col items-center text-[#31332c]/40 dark:text-[#fbf9f4]/40 hover:text-[#735a3a]">
        <span className="material-symbols-outlined">chat_bubble_outline</span>
        <span className="font-label text-[10px] uppercase tracking-widest mt-1">
          Contact
        </span>
      </button>
    </nav>
  );
}
