import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-white py-20 px-6 border-t border-zinc-900">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6 text-right">
            <div className="flex items-center gap-3 justify-start">
              <span className="text-3xl font-bold">الكتاب</span>
              <img src="/assets/AppIcon.png" alt="Logo" className="w-12 h-12 rounded-xl" />
            </div>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-md ml-auto">
              تطبيق الكتاب يجمع كل ما تحتاجه لتجربة قرآنية أعمق، أسهل، وأقرب إليك… في تطبيق واحد مصمم بعناية.
            </p>
          </div>

          <div className="text-right">
            <h4 className="text-xl font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">الرئيسية</a></li>
              <li><a href="#features" className="hover:text-emerald-500 transition-colors">المميزات</a></li>
              <li><a href="#screenshots" className="hover:text-emerald-500 transition-colors">لقطات الشاشة</a></li>
            </ul>
          </div>

          <div className="text-right">
            <h4 className="text-xl font-bold mb-6">تواصل معنا</h4>
            <ul className="space-y-4 text-zinc-400">
              <li>info@iPhoneIslam.com</li>
              <li>تويتر: @iphoneislam</li>
              <li>إنستغرام: @iphoneislam</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 text-center text-zinc-400">
          <p className="text-lg leading-relaxed">
            جزاك الله خيراً على استخدامك تطبيق <strong className="text-white">الكتاب</strong>، ونسأل الله عز وجل أن يجعل قراءتك فيه نوراً لقلبك، وبركة في وقتك، ورفيقاً لك في طريق طاعته، وأن يتقبل منا ومنك، وأن يجعل هذا العمل خالصاً لوجهه الكريم.
          </p>
        </div>
      </div>
    </footer>
  );
};
