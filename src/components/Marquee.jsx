export default function Marquee() {
  const words = [
    "Artesanía",
    "Exclusividad",
    "Diseño de Autor",
    "Maderas Nobles",
    "Precisión",
    "Arquitectura",
    "Bespoke",
    "Herencia",
  ];

  const track = words.map((w) => `${w}  ·  `).join("");

  return (
    <section className="py-4 overflow-hidden select-none bg-[#5c4428]">
      <div className="marquee-track flex whitespace-nowrap">
        <span className="font-label text-[11px] uppercase tracking-[0.3em] text-[#f5e6d0]/70">
          {track}
        </span>
        <span className="font-label text-[11px] uppercase tracking-[0.3em] text-[#f5e6d0]/70">
          {track}
        </span>
      </div>
    </section>
  );
}
