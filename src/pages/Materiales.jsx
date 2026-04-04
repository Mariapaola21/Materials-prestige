import { motion } from "framer-motion";
import ScrollAnimator, { StaggerContainer, StaggerItem } from "../components/ScrollAnimator";

const maderas = [
  {
    name: "Nogal Americano",
    collection: "Colección Sombría",
    description: "Vetas profundas y tonos chocolate que evocan la riqueza de los bosques del norte. Tratado con aceites naturales para preservar su calidez orgánica.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJDlt-WiQNkJ21xt2q4Lw0k-nm_oK2K7Eq_E11R5iB-JYGmgGwZbdlTfYB5mVfjdDHRPFKNKEK3PJT0xeJIIQihPw2VoqpR9yXYNy-MKZ0MAI6_YkJ0qAxVGz40XZfJ82vRZHnMvDIhCBVTxA6LtUYVt9Ug_Y5PEjkyjDFi-n1I8VBB1pZUrIZj8oHUTK1ijoieqIEBjYR8vedhJIXJutAJSv1lb9XNcv1n6VXcVbWjLrZTbL-iuHxDUW3J0ePRA4JFjJHQEbfB7c",
    tag: "Madera Noble",
  },
  {
    name: "Roble Europeo",
    collection: "Colección Claridad",
    description: "Luminosidad natural y grano uniforme. El Roble europeo aporta ligereza arquitectónica sin renunciar a la solidez estructural.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaFoI_jyTvFUWgcGBHmOSm8n_ZJQpSO93rc2UlkFTyAR71J0gMs2QxGgSHc9AN6wfbnC6hYz4BJoiZIYwP9NbVQ8FubgdsLV_o73OpquAkEs17jVQvORqk2_iNIDHz76G9rbNK7_BCC247IcWR0Ddjfwl11YMsQkGVkiN56FdwTSgrIWImONApjdWFgoBrcimh8DxgOb2gdNuqVCS0EnVaC5FfY23LoMnEBiyOr7vA4Vt3TKCdcNZUo5jxu_gl75WO4j5-ZqLAOVQ",
    tag: "Madera Noble",
  },
];

const piedras = [
  {
    name: "Mármol Statuario",
    origin: "Carrara, Italia",
    description: "Fondo blanco níveo con vetas grises que crean un contraste escultórico. El epítome de la pureza en cualquier pieza de mobiliario.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEypfEcVUgtomuFpewjErqEF9Sy5_nCfpolwWR_wKCWWrmtIcODXArUnhMa-PeKzERGm4sReVC3ZBk9XQgHXtSwVVf8RUBEqdVh3pkjOEKPOlsHxrkJsvaVwgXlbISZpJxFulpCLNcMwzVMQB8MCB9pDkeM10bTi2VZliJpoANr2dYCt_RFclMU21Df7zkcLINlUxTGuoD5-0xm17HiETaGTHTmrukKY7jXihyq-OI1YXu04Y_i0_z_ib9s1WbxUUwlBtc7Q2_JT8",
    tag: "Piedra Natural",
  },
  {
    name: "Travertino Romano",
    origin: "Almería, España",
    description: "Corte al verso que revela la porosidad natural de la piedra. Superficie apomazada, mate y sedosa que invita al tacto.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXQpBtYkyX9_j-Xyizzta0CY2WDoPWiLNZBo_n-JgoCQ4OIo5CF7aEJl5yvoW4ABTFHP0VlF6o3wjLnLD3ghRI9JGkUfdjMHGrHU9y3c1-yNf8-1z6k54d4QryYTZJGbEjQ8Ueh4o8VSe4KDHtovMroF4h8LyEMbsMXQPSE-fBbdDr5LEXkE8PCRlVEEV1NmkWlPHbsYQ9NywnFdwv8aC2OeHOw85yZuuh_Wu-3EjZeXh1h0JOqD21qo3j8sAVgTeIBs6H2fJvkCg",
    tag: "Piedra Natural",
  },
];

const certs = [
  { icon: "forest", label: "FSC Certified" },
  { icon: "verified", label: "ISO 9001" },
  { icon: "eco", label: "Low Emission" },
  { icon: "handyman", label: "Handcrafted" },
];

export default function Materiales() {
  return (
    <main className="bg-[#fbf9f4] overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJDlt-WiQNkJ21xt2q4Lw0k-nm_oK2K7Eq_E11R5iB-JYGmgGwZbdlTfYB5mVfjdDHRPFKNKEK3PJT0xeJIIQihPw2VoqpR9yXYNy-MKZ0MAI6_YkJ0qAxVGz40XZfJ82vRZHnMvDIhCBVTxA6LtUYVt9Ug_Y5PEjkyjDFi-n1I8VBB1pZUrIZj8oHUTK1ijoieqIEBjYR8vedhJIXJutAJSv1lb9XNcv1n6VXcVbWjLrZTbL-iuHxDUW3J0ePRA4JFjJHQEbfB7c"
          alt="Materiales exclusivos"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a14]/85 via-[#1a1a14]/30 to-transparent" />
        <motion.div
          className="absolute bottom-12 left-6 md:left-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.span
            className="font-label text-[10px] uppercase tracking-[0.45em] text-[#ffddb6]/60 block mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Nuestra Selección
          </motion.span>
          <h1 className="font-headline text-5xl md:text-7xl font-light text-[#fbf9f4] leading-[1.05]">
            Materiales<br />
            <span className="italic text-[#ffddb6]">Exclusivos</span>
          </h1>
        </motion.div>
      </section>

      {/* ── INTRO ── */}
      <section className="px-6 md:px-16 lg:px-24 py-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <ScrollAnimator variant="slide-left">
          <span className="font-label text-[10px] uppercase tracking-[0.4em] text-[#735a3a] block mb-6">
            Filosofía de Materiales
          </span>
          <h2 className="font-headline text-3xl md:text-4xl font-light text-[#31332c] leading-snug">
            Cada material cuenta<br />
            <span className="italic text-[#735a3a]">una historia única.</span>
          </h2>
        </ScrollAnimator>
        <ScrollAnimator variant="slide-right" delay={0.15}>
          <p className="font-body text-[#31332c]/60 text-base leading-relaxed">
            Nuestra selección comienza en los bosques gestionados de Europa y Norteamérica
            y en las canteras exclusivas de Carrara y Almería. Cada veta, cada nudo y cada
            vena mineral son elegidos de forma meticulosa para garantizar que la belleza
            y la durabilidad convivan en perfecta armonía.
          </p>
          <div className="mt-8 h-px w-16 bg-[#735a3a]/40" />
        </ScrollAnimator>
      </section>

      {/* ── MADERAS ── */}
      <section className="px-6 md:px-16 lg:px-24 pb-32 max-w-7xl mx-auto">
        <ScrollAnimator>
          <div className="flex items-end justify-between mb-16 border-b border-[#31332c]/10 pb-6">
            <div>
              <span className="font-label text-[10px] uppercase tracking-[0.4em] text-[#735a3a] block mb-2">
                01 — Maderas
              </span>
              <h2 className="font-headline text-4xl md:text-5xl font-light text-[#31332c]">
                Maderas de Autor
              </h2>
            </div>
            <span className="hidden md:block font-label text-[10px] uppercase tracking-widest text-[#31332c]/30">
              FSC Certified
            </span>
          </div>
        </ScrollAnimator>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8" staggerDelay={0.15}>
          {maderas.map((m) => (
            <StaggerItem key={m.name}>
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-[4/3] mb-6">
                  <img
                    src={m.src}
                    alt={m.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a14]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute top-4 left-4 font-label text-[9px] uppercase tracking-widest bg-[#fbf9f4]/90 text-[#735a3a] px-3 py-1">
                    {m.tag}
                  </span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-label text-[10px] uppercase tracking-widest text-[#735a3a] mb-1">
                      {m.collection}
                    </p>
                    <h3 className="font-headline text-2xl font-light text-[#31332c] mb-3">
                      {m.name}
                    </h3>
                    <p className="font-body text-sm text-[#31332c]/55 leading-relaxed max-w-sm">
                      {m.description}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Quote */}
        <ScrollAnimator delay={0.2}>
          <div className="mt-20 border-l-2 border-[#735a3a] pl-8 max-w-xl">
            <p className="font-headline italic text-xl md:text-2xl text-[#31332c]/70 leading-relaxed">
              "No fabricamos muebles, preservamos el legado del bosque en su hogar."
            </p>
            <span className="font-label text-[10px] uppercase tracking-widest text-[#735a3a] mt-4 block">
              Curaduría Linea Prestige
            </span>
          </div>
        </ScrollAnimator>
      </section>

      {/* ── PIEDRAS ── */}
      <section className="bg-[#31332c] py-32 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimator>
            <div className="flex items-end justify-between mb-16 border-b border-[#fbf9f4]/10 pb-6">
              <div>
                <span className="font-label text-[10px] uppercase tracking-[0.4em] text-[#ffddb6]/60 block mb-2">
                  02 — Piedras
                </span>
                <h2 className="font-headline text-4xl md:text-5xl font-light text-[#fbf9f4]">
                  Piedras Naturales
                </h2>
              </div>
              <span className="hidden md:block font-label text-[10px] uppercase tracking-widest text-[#fbf9f4]/20">
                Canteras Exclusivas
              </span>
            </div>
          </ScrollAnimator>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8" staggerDelay={0.15}>
            {piedras.map((p) => (
              <StaggerItem key={p.name}>
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden aspect-[4/3] mb-6">
                    <img
                      src={p.src}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1">
                      <p className="font-label text-white text-[9px] uppercase tracking-widest">
                        {p.origin}
                      </p>
                    </div>
                    <span className="absolute top-4 right-4 font-label text-[9px] uppercase tracking-widest bg-[#31332c]/80 text-[#ffddb6]/80 px-3 py-1">
                      {p.tag}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl font-light text-[#fbf9f4] mb-3">
                      {p.name}
                    </h3>
                    <p className="font-body text-sm text-[#fbf9f4]/50 leading-relaxed max-w-sm">
                      {p.description}
                    </p>
                    <div className="mt-5 h-px w-10 bg-[#ffddb6]/30" />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Acabado feature */}
          <ScrollAnimator delay={0.1}>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-[#fbf9f4]/10">
              {[
                { icon: "architecture", title: "Corte Diamante", desc: "Precisión milimétrica en cada losa." },
                { icon: "texture", title: "Acabado Apomazado", desc: "Superficie mate y sedosa que invita al tacto." },
                { icon: "water_drop", title: "Tratamiento Sellador", desc: "Protección invisible que preserva la piedra." },
              ].map((f) => (
                <div key={f.title} className="bg-[#31332c] p-8 border border-[#fbf9f4]/5">
                  <span className="material-symbols-outlined text-[#ffddb6]/40 text-3xl mb-4 block">
                    {f.icon}
                  </span>
                  <h4 className="font-headline text-lg text-[#fbf9f4] mb-2">{f.title}</h4>
                  <p className="font-body text-xs text-[#fbf9f4]/40 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </ScrollAnimator>
        </div>
      </section>

      {/* ── CERTIFICACIONES ── */}
      <section className="py-28 px-6 md:px-16 bg-[#fbf9f4]">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimator>
            <div className="text-center mb-16">
              <span className="font-label text-[10px] uppercase tracking-[0.4em] text-[#735a3a] block mb-4">
                Garantía de Origen
              </span>
              <h2 className="font-headline text-3xl md:text-4xl font-light text-[#31332c]">
                Certificaciones de Calidad
              </h2>
            </div>
          </ScrollAnimator>

          <StaggerContainer
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            staggerDelay={0.1}
          >
            {certs.map((c) => (
              <StaggerItem key={c.label}>
                <div className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 border border-[#735a3a]/20 flex items-center justify-center mb-4 group-hover:border-[#735a3a]/60 group-hover:bg-[#735a3a]/5 transition-all duration-300">
                    <span className="material-symbols-outlined text-[#735a3a]">
                      {c.icon}
                    </span>
                  </div>
                  <p className="font-label text-[10px] uppercase tracking-widest text-[#31332c]/60">
                    {c.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollAnimator delay={0.2}>
            <div className="mt-20 text-center">
              <p className="font-body text-sm text-[#31332c]/40 max-w-lg mx-auto leading-relaxed">
                Todos nuestros materiales cuentan con trazabilidad completa desde su origen
                hasta la pieza final, garantizando los más altos estándares de sostenibilidad y calidad.
              </p>
            </div>
          </ScrollAnimator>
        </div>
      </section>

    </main>
  );
}
