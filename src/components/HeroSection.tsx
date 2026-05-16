import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Aurora from './Aurora';

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-zinc-950"
    >
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Aurora
          colorStops={["#1a472a", "#2d5a27", "#1a472a"]}
          blend={0.6}
          amplitude={1.2}
          speed={0.3}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          className="space-y-8 text-right"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="flex items-center gap-4 justify-start">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-emerald-500/30 blur-xl rounded-full group-hover:bg-emerald-500/50 transition-all duration-500" />
              <img
                src="/assets/AppIcon.png"
                alt="Al-Kitab Icon"
                className="w-20 h-20 rounded-2xl shadow-2xl relative z-10"
              />
            </motion.div>
            <h2 className="text-2xl font-bold text-emerald-400">تطبيق الكتاب</h2>
          </div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            تجربة قرآنية <span className="text-emerald-500">متقدمة</span> وعميقة
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-zinc-300 max-w-2xl ml-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            تعرّف إلى الكتاب، تجربة قرآنية متقدمة تجمع بين سهولة الاستخدام وعمق المحتوى، في تصميم عصري خالٍ من المشتتات.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-start items-center pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a
              href="https://apps.apple.com/us/app/id543646326"
              className="transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-emerald-500/20 rounded-xl"
            >
              <img
                src="/assets/AppStoreBadge.png"
                alt="Download on App Store"
                className="h-16"
              />
            </a>
          </motion.div>
        </motion.div>

        {/* Floating Mockup */}
        <motion.div
          className="relative flex justify-center lg:justify-start"
          initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
          animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="relative w-[300px] md:w-[350px] aspect-[9/19.5] bg-zinc-900 rounded-[3rem] p-3 shadow-[0_0_50px_rgba(16,185,129,0.3)] border-[8px] border-zinc-800 overflow-hidden">
            <motion.div
              className="w-full h-full rounded-[2.2rem] overflow-hidden"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src="/assets/ScreenShot-00001.jpeg"
                alt="App Screenshot"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-500/10 blur-3xl rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};
