import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowDown, LockKeyhole, WifiOff } from "lucide-react";
import { OnboardingPreview } from "./OnboardingPreview";
import { useLanguage } from "../LanguageContext";

const APP_STORE_URL = "https://apps.apple.com/us/app/id543646326";

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const { isArabic } = useLanguage();

  return (
    <section
      ref={containerRef}
      className="hero-section"
    >
      <div className="hero-ambient" aria-hidden="true" />
      <div className="hero-noise" aria-hidden="true" />
      <div className="hero-layout">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="hero-badge"><i /> {isArabic ? "تصحيح تلاوة القرآن بالذكاء الاصطناعي · على جهازك" : "AI Quran recitation correction · on-device"}</span>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }}>
            {isArabic ? <>رتّل، والكتاب<br /><em>يصحّح لك.</em></> : <>Recite.<br /><em>Al-Ketab corrects you.</em></>}
          </motion.h1>
          <motion.p className="hero-description" initial={{ opacity: 0, y: 18 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.25 }}>
            {isArabic
              ? "محرّك ذكاء اصطناعي خاص يعمل على جهازك، ويتابع تلاوة القرآن كلمة بكلمة، ويشير إلى ما أتقنته وما يحتاج إلى مراجعة — مجانًا، بلا إنترنت، وبخصوصية كاملة."
              : "A private, on-device AI engine follows your Quran recitation word by word and marks what was confirmed or needs another look — free, offline, and without an account."}
          </motion.p>
          <div className="hero-trust">
            <span><WifiOff size={16} /> {isArabic ? "يعمل دون إنترنت" : "Works without internet"}</span>
            <span><LockKeyhole size={16} /> {isArabic ? "صوتك لا يغادر جهازك" : "Your voice never leaves your device"}</span>
          </div>
          <div className="hero-actions">
            <a href={APP_STORE_URL} target="_blank" rel="noreferrer" className="app-store-link">
              <img src={isArabic ? "/assets/AppStoreBadge-ar.png" : "/assets/AppStoreBadge-en.png"} alt={isArabic ? "حمّل تطبيق الكتاب من App Store" : "Download Al-Ketab on the App Store"} />
            </a>
            <a href="#correction" className="hero-learn-link">{isArabic ? "اكتشف الجديد" : "Discover what’s new"} <ArrowDown size={17} /></a>
          </div>
        </motion.div>
        <motion.div className="hero-onboarding" initial={{ opacity: 0, y: 28, scale: 0.96 }} animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}} transition={{ duration: 0.85, delay: 0.2 }}>
          <OnboardingPreview />
        </motion.div>
      </div>
    </section>
  );
};
