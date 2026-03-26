export default function Certificaciones() {
  return (
    <section className="px-6 md:px-12 lg:px-24 mb-32">
      <div className="max-w-4xl mx-auto text-center border-y border-outline/10 py-20">
        <h2 className="font-headline text-3xl mb-12 tracking-wide">
          Certificaciones de Calidad
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-primary">forest</span>
            </div>
            <p className="font-label text-[10px] uppercase tracking-widest">
              FSC Certified
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-primary">verified</span>
            </div>
            <p className="font-label text-[10px] uppercase tracking-widest">
              ISO 9001
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-primary">eco</span>
            </div>
            <p className="font-label text-[10px] uppercase tracking-widest">
              Low Emission
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-primary">handyman</span>
            </div>
            <p className="font-label text-[10px] uppercase tracking-widest">
              Handcrafted
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
