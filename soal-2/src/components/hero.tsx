import React from 'react';
import { useLanguage } from '../context/language-context';
import { Button } from './ui/button';
import {
  CheckCircle2,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';
import { DashboardMockup } from './mockups/dashboard-mockup';

const BoltIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const VercelIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 1155 1000" fill="currentColor">
    <path d="M577.344 0L1154.69 1000H0L577.344 0Z" />
  </svg>
);

const SupabaseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="currentColor">
    <path d="M56.3 3.6L6.5 64.9c-1.4 1.7-.2 4.3 2.1 4.3h38.2l-5.6 27.2c-.4 2.1 2.3 3.4 3.8 1.8l49.8-61.3c1.4-1.7.2-4.3-2.1-4.3H54.5l5.6-27.2c.4-2.1-2.3-3.4-3.8-1.8z" />
  </svg>
);

const HuluIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 30" fill="currentColor">
    <path d="M12 2v26h6v-10h8v10h6V2h-6v10h-8V2h-6zm26 8v18h6V10h-6zm18 0v11c0 2.2 1.8 4 4 4s4-1.8 4-4V10h6v11c0 5.5-4.5 10-10 10s-10-4.5-10-10V10h6zm24 0v18h6V10h-6z" />
  </svg>
);

const SpotifyIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm5.521 17.341c-.217.357-.681.469-1.038.252-2.846-1.739-6.429-2.132-10.651-1.168-.403.093-.807-.163-.9-.566-.093-.403.163-.807.566-.9 4.623-1.057 8.583-.615 11.767 1.332.357.217.469.681.256 1.052zm1.472-3.277c-.273.444-.856.586-1.3.313-3.257-2.002-8.225-2.584-12.08-1.414-.499.151-1.026-.134-1.177-.633-.151-.499.134-1.026.633-1.177 4.403-1.336 9.879-.691 13.611 1.611.444.273.586.856.313 1.3zm.126-3.414C15.228 8.44 8.818 8.229 5.138 9.347c-.614.186-1.264-.165-1.45-.779-.186-.614.165-1.264.779-1.45 4.234-1.285 11.32-1.037 15.602 1.506.553.328.737 1.042.409 1.595-.328.553-1.042.737-1.595.409z" />
  </svg>
);

const FirebaseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.89 15.672L6.563 2.378c.074-.37.56-.468.773-.154l2.847 4.204.001.001 2.383-4.526c.171-.326.633-.326.804 0l8.74 16.593-1.92 1.096L3.89 15.672zM12 18.258l7.262 1.312-7.262-13.8-3.078 5.848L12 18.258z" />
  </svg>
);

const BeaconIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-13h2v6h-2zm0 8h2v2h-2z" />
  </svg>
);

const ClaudeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z" />
  </svg>
);

export const Hero: React.FC = () => {
  const { t, handleOpenLoginModal } = useLanguage();

  const scrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <main className="overflow-hidden bg-background text-foreground transition-colors duration-200">
        <section className="relative pt-28 md:pt-36">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="absolute top-10 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <a
              href="#pricing"
              onClick={(e) => {
                e.preventDefault();
                scrollToPricing();
              }}
              className="group mx-0 sm:mx-auto flex w-fit items-center gap-3 rounded-full border bg-card/70 p-1 pl-4 hover:bg-card transition-colors duration-300 shadow-sm"
            >
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">New:</span>

              <span className="text-muted-foreground text-xs sm:text-sm font-medium">
                {t.hero.eyebrow}
              </span>

              <div className="size-6 overflow-hidden rounded-full bg-primary/10 text-primary duration-500 flex items-center justify-center">
                <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                  <span className="flex size-6 items-center justify-center">
                    <ArrowRight className="size-3" />
                  </span>
                  <span className="flex size-6 items-center justify-center">
                    <ArrowRight className="size-3" />
                  </span>
                </div>
              </div>
            </a>

            <h1 className="mx-0 sm:mx-auto mt-4 max-w-lg sm:max-w-2xl text-left sm:text-center text-4xl sm:text-5xl md:text-6xl lg:mt-6 font-semibold tracking-tight text-foreground leading-[1.12]">
              {t.hero.headline}
            </h1>

            <p className="mx-0 sm:mx-auto mt-4 max-w-lg sm:max-w-2xl text-left sm:text-center text-base sm:text-lg leading-relaxed font-normal text-muted-foreground">
              {t.hero.description}
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                variant="primary"
                size="lg"
                onClick={handleOpenLoginModal}
                className="w-full sm:w-auto flex items-center justify-center gap-2 group"
              >
                <span>{t.hero.primaryCta}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={scrollToPricing}
                className="w-full sm:w-auto"
              >
                {t.hero.secondaryCta}
              </Button>
            </div>

            <p className="mt-6 text-xs sm:text-sm text-muted-foreground flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              <span>{t.hero.supportingText}</span>
            </p>

            <div className="relative max-w-5xl mx-auto mt-10 sm:mt-16 overflow-hidden p-3 sm:p-6 border rounded-3xl pointer-events-none" aria-hidden="true">
              <div className="bg-gradient-to-b from-primary/20 via-border/40 to-transparent absolute inset-0" />
              <DashboardMockup />
            </div>
          </div>
        </section>

        <section className="bg-background pb-16 pt-8 md:pb-28">
          <div className="group relative m-auto max-w-5xl px-6">
            <div className="text-muted-foreground mx-auto mt-8 grid max-w-2xl grid-cols-3 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-30 sm:gap-x-16 sm:gap-y-12 md:grid-cols-4 items-center justify-items-center">
              <div className="flex items-center justify-center w-full">
                <BoltIcon className="h-5 w-auto text-muted-foreground hover:text-foreground transition-colors" />
              </div>
              <div className="flex items-center justify-center w-full">
                <VercelIcon className="h-4 w-auto text-muted-foreground hover:text-foreground transition-colors" />
              </div>
              <div className="flex items-center justify-center w-full">
                <SupabaseIcon className="h-6 w-auto text-muted-foreground hover:text-foreground transition-colors" />
              </div>
              <div className="flex items-center justify-center w-full">
                <HuluIcon className="h-4 w-auto text-muted-foreground hover:text-foreground transition-colors" />
              </div>
              <div className="flex items-center justify-center w-full">
                <SpotifyIcon className="h-6 w-auto text-muted-foreground hover:text-foreground transition-colors" />
              </div>
              <div className="flex items-center justify-center w-full">
                <FirebaseIcon className="h-6 w-auto text-muted-foreground hover:text-foreground transition-colors" />
              </div>
              <div className="hidden items-center justify-center w-full sm:flex">
                <BeaconIcon className="h-5 w-auto text-muted-foreground hover:text-foreground transition-colors" />
              </div>
              <div className="hidden items-center justify-center w-full sm:flex">
                <ClaudeIcon className="h-5 w-auto text-muted-foreground hover:text-foreground transition-colors" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

