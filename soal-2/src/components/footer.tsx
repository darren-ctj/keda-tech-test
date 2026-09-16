import React from 'react';
import { useLanguage } from '../context/language-context';
import { Layers, Mail, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language, setLanguage, t, handleOpenLoginModal } = useLanguage();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border text-muted-foreground py-16 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-2.5 text-foreground font-extrabold text-2xl tracking-tight">
              <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-primary-foreground shadow-md">
                <Layers className="w-4 h-4" />
              </div>
              <span className="font-extrabold tracking-wider text-foreground">
                NEXA
              </span>
            </a>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold tracking-widest text-foreground uppercase">
              {t.footer.navTitle}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  {t.nav.pricing}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  {t.nav.contact}
                </button>
              </li>
              <li>
                <button
                  onClick={handleOpenLoginModal}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  {t.nav.login}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Language Options */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold tracking-widest text-foreground uppercase">
              {t.footer.contactTitle}
            </h4>
            <div className="text-sm space-y-2">
              <a
                href="mailto:hello@nexa.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span>hello@nexa.com</span>
              </a>
            </div>

            <div className="pt-4 flex items-center gap-2 text-xs">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 rounded cursor-pointer ${language === 'en' ? 'bg-primary text-primary-foreground font-bold' : 'text-muted-foreground hover:text-foreground'
                  }`}
              >
                English
              </button>
              <span className="text-border">|</span>
              <button
                onClick={() => setLanguage('id')}
                className={`px-2 py-0.5 rounded cursor-pointer ${language === 'id' ? 'bg-primary text-primary-foreground font-bold' : 'text-muted-foreground hover:text-foreground'
                  }`}
              >
                Bahasa Indonesia
              </button>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-4">
          <p>{t.footer.copyright}</p>
          <p>
            Designed for forward-thinking entrepreneurs.
          </p>
        </div>
      </div>
    </footer>
  );
};
