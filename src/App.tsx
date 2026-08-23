import { ScrollProgress } from "./components/ScrollComponents";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { FAQSection } from "./components/FAQSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { FloatingActionButton } from "./components/ScrollComponents";
import { useLanguage } from "./LanguageContext";

function App() {
  const { language, isArabic } = useLanguage();

  return (
    <div dir={isArabic ? "rtl" : "ltr"} lang={language} className="site-root" id="top">
      <main>
        <ScrollProgress />
        <Header />
        <HeroSection />
        <FeaturesSection />
        <FAQSection />
        <CTASection />
        <Footer />
        <FloatingActionButton />
      </main>
    </div>
  );
}

export default App;
