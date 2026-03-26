export default function DesktopNav() {
  return (
    <div className="hidden md:flex fixed top-0 right-32 h-16 items-center gap-8 z-[51]">
      <a
        className="font-label text-[10px] uppercase tracking-[0.2em] text-[#31332c]/60 hover:text-[#735a3a] transition-colors"
        href="#"
      >
        Materiales
      </a>
      <a
        className="font-label text-[10px] uppercase tracking-[0.2em] text-[#31332c]/60 hover:text-[#735a3a] transition-colors"
        href="#"
      >
        Técnica
      </a>
      <a
        className="font-label text-[10px] uppercase tracking-[0.2em] text-[#31332c]/60 hover:text-[#735a3a] transition-colors"
        href="#"
      >
        Galería
      </a>
    </div>
  );
}
