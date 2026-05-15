import React from 'react';
import { motion } from 'framer-motion';

export const CTASection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-emerald-600 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            ابدأ رحلتك مع القرآن اليوم
          </h2>
          <p className="text-xl md:text-2xl text-emerald-50 text-emerald-100 max-w-2xl mx-auto leading-relaxed">
            حمل تطبيق الكتاب الآن واستمتع بتجربة قرآنية فريدة ومبتكرة على جهازك الآيفون أو الآيباد.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <a
              href="https://apps.apple.com/us/app/id543646326"
              className="transition-transform hover:scale-105 active:scale-95"
            >
              <img
                src="/assets/AppStoreBadge.png"
                alt="Download on App Store"
                className="h-20"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
