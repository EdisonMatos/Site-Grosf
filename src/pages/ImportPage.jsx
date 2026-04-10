import { useState, useEffect, lazy, Suspense } from "react";

// CRÍTICOS (sem lazy)
import NavbarSection from "../components/sections/NavbarSection";
import HeroSection from "../components/sections/HeroSection";
import BannersNovos from "../components/sections/BannersNovos";
import Courses from "../components/sections/Courses";

// LAZY (abaixo da dobra)
const AboutUs = lazy(() => import("../components/sections/AboutUs"));
const Numbers = lazy(() => import("../components/sections/Numbers"));
const OurProducts = lazy(() => import("../components/sections/OurProducts"));
const Storage = lazy(() => import("../components/sections/Storage"));
const Ecalc = lazy(() => import("../components/sections/ECalc"));
const AvoidAccidents = lazy(
  () => import("../components/sections/AvoidAcidents"),
);
const CtaWhatsapp = lazy(() => import("../components/sections/CtaWhatsapp"));
const BannerCarouselComponent = lazy(
  () => import("../components/sections/BannersComponent"),
);
const Curiosities = lazy(() => import("../components/sections/Curiosities"));
const FrequentlyAskedQuestions = lazy(
  () => import("../components/sections/FrenquentlyAskedQuestions"),
);
const Footer = lazy(() => import("../components/sections/Footer"));

// Interativos
const BackToTopButton = lazy(
  () => import("../components/interactives/BackToTopButton"),
);
const FloatingWhatsappButton = lazy(
  () => import("../components/interactives/FloatingWhatsappButton"),
);

export default function ImportPage() {
  return (
    <div>
      {/* LCP */}
      <NavbarSection />
      <main>
        <HeroSection />

        {/* Conteúdo abaixo da dobra */}
        <Suspense fallback={null}>
          <AboutUs modal={true} />
          <Numbers />
          <OurProducts />
          <BannerCarouselComponent />
          <Ecalc />
          <Courses />
          <Curiosities />
          <Storage modal={true} />
          <AvoidAccidents />
          <CtaWhatsapp />
          <FrequentlyAskedQuestions />
          <BannersNovos />
          <BackToTopButton />
          <FloatingWhatsappButton />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}
