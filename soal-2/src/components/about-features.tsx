import React from 'react';
import { useLanguage } from '../context/language-context';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import {
  Package,
  TrendingUp,
  BarChart3,
  Sparkles
} from 'lucide-react';
import { ProfitIllustration } from './illustrations/profit-illustration';
import { SalesIllustration } from './illustrations/sales-illustration';
import { SmartDecisionsIllustration } from './illustrations/smart-decisions-illustration'
import { InventoryMockup } from './mockups/inventory-mockup';


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
      className="relative overflow-hidden border-t border-b py-24 bg-background transition-colors duration-200"
    >
      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl space-y-4 text-left sm:text-center">
          <Badge variant="accent">{t.about.label}</Badge>

          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            {t.about.heading}
          </h2>

          <p className="text-base text-muted-foreground sm:text-lg">
            {t.about.description}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-full overflow-hidden pl-6 pt-6">
            {icons[0]}

            <h3 className="mt-4 text-lg font-semibold text-foreground">
              {t.about.features[0].title}
            </h3>

            <p className="mt-2 max-w-xl text-balance text-sm leading-relaxed text-muted-foreground sm:text-base">
              {t.about.features[0].description}
            </p>

            <InventoryMockup />
          </Card>

          <Card className="overflow-hidden p-6">
            {icons[1]}

            <h3 className="mt-4 text-lg font-semibold text-foreground">
              {t.about.features[1].title}
            </h3>

            <p className="mt-2 text-balance text-sm leading-relaxed text-muted-foreground">
              {t.about.features[1].description}
            </p>

            <ProfitIllustration />
          </Card>

          <Card className="group overflow-hidden px-6 pt-6">
            {icons[2]}

            <h3 className="mt-4 text-lg font-semibold text-foreground">
              {t.about.features[2].title}
            </h3>

            <p className="mt-2 text-balance text-sm leading-relaxed text-muted-foreground">
              {t.about.features[2].description}
            </p>

            <SalesIllustration />
          </Card>

          <Card className="group overflow-hidden px-6 pt-6">
            {icons[3]}

            <h3 className="mt-4 text-lg font-semibold text-foreground">
              {t.about.features[3].title}
            </h3>

            <p className="mt-2 text-balance text-sm leading-relaxed text-muted-foreground">
              {t.about.features[3].description}
            </p>

            <SmartDecisionsIllustration />
          </Card>
        </div>
      </div>
    </section>
  );
};
