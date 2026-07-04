/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { lazy, Suspense } from 'react';
import { useSEO } from './hooks/useSEO';
import { HeroCarousel } from './components/HeroCarousel';
import { CoreAttribution } from './components/core-attribution';

// Lazy load below-the-fold components for optimized performance
const AboutTheCraft = lazy(() =>
  import('./components/AboutTheCraft').then((module) => ({ default: module.AboutTheCraft }))
);

const FeaturesSpecs = lazy(() =>
  import('./components/FeaturesSpecs').then((module) => ({ default: module.FeaturesSpecs }))
);

const PortfolioRoster = lazy(() =>
  import('./components/PortfolioRoster').then((module) => ({ default: module.PortfolioRoster }))
);

const TestimonialsMarquee = lazy(() =>
  import('./components/TestimonialsMarquee').then((module) => ({ default: module.TestimonialsMarquee }))
);

const PricingDrops = lazy(() =>
  import('./components/PricingDrops').then((module) => ({ default: module.PricingDrops }))
);

const FaqContact = lazy(() =>
  import('./components/FaqContact').then((module) => ({ default: module.FaqContact }))
);

const MaximalistFooter = lazy(() =>
  import('./components/MaximalistFooter').then((module) => ({ default: module.MaximalistFooter }))
);

// High-quality modern brutalist loading fallback skeleton
const LoadingSection: React.FC = () => (
  <div className="w-full min-h-[50vh] bg-black flex flex-col items-center justify-center py-20 select-none">
    <div className="w-10 h-10 rounded-full border-4 border-white/10 border-t-white animate-spin mb-4" />
    <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
      LOADING TRANSMISSION...
    </span>
  </div>
);

export default function App() {
  // Manage document head metadata dynamically with custom SEO Hook
  useSEO(
    "TOONHUB // Limited Edition 3D Figurines & Collectibles",
    "Discover TOONHUB: A premium, brutalist character-figurine carousel and collector's hub showcasing limited edition 3D voxel figurines, meticulously handcrafted for true connoisseurs."
  );

  return (
    <div id="toonhub-root" className="bg-black text-white min-h-screen selection:bg-white selection:text-black scroll-smooth">
      {/* 1. Above the fold static layout for immediate paint */}
      <main>
        <HeroCarousel />

        {/* 2. Below the fold lazy-loaded components with Suspense fallback wrappers */}
        <Suspense fallback={<LoadingSection />}>
          <AboutTheCraft />
        </Suspense>

        <Suspense fallback={<LoadingSection />}>
          <FeaturesSpecs />
        </Suspense>

        <Suspense fallback={<LoadingSection />}>
          <PortfolioRoster />
        </Suspense>

        <Suspense fallback={<LoadingSection />}>
          <TestimonialsMarquee />
        </Suspense>

        <Suspense fallback={<LoadingSection />}>
          <PricingDrops />
        </Suspense>

        <Suspense fallback={<LoadingSection />}>
          <FaqContact />
        </Suspense>
      </main>

      {/* 3. Footer */}
      <Suspense fallback={<LoadingSection />}>
        <MaximalistFooter />
      </Suspense>

      {/* 4. Global Floating Mandatory Brand Attribution for Sitora Web */}
      <CoreAttribution variant="floating" />
    </div>
  );
}
