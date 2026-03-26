import { lazy, Suspense, useState, useCallback } from "react";
import "./App.css";
import SmoothScroll from "./components/SmoothScroll";
import SplashScreen from "./components/SplashScreen";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CustomCursor from "./components/CustomCursor";

// Lazy load below-the-fold components
const Marquee = lazy(() => import("./components/Marquee"));
const Philosophy = lazy(() => import("./components/Philosophy"));
const Stats = lazy(() => import("./components/Stats"));
const BentoGallery = lazy(() => import("./components/BentoGallery"));
const ProyectosDestacados = lazy(() => import("./components/ProyectosDestacados"));
const Proceso = lazy(() => import("./components/Proceso"));
const Testimonios = lazy(() => import("./components/Testimonios"));
const MaterialSwatches = lazy(() => import("./components/MaterialSwatches"));
const CtaSection = lazy(() => import("./components/CtaSection"));
const Footer = lazy(() => import("./components/Footer"));
const Drawer = lazy(() => import("./components/Drawer"));
const BottomNav = lazy(() => import("./components/BottomNav"));
const BackToTop = lazy(() => import("./components/BackToTop"));

// Minimal loading fallback
function SectionFallback() {
  return (
    <div className="flex items-center justify-center py-24">
      <div className="w-8 h-[1px] bg-primary/30 animate-pulse" />
    </div>
  );
}

function App() {
  const [splashDone, setSplashDone] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleSplashComplete = useCallback(() => setSplashDone(true), []);
  const handleDrawerOpen = useCallback(() => setDrawerOpen(true), []);
  const handleDrawerClose = useCallback(() => setDrawerOpen(false), []);

  return (
    <SmoothScroll>
      {!splashDone && <SplashScreen onComplete={handleSplashComplete} />}
      <div className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container cursor-none">
        <CustomCursor />
        {/* Grain Texture Overlay */}
        <div className="grain-overlay" />

        <Header onDrawerToggle={handleDrawerOpen} />
        <main>
          <Hero />
          <Suspense fallback={<SectionFallback />}>
            <Marquee />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Philosophy />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Stats />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <BentoGallery />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <ProyectosDestacados />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Proceso />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Testimonios />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <MaterialSwatches />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <CtaSection />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
        <Suspense fallback={null}>
          <Drawer isOpen={drawerOpen} onClose={handleDrawerClose} />
        </Suspense>
        <Suspense fallback={null}>
          <BottomNav />
          <BackToTop />
        </Suspense>
      </div>
    </SmoothScroll>
  );
}

export default App;
