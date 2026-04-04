import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProyectosDestacados from "../components/ProyectosDestacados";

// ── Root hotspot data ──
const ROOT_HOTSPOTS = [
  {
    id: "raiz-1",
    label: "Escritorio de Nogal",
    x: "14%", y: "62%",
    project: {
      title: "Ebanistería con Raíces: Escritorio de Nogal",
      subtitle: "The Prestige Narrative — El Legado de Mi Padre",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAf3KHZ_1eLcqYS7bcvrNGpTvVMA6z0kW8-ObMoDM4KmNFZGRWX8vi9nWpKNae7jntKw94M6ZxkgW3dq7CKew2XjffrHkfeQ2QEiQqBgT9K5l5sHPOvSC9lO4mt_zveaSPjKCQ8_0Vm_sAZDGoVSizYccmMQT7I2gje0qBVINXBviia2q6lAFbSrAz-1zvox6ee3xJt00Pbbh1x8dImLAhnhTo03ynbZHdxqEKHFzj9dfpVIPxBfB2iemevLcWAMsfa8tjd3Ao0nto",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCR5YKViT-_vJ7QHjRJ-nv5FqM--8bkfBaSRK8UzT7amK4TcggIV9Ybswe4FqLhGFF5hi1iOP4aQZQYj6HcquEiHJAFsjqvbjzWwGOwT-Nigwt1RxSvJaPJHaYMWbxBQc9RKXBWDn6gTwRuPt0vERxaNOPNw7VcWsyCIH4Ozn_BtB6-uP1Zd9jwcFi9GMTuQwFvSWV41NsjfFHdNHJ7jeLyw27apTvTjg2gL1vp5ezgELrANhet4qBsoX9K3jPQ5ar2u_JSFYa4URc",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDW8XGL_QM1zLBpr4fRUVBYrHGmjHci_-VYOLy-P72PZf3GEI-v0qK8J6X5dmwnXiy-yIrKiBJ1fH2mYtmL5PbvtUoQUG10QxpJrBHMJ0Gg1fWuaL_ZepelGpxvh9w5hTPXsJF9aE5w6UWLsKD81o2BPJ0TGuiRlpVLnVSnU9t2xAWFOqPojOKSKgZZYZKFztzyKIAfPPKRKY_OIlwCq3R6PkmNRrnCVifEjhbMFETuw7H3nlm3GKddDDKB63n5x-x7PyH4d8LPTD8",
      ],
      description: "Experiencias visuales diseñadas con precisión artesanal. Este escritorio de nogal macizo representa décadas de conocimiento transmitido de padre a hijo. Cada ensamble, cada curva y cada detalle de la veta fue seleccionado con intención, cuidando la iluminación, proporciones y materialidad que definen la ebanistería de autor. Una obra que presenta la visión final antes de construirla.",
      meta: [
        { label: "Línea", value: "Ebanistería de Autor" },
        { label: "Material", value: "Nogal Macizo, Latón Cepillado" },
        { label: "Escala", value: "Obra Maestra Premium" },
      ],
    },
  },
  {
    id: "raiz-2",
    label: "Biblioteca Familiar",
    x: "50%", y: "78%",
    project: {
      title: "Ebanistería con Raíces: Biblioteca Familiar",
      subtitle: "The Prestige Narrative — El Legado de Mi Padre",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCR5YKViT-_vJ7QHjRJ-nv5FqM--8bkfBaSRK8UzT7amK4TcggIV9Ybswe4FqLhGFF5hi1iOP4aQZQYj6HcquEiHJAFsjqvbjzWwGOwT-Nigwt1RxSvJaPJHaYMWbxBQc9RKXBWDn6gTwRuPt0vERxaNOPNw7VcWsyCIH4Ozn_BtB6-uP1Zd9jwcFi9GMTuQwFvSWV41NsjfFHdNHJ7jeLyw27apTvTjg2gL1vp5ezgELrANhet4qBsoX9K3jPQ5ar2u_JSFYa4URc",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAuEbuM81lHQe44UXFoCBTaVarZeEjVmbtyio2M5xX__T53egd_3b5JdZasWlmUtKsHuMjkIHxkOgPrf9BglmSdbmbBoYOcLjWVvcs7zkiE23khCUMHSfj02CWihiLB-4T2H5M5e5kvGhiAi6Fwc7YfZUBqrxIBpaXVDXU8es7_9V10-7QIBYiZwKOmViXzfkgaPiq1ETHel-7QSatuZnLbb2YGJJqnOw_dIvEiMaVXy5HwsYGCVHBVHsUTTOvRARo2hEgkuibmWWE",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDXrsO_7gV99VQ8tzQzS-eVN2FJ4x-gysErNso6gI_dcvsq2xVZEo-caMvlf8j0raNe-oDQmtgnaw9fpz1iFqAIHds3B2sN8t2vxXnl5aj9Pp1vSaxpvEUsOoatoU5EdBO_d0puIPly3Nz375_gQAPk0_TTAt2C2m0xiVGSrTENWIQYDugTTQ8gDysW-6odchglZpfGM7L-1w3BmlBEoNnP4sMZ2H2_je-LfpcBEgPJv4Adi-m_i9iDpUDxJk2wlnTr1l-HIP3jN6c",
      ],
      description: "Una biblioteca diseñada para perdurar generaciones. Los estantes de piso a techo en madera de cerezo oscuro abrazan el espacio con calidez y autoridad. Cada repisa fue calibrada para soportar el peso del conocimiento acumulado, con herrajes de latón que evocan la tradición de los grandes talleres europeos.",
      meta: [
        { label: "Línea", value: "Mobiliario de Autor" },
        { label: "Material", value: "Cerezo Oscuro, Latón Antiguo" },
        { label: "Escala", value: "Proyecto Residencial" },
      ],
    },
  },
  {
    id: "raiz-3",
    label: "Cocina Monolito",
    x: "84%", y: "62%",
    project: {
      title: "Ebanistería con Raíces: Cocina Monolito",
      subtitle: "The Prestige Narrative — El Legado de Mi Padre",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAuEbuM81lHQe44UXFoCBTaVarZeEjVmbtyio2M5xX__T53egd_3b5JdZasWlmUtKsHuMjkIHxkOgPrf9BglmSdbmbBoYOcLjWVvcs7zkiE23khCUMHSfj02CWihiLB-4T2H5M5e5kvGhiAi6Fwc7YfZUBqrxIBpaXVDXU8es7_9V10-7QIBYiZwKOmViXzfkgaPiq1ETHel-7QSatuZnLbb2YGJJqnOw_dIvEiMaVXy5HwsYGCVHBVHsUTTOvRARo2hEgkuibmWWE",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDW8XGL_QM1zLBpr4fRUVBYrHGmjHci_-VYOLy-P72PZf3GEI-v0qK8J6X5dmwnXiy-yIrKiBJ1fH2mYtmL5PbvtUoQUG10QxpJrBHMJ0Gg1fWuaL_ZepelGpxvh9w5hTPXsJF9aE5w6UWLsKD81o2BPJ0TGuiRlpVLnVSnU9t2xAWFOqPojOKSKgZZYZKFztzyKIAfPPKRKY_OIlwCq3R6PkmNRrnCVifEjhbMFETuw7H3nlm3GKddDDKB63n5x-x7PyH4d8LPTD8",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCR5YKViT-_vJ7QHjRJ-nv5FqM--8bkfBaSRK8UzT7amK4TcggIV9Ybswe4FqLhGFF5hi1iOP4aQZQYj6HcquEiHJAFsjqvbjzWwGOwT-Nigwt1RxSvJaPJHaYMWbxBQc9RKXBWDn6gTwRuPt0vERxaNOPNw7VcWsyCIH4Ozn_BtB6-uP1Zd9jwcFi9GMTuQwFvSWV41NsjfFHdNHJ7jeLyw27apTvTjg2gL1vp5ezgELrANhet4qBsoX9K3jPQ5ar2u_JSFYa4URc",
      ],
      description: "La cocina como obra de arte total. Frentes de roble negro con veta horizontal continua, isla de mármol Calacatta y herrajes invisibles que desafían la gravedad. Un proyecto donde la funcionalidad y la belleza coexisten en perfecta armonía, fiel al legado de precisión artesanal.",
      meta: [
        { label: "Línea", value: "Cocinas de Autor" },
        { label: "Material", value: "Roble Negro, Mármol Calacatta" },
        { label: "Escala", value: "Proyecto Integral Premium" },
      ],
    },
  },
];

// ── Legacy Modal ──
function LegacyModal({ hotspot, onClose }) {
  const [activeImg, setActiveImg] = useState(0);
  const p = hotspot?.project;

  return (
    <AnimatePresence>
      {hotspot && (
        <motion.div
          className="fixed inset-0 z-[9000] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div className="absolute inset-0 bg-[#1a1a0e]/80 backdrop-blur-sm" onClick={onClose} />

          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#faf7f2] border border-[#c8a96e]/20 shadow-2xl"
            initial={{ scale: 0.94, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 20 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Modal header */}
            <div className="px-8 pt-8 pb-6 border-b border-[#c8a96e]/15">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-headline text-2xl md:text-3xl font-light text-[#2d2416] leading-tight">
                    {p?.title}
                  </h2>
                  <p className="font-label text-[10px] uppercase tracking-[0.35em] text-[#8b6914] mt-2">
                    {p?.subtitle}
                  </p>
                </div>
                <button onClick={onClose} className="text-[#2d2416]/40 hover:text-[#2d2416] transition-colors mt-1 shrink-0">
                  <span className="material-symbols-outlined text-xl">close</span>
                </button>
              </div>
            </div>

            {/* Gallery */}
            <div className="px-8 pt-6">
              <div className="relative aspect-[16/9] overflow-hidden bg-[#e8dcc8]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImg}
                    src={p?.images[activeImg]}
                    alt={p?.title}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
              </div>
              {/* Thumbnails */}
              <div className="flex gap-2 mt-3">
                {p?.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`relative overflow-hidden aspect-video flex-1 transition-all duration-200 ${activeImg === i ? "ring-2 ring-[#8b6914]" : "opacity-50 hover:opacity-80"}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="px-8 pt-6">
              <p className="font-body text-sm text-[#2d2416]/70 leading-relaxed">
                {p?.description}
              </p>
            </div>

            {/* Metadata table */}
            <div className="px-8 pt-6 pb-8">
              <div className="border border-[#c8a96e]/20">
                <div className="grid grid-cols-3 border-b border-[#c8a96e]/20">
                  {p?.meta.map((m) => (
                    <div key={m.label} className="px-4 py-2 border-r last:border-r-0 border-[#c8a96e]/20">
                      <span className="font-label text-[8px] uppercase tracking-widest text-[#8b6914] block">{m.label}</span>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3">
                  {p?.meta.map((m) => (
                    <div key={m.label} className="px-4 py-3 border-r last:border-r-0 border-[#c8a96e]/20">
                      <span className="font-body text-xs text-[#2d2416]/80">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ── Interactive Tree Section ──
function LegacyTree() {
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltip({ visible: true, x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section className="bg-[#faf7f2] py-24 px-6 md:px-12 lg:px-24">
      {/* Section label */}
      <div className="max-w-screen-xl mx-auto mb-12 text-center">
        <span className="font-label text-[10px] uppercase tracking-[0.4em] text-[#8b6914] block mb-4">
          Legado Artesanal
        </span>
        <h2 className="font-headline text-4xl md:text-5xl font-light text-[#2d2416] leading-tight">
          El Legado de Mi Padre
        </h2>
        <p className="font-body text-sm text-[#2d2416]/50 mt-4 max-w-md mx-auto leading-relaxed">
          Ebanistería con Raíces — toca una raíz para explorar el legado
        </p>
      </div>

      {/* Tree container */}
      <div className="max-w-3xl mx-auto relative">
        <div
          className="relative w-full select-none"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setTooltip({ ...tooltip, visible: false })}
        >
          {/* SVG Roots silhouette */}
          <svg
            viewBox="0 0 900 500"
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="glowRoot1" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#c8a96e" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#c8a96e" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="glowRoot2" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#c8a96e" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#c8a96e" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="glowRoot3" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#c8a96e" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#c8a96e" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="rootFade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3a2408" stopOpacity="1" />
                <stop offset="100%" stopColor="#3a2408" stopOpacity="0.15" />
              </linearGradient>
              <filter id="rootBlur">
                <feGaussianBlur stdDeviation="1.5" />
              </filter>
            </defs>

            {/* ── BASE / TRUNK BOTTOM ── */}
            <path d="M390 0 C385 30 378 60 372 90 C366 120 360 145 355 170 L545 170 C540 145 534 120 528 90 C522 60 515 30 510 0 Z" fill="url(#rootFade)" />

            {/* ── FAR LEFT roots ── */}
            <path d="M372 140 C340 160 290 185 230 205 C170 225 100 238 30 245 C10 246 0 247 0 247" stroke="url(#rootFade)" strokeWidth="28" fill="none" strokeLinecap="round"/>
            <path d="M355 155 C320 178 265 200 200 218 C140 234 70 242 10 248" stroke="#2d1a00" strokeWidth="14" fill="none" strokeLinecap="round" opacity="0.5"/>
            <path d="M230 205 C195 215 155 228 110 238 C75 246 40 250 5 252" stroke="#2d1a00" strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.4"/>
            <path d="M230 205 C210 222 185 240 155 258 C130 272 100 282 65 290" stroke="#2d1a00" strokeWidth="9" fill="none" strokeLinecap="round" opacity="0.45"/>
            <path d="M155 258 C135 272 112 285 85 295 C62 303 38 308 10 312" stroke="#2d1a00" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.35"/>
            <path d="M100 238 C80 252 58 268 35 282 C18 292 5 298 0 300" stroke="#2d1a00" strokeWidth="7" fill="none" strokeLinecap="round" opacity="0.3"/>

            {/* ── CENTER-LEFT roots ── */}
            <path d="M378 155 C360 185 335 220 305 255 C278 286 248 312 215 335" stroke="url(#rootFade)" strokeWidth="22" fill="none" strokeLinecap="round"/>
            <path d="M305 255 C285 278 262 302 235 322 C212 340 185 355 155 368" stroke="#2d1a00" strokeWidth="12" fill="none" strokeLinecap="round" opacity="0.5"/>
            <path d="M215 335 C195 352 172 368 145 382 C122 394 96 403 68 410" stroke="#2d1a00" strokeWidth="9" fill="none" strokeLinecap="round" opacity="0.4"/>
            <path d="M215 335 C200 358 182 378 160 396 C142 410 120 422 95 432" stroke="#2d1a00" strokeWidth="7" fill="none" strokeLinecap="round" opacity="0.35"/>
            <path d="M155 368 C138 382 118 396 95 408 C75 418 52 426 28 432" stroke="#2d1a00" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.3"/>

            {/* ── CENTER roots (going straight down) ── */}
            <path d="M430 170 C428 210 424 255 418 300 C412 345 404 385 395 425 C388 455 380 478 372 500" stroke="url(#rootFade)" strokeWidth="26" fill="none" strokeLinecap="round"/>
            <path d="M460 170 C462 210 466 255 472 300 C478 345 486 385 495 425 C502 455 510 478 518 500" stroke="url(#rootFade)" strokeWidth="22" fill="none" strokeLinecap="round"/>
            <path d="M418 300 C405 330 390 360 372 388 C357 412 340 432 320 450" stroke="#2d1a00" strokeWidth="11" fill="none" strokeLinecap="round" opacity="0.45"/>
            <path d="M472 300 C485 330 500 360 518 388 C533 412 550 432 570 450" stroke="#2d1a00" strokeWidth="11" fill="none" strokeLinecap="round" opacity="0.45"/>
            <path d="M395 425 C382 448 368 468 352 486 C340 500 328 510 315 518" stroke="#2d1a00" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.35"/>
            <path d="M495 425 C508 448 522 468 538 486 C550 500 562 510 575 518" stroke="#2d1a00" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.35"/>

            {/* ── CENTER-RIGHT roots ── */}
            <path d="M522 155 C540 185 565 220 595 255 C622 286 652 312 685 335" stroke="url(#rootFade)" strokeWidth="22" fill="none" strokeLinecap="round"/>
            <path d="M595 255 C615 278 638 302 665 322 C688 340 715 355 745 368" stroke="#2d1a00" strokeWidth="12" fill="none" strokeLinecap="round" opacity="0.5"/>
            <path d="M685 335 C705 352 728 368 755 382 C778 394 804 403 832 410" stroke="#2d1a00" strokeWidth="9" fill="none" strokeLinecap="round" opacity="0.4"/>
            <path d="M685 335 C700 358 718 378 740 396 C758 410 780 422 805 432" stroke="#2d1a00" strokeWidth="7" fill="none" strokeLinecap="round" opacity="0.35"/>
            <path d="M745 368 C762 382 782 396 805 408 C825 418 848 426 872 432" stroke="#2d1a00" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.3"/>

            {/* ── FAR RIGHT roots ── */}
            <path d="M528 140 C560 160 610 185 670 205 C730 225 800 238 870 245 C890 246 900 247 900 247" stroke="url(#rootFade)" strokeWidth="28" fill="none" strokeLinecap="round"/>
            <path d="M545 155 C580 178 635 200 700 218 C760 234 830 242 890 248" stroke="#2d1a00" strokeWidth="14" fill="none" strokeLinecap="round" opacity="0.5"/>
            <path d="M670 205 C705 215 745 228 790 238 C825 246 860 250 895 252" stroke="#2d1a00" strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.4"/>
            <path d="M670 205 C690 222 715 240 745 258 C770 272 800 282 835 290" stroke="#2d1a00" strokeWidth="9" fill="none" strokeLinecap="round" opacity="0.45"/>
            <path d="M745 258 C765 272 788 285 815 295 C838 303 862 308 890 312" stroke="#2d1a00" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.35"/>
            <path d="M800 238 C820 252 842 268 865 282 C882 292 895 298 900 300" stroke="#2d1a00" strokeWidth="7" fill="none" strokeLinecap="round" opacity="0.3"/>

            {/* ── HOTSPOT GLOW AREAS ── */}
            {ROOT_HOTSPOTS.map((h) => (
              <g key={h.id}>
                <motion.ellipse
                  cx={parseFloat(h.x) * 9}
                  cy={parseFloat(h.y) * 5}
                  rx="55" ry="28"
                  fill={`url(#glowRoot${h.id.slice(-1)})`}
                  className="cursor-pointer"
                  animate={{ opacity: [0.2, 0.6, 0.2] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: parseInt(h.id.slice(-1)) * 0.5 }}
                  onClick={() => setActiveHotspot(h)}
                />
                <motion.ellipse
                  cx={parseFloat(h.x) * 9}
                  cy={parseFloat(h.y) * 5}
                  rx="55" ry="28"
                  fill="transparent"
                  stroke="#c8a96e"
                  strokeWidth="1.5"
                  className="cursor-pointer"
                  animate={{ opacity: [0.3, 0.9, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: parseInt(h.id.slice(-1)) * 0.5 }}
                  onClick={() => setActiveHotspot(h)}
                />
              </g>
            ))}
          </svg>
          {ROOT_HOTSPOTS.map((h) => (
            <motion.button
              key={h.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 group"
              style={{ left: h.x, top: h.y }}
              onClick={() => setActiveHotspot(h)}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className="w-12 h-6 rounded-full bg-[#c8a96e]/30 border border-[#c8a96e]/60"
                animate={{ boxShadow: ["0 0 8px #c8a96e40", "0 0 24px #c8a96e80", "0 0 8px #c8a96e40"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: parseInt(h.id.slice(-1)) * 0.5 }}
              />
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap font-label text-[8px] uppercase tracking-widest text-[#8b6914] opacity-0 group-hover:opacity-100 transition-opacity bg-[#faf7f2]/90 px-2 py-1 border border-[#c8a96e]/20">
                {h.label}
              </span>
            </motion.button>
          ))}

          {/* Cursor tooltip */}
          <AnimatePresence>
            {tooltip.visible && (
              <motion.div
                className="absolute pointer-events-none z-10 bg-[#2d2416]/80 text-[#faf7f2] font-label text-[9px] uppercase tracking-widest px-3 py-1.5 whitespace-nowrap"
                style={{ left: tooltip.x + 16, top: tooltip.y - 12 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Toca una raíz para explorar el legado
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <LegacyModal hotspot={activeHotspot} onClose={() => setActiveHotspot(null)} />
    </section>
  );
}

export default function Proyectos() {
  return (
    <main className="pt-16">
      <ProyectosDestacados />
    </main>
  );
}
