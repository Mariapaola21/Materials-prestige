import { lazy, Suspense, useState, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SmoothScroll from "./components/SmoothScroll";
import SplashScreen from "./components/SplashScreen";
import Header from "./components/Header";
import CustomCursor from "./components/CustomCursor";

import Home from "./pages/Home";
import Proyectos from "./pages/Proyectos";
import Materiales from "./pages/Materiales";
import ServiciosPremium from "./pages/ServiciosPremium";
import Proyecto3D from "./pages/Proyecto3D";

const Footer = lazy(() => import("./components/Footer"));
const Drawer = lazy(() => import("./components/Drawer"));
const BottomNav = lazy(() => import("./components/BottomNav"));
const BackToTop = lazy(() => import("./components/BackToTop"));

function App() {
  const [splashDone, setSplashDone] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleSplashComplete = useCallback(() => setSplashDone(true), []);
  const handleDrawerOpen = useCallback(() => setDrawerOpen(true), []);
  const handleDrawerClose = useCallback(() => setDrawerOpen(false), []);

  return (
    <BrowserRouter>
      <SmoothScroll>
        {!splashDone && <SplashScreen onComplete={handleSplashComplete} />}
        <div className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container cursor-none">
          <CustomCursor />
          <div className="grain-overlay" />

          <Header onDrawerToggle={handleDrawerOpen} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/materiales" element={<Materiales />} />
            <Route path="/servicios-premium" element={<ServiciosPremium />} />
            <Route path="/proyecto-3d" element={<Proyecto3D />} />
          </Routes>

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
    </BrowserRouter>
  );
}

export default App;
