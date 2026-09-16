import React from 'react';
import { useLanguage } from '../context/language-context';
import { Button } from './ui/button';
import {
  CheckCircle2,
  ArrowRight,
  BriefcaseBusiness,
} from 'lucide-react';
import { DashboardMockup } from './mockups/dashboard-mockup';
import { WorldMap } from './ui/world-map';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { getFadeInBlurAnimation } from '../lib/animation';
import { motion } from 'framer-motion';
import { VercelIcon, SupabaseIcon, HuluIcon, SpotifyIcon, FirebaseIcon } from "./icons"
import ShimmerButton from './ui/shimmer-button';

const clientLogos = [
  { name: 'Vercel', Icon: VercelIcon, size: 'h-4' },
  { name: 'Supabase', Icon: SupabaseIcon, size: 'h-6' },
  { name: 'Hulu', Icon: HuluIcon, size: 'h-4' },
  { name: 'Spotify', Icon: SpotifyIcon, size: 'h-6' },
  { name: 'Firebase', Icon: FirebaseIcon, size: 'h-6' },
];

export const Hero: React.FC = () => {
  const { t, handleOpenLoginModal } = useLanguage();

  const scrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <main className="overflow-hidden bg-background transition-colors duration-200">
        <section className="relative pt-24 sm:pt-28 md:pt-34">
          <WorldMap opacity={0.2} className="top-1/2 -translate-y-1/3 pointer-events-none" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div {...getFadeInBlurAnimation(0.1)}>
              <a
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToPricing();
                }}
                className="group mx-0 sm:mx-auto flex w-fit items-center gap-2 rounded-full border bg-card/80 backdrop-blur-md p-1 pr-4 hover:bg-card transition-colors duration-300 shadow-sm"
              >
                <div className="size-6 overflow-hidden rounded-full bg-primary/10 text-primary duration-500 flex items-center justify-center">
                  <BriefcaseBusiness className="size-3" />
                </div>

                <span className="text-muted-foreground text-xs sm:text-sm font-medium">
                  {t.hero.eyebrow}
                </span>
              </a>
            </motion.div>

            <TextGenerateEffect
              tag="h1"
              words={t.hero.headline}
              className="mx-0 sm:mx-auto mt-4 max-w-lg sm:max-w-2xl text-left sm:text-center text-4xl sm:text-5xl md:text-6xl lg:mt-6 font-semibold tracking-tight text-foreground leading-[1.12]"
            />

            <motion.p
              {...getFadeInBlurAnimation(0.35)}
              className="mx-0 sm:mx-auto mt-4 max-w-lg sm:max-w-2xl text-left sm:text-center text-base sm:text-lg leading-relaxed font-normal text-muted-foreground"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              {...getFadeInBlurAnimation(0.45)}
              className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <ShimmerButton className="w-full sm:w-auto" onClick={handleOpenLoginModal}>
                <span>{t.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </ShimmerButton>

              <Button
                variant="outline"
                size="lg"
                onClick={scrollToPricing}
                className="w-full sm:w-auto"
              >
                {t.hero.secondaryCta}
              </Button>
            </motion.div>

            <motion.p
              {...getFadeInBlurAnimation(0.55)}
              className="mt-6 text-xs sm:text-sm text-muted-foreground flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              <span>{t.hero.supportingText}</span>
            </motion.p>

            <div className="relative bg-background max-w-5xl mx-auto mt-10 sm:mt-16 p-3 sm:p-6 border rounded-3xl overflow-hidden pointer-events-none" aria-hidden="true">
              <div className="bg-linear-to-b from-[#38BDF8]/35 to-primary/10 absolute inset-0" />
              <DashboardMockup />
            </div>
          </div>
        </section>

        <section className="bg-background pb-16 pt-12 md:pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.p
              {...getFadeInBlurAnimation(0.2)}
              className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-10"
            >
              {t.hero.trustedByText}
            </motion.p>

            <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
              <motion.div
                className="flex items-center gap-12 sm:gap-16 w-max"
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                  repeat: Infinity,
                  ease: 'linear',
                  duration: 25,
                }}
              >
                {[...clientLogos, ...clientLogos, ...clientLogos].map((client, idx) => {
                  const Icon = client.Icon;

                  return (
                    <div
                      key={idx}
                      className="flex items-center justify-center text-muted-foreground/60 hover:text-foreground transition-colors duration-300"
                    >
                      <Icon className={`${client.size} w-auto`} />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};


