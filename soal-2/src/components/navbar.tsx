import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/language-context';
import { useTheme } from '../context/theme-context';
import { Button } from './ui/button';
import { Menu, X, Globe, Layers, Sun, Moon } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t, handleOpenLoginModal } = useLanguage();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);

    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-background/85 backdrop-blur-md border-b border-border shadow-md py-3.5'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2.5 text-foreground font-extrabold text-2xl tracking-tight group"
        >
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-primary-foreground shadow-md shadow-primary/20 group-hover:scale-105 transition-transform">
            <Layers className="w-5 h-5" />
          </div>
          <span className="font-extrabold tracking-wider text-foreground">
            NEXA
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <button
            onClick={() => scrollToSection('about')}
            className="hover:text-primary transition-colors py-1 cursor-pointer"
          >
            {t.nav.about}
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="hover:text-primary transition-colors py-1 cursor-pointer"
          >
            {t.nav.pricing}
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="hover:text-primary transition-colors py-1 cursor-pointer"
          >
            {t.nav.contact}
          </button>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-card border border-border text-foreground hover:bg-accent hover:text-accent-foreground transition-all cursor-pointer"
            aria-label="Toggle Theme"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          <div className="flex items-center bg-card border border-border rounded-full p-1 text-xs font-semibold">
            <Globe className="w-3.5 h-3.5 ml-2 mr-1 text-muted-foreground" />
            <button
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${language === 'en'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('id')}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${language === 'id'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              ID
            </button>
          </div>

          <Button variant="outline" size="md" onClick={handleOpenLoginModal}>
            {t.nav.login}
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-card border border-border text-foreground"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          <button
            onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
            className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-card border border-border text-primary"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{language.toUpperCase()}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-foreground rounded-lg bg-card border border-border focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-4 pt-4 pb-6 space-y-4 animate-in fade-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2 font-medium text-foreground">
            <button
              onClick={() => scrollToSection('about')}
              className="text-left px-3 py-2.5 rounded-lg hover:bg-card hover:text-primary transition-colors"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-left px-3 py-2.5 rounded-lg hover:bg-card hover:text-primary transition-colors"
            >
              {t.nav.pricing}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left px-3 py-2.5 rounded-lg hover:bg-card hover:text-primary transition-colors"
            >
              {t.nav.contact}
            </button>
          </div>

          <div className="pt-3 border-t border-border flex flex-col gap-3">
            <Button
              variant="primary"
              size="lg"
              className="w-full"
              onClick={() => {
                setMobileMenuOpen(false);
                handleOpenLoginModal();
              }}
            >
              {t.nav.login}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
