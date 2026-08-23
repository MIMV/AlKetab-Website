import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "../LanguageContext";

// Scroll Progress Indicator Component
export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[70]"
      aria-hidden="true"
      style={{ scaleX, background: "linear-gradient(90deg, #945200, #CCB299, #7FB23A)" }}
    />
  );
};

// Floating Action Button Component
export const FloatingActionButton: React.FC = () => {
  const { isArabic } = useLanguage();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [0, 1]);
  const scale = useTransform(scrollY, [0, 300], [0.8, 1]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      className="scroll-top-button"
      style={{ opacity, scale }}
      onClick={scrollToTop}
      aria-label={isArabic ? "العودة إلى أعلى الصفحة" : "Back to top"}
      initial={{ opacity: 0, scale: 0.8 }}
    >
      <ArrowUp className="w-6 h-6" />
    </motion.button>
  );
};
