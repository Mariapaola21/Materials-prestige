export default function Piedras() {
  return (
    <section className="bg-surface-container-low py-24 px-6 md:px-12 lg:px-24 mb-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="font-label text-primary uppercase tracking-[.4em] text-xs mb-4 block">
              Estructura y Rigor
            </span>
            <h2 className="font-headline text-4xl md:text-5xl text-on-surface">
              Piedras Naturales
            </h2>
          </div>
          <p className="font-body text-on-surface-variant max-w-sm text-sm">
            Bloques monolíticos de mármol y granito seleccionados en canteras
            exclusivas de Carrara y Almería. La precisión del corte diamante se
            funde con la irregularidad de la piedra.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 relative aspect-[16/9] overflow-hidden group">
            <img
              alt="White Marble Slab"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEypfEcVUgtomuFpewjErqEF9Sy5_nCfpolwWR_wKCWWrmtIcODXArUnhMa-PeKzERGm4sReVC3ZBk9XQgHXtSwVVf8RUBEqdVh3pkjOEKPOlsHxrkJsvaVwgXlbISZpJxFulpCLNcMwzVMQB8MCB9pDkeM10bTi2VZliJpoANr2dYCt_RFclMU21Df7zkcLINlUxTGuoD5-0xm17HiETaGTHTmrukKY7jXihyq-OI1YXu04Y_i0_z_ib9s1WbxUUwlBtc7Q2_JT8"
            />
            <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-lg px-4 py-2">
              <p className="font-label text-white text-[10px] uppercase tracking-widest">
                Procedencia: Italia
              </p>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-8 flex flex-col justify-center border border-outline/5">
            <h3 className="font-headline text-2xl mb-4">Mármol Statuario</h3>
            <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-6">
              El epítome de la pureza. Su fondo blanco níveo y vetas grises
              definidas crean un contraste escultórico en cualquier pieza de
              mobiliario.
            </p>
            <div className="h-px w-12 bg-primary"></div>
          </div>
          <div className="bg-on-surface text-white p-8 flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-primary-fixed text-4xl mb-6">
                architecture
              </span>
              <h3 className="font-headline text-2xl mb-4">Acabado Apomazado</h3>
            </div>
            <p className="font-body text-primary-fixed/60 text-sm leading-relaxed">
              Una superficie mate y sedosa que invita al tacto, eliminando
              reflejos estridentes para favorecer la introspección.
            </p>
          </div>
          <div className="md:col-span-2 relative aspect-[16/9] overflow-hidden group">
            <img
              alt="Travertine texture"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXQpBtYkyX9_j-Xyizzta0CY2WDoPWiLNZBo_n-JgoCQ4OIo5CF7aEJl5yvoW4ABTFHP0VlF6o3wjLnLD3ghRI9JGkUfdjMHGrHU9y3c1-yNf8-1z6k54d4QryYTZJGbEjQ8Ueh4o8VSe4KDHtovMroF4h8LyEMbsMXQPSE-fBbdDr5LEXkE8PCRlVEEV1NmkWlPHbsYQ9NywnFdwv8aC2OeHOw85yZuuh_Wu-3EjZeXh1h0JOqD21qo3j8sAVgTeIBs6H2fJvkCg"
            />
            <div className="absolute bottom-6 right-6 text-right">
              <p className="font-headline text-white text-3xl">Travertino Romano</p>
              <p className="font-label text-white/70 text-[10px] uppercase tracking-widest mt-2">
                Corte Al Verso
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
