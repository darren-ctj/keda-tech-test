import React from 'react';
import { useLanguage } from '../context/language-context';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Check, Users } from 'lucide-react';

export const Pricing: React.FC = () => {
  const { t, handleOpenLoginModal } = useLanguage();

  return (
    <section id="pricing" className="py-24 bg-card overflow-hidden border-t transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-left sm:text-center space-y-4">
          <Badge variant="accent">
            {t.pricing.label}
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-foreground">
            {t.pricing.heading}
          </h2>

          <p className="text-base text-muted-foreground sm:text-lg">
            {t.pricing.description}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <Card className="flex flex-col justify-between hover:border-primary transition-all duration-300 hover:-translate-y-1">
            <div className="space-y-6">
              <div className="flex items-center justify-end">
                <Badge variant="outline">
                  {t.pricing.plans.basic.name}
                </Badge>
              </div>

              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-semibold text-foreground tracking-tight">
                    {t.pricing.plans.basic.price}
                  </span>
                  <span className="text-muted-foreground text-sm">{t.pricing.period}</span>
                </div>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                  {t.pricing.plans.basic.description}
                </p>
              </div>

              <div className="pt-4 border-t border-dashed space-y-3">
                {t.pricing.plans.basic.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <Button
                variant="outline"
                size="md"
                onClick={handleOpenLoginModal}
                className="w-full"
              >
                {t.pricing.plans.basic.cta}
              </Button>
            </div>
          </Card>

          <Card className="relative border-2 border-primary rounded-2xl p-8 flex flex-col justify-between shadow-2xl shadow-primary/10 lg:-translate-y-2 hover:-translate-y-3 transition-all duration-300">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-linear-to-b from-[#38BDF8] to-primary text-primary-foreground text-xs font-semibold tracking-wider uppercase shadow-md flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 fill-current" />
              <span>{t.pricing.mostPopular}</span>
            </div>

            <div className="space-y-6 pt-2">
              <div className="flex items-center justify-end">
                <Badge variant="accent">
                  {t.pricing.plans.business.name}
                </Badge>
              </div>

              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-semibold text-foreground tracking-tight">
                    {t.pricing.plans.business.price}
                  </span>
                  <span className="text-muted-foreground text-sm">{t.pricing.period}</span>
                </div>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                  {t.pricing.plans.business.description}
                </p>
              </div>

              <div className="pt-4 border-t border-dashed space-y-3">
                {t.pricing.plans.business.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <Button
                variant="primary"
                size="md"
                onClick={handleOpenLoginModal}
                className="w-full"
              >
                {t.pricing.plans.business.cta}
              </Button>
            </div>
          </Card>

          <Card className="flex flex-col justify-between hover:border-primary transition-all duration-300 hover:-translate-y-1">
            <div className="space-y-6">
              <div className="flex items-center justify-end">
                <Badge variant="outline">
                  {t.pricing.plans.entrepreneur.name}
                </Badge>
              </div>

              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-semibold text-foreground tracking-tight">
                    {t.pricing.plans.entrepreneur.price}
                  </span>
                  <span className="text-muted-foreground text-sm">{t.pricing.period}</span>
                </div>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                  {t.pricing.plans.entrepreneur.description}
                </p>
              </div>

              <div className="pt-4 border-t border-dashed space-y-3">
                {t.pricing.plans.entrepreneur.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <Button
                variant="outline"
                size="md"
                onClick={handleOpenLoginModal}
                className="w-full"
              >
                {t.pricing.plans.entrepreneur.cta}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
