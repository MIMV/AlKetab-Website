import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const FeaturesSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { 
    once: true, 
    margin: "-100px 0px -100px 0px"
  });
  
  const title = 'مميزات تطبيق الكتاب';
  const description = 'كل ما تحتاجه لتجربة قرآنية أعمق، أسهل، وأقرب إليك… في تطبيق واحد مصمم بعناية.';
  
  const features = [
    {
      icon: <i className="hgi-stroke hgi-book-open-01 text-3xl"></i>,
      title: 'تجربة قراءة متكاملة',
      description: 'ثلاثة خيارات لعرض المصحف: مصحف المدينة، ومحاكاة الكتاب، ومصحف بخط كبير.',
    },
    {
      icon: <i className="hgi-stroke hgi-ai-book text-3xl"></i>,
      title: 'أدوات متقدمة للفهم',
      description: 'قراءة التفسير، إعراب الكلمات، اختلاف القراءات، والاستماع لنطق الكلمات.',
    },
    {
      icon: <i className="hgi-stroke hgi-ai-brain-01 text-3xl"></i>,
      title: 'تتبع بالذكاء الاصطناعي',
      description: 'تتبع القراءة الصوتية مع وضع اليد الحرة والتمرير التلقائي ومراجعة الحفظ.',
    },
    {
      icon: <i className="hgi-stroke hgi-audio-book-01 text-3xl"></i>,
      title: 'قدرات صوتية متطورة',
      description: 'الاستماع للقرآن بأصوات مجموعة من المقرئين مع إمكانية التحميل للعمل دون اتصال.',
    },
    {
      icon: <i className="hgi-stroke hgi-settings-01 text-3xl"></i>,
      title: 'تخصيص وتجربة شخصية',
      description: 'قائمة السور المفضلة، تزامن كامل بين أجهزتك، والوضع الليلي التلقائي.',
    },
    {
      icon: <i className="hgi-stroke hgi-search-01 text-3xl"></i>,
      title: 'بحث ذكي ودقيق',
      description: 'بحث سريع وشامل في القرآن الكريم يعتمد على محرك بحث الفانوس والبحث الصوتي.',
    },
  ];

  return (
    <section 
      ref={containerRef}
      id="features" 
      className="py-24 px-6 bg-zinc-50"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title}
          </motion.h2>
          <motion.p 
            className="text-xl text-zinc-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {description}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group bg-white p-8 rounded-2xl border border-zinc-200 text-right hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/30"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 shadow-sm group-hover:shadow-md">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4 group-hover:text-emerald-700 transition-colors">{feature.title}</h3>
              <p className="text-zinc-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
