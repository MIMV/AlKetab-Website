import { ScrollProgress } from "./components/ScrollComponents";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FAQSection } from "./components/FAQSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { FloatingActionButton } from "./components/ScrollComponents";
import { ScreenshotsCarousel } from "./components/ScreenshotsCarousel";
import { StatsCounter } from "./components/StatsCounter";

function App() {
  return (
    <div dir="rtl" lang="ar" className="font-sans">
      {/* Main content */}
      <main className="min-h-screen bg-white text-black overflow-x-hidden relative">
        <ScrollProgress />
        <div className="relative z-10">
          <HeroSection />
          <StatsCounter />
          <div id="features">
            <FeaturesSection />
          </div>
          <div id="screenshots">
            <ScreenshotsCarousel />
          </div>
          <div id="testimonials">
            <TestimonialsSection />
          </div>
          <FAQSection />
          <CTASection />
          <Footer />
        </div>
        <FloatingActionButton />
      </main>
    </div>
  );
}

export default App;
