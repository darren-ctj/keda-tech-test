import React from 'react';
import { useLanguage } from '../context/language-context';
import { useTheme } from '../context/theme-context';
import { Button } from './ui/button';
import { X, Globe, Layers, Sun, Moon } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t, handleOpenLoginModal } = useLanguage();

  const [menuState, setMenuState] = React.useState(false);

  const scrollToSection = (id: string) => {
    setMenuState(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  React.useEffect(() => {
    if (!menuState) return;

    const mediaQuery = window.matchMedia('(max-width: 1023px)');

    const updateOverflow = () => document.documentElement.classList.toggle('overflow-hidden', mediaQuery.matches);

    updateOverflow();

    mediaQuery.addEventListener('change', updateOverflow);

    return () => {
      mediaQuery.removeEventListener('change', updateOverflow);
      document.documentElement.classList.remove('overflow-hidden');
    };
  }, [menuState]);

  const menuItems = [
    { name: t.nav.about, id: 'about' },
    { name: t.nav.pricing, id: 'pricing' },
    { name: t.nav.contact, id: 'contact' },
  ];

  return (
    <header>
      <nav
        data-state={menuState ? 'active' : undefined}
        className="bg-background/90 backdrop-blur-md fixed top-0 z-50 w-full border-b max-lg:data-[state=active]:bottom-0 transition-all duration-200"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex flex-wrap items-center justify-between py-4 max-lg:gap-6">
            <div className="flex w-full justify-between lg:w-auto">
              <a
                href="#"
                aria-label="home"
                className="flex items-center gap-2.5 text-foreground font-semibold text-2xl tracking-tight group"
              >
                <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-primary-foreground shadow-md shadow-primary/20 group-hover:scale-105 transition-transform">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="font-semibold tracking-wider text-foreground">
                  My ERP
                </span>
              </a>

              <div className="flex items-center gap-2 lg:hidden">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-xl bg-card border text-foreground hover:bg-accent transition-all cursor-pointer"
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
                  className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-xl bg-card border text-primary cursor-pointer"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>{language.toUpperCase()}</span>
                </button>

                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                  className="relative z-20 block cursor-pointer p-2 rounded-xl bg-card border text-foreground after:absolute after:-inset-2 lg:hidden"
                >
                  <div
                    aria-hidden
                    className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 size-4.5 m-auto flex flex-col items-center justify-center gap-[6px] duration-200"
                  >
                    <span className="bg-foreground h-0.5 w-full rounded-full" />
                    <span className="bg-foreground h-0.5 w-full rounded-full" />
                  </div>

                  <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-5 -rotate-180 scale-0 opacity-0 duration-200 text-primary" />
                </button>
              </div>
            </div>

            <div className="absolute inset-0 m-auto size-fit max-lg:hidden">
              <ul className="flex gap-8 text-sm font-medium">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-muted-foreground hover:text-foreground block duration-150 cursor-pointer"
                    >
                      <span>{item.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end max-lg:space-y-6 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-4">
              <div className="hidden lg:flex items-center gap-3">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-xl bg-card border text-foreground hover:bg-accent hover:text-accent-foreground transition-all cursor-pointer"
                  aria-label="Toggle Theme"
                  title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                >
                  {theme === 'dark' ? (
                    <Sun className="size-3.5 text-amber-400" />
                  ) : (
                    <Moon className="size-3.5 text-slate-700" />
                  )}
                </button>

                <div className="flex items-center bg-card border rounded-full p-1 text-xs font-semibold">
                  <Globe className="w-3.5 h-3.5 ml-2 mr-2.5 text-muted-foreground" />

                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${language === 'en'
                      ? 'bg-linear-to-b from-[#38BDF8] to-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                      }`}
                  >
                    EN
                  </button>

                  <button
                    onClick={() => setLanguage('id')}
                    className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${language === 'id'
                      ? 'bg-linear-to-b from-[#38BDF8] to-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                      }`}
                  >
                    ID
                  </button>
                </div>
              </div>

              <div className="lg:hidden border-t pt-4" style={{ height: "calc(100vh - 13.6rem)" }}>
                <ul>
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="text-foreground hover:text-primary block py-3 text-base font-medium w-full text-left cursor-pointer"
                      >
                        <span>{item.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex w-full flex-col space-y-3 lg:flex-row lg:gap-3 lg:space-y-0 lg:w-fit pt-4 lg:pt-0 border-t lg:border-none">
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => {
                    setMenuState(false);
                    handleOpenLoginModal();
                  }}
                >
                  {t.nav.login}
                </Button>

                <Button
                  variant="primary"
                  size="md"
                  onClick={() => {
                    setMenuState(false);
                    handleOpenLoginModal();
                  }}
                >
                  {t.hero.primaryCta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

