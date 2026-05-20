"use client";

import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from 'react';

export type Lang = 'en' | 'vi';

export type LangPair = { en: string; vi: string };

const STORAGE_KEY = 'dfl24-lang';

type LanguageContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (pair: LangPair) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === 'en' || stored === 'vi') {
        setLangState(stored);
      }
    } catch {}
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {}
  }, []);

  const t = useCallback((pair: LangPair) => pair[lang], [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLang must be used inside <LanguageProvider>');
  }
  return ctx;
}
