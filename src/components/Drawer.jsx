export default function Drawer() {
  return (
    <aside
      className="fixed top-0 left-[-100%] h-full w-80 bg-[#f5f4ed] dark:bg-[#31332c] shadow-2xl shadow-[#31332c]/5 z-[60] flex flex-col p-8 gap-6 transition-all duration-500"
      id="drawer"
    >
      <div className="font-headline italic text-2xl text-[#735a3a] mb-8">LINEA</div>
      <nav className="flex flex-col gap-6">
        <a
          className="font-headline text-xl tracking-wide text-[#31332c] dark:text-[#fbf9f4]/70 hover:translate-x-2 transition-transform duration-300 flex items-center gap-4"
          href="#"
        >
          <span className="material-symbols-outlined">architecture</span> The Atelier
        </a>
        <a
          className="font-headline text-xl tracking-wide text-[#31332c] dark:text-[#fbf9f4]/70 hover:translate-x-2 transition-transform duration-300 flex items-center gap-4"
          href="#"
        >
          <span className="material-symbols-outlined">chair</span> Collections
        </a>
        <a
          className="font-headline text-xl tracking-wide text-[#735a3a] font-semibold hover:translate-x-2 transition-transform duration-300 flex items-center gap-4"
          href="#"
        >
          <span className="material-symbols-outlined">layers</span> Bespoke Process
        </a>
        <a
          className="font-headline text-xl tracking-wide text-[#31332c] dark:text-[#fbf9f4]/70 hover:translate-x-2 transition-transform duration-300 flex items-center gap-4"
          href="#"
        >
          <span className="material-symbols-outlined">menu_book</span> Journal
        </a>
        <a
          className="font-headline text-xl tracking-wide text-[#31332c] dark:text-[#fbf9f4]/70 hover:translate-x-2 transition-transform duration-300 flex items-center gap-4"
          href="#"
        >
          <span className="material-symbols-outlined">mail</span> Contact
        </a>
      </nav>
    </aside>
  );
}
