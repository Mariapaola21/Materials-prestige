import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ── Project data ──────────────────────────────────────────────
const projects = [
  {
    id: "atelier-04",
    label: "Proyecto 01",
    title: "Atelier 04",
    featured: true,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0mc83g-pcexUwyeAFyRvJXvq0n-ODKEeZli0UXUmaRc-X0TEKAVQpUvyMKie9JyXkkVXepda5efaw4k9vfdgrCVPR-Stm1kBo5Ze6-0IlWB85cHONAdVMCQW8FYBIn-Mwe_ZqNcyJMfdLL1idlmwiuva3uRBDnReAyF2LDUpomheo7moHCn2lqAH3fuKFo1ikQj37vE08wu2xWCSK_xGf7MldcFb6l0RVjlQArvQ7JrskKaYV2g8FJtbCXMpb0HZE7obwwbSN12M",
    description: "Instalación completa de carpintería de autor en ático privado. Nogal americano con acabado apomazado.",
  },
  {
    id: "prestige-oak",
    label: "Proyecto 02",
    title: "Prestige Oak",
    featured: false,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiDuhi9q5b8lKy44S5-qF9MArT1whWq0cDxB1vAfw4MLePs-yE9yfLPlotrOWudXTm0Ihuz6Mj6Jtz0PCQZuLBrODAe8THMu81HNze5qWGJ9-OVNyfBYvCUMdMN-MsNO0le70CetAtpSNNi9pkeJtZpHjVR5jYHUsPIKETM4cJnTIJgI3DYK4dxeee5tVnSx8kXjTJshaM2vrfJ9T5gkVUn7S-qi8OaWFEdEZoJJnKliK3-SbyGXx8rAezJ4ksfcm_hW9b9XWNFc4",
    description: "Cocina de autor con isla central en roble europeo y encimera de mármol Statuario.",
  },
  {
    id: "villa-t09",
    label: "Proyecto 03",
    title: "Villa T-09",
    featured: false,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXrsO_7gV99VQ8tzQzS-eVN2FJ4x-gysErNso6gI_dcvsq2xVZEo-caMvlf8j0raNe-oDQmtgnaw9fpz1iFqAIHds3B2sN8t2vxXnl5aj9Pp1vSaxpvEUsOoatoU5EdBO_d0puIPly3Nz375_gQAPk0_TTAt2C2m0xiVGSrTENWIQYDugTTQ8gDysW-6odchglZpfGM7L-1w3BmlBEoNnP4sMZ2H2_je-LfpcBEgPJv4Adi-m_i9iDpUDxJk2wlnTr1l-HIP3jN6c",
    description: "Vestidor bespoke con iluminación integrada y sistema de almacenaje modular en nogal.",
  },
  {
    id: "the-monolith",
    label: "Proyecto 04",
    title: "The Monolith",
    featured: false,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCR5YKViT-_vJ7QHjRJ-nv5FqM--8bkfBaSRK8UzT7amK4TcggIV9Ybswe4FqLhGFF5hi1iOP4aQZQYj6HcquEiHJAFsjqvbjzWwGOwT-Nigwt1RxSvJaPJHaYMWbxBQc9RKXBWDn6gTwRuPt0vERxaNOPNw7VcWsyCIH4Ozn_BtB6-uP1Zd9jwcFi9GMTuQwFvSWV41NsjfFHdNHJ7jeLyw27apTvTjg2gL1vp5ezgELrANhet4qBsoX9K3jPQ5ar2u_JSFYa4URc",
    description: "Biblioteca nocturna con estanterías floor-to-ceiling en madera de carbón mate.",
  },
];

// ── Modal Component ───────────────────────────────────────────
function ProjectModal({ project, onClose }) {
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, rot: 0 });

  const handleMouseDown = (e) 