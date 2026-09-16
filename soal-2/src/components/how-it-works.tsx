import React from 'react';
import { useLanguage } from '../context/language-context';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ClipboardEdit, PieChart, Rocket, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const { t } = useLanguage();

  const stepIcons = [
    <ClipboardEdit className="w-6 h-6 text-primary" />,
    <PieChart className="w-6 h-6 text-primary" />,
    <Rocket className="w-6 h-6 text-primary" />,
  ];

  return (
    <section className="py-24 bg-background text-foreground relative overflow-hidden transition-colors duration-200">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <Badge variant="accent">
            {t.howItWorks.label}
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            {t.howItWorks.heading}
          </h2>
        </div>

        <div className="mt-20 relative">
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-border -translate-y-6 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {t.howItWorks.steps.map((step, idx) => (
              <Card
                key={idx}
                className="bg-card border-border hover:border-primary relative flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Header Tag + Step Number */}
                <div className="flex items-center justify-between pb-6">
                  <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center group-hover:border-primary transition-colors shadow-inner">
                    {stepIcons[idx]}
                  </div>
                  <span className="text-3xl font-semibold text-muted-foreground group-hover:text-primary transition-colors font-mono">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow Hint */}
                <div className="pt-6 flex items-center gap-2 text-xs font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                  <span>Step {idx + 1}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
