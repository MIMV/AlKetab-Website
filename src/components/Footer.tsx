import React from "react";
import { useLanguage } from "../LanguageContext";

export const Footer: React.FC = () => {
  const { isArabic } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <a className="footer-brand" href="#top"><img src="/assets/AppIcon.png" alt="" /><span><strong>{isArabic ? "الكتاب" : "Al-Kitab"}</strong><small>{isArabic ? "رفيقك مع القرآن، كل يوم" : "Your Quran companion, every day"}</small></span></a>
        <nav aria-label={isArabic ? "روابط التذييل" : "Footer links"}><a href="#complete-app">{isArabic ? "كل المزايا" : "All features"}</a><a href="#correction">{isArabic ? "تصحيح التلاوة" : "Recitation Correction"}</a><a href="#teacher">{isArabic ? "المعلّم" : "Quran Teacher"}</a><a href="#memorization">{isArabic ? "الحفظ" : "Memorization"}</a><a href="#faq">{isArabic ? "الأسئلة" : "FAQ"}</a></nav>
        <div className="footer-contact"><a href="mailto:info@iPhoneIslam.com">info@iPhoneIslam.com</a><a href="https://iphoneislam.com/privacy-policy" target="_blank" rel="noreferrer">{isArabic ? "سياسة الخصوصية" : "Privacy Policy"}</a><a href="https://iphoneislam.com/terms" target="_blank" rel="noreferrer">{isArabic ? "شروط الاستخدام" : "Terms of Use"}</a><a href="https://iphoneislam.com/contactus" target="_blank" rel="noreferrer">{isArabic ? "الدعم" : "Support"}</a></div>
      </div>
      <div className="footer-prayer">
        <div className="footer-prayer-copy">
          <p className="footer-waqf-note">{isArabic ? "هذا عمل غير ربحي، جُعل وقفًا لله تعالى؛ نبتغي به مرضاته ونفع الناس." : "Please note that this is a nonprofit work, dedicated as a waqf for Allah Almighty, seeking His pleasure through the benefit it provides to people."}</p>
          <p>{isArabic ? "نسأل الله أن يتقبّل منّا ومنكم، وأن يجعل القرآن نورًا لقلوبنا وبركةً في أوقاتنا." : "May Allah accept from you and from us, and make the Quran a light for our hearts and a blessing in our time."}</p>
        </div>
        <span>© {new Date().getFullYear()} iPhoneIslam</span>
      </div>
    </footer>
  );
};
