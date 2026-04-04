import { lazy, Suspense } from "react";
import Hero from "../components/Hero";

const Marquee = lazy(() => import("../components/Marquee"));
const Philosophy = lazy(() => import("../components/Philosophy"));
const Stats = lazy(() => import("../components/Stats"));
const BentoGallery = lazy(() => import("../components/BentoGallery"));
const Proceso = lazy(() => import("../components/Proceso"));
const Testimonios = lazy(() => import("../components/Testimonios"));
const MaterialSwatches = lazy(() => import("../components/MaterialSwatches"));
const CtaSection = lazy(() => import("../components/CtaSection"));

function SectionFallback() {
  return (
    <div className="flex items-center justify-center py-24">
      <div className="w-8 h-[1px] bg-primary/30 animate-pulse" />
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Suspense fallback={<SectionFallback />}><Marquee /></Suspense>
      <Suspense fallback={<SectionFallback />}><Philosophy /></Suspense>
      <Suspense fallback={<SectionFallback />}><Stats /></Suspense>
      <Suspense fallback={<SectionFallback />}><BentoGallery /></Suspense>
      <Suspense fallback={<SectionFallback />}><Proceso /></Suspense>
      <Suspense fallback={<SectionFallback />}><Testimonios /></Suspense>
      <Suspense fallback={<SectionFallback />}><MaterialSwatches /></Suspense>
      <Suspense fallback={<SectionFallback />}><CtaSection /></Suspense>
    </main>
  );
}
