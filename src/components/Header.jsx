export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#fbf9f4]/80 dark:bg-[#31332c]/80 backdrop-blur-md border-b border-[#797c73]/10 flex justify-between items-center px-6 h-16 w-full">
      <div className="flex items-center gap-4">
        <button className="text-[#735a3a] hover:opacity-70 transition-opacity duration-300 active:scale-95 transition-transform duration-200">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
      <div className="font-headline font-light tracking-[0.3em] text-[#31332c] dark:text-[#fbf9f4] text-lg">
        LINEA PRESTIGE
      </div>
      <div className="flex items-center gap-4">
        <button className="text-[#735a3a] hover:opacity-70 transition-opacity duration-300 active:scale-95 transition-transform duration-200">
          <span className="material-symbols-outlined">shopping_bag</span>
        </button>
      </div>
    </header>
  );
}
