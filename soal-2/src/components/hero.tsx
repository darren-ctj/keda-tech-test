import React from 'react';
import { useLanguage } from '../context/language-context';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import {
  TrendingUp,
  DollarSign,
  Package,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { t, handleOpenLoginModal } = useLanguage();

  const scrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-background text-foreground transition-colors duration-200">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <Badge variant="accent" className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>{t.hero.eyebrow}</span>
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.12]">
              <span className="block">{t.hero.headline.split('.')[0]}.</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-cyan-400 to-indigo-500">
                {t.hero.headline.split('.')[1] || ''}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {t.hero.description}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
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

            <p className="pt-2 text-xs sm:text-sm text-muted-foreground flex items-center justify-center lg:justify-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              <span>{t.hero.supportingText}</span>
            </p>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-indigo-500 rounded-2xl blur-xl opacity-20 transition duration-1000 group-hover:opacity-40" />

            <Card className="relative p-5 sm:p-6 shadow-2xl backdrop-blur-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-medium text-muted-foreground">
                    NEXA Executive Dashboard
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-primary bg-accent border border-border px-2.5 py-1 rounded-full font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                  Live Sync
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-background border border-border rounded-xl p-3.5 space-y-1 hover:border-primary transition-colors">
                  <div className="flex items-center justify-between text-muted-foreground text-xs font-medium">
                    <span>{t.dashboard.revenue}</span>
                    <DollarSign className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div className="text-base sm:text-xl font-bold text-foreground tracking-tight">
                    {t.dashboard.revenueValue}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-500">
                    <ArrowUpRight className="w-3 h-3" />
                    <span>+14.2%</span>
                  </div>
                </div>

                <div className="bg-background border border-border rounded-xl p-3.5 space-y-1 hover:border-primary transition-colors">
                  <div className="flex items-center justify-between text-muted-foreground text-xs font-medium">
                    <span>{t.dashboard.profit}</span>
                    <TrendingUp className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div className="text-base sm:text-xl font-bold text-foreground tracking-tight">
                    {t.dashboard.profitValue}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-500">
                    <ArrowUpRight className="w-3 h-3" />
                    <span>+8.5%</span>
                  </div>
                </div>

                <div className="bg-background border border-border rounded-xl p-3.5 space-y-1 hover:border-primary transition-colors">
                  <div className="flex items-center justify-between text-muted-foreground text-xs font-medium">
                    <span>{t.dashboard.products}</span>
                    <Package className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div className="text-base sm:text-xl font-bold text-foreground tracking-tight">
                    {t.dashboard.productsValue}
                  </div>
                  <div className="text-[11px] font-medium text-muted-foreground">
                    {t.dashboard.productsStatus}
                  </div>
                </div>
              </div>

              <div className="bg-background border border-border rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-foreground">
                    {t.dashboard.salesTrend}
                  </span>
                  <span className="text-[11px] text-muted-foreground">Jan — Jul 2026</span>
                </div>

                <div className="h-28 flex items-end justify-between gap-2 pt-2 px-1">
                  {[
                    { month: 'Jan', height: '40%', val: '12M' },
                    { month: 'Feb', height: '55%', val: '15M' },
                    { month: 'Mar', height: '45%', val: '13.5M' },
                    { month: 'Apr', height: '70%', val: '18M' },
                    { month: 'May', height: '65%', val: '17M' },
                    { month: 'Jun', height: '85%', val: '21M' },
                    { month: 'Jul', height: '95%', val: '24.5M', active: true },
                  ].map((bar, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
                      <div className="w-full bg-muted hover:bg-accent rounded-t-md relative overflow-hidden transition-all duration-300" style={{ height: bar.height }}>
                        <div
                          className={`absolute inset-0 ${bar.active
                            ? 'bg-primary'
                            : 'bg-primary/40 group-hover:bg-primary/80'
                            }`}
                        />
                      </div>
                      <span className={`text-[10px] ${bar.active ? 'text-primary font-bold' : 'text-muted-foreground'}`}>
                        {bar.month}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-background border border-border rounded-xl p-3.5 space-y-2">
                  <div className="text-xs font-semibold text-foreground flex items-center justify-between">
                    <span>{t.dashboard.recentTransactions}</span>
                    <span className="text-[10px] text-primary">3 new</span>
                  </div>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex items-center justify-between p-1.5 rounded-lg bg-muted/60">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span className="text-foreground font-medium">Product A</span>
                      </div>
                      <span className="text-emerald-500 font-semibold">+Rp2.4M</span>
                    </div>
                    <div className="flex items-center justify-between p-1.5 rounded-lg bg-muted/60">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                        <span className="text-foreground font-medium">Product B</span>
                      </div>
                      <span className="text-rose-500 font-semibold">-Rp800K</span>
                    </div>
                    <div className="flex items-center justify-between p-1.5 rounded-lg bg-muted/60">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span className="text-foreground font-medium">Product C</span>
                      </div>
                      <span className="text-emerald-500 font-semibold">+Rp1.7M</span>
                    </div>
                  </div>
                </div>

                <div className="bg-accent border border-border rounded-xl p-3.5 space-y-2 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-accent-foreground">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
                      <span>{t.dashboard.aiForecast}</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-primary text-primary-foreground">
                      PRO
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-snug">
                    {t.dashboard.aiForecastDesc}
                  </p>
                  <div className="w-full bg-background rounded-full h-1.5 overflow-hidden">
                    <div className="bg-primary h-full w-4/5 rounded-full" />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
