import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const TestimonialsSection: React.FC = () => {
  const title = 'ماذا يقول مستخدمونا';
  
  const testimonials = [
    {
      id: 1,
      name: 'أحمد محمد',
      role: 'مستخدم دائم',
      content: 'تطبيق رائع جداً، واجهة مريحة للعين وتجربة قراءة لا مثيل لها. ميزة تتبع القراءة بالذكاء الاصطناعي مذهلة.',
      avatar: 'أ',
    },
    {
      id: 2,
      name: 'سارة خالد',
      role: 'حافظة للقرآن',
      content: 'يساعدني كثيراً في مراجعة حفظي من خلال ميزة إخفاء الآيات. التصميم عصري وبسيط.',
      avatar: 'س',
    },
    {
      id: 3,
      name: 'عبد الله عمر',
      role: 'طالب علم',
      content: 'أدوات فهم القرآن وتفسير الكلمات دقيقة جداً ومفيدة. جزاكم الله خيراً على هذا العمل.',
      avatar: 'ع',
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <section
      ref={containerRef}
      className="py-24 px-6 bg-white"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
            {title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white p-8 rounded-2xl border border-zinc-100 text-right relative shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full min-h-[320px]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              {/* Quote mark at top */}
              <div className="text-emerald-500/20 text-7xl font-serif leading-none mb-4">"‏</div>
              
              {/* Text centered vertically */}
              <div className="flex-1 flex items-center">
                <p className="text-zinc-700 text-lg leading-relaxed italic">
                  {testimonial.content}
                </p>
              </div>
              
              {/* Name at bottom */}
              <div className="flex items-center justify-end gap-4 mt-6 pt-4 border-t border-zinc-100">
                <div className="text-right">
                  <h4 className="font-bold text-zinc-900">{testimonial.name}</h4>
                  <p className="text-zinc-500 text-sm">{testimonial.role}</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-700 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md">
                  {testimonial.avatar}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
