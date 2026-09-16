import React from 'react';
import { useLanguage } from '../context/language-context';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Package, TrendingUp, BarChart3, Sparkles } from 'lucide-react';

export const AboutFeatures: React.FC = () => {
  const { t } = useLanguage();

  const icons = [
    <Package className="w-6 h-6 text-primary" />,
    <TrendingUp className="w-6 h-6 text-primary" />,
    <BarChart3 className="w-6 h-6 text-primary" />,
    <Sparkles className="w-6 h-6 text-amber-500" />,
  ];

  return (
    <section id="about" className="py-24 bg-card text-card-foreground relative overflow-hidden border-t border-b border-border transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <Badge variant="accent">
            {t.about.label}
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            {t.about.heading}
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed pt-2 font-normal">
            {t.about.description}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.about.features.map((feature, idx) => (
            <Card
              key={idx}
              className="bg-background border-border hover:border-primary transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center group-hover:scale-110 group-hover:border-primary transition-all shadow-inner">
                  {icons[idx]}
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="pt-6 flex items-center text-xs font-semibold text-muted-foreground group-hover:text-primary transition-colors gap-1">
                <span>0{idx + 1}</span>
                <span className="w-8 h-[1px] bg-border group-hover:bg-primary transition-colors" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
