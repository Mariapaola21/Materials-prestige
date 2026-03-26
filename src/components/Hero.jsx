export default function Hero() {
  return (
    <section className="px-6 md:px-12 lg:px-24 mb-20">
      <div className="relative w-full h-[530px] overflow-hidden rounded-sm group">
        <img
          alt="Macro photography of raw oak wood grain"
          className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJDu34hvkNE4evePhufs1Si8Cs0iyOjXbqE_dgkDOBz1P3uRbpZsQRmfdxCq8fYB8sgc6ui2PpLXb37VjdWyXhewQMoFGPVdBEndUAfoHpRjgJs0HWb28UyljjNV2HLUajyIHGp_phqXBBhwa0JX3r3GQLyvIp30kBS5FX_bGHee19IYqZKXIze2eewZdp8QS0JJkuPIJxPWI8AnG73RzbY2y595-5JMWpciz24WXbQRix7EJ6hkY0nzmmuH4VYKb58ie3EwiczeY"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 to-transparent"></div>
        <div className="absolute bottom-12 left-8 md:left-16">
          <p className="font-label text-primary-fixed uppercase tracking-[0.3em] text-xs mb-4">
            El Origen del Lujo
          </p>
          <h1 className="font-headline text-white text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none">
            Materiales Exclusivos
          </h1>
        </div>
      </div>
    </section>
  );
}
