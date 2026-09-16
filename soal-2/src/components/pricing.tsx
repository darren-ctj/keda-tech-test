import React from 'react';
import { useLanguage } from '../context/language-context';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Check, X, Sparkles, Zap, ShieldCheck } from 'lucide-react';

export const Pricing: React.FC = () => {
  const { t, handleOpenLoginModal } = useLanguage();

  const planIcons = [
    <ShieldCheck className="w-6 h-6 text-muted-foreground" />,
    <Zap className="w-6 h-6 text-primary" />,
    <Sparkles className="w-6 h-6 text-indigo-500" />,
  ];

  return (
    <section id="pricing" className="py-24 bg-card text-card-foreground relative overflow-hidden border-t border-border transition-colors duration-200">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <Badge variant="accent">
            {t.pricing.label}
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            {t.pricing.heading}
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg">
            {t.pricing.description}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <Card className="bg-background border-border flex flex-col justify-between hover:border-primary transition-all duration-300 hover:-translate-y-1">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center">
                  {planIcons[0]}
                </div>
                <Badge variant="outline">
                  {t.pricing.plans.basic.name}
                </Badge>
              </div>

              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-foreground tracking-tight">
                    {t.pricing.plans.basic.price}
                  </span>
                  <span className="text-muted-foreground text-sm">{t.pricing.period}</span>
                </div>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                  {t.pricing.plans.basic.description}
                </p>
              </div>

              <div className="pt-4 border-t border-border space-y-3">
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

          <Card className="relative bg-background border-2 border-primary rounded-2xl p-8 flex flex-col justify-between shadow-2xl shadow-primary/10 lg:-translate-y-2 hover:-translate-y-3 transition-all duration-300">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-extrabold tracking-wider uppercase shadow-md flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>{t.pricing.mostPopular}</span>
            </div>

            <div className="space-y-6 pt-2">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-accent border border-border flex items-center justify-center">
                  {planIcons[1]}
                </div>
                <Badge variant="accent">
                  {t.pricing.plans.business.name}
                </Badge>
              </div>

              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-foreground tracking-tight">
                    {t.pricing.plans.business.price}
                  </span>
                  <span className="text-muted-foreground text-sm">{t.pricing.period}</span>
                </div>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                  {t.pricing.plans.business.description}
                </p>
              </div>

              <div className="pt-4 border-t border-border space-y-3">
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

          <Card className="bg-background border-border flex flex-col justify-between hover:border-primary transition-all duration-300 hover:-translate-y-1">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-accent border border-border flex items-center justify-center">
                  {planIcons[2]}
                </div>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  {t.pricing.plans.entrepreneur.name}
                </Badge>
              </div>

              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-foreground tracking-tight">
                    {t.pricing.plans.entrepreneur.price}
                  </span>
                  <span className="text-muted-foreground text-sm">{t.pricing.period}</span>
                </div>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                  {t.pricing.plans.entrepreneur.description}
                </p>
              </div>

              <div className="pt-4 border-t border-border space-y-3">
                {t.pricing.plans.entrepreneur.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className={i >= 4 ? 'font-bold text-primary' : ''}>{feature}</span>
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

        <div className="mt-20 pt-12 border-t border-border space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold text-foreground">
              {t.pricing.comparisonTitle}
            </h3>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border bg-background shadow-xl">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-border bg-muted/60 text-foreground text-sm font-bold">
                  <th className="py-4 px-6">{t.pricing.matrixHeadings.feature}</th>
                  <th className="py-4 px-6 text-center w-36">{t.pricing.matrixHeadings.basic}</th>
                  <th className="py-4 px-6 text-center w-36 text-primary">{t.pricing.matrixHeadings.business}</th>
                  <th className="py-4 px-6 text-center w-36 text-primary">{t.pricing.matrixHeadings.entrepreneur}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                {t.pricing.matrixRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-muted/40 transition-colors">
                    <td className="py-4 px-6 font-medium text-foreground">{row.name}</td>

                    <td className="py-4 px-6 text-center">
                      {row.basic ? (
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-muted-foreground mx-auto" />
                      )}
                    </td>

                    <td className="py-4 px-6 text-center bg-accent/30">
                      {row.business ? (
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-muted-foreground mx-auto" />
                      )}
                    </td>

                    <td className="py-4 px-6 text-center bg-accent/50">
                      {row.entrepreneur ? (
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-muted-foreground mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
