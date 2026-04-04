import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import ScrollAnimator, { StaggerContainer, StaggerItem } from "../components/ScrollAnimator";

// ── Color palettes ──
const FREE_COLORS = [
  { hex: "#1a1a1a", label: "Negro" },
  { hex: "#2c2c2c", label: "Carbón" },
  { hex: "#4a3728", label: "Wengué" },
  { hex: "#6b4c2a", label: "Nogal" },
  { hex: "#8b6914", label: "Roble" },
  { hex: "#c8a96e", label: "Pino" },
  { hex: "#e8dcc8", label: "Arce" },
  { hex: "#f5f0e8", label: "Blanco" },
  { hex: "#b0b0b0", label: "Gris" },
  { hex: "#5c7a5c", label: "Salvia" },
  { hex: "#4a5568", label: "Pizarra" },
  { hex: "#744210", label: "Caoba" },
];

const MATERIAL_COLORS = [
  { hex: "#1a1a1a", label: "Negro Prestige" },
  { hex: "#2d2416", label: "Wengué Dark" },
  { hex: "#5c3d1e", label: "Nogal Natural" },
  { hex: "#8b6914", label: "Roble Dorado" },
  { hex: "#c4a882", label: "Pino Claro" },
  { hex: "#e8dcc8", label: "Arce Blanco" },
  { hex: "#3d3530", label: "Teca Oscura" },
  { hex: "#6b5744", label: "Cerezo" },
];

const projects = [
  {
    id: "atelier-04",
    code: "Proyecto 01",
    name: "Atelier 04",
    tag: "Instalación Completada",
    large: true,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0mc83g-pcexUwyeAFyRvJXvq0n-ODKEeZli0UXUmaRc-X0TEKAVQpUvyMKie9JyXkkVXepda5efaw4k9vfdgrCVPR-Stm1kBo5Ze6-0IlWB85cHONAdVMCQW8FYBIn-Mwe_ZqNcyJMfdLL1idlmwiuva3uRBDnReAyF2LDUpomheo7moHCn2lqAH3fuKFo1ikQj37vE08wu2xWCSK_xGf7MldcFb6l0RVjlQArvQ7JrskKaYV2g8FJtbCXMpb0HZE7obwwbSN12M",
    modal: false,
  },
  {
    id: "prestige-oak",
    code: "Proyecto 02",
    name: "Prestige Oak",
    tag: "Visualización 3D",
    large: true,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiDuhi9q5b8lKy44S5-qF9MArT1whWq0cDxB1vAfw4MLePs-yE9yfLPlotrOWudXTm0Ihuz6Mj6Jtz0PCQZuLBrODAe8THMu81HNze5qWGJ9-OVNyfBYvCUMdMN-MsNO0le70CetAtpSNNi9pkeJtZpHjVR5jYHUsPIKETM4cJnTIJgI3DYK4dxeee5tVnSx8kXjTJshaM2vrfJ9T5gkVUn7S-qi8OaWFEdEZoJJnKliK3-SbyGXx8rAezJ4ksfcm_hW9b9XWNFc4",
    modal: true,
  },
  {
    id: "villa-t09",
    code: "Proyecto 03",
    name: "Villa T-09",
    tag: "Render Arquitectónico",
    large: false,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXrsO_7gV99VQ8tzQzS-eVN2FJ4x-gysErNso6gI_dcvsq2xVZEo-caMvlf8j0raNe-oDQmtgnaw9fpz1iFqAIHds3B2sN8t2vxXnl5aj9Pp1vSaxpvEUsOoatoU5EdBO_d0puIPly3Nz375_gQAPk0_TTAt2C2m0xiVGSrTENWIQYDugTTQ8gDysW-6odchglZpfGM7L-1w3BmlBEoNnP4sMZ2H2_je-LfpcBEgPJv4Adi-m_i9iDpUDxJk2wlnTr1l-HIP3jN6c",
    modal: true,
  },
  {
    id: "the-monolith",
    code: "Proyecto 04",
    name: "The Monolith",
    tag: "Proyecto Integral",
    large: false,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCR5YKViT-_vJ7QHjRJ-nv5FqM--8bkfBaSRK8UzT7amK4TcggIV9Ybswe4FqLhGFF5hi1iOP4aQZQYj6HcquEiHJAFsjqvbjzWwGOwT-Nigwt1RxSvJaPJHaYMWbxBQc9RKXBWDn6gTwRuPt0vERxaNOPNw7VcWsyCIH4Ozn_BtB6-uP1Zd9jwcFi9GMTuQwFvSWV41NsjfFHdNHJ7jeLyw27apTvTjg2gL1vp5ezgELrANhet4qBsoX9K3jPQ5ar2u_JSFYa4URc",
    modal: true,
  },
];

// ── Door 3D Model ──
function DoorModel({ doorColor }) {
  const groupRef = useRef();

  const darkWood = new THREE.MeshStandardMaterial({ color: doorColor || "#2c2c2c", roughness: 0.55, metalness: 0.08 });
  const frameMat = new THREE.MeshStandardMaterial({ color: "#1a1a1a", roughness: 0.45, metalness: 0.15 });
  const chromeMat = new THREE.MeshStandardMaterial({ color: "#d0d0d0", roughness: 0.15, metalness: 0.95, envMapIntensity: 1.5 });

  return (
    <group ref={groupRef}>
      {/* Left jamb */}
      <mesh material={frameMat} position={[-1.1, 0, -0.06]}>
        <boxGeometry args={[0.12, 4.2, 0.12]} />
      </mesh>
      {/* Right jamb */}
      <mesh material={frameMat} position={[1.1, 0, -0.06]}>
        <boxGeometry args={[0.12, 4.2, 0.12]} />
      </mesh>
      {/* Top jamb */}
      <mesh material={frameMat} position={[0, 2.04, -0.06]}>
        <boxGeometry args={[2.24, 0.12, 0.12]} />
      </mesh>
      {/* Door panel */}
      <mesh material={darkWood} position={[0, 0, 0]}>
        <boxGeometry args={[2, 4, 0.08]} />
      </mesh>
      {/* Vertical groove */}
      <mesh material={frameMat} position={[0, 0, 0.041]}>
        <boxGeometry args={[0.015, 4, 0.01]} />
      </mesh>
      {/* Handle base */}
      <mesh material={chromeMat} position={[0.72, 0.1, 0.06]}>
        <boxGeometry args={[0.06, 0.22, 0.04]} />
      </mesh>
      {/* Handle lever */}
      <mesh material={chromeMat} position={[0.82, 0.1, 0.07]} rotation={[0, 0, -0.15]}>
        <cylinderGeometry args={[0.018, 0.018, 0.28, 16]} />
      </mesh>
      {/* Handle knob */}
      <mesh material={chromeMat} position={[0.82, -0.03, 0.07]}>
        <sphereGeometry args={[0.028, 16, 16]} />
      </mesh>
    </group>
  );
}

function DoorScene({ lightMode, orbitRef, doorColor }) {
  const bgColor = lightMode ? "#f0ece4" : "#2a2a2a";

  return (
    <>
      <color attach="background" args={[bgColor]} />
      {/* Ambient base */}
      <ambientLight intensity={lightMode ? 1.5 : 0.8} color={lightMode ? "#ffffff" : "#c8d0e0"} />
      {/* Key light — front top */}
      <directionalLight
        position={[3, 6, 5]}
        intensity={lightMode ? 3 : 2.5}
        color={lightMode ? "#fff8f0" : "#ffddb6"}
        castShadow
      />
      {/* Fill light — left side */}
      <directionalLight
        position={[-4, 3, 2]}
        intensity={lightMode ? 1.5 : 1.2}
        color={lightMode ? "#e8f0ff" : "#8090ff"}
      />
      {/* Rim light — back right */}
      <directionalLight
        position={[2, 2, -4]}
        intensity={lightMode ? 0.8 : 1.0}
        color={lightMode ? "#ffffff" : "#ffd080"}
      />
      <DoorModel doorColor={doorColor} />
      <ContactShadows position={[0, -2.05, 0]} opacity={lightMode ? 0.25 : 0.6} scale={6} blur={1.5} far={4} />
      <OrbitControls
        ref={orbitRef}
        enablePan={false}
        minDistance={3}
        maxDistance={10}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 1.8}
        autoRotate={false}
      />
    </>
  );
}

// ── Color Palette Popover ──
function ColorPalette({ colors, selected, onSelect, label }) {
  const [open, setOpen] = useState(false);
  const current = colors.find((c) => c.hex === selected) || colors[0];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 group"
        title={label}
      >
        <div
          className="w-4 h-4 rounded-full border-2 border-white/30 shadow-sm transition-transform group-hover:scale-110"
          style={{ backgroundColor: current.hex }}
        />
        <span className="font-label text-[8px] uppercase tracking-widest text-[#31332c]/40 hidden sm:block group-hover:text-[#735a3a] transition-colors">
          {label}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute bottom-8 left-0 z-50 bg-white border border-[#31332c]/10 shadow-xl p-3 min-w-[200px]"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
          >
            <p className="font-label text-[8px] uppercase tracking-widest text-[#31332c]/40 mb-2">{label}</p>
            <div className="grid grid-cols-6 gap-1.5">
              {colors.map((c) => (
                <button
                  key={c.hex}
                  title={c.label}
                  onClick={() => { onSelect(c.hex); setOpen(false); }}
                  className="relative group/swatch"
                >
                  <div
                    className="w-6 h-6 rounded-sm transition-transform group-hover/swatch:scale-110"
                    style={{
                      backgroundColor: c.hex,
                      outline: selected === c.hex ? "2px solid #735a3a" : "2px solid transparent",
                      outlineOffset: "2px",
                    }}
                  />
                  {selected === c.hex && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/80" />
                    </div>
                  )}
                </button>
              ))}
            </div>
            <p className="font-label text-[8px] text-[#31332c]/30 mt-2">{current.label}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Shared viewer controls UI ──
function ViewerControls({ lightMode, setLightMode, isRotating, onRotate, onZoomIn, onFullscreen, dark, doorColor, setDoorColor }) {
  const base = dark ? "text-[#fbf9f4]/40 hover:text-[#ffddb6]" : "text-[#31332c]/40 hover:text-[#735a3a]";
  const active = dark ? "text-[#ffddb6]" : "text-[#735a3a]";
  const divider = dark ? "bg-[#fbf9f4]/10" : "bg-[#31332c]/15";

  return (
    <div className={`flex items-center justify-between px-4 py-3 border-t ${dark ? "border-[#fbf9f4]/10 bg-[#1a1a14]" : "border-[#31332c]/10 bg-[#ede9e1]"}`}>
      <div className="flex items-center gap-4">
        <button onClick={onRotate} className={`flex items-center gap-1.5 transition-colors ${isRotating ? active : base}`}>
          <span className="material-symbols-outlined text-base">rotate_left</span>
          <span className="font-label text-[8px] uppercase tracking-widest hidden sm:block">rotate_3d</span>
        </button>
        <button onClick={onZoomIn} className={`flex items-center gap-1.5 transition-colors ${base}`}>
          <span className="material-symbols-outlined text-base">zoom_in</span>
          <span className="font-label text-[8px] uppercase tracking-widest hidden sm:block">zoom_in</span>
        </button>
        <button onClick={() => setLightMode((v) => !v)} className={`flex items-center gap-1.5 transition-colors ${lightMode ? active : base}`}>
          <span className="material-symbols-outlined text-base">light_mode</span>
          <span className="font-label text-[8px] uppercase tracking-widest hidden sm:block">light_mode</span>
        </button>

        <div className={`w-px h-4 ${divider}`} />

        {/* Color palettes */}
        <ColorPalette
          colors={FREE_COLORS}
          selected={doorColor}
          onSelect={setDoorColor}
          label="Color"
        />
        <ColorPalette
          colors={MATERIAL_COLORS}
          selected={doorColor}
          onSelect={setDoorColor}
          label="Material"
        />
      </div>
      <button onClick={onFullscreen} className={`flex items-center gap-1.5 transition-colors ${base}`}>
        <span className="material-symbols-outlined text-base">fullscreen</span>
        <span className="font-label text-[8px] uppercase tracking-widest hidden sm:block">fullscreen</span>
      </button>
    </div>
  );
}

// ── Inline 3D Viewer (visible en la página) ──
function InlineViewer() {
  const [lightMode, setLightMode] = useState(true);
  const [isRotating, setIsRotating] = useState(false);
  const [doorColor, setDoorColor] = useState("#2c2c2c");
  const orbitRef = useRef();
  const containerRef = useRef();

  const handleRotate = () => {
    const next = !isRotating;
    setIsRotating(next);
    if (orbitRef.current) orbitRef.current.autoRotate = next;
  };

  const handleZoomIn = () => {
    if (orbitRef.current) {
      orbitRef.current.object.position.multiplyScalar(0.85);
      orbitRef.current.update();
    }
  };

  const handleFullscreen = () => {
    if (!document.fullscreenElement && containerRef.current) {
      containerRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div ref={containerRef} className="relative bg-[#e8e4dc] border border-[#31332c]/10 overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#31332c]/10 bg-[#ede9e1]">
        <span className="font-label text-[9px] uppercase tracking-widest text-[#31332c]/40">
          P3D Visualization Viewer
        </span>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#31332c]/15" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#31332c]/15" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#31332c]/15" />
        </div>
      </div>
      {/* Canvas */}
      <div className="relative aspect-video cursor-grab active:cursor-grabbing">
        <Canvas shadows camera={{ position: [0, 0.5, 6], fov: 45 }} style={{ width: "100%", height: "100%" }}>
          <DoorScene lightMode={lightMode} orbitRef={orbitRef} doorColor={doorColor} />
        </Canvas>
      </div>
      <ViewerControls
        lightMode={lightMode}
        setLightMode={setLightMode}
        isRotating={isRotating}
        onRotate={handleRotate}
        onZoomIn={handleZoomIn}
        onFullscreen={handleFullscreen}
        dark={false}
        doorColor={doorColor}
        setDoorColor={setDoorColor}
      />
    </div>
  );
}

// ── Modal 3D ──
function Modal3D({ project, onClose }) {
  const [lightMode, setLightMode] = useState(true);
  const [isRotating, setIsRotating] = useState(false);
  const [doorColor, setDoorColor] = useState("#2c2c2c");
  const orbitRef = useRef();
  const containerRef = useRef();

  const handleRotate = useCallback(() => {
    const next = !isRotating;
    setIsRotating(next);
    if (orbitRef.current) orbitRef.current.autoRotate = next;
  }, [isRotating]);

  const handleZoomIn = useCallback(() => {
    if (orbitRef.current) {
      orbitRef.current.object.position.multiplyScalar(0.85);
      orbitRef.current.update();
    }
  }, []);

  const handleFullscreen = useCallback(() => {
    if (!document.fullscreenElement && containerRef.current) {
      containerRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, []);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[9000] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div className="absolute inset-0 bg-[#1a1a14]/90 backdrop-blur-md" onClick={onClose} />
          <motion.div
            ref={containerRef}
            className="relative w-[95vw] h-[90vh] max-w-6xl bg-[#1e1e18] border border-[#fbf9f4]/10 flex flex-col overflow-hidden"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 py-3 border-b border-[#fbf9f4]/10 bg-[#1a1a14]">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#fbf9f4]/15" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#fbf9f4]/15" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#fbf9f4]/15" />
                </div>
                <span className="font-label text-[9px] uppercase tracking-widest text-[#fbf9f4]/30 ml-2">
                  P3D Visualization Viewer
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-label text-[9px] uppercase tracking-widest text-[#fbf9f4]/20">
                  {project.name}
                </span>
                <button onClick={onClose} className="text-[#fbf9f4]/40 hover:text-[#fbf9f4] transition-colors">
                  <span className="material-symbols-outlined text-lg">close</span>
                </button>
              </div>
            </div>

            {/* 3D Canvas */}
            <div className="flex-1 relative cursor-grab active:cursor-grabbing">
              <Canvas shadows camera={{ position: [0, 0.5, 6], fov: 45 }} style={{ width: "100%", height: "100%" }}>
                <DoorScene lightMode={lightMode} orbitRef={orbitRef} doorColor={doorColor} />
              </Canvas>
              <div className="absolute top-4 left-1/2 -translate-x-1/2 pointer-events-none">
                <div className="bg-[#1a1a14]/70 backdrop-blur-sm border border-[#fbf9f4]/10 px-4 py-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#fbf9f4]/40 text-sm">pan_tool</span>
                  <span className="font-label text-[8px] uppercase tracking-widest text-[#fbf9f4]/40">
                    Arrastra para rotar · Scroll para zoom
                  </span>
                </div>
              </div>
              <div className="absolute top-4 left-4 font-label text-[9px] uppercase tracking-widest text-[#fbf9f4]/15 pointer-events-none">
                Perspective View
              </div>
              <div className="absolute top-4 right-4 font-label text-[9px] uppercase tracking-widest text-[#fbf9f4]/15 pointer-events-none">
                1:1 Scale
              </div>
            </div>

            <ViewerControls
              lightMode={lightMode}
              setLightMode={setLightMode}
              isRotating={isRotating}
              onRotate={handleRotate}
              onZoomIn={handleZoomIn}
              onFullscreen={handleFullscreen}
              dark={true}
              doorColor={doorColor}
              setDoorColor={setDoorColor}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Proyecto3D() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (project) => {
    if (project.modal) setActiveModal(project);
  };

  return (
    <div className="bg-[#f5f2ec] min-h-screen">

      {/* ── HERO HEADER ── */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" src="/pull-back.mp4" />
        <div className="absolute inset-0 bg-[#1a1a14]/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a14]/40 via-transparent to-[#f5f2ec]" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}>
            <motion.span className="font-label text-[10px] uppercase tracking-[0.45em] text-[#ffddb6]/60 block mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>
              Linea Prestige · 3D Visualization
            </motion.span>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-light text-[#fbf9f4] leading-tight">
              Conoce más a fondo<br />
              <span className="italic text-[#ffddb6]">mis proyectos</span>
            </h1>
          </motion.div>
          <motion.div className="absolute bottom-10 flex flex-col items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }}>
            <div className="w-[1px] h-8 bg-[#fbf9f4]/20 relative overflow-hidden">
              <motion.div className="w-full bg-[#ffddb6]/60 absolute top-0" animate={{ height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── NARRATIVE SECTION ── */}
      <section className="px-6 md:px-12 lg:px-20 py-20 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — Inline 3D Viewer */}
          <ScrollAnimator variant="slide-left">
            <InlineViewer />
          </ScrollAnimator>

          {/* Right — Narrative text */}
          <ScrollAnimator variant="slide-right" delay={0.1}>
            <div className="space-y-8 pt-4">
              <div>
                <span className="font-label text-[9px] uppercase tracking-[0.4em] text-[#735a3a] block mb-4">
                  Arquitectura Visual
                </span>
                <h2 className="font-headline text-4xl md:text-5xl font-light text-[#31332c] leading-tight">
                  The Prestige<br />Narrative
                </h2>
              </div>
              <p className="font-body text-sm text-[#31332c]/60 leading-relaxed max-w-sm">
                Experiencias visuales diseñadas con precisión 3D. Cada visualización
                arquitectónica se desarrolla en sintonía con la narrativa del espacio,
                cuidando la iluminación, proporciones y materialidad de Linea Prestige.
                Cada proyecto presenta la visión final antes de construirla.
              </p>
              <div className="space-y-3 border-t border-[#31332c]/10 pt-6">
                {[
                  { label: "Linea", value: "Arquitectura de Interiores" },
                  { label: "Material", value: "Maderas Nobles, Piedra Natural" },
                  { label: "Escala", value: "Escala Premium" },
                ].map((f) => (
                  <div key={f.label} className="flex justify-between items-center py-2 border-b border-[#31332c]/5">
                    <span className="font-label text-[9px] uppercase tracking-widest text-[#31332c]/35">{f.label}</span>
                    <span className="font-body text-xs text-[#31332c]/60">{f.value}</span>
                  </div>
                ))}
              </div>
              <motion.button
                className="w-full bg-[#735a3a] text-[#fbf9f4] font-label text-[10px] uppercase tracking-[0.25em] py-4 px-8 hover:bg-[#5c4428] transition-colors duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                Contratar Consulta Exclusiva
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </motion.button>
            </div>
          </ScrollAnimator>
        </div>
      </section>

      {/* ── PROTOTYPE GRID ── */}
      <section className="px-6 md:px-12 lg:px-20 py-16 max-w-screen-xl mx-auto">
        <ScrollAnimator>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <h3 className="font-headline text-2xl md:text-3xl font-light text-[#31332c] mb-2">Select Prototype</h3>
              <p className="font-body text-xs text-[#31332c]/45 max-w-xs leading-relaxed">
                Navega entre nuestros proyectos arquitectónicos y explora cada visualización en detalle interactivo 3D.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="w-9 h-9 border border-[#31332c]/20 flex items-center justify-center text-[#31332c]/40 hover:border-[#735a3a] hover:text-[#735a3a] transition-all">
                <span className="material-symbols-outlined text-lg">chevron_left</span>
              </button>
              <button className="w-9 h-9 border border-[#31332c]/20 flex items-center justify-center text-[#31332c]/40 hover:border-[#735a3a] hover:text-[#735a3a] transition-all">
                <span className="material-symbols-outlined text-lg">chevron_right</span>
              </button>
            </div>
          </div>
        </ScrollAnimator>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4" staggerDelay={0.1}>
          {projects.slice(0, 2).map((p) => (
            <StaggerItem key={p.id}>
              <div
                className={`relative overflow-hidden aspect-[4/3] bg-[#d8d4cc] group ${p.modal ? "cursor-pointer" : ""}`}
                onClick={() => openModal(p)}
              >
                <img src={p.src} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a14]/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="font-label text-[9px] uppercase tracking-widest text-[#fbf9f4]/50 bg-[#1a1a14]/40 backdrop-blur-sm px-2 py-1">{p.code}</span>
                </div>
                {p.modal && (
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-[#735a3a] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#fbf9f4] text-sm">open_in_full</span>
                    </div>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-label text-[9px] uppercase tracking-widest text-[#ffddb6]/60 mb-1">{p.tag}</p>
                  <h4 className="font-headline text-xl text-[#fbf9f4]">{p.name}</h4>
                </div>
              </div>
            </StaggerItem>
          ))}
          {projects.slice(2).map((p) => (
            <StaggerItem key={p.id}>
              <div className="relative overflow-hidden aspect-[16/9] bg-[#d8d4cc] group cursor-pointer" onClick={() => openModal(p)}>
                <img src={p.src} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a14]/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="font-label text-[9px] uppercase tracking-widest text-[#fbf9f4]/50 bg-[#1a1a14]/40 backdrop-blur-sm px-2 py-1">{p.code}</span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-[#735a3a] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#fbf9f4] text-sm">open_in_full</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-label text-[9px] uppercase tracking-widest text-[#ffddb6]/60 mb-1">{p.tag}</p>
                  <h4 className="font-headline text-xl text-[#fbf9f4]">{p.name}</h4>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#1a1a14] text-[#fbf9f4] mt-16">
        <div className="px-6 md:px-12 lg:px-20 py-16 max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-headline text-xl tracking-[0.3em] mb-6 text-[#fbf9f4]">LINEA PRESTIGE</h4>
              <p className="font-body text-xs text-[#fbf9f4]/40 leading-relaxed max-w-xs">
                We define luxury through the absence of noise. Every project is a collaboration between our masters and the space it inhabits.
              </p>
            </div>
            <div className="space-y-3">
              <h5 className="font-label text-[9px] uppercase tracking-[0.4em] text-[#fbf9f4]/30 mb-6">Contacto</h5>
              <p className="font-body text-xs text-[#fbf9f4]/50">atelier@lineaprestige.com</p>
              <p className="font-body text-xs text-[#fbf9f4]/50">+34 912 345 678</p>
            </div>
            <div className="space-y-3">
              <h5 className="font-label text-[9px] uppercase tracking-[0.4em] text-[#fbf9f4]/30 mb-6">Atelier</h5>
              <p className="font-body text-xs text-[#fbf9f4]/50 leading-relaxed">
                Via della Conciliazione, 77<br />00193 Roma, Italy
              </p>
            </div>
          </div>
          <div className="mt-16 pt-6 border-t border-[#fbf9f4]/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="font-label text-[9px] uppercase tracking-widest text-[#fbf9f4]/20">© 2024 Linea Prestige. All rights reserved.</span>
            <div className="flex gap-8">
              <span className="font-label text-[9px] uppercase tracking-widest text-[#fbf9f4]/20 hover:text-[#ffddb6]/60 cursor-pointer transition-colors">Privacy</span>
              <span className="font-label text-[9px] uppercase tracking-widest text-[#fbf9f4]/20 hover:text-[#ffddb6]/60 cursor-pointer transition-colors">Cookies</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ── 3D MODAL ── */}
      <Modal3D project={activeModal} onClose={() => setActiveModal(null)} />
    </div>
  );
}
