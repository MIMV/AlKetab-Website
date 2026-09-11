import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Languages, Menu, X } from "lucide-react";
import { useLanguage } from "../LanguageContext";

const APP_STORE_URL = "https://apps.apple.com/us/app/id543646326";
const productLinks = [
  { englishName: "AI Search", arabicName: "بحث بالـAI", href: "https://quran.alketab.app/" },
  { englishName: "Prompter", arabicName: "ملقن القرآن", href: "https://prompter.alketab.app/" },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { isArabic, setLanguage } = useLanguage();
  const nextLanguage = isArabic ? "en" : "ar";

  const navLinks = isArabic ? [
    { name: "كل المزايا", href: "#complete-app" },
    { name: "تصحيح التلاوة", href: "#correction" },
    { name: "المعلّم", href: "#teacher" },
    { name: "الحفظ والمراجعة", href: "#memorization" },
  ] : [
    { name: "All features", href: "#complete-app" },
    { name: "Correction", href: "#correction" },
    { name: "Quran Teacher", href: "#teacher" },
    { name: "Memorization", href: "#memorization" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="site-header-inner">
        <a className="site-logo" href="#top" aria-label={isArabic ? "الكتاب — الصفحة الرئيسية" : "Al-Ketab — Home"}>
          <img src="/assets/AppIcon.png" alt="" />
          <span>{isArabic ? "الكتاب" : "Al-Ketab"}</span>
        </a>
        <nav className="desktop-nav" aria-label={isArabic ? "التنقل الرئيسي" : "Main navigation"}>
          {navLinks.map((link) => <a href={link.href} key={link.name}>{link.name}</a>)}
          {productLinks.map((link) => <a className="nav-product-link" href={link.href} key={link.href} target="_blank" rel="noreferrer">{isArabic ? link.arabicName : link.englishName}</a>)}
        </nav>
        <a className="language-toggle" href={`/${nextLanguage}/`} onClick={(event) => { event.preventDefault(); setLanguage(nextLanguage); }} aria-label={isArabic ? "Switch to English" : "التبديل إلى العربية"}>
          <Languages size={15} /><span>{isArabic ? "English" : "العربية"}</span>
        </a>
        <a className="header-download" href={APP_STORE_URL} target="_blank" rel="noreferrer">
          <Download size={15} /> {isArabic ? "تحميل مجاني" : "Free download"}
        </a>
        <a className="mobile-header-language" href={`/${nextLanguage}/`} onClick={(event) => { event.preventDefault(); setLanguage(nextLanguage); }} aria-label={isArabic ? "Switch to English" : "التبديل إلى العربية"}>
          <Languages size={16} /><span>{isArabic ? "EN" : "ع"}</span>
        </a>
        <button className="menu-toggle" type="button" aria-label={isArabic ? (isOpen ? "إغلاق القائمة" : "فتح القائمة") : (isOpen ? "Close menu" : "Open menu")} aria-expanded={isOpen} onClick={() => setIsOpen((value) => !value)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.nav className="mobile-nav" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
            {navLinks.map((link) => <a href={link.href} key={link.name} onClick={() => setIsOpen(false)}>{link.name}</a>)}
            <div className="mobile-product-links">
              {productLinks.map((link) => <a href={link.href} key={link.href} target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)}>{isArabic ? link.arabicName : link.englishName}</a>)}
            </div>
            <a href={APP_STORE_URL} target="_blank" rel="noreferrer">{isArabic ? "تحميل التطبيق من App Store" : "Download on the App Store"}</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
