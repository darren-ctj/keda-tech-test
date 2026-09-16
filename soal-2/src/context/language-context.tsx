import React, { createContext, useContext, useState, type ReactNode } from 'react';
import { translations, type Language } from '../i18n/translations';

interface LanguageContextType {
  language: Language;
  t: typeof translations['en'];
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  isLoginModalOpen: boolean;
  handleOpenLoginModal: () => void;
  handleCloseLoginModal: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const t = translations[language];

  const toggleLanguage = () => setLanguage((prev) => (prev === 'en' ? 'id' : 'en'));

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleOpenLoginModal = () => setIsLoginModalOpen(true);
  const handleCloseLoginModal = () => setIsLoginModalOpen(false);

  return (
    <LanguageContext.Provider
      value={{
        language,
        t,
        setLanguage,
        toggleLanguage,
        isLoginModalOpen,
        handleOpenLoginModal,
        handleCloseLoginModal,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);

  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');

  return context;
};
