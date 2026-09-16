import React from 'react';
import { useLanguage } from '../context/language-context';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import {
  Package,
  TrendingUp,
  BarChart3,
  Sparkles,
  Dock
} from 'lucide-react';
import { ProfitIllustration } from './illustrations/profit-illustration';
import { SalesIllustration } from './illustrations/sales-illustration';
import { SmartDecisionsIllustration } from './illustrations/smart-decisions-illustration';
import { InventoryMockup } from './mockups/inventory-mockup';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { getFadeInBlurAnimation } from '../lib/animation';
import { motion } from 'framer-motion';

export const AboutFeatures: React.FC = () => {
  const { t } = useLanguage();

  const icons = [
    <Package className="w-5 h-5 text-primary" />,
    <TrendingUp className="w-5 h-5 text-primary" />,
    <BarChart3 className="w-5 h-5 text-primary" />,
    <Sparkles className="w-5 h-5 text-primary" />,
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-b py-16 sm:py-24 bg-background transition-colors duration-200"
    >
      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl space-y-4 text-left sm:text-center">
          <motion.div {...getFadeInBlurAnimation(0.1)}>
            <Badge variant="accent">
              <Dock className="size-3.5 mr-0.5" />
              {t.about.label}
            </Badge>
          </motion.div>

          <TextGenerateEffect
            tag="h2"
            words={t.about.heading}
            className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl"
          />

          <motion.p
            {...getFadeInBlurAnimation(0.3)}
            className="text-base text-muted-foreground sm:text-lg"
          >
            {t.about.description}
          </motion.p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <motion.div {...getFadeInBlurAnimation(0.2)} className="col-span-full">
            <Card className="overflow-hidden pl-6 pt-6 h-full">
              {icons[0]}

              <TextGenerateEffect
                tag="h3"
                words={t.about.features[0].title}
                className="mt-4 text-lg font-semibold text-foreground"
              />

              <p className="mt-2 max-w-xl text-balance text-sm leading-relaxed text-muted-foreground sm:text-base">
                {t.about.features[0].description}
              </p>

              <InventoryMockup />
            </Card>
          </motion.div>

          <motion.div {...getFadeInBlurAnimation(0.3)}>
            <Card className="overflow-hidden p-6 h-full">
              {icons[1]}

              <TextGenerateEffect
                tag="h3"
                words={t.about.features[1].title}
                className="mt-4 text-lg font-semibold text-foreground"
              />

              <p className="mt-2 text-balance text-sm leading-relaxed text-muted-foreground">
                {t.about.features[1].description}
              </p>

              <ProfitIllustration />
            </Card>
          </motion.div>

          <motion.div {...getFadeInBlurAnimation(0.4)}>
            <Card className="group overflow-hidden px-6 pt-6 h-full">
              {icons[2]}

              <TextGenerateEffect
                tag="h3"
                words={t.about.features[2].title}
                className="mt-4 text-lg font-semibold text-foreground"
              />

              <p className="mt-2 text-balance text-sm leading-relaxed text-muted-foreground">
                {t.about.features[2].description}
              </p>

              <SalesIllustration />
            </Card>
          </motion.div>

          <motion.div {...getFadeInBlurAnimation(0.5)}>
            <Card className="group overflow-hidden px-6 pt-6 h-full">
              {icons[3]}

              <TextGenerateEffect
                tag="h3"
                words={t.about.features[3].title}
                className="mt-4 text-lg font-semibold text-foreground"
              />

              <p className="mt-2 text-balance text-sm leading-relaxed text-muted-foreground">
                {t.about.features[3].description}
              </p>

              <SmartDecisionsIllustration />
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

