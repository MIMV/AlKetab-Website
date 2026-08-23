import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { isArabic } = useLanguage();

  const faqs = isArabic ? [
    { question: "هل يستخدم الكتاب الذكاء الاصطناعي لتصحيح تلاوة القرآن؟", answer: "نعم. يتابع محرّك التصحيح تلاوتك كلمة بكلمة على جهازك، ويكشف الكلمات الخاطئة أو المتروكة، ويمكنه أيضًا مراجعة الحركات والشدة ومقادير المد بحسب المستوى الذي تختاره." },
    { question: "هل تصحيح التلاوة مجاني؟", answer: "نعم. محرّك تصحيح التلاوة في الإصدار الجديد مجاني، ولا يحتاج إلى حساب أو اشتراك." },
    { question: "هل يُرسل التطبيق صوتي إلى الإنترنت؟", answer: "لا. الاستماع والتحليل والتصحيح تتم بالكامل على جهاز iPhone. لا يُرفع صوتك ولا يُخزّن على أي خادم." },
    { question: "هل يعمل التصحيح دون اتصال بالإنترنت؟", answer: "نعم. لأنه يعمل على جهازك، يمكنك استخدامه في المسجد، على الطائرة، أو في أي مكان لا توجد فيه إشارة." },
    { question: "ما الفرق بين مستويات التصحيح؟", answer: "يمكنك إيقاف التصحيح، أو اختيار السهل للمقاطعة الأقل، أو القياسي لمراجعة الحركات والكلمات المتروكة، أو الصارم الذي يضيف الشدة ومقادير المد." },
    { question: "ما وضع معلّم القرآن؟", answer: "هو وضع تدريبي لا يتجاوز الخطأ: يتوقّف، ينطق الكلمة صحيحة، ثم ينتظر حتى تقولها كما ينبغي قبل أن يواصل." },
    { question: "كيف يساعدني الكتاب في حفظ القرآن ومراجعته؟", answer: "يخفي وضع المراجعة الآيات ويكشف الكلمات مع تلاوتك، ويهمس بالكلمة إذا تعثّرت، بينما يشغّل وضع الاستماع والترديد كل آية بصوت قارئك ثم يستمع إليك." },
    { question: "هل الكتاب مخصص لتصحيح التلاوة فقط؟", answer: "لا. الكتاب تطبيق قرآن متكامل يضم ثلاثة خيارات للمصحف، والتفسير ودراسة الكلمات، وقراء يعملون دون إنترنت، والبحث المتقدم، والإشارات المرجعية والمزامنة بين أجهزتك." },
    { question: "هل يمكنني البدء من أي آية؟", answer: "نعم. ابدأ التلاوة من أي مكان، وسيعرف التطبيق موضعك ويتابع معك. ويمكنك أيضًا فتح صفحة آية بمجرد تلاوتها." },
  ] : [
    { question: "Does Al-Ketab use AI to correct Quran recitation?", answer: "Yes. Its on-device correction engine follows Quran recitation word by word, detects wrong or skipped words, and can check vowel marks, shadda, and madd lengths according to your chosen level." },
    { question: "Is recitation correction free?", answer: "Yes. The new recitation correction engine is free and requires no account or subscription." },
    { question: "Does the app send my voice to the internet?", answer: "No. Listening, analysis, and correction all happen on your iPhone. Your voice is never uploaded or stored on a server." },
    { question: "Does correction work without an internet connection?", answer: "Yes. Because it runs on your device, it works in the masjid, on a plane, or anywhere without a signal." },
    { question: "What is the difference between correction levels?", answer: "Choose Off, Easy for fewer interruptions, Normal for vowel marks and skipped words, or Strict to add shadda and madd lengths." },
    { question: "What is Quran Teacher mode?", answer: "It is a training mode that lets nothing pass: it stops, plays the correct word, and waits until you say it properly before moving on." },
    { question: "How does Al-Ketab help with Quran memorization and review?", answer: "Review mode hides verses and reveals words as you recite, whispers a word when you get stuck, and Listen and Repeat plays each verse in your chosen reciter's voice before listening to you." },
    { question: "Is Al-Ketab only a Quran recitation correction app?", answer: "No. Al-Ketab is a complete Quran app with three Mushaf views, tafsir and word study, offline reciters, advanced search, bookmarks, and synchronization across your devices." },
    { question: "Can I begin from any verse?", answer: "Yes. Start reciting anywhere and the app will find your place and follow along. You can also open a verse simply by reciting it." },
  ];

  return (
    <section className="faq-section" id="faq">
      <div className="section-heading faq-heading">
        <p className="section-kicker">{isArabic ? "الأسئلة الشائعة" : "Frequently asked questions"}</p>
        <h2>{isArabic ? <>قبل أن<br /><em>تبدأ.</em></> : <>Before you<br /><em>begin.</em></>}</h2>
      </div>
      <div className="faq-list">
        {faqs.map((faq, index) => {
          const open = openIndex === index;
          return (
            <article className={open ? "is-open" : ""} key={faq.question}>
              <button type="button" aria-expanded={open} onClick={() => setOpenIndex(open ? null : index)}>
                <span>{faq.question}</span><ChevronDown />
              </button>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </article>
          );
        })}
      </div>
    </section>
  );
};
