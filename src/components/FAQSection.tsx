import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'لماذا سمّيناه الكتاب؟',
    answer: 'لأنه في ترتيب المصحف الحالي يظهر الكتاب كأول اسم للقرآن الكريم، قال تعالى: ﴿ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ﴾',
    isVerse: true,
  },
  {
    question: 'هل التطبيق مجاني بالكامل؟',
    answer: 'نعم، تطبيق الكتاب مدعوم ليكون مجاني بالكامل لمدة عام ولا يحتوي على أي إعلانات تشتت انتباهك أثناء القراءة.',
  },
  {
    question: 'هل يدعم التطبيق العمل دون اتصال بالإنترنت؟',
    answer: 'نعم، يمكنك تحميل  التفاسير والمواد الصوتية مرة واحدة فقط ثم الاستماع إليها والقراءة في أي وقت دون الحاجة للاتصال بالإنترنت.',
  },
  {
    question: 'هل يتوفر التطبيق على أجهزة الآيباد؟',
    answer: 'نعم، التطبيق مصمم ليعمل بشكل مثالي على الآيفون والآيباد، ويدعم وضع النافذة وأحجام الشاشات الحرة على الآيباد.',
  },
  {
    question: 'كيف يمكنني تفعيل ميزة تتبع القراءة بالذكاء الاصطناعي؟',
    answer: 'يمكنك تفعيلها من خلال الضغط على أيقونة الميكروفون في واجهة القراءة، وسيقوم التطبيق بتتبع تلاوتك تلقائياً.',
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-zinc-50">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-zinc-900 mb-4">الأسئلة الشائعة</h2>
          <p className="text-zinc-600">كل ما تود معرفته عن تطبيق الكتاب</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-zinc-200 overflow-hidden"
            >
              <button
                className="w-full px-8 py-6 text-right flex items-center justify-between hover:bg-zinc-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-xl font-bold text-zinc-900">{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-zinc-400 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-6 text-zinc-600 text-lg leading-relaxed border-t border-zinc-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
