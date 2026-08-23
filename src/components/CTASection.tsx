import React from "react";
import { ArrowLeft, ArrowRight, CircleDollarSign, ShieldCheck, WifiOff } from "lucide-react";
import { useLanguage } from "../LanguageContext";

const APP_STORE_URL = "https://apps.apple.com/us/app/id543646326";

export const CTASection: React.FC = () => {
  const { isArabic } = useLanguage();

  return (
    <section className="cta-section">
      <div className="cta-glow" aria-hidden="true" />
      <img src="/assets/AppIcon.png" alt={isArabic ? "أيقونة تطبيق الكتاب" : "Al-Kitab app icon"} />
      <p className="section-kicker">{isArabic ? "متاح مجانًا على App Store" : "Available free on the App Store"}</p>
      <h2>{isArabic ? <>ابدأ رحلتك<br /><em>بثقة.</em></> : <>Begin your journey<br /><em>with confidence.</em></>}</h2>
      <p>{isArabic ? "رتّل فيسمعك الكتاب، ويتابعك، ويساعدك على أن تتحسّن — بخصوصية تامة ومن دون إنترنت." : "Recite and Al-Kitab listens, follows, and helps you improve — completely private and fully offline."}</p>
      <div className="cta-trust"><span><WifiOff /> {isArabic ? "يعمل بلا إنترنت" : "Works offline"}</span><span><ShieldCheck /> {isArabic ? "على جهازك فقط" : "Entirely on your device"}</span><span><CircleDollarSign /> {isArabic ? "وقف لله" : "Free"}</span></div>
      <a href={APP_STORE_URL} target="_blank" rel="noreferrer">{isArabic ? "حمّل تطبيق الكتاب" : "Download Al-Kitab"} {isArabic ? <ArrowLeft /> : <ArrowRight />}</a>
    </section>
  );
};
