import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type Language = "ar" | "en";

type LanguageContextValue = {
  language: Language;
  isArabic: boolean;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const STORAGE_KEY = "alkitab-language";

const languageFromPath = (): Language | null => {
  const firstSegment = window.location.pathname.split("/").filter(Boolean)[0];
  return firstSegment === "ar" || firstSegment === "en" ? firstSegment : null;
};

export const LanguageProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const pathLanguage = languageFromPath();
    if (pathLanguage) return pathLanguage;

    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === "en" ? "en" : "ar";
  });

  const navigateToLanguage = useCallback((nextLanguage: Language) => {
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);

    const targetPath = `/${nextLanguage}/${window.location.hash}`;
    const currentPath = `${window.location.pathname}${window.location.hash}`;

    if (currentPath !== targetPath) {
      window.location.assign(targetPath);
      return;
    }

    setLanguage(nextLanguage);
  }, []);

  useEffect(() => {
    const isArabic = language === "ar";
    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    document.title = isArabic
      ? "الكتاب: تصحيح تلاوة القرآن بالذكاء الاصطناعي دون إنترنت"
      : "Al-Kitab: Free Offline AI Quran Recitation Correction";

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) {
      description.content = isArabic
        ? "صحّح تلاوة القرآن كلمة بكلمة بالذكاء الاصطناعي على جهازك. مجانًا، دون إنترنت أو حساب، مع معلّم القرآن والحفظ والتفسير والبحث الصوتي."
        : "Correct Quran recitation word by word with private, on-device AI. Free, offline, no account—plus Quran Teacher, memorization, tafsir, and voice search.";
    }

    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const value = useMemo<LanguageContextValue>(() => ({
    language,
    isArabic: language === "ar",
    setLanguage: navigateToLanguage,
    toggleLanguage: () => navigateToLanguage(language === "ar" ? "en" : "ar"),
  }), [language, navigateToLanguage]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
};
