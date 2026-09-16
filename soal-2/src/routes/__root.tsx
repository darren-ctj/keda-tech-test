import { createRootRoute, Outlet } from '@tanstack/react-router';
import { ThemeProvider } from '../context/theme-context';
import { LanguageProvider } from '../context/language-context';

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-primary selection:text-primary-foreground transition-colors duration-200">
          <Outlet />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  ),
});
