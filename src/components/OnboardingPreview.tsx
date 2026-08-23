import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  CloudOff,
  Headphones,
  LockKeyhole,
  Mic,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Volume2,
} from "lucide-react";
import { useLanguage } from "../LanguageContext";

const APP_STORE_URL = "https://apps.apple.com/us/app/id543646326";

const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
const formatNumber = (value: number, isArabic: boolean) =>
  isArabic ? String(value)
    .split("")
    .map((digit) => arabicNumbers[Number(digit)] ?? digit)
    .join("") : String(value);

const demoWords = ["بِسْمِ", "ٱللَّهِ", "ٱلرَّحْمَٰنِ", "ٱلرَّحِيمِ", "ٱلْحَمْدُ", "لِلَّهِ", "رَبِّ", "ٱلْعَٰلَمِينَ"];

export const OnboardingPreview: React.FC = () => {
  const { isArabic } = useLanguage();
  const [step, setStep] = useState(0);
  const [selectedGoals, setSelectedGoals] = useState<number[]>([0, 1]);
  const [level, setLevel] = useState("normal");
  const [target, setTarget] = useState(15);
  const [demoIndex, setDemoIndex] = useState(-1);
  const [demoRun, setDemoRun] = useState(0);

  const goals = isArabic
    ? ["تحسين تلاوتي", "ملاحظة الأخطاء وتصحيحها", "تدريب التجويد", "مراجعة حفظي", "بناء عادة قرآنية يومية"]
    : ["Improve my recitation", "Catch and correct mistakes", "Practice tajweed", "Review my memorization", "Build a daily Quran habit"];

  const correctionLevels = isArabic ? [
    { id: "easy", label: "سهل", note: "تصحيح لطيف ومشجّع" },
    { id: "normal", label: "قياسي", note: "متوازن للتلاوة اليومية", badge: "موصى به" },
    { id: "strict", label: "صارم", note: "يشمل الشدة والمدود", badge: "تجويد" },
  ] : [
    { id: "easy", label: "Easy", note: "Gentle and encouraging correction" },
    { id: "normal", label: "Normal", note: "Balanced for daily recitation", badge: "Recommended" },
    { id: "strict", label: "Strict", note: "Includes shadda and madd", badge: "Tajweed" },
  ];

  const detectorLabels = isArabic ? ["الكلمة", "الحركة", "المتروك", "الشدة", "المد"] : ["Word", "Vowel", "Skipped", "Shadda", "Madd"];
  const targetOptions = isArabic
    ? [{ value: 15, note: "بداية لطيفة" }, { value: 30, note: "تقدّم ثابت" }, { value: 60, note: "ممارسة مخصّصة" }]
    : [{ value: 15, note: "A gentle start" }, { value: 30, note: "Steady progress" }, { value: 60, note: "Dedicated practice" }];

  useEffect(() => {
    if (step !== 5) {
      setDemoIndex(-1);
      return;
    }

    setDemoIndex(0);
    const timer = window.setInterval(() => {
      setDemoIndex((current) => {
        if (current >= demoWords.length + 1) {
          window.clearInterval(timer);
          return current;
        }
        return current + 1;
      });
    }, 520);

    return () => window.clearInterval(timer);
  }, [step, demoRun]);

  const selectedLevel = correctionLevels.find((item) => item.id === level) ?? correctionLevels[1];

  const next = () => setStep((current) => Math.min(current + 1, 5));
  const back = () => setStep((current) => Math.max(current - 1, 0));
  const restartDemo = () => setDemoRun((current) => current + 1);

  const screenContent = () => {
    if (step === 0) {
      return (
        <div className="onboarding-welcome">
          <div className="onboarding-orbit" aria-hidden="true">
            <span className="orbit-ring orbit-ring-one" />
            <span className="orbit-ring orbit-ring-two" />
            <span className="orbit-dot" />
            <div className="onboarding-app-mark">
              <img src="/assets/AppIcon.png" alt="" />
            </div>
          </div>
          <p className="onboarding-brand">{isArabic ? "الكتاب" : "Al-Ketab"}</p>
          <p className="onboarding-eyebrow">{isArabic ? "تطبيق قرآن متطور من آي-فون إسلام" : "An advanced Quran app by iPhoneIslam"}</p>
          <h2>{isArabic ? <>رفيقك مع القرآن،<br />كل يوم</> : <>Your Quran companion,<br />every day</>}</h2>
          <p className="onboarding-copy">{isArabic ? "اقرأ بثقة، وتحسّن بلطف، وابنِ عادة قرآنية تناسب حياتك." : "Recite with confidence, improve gently, and build a Quran habit that fits your life."}</p>
          <div className="onboarding-bottom">
            <button className="onboarding-primary" type="button" onClick={next}>{isArabic ? "لنبدأ" : "Let’s begin"}</button>
            <small>{isArabic ? "خمس خطوات قصيرة · أقل من دقيقة" : "Five short steps · less than a minute"}</small>
          </div>
        </div>
      );
    }

    if (step === 1) {
      return (
        <div className="onboarding-panel">
          <p className="onboarding-kicker">{isArabic ? "أهدافك" : "Your goals"}</p>
          <h2>{isArabic ? <>بماذا تحب أن يساعدك <em>الكتاب</em>؟</> : <>How would you like <em>Al-Ketab</em> to help?</>}</h2>
          <p className="onboarding-copy align-start">{isArabic ? "اختر ما تشاء — يمكنك تعديل ذلك لاحقًا." : "Choose as many as you like — you can change these later."}</p>
          <div className="onboarding-options onboarding-goals">
            {goals.map((goal, index) => {
              const selected = selectedGoals.includes(index);
              return (
                <button
                  className={`onboarding-option ${selected ? "is-selected" : ""}`}
                  key={goal}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setSelectedGoals((current) =>
                    current.includes(index) ? current.filter((item) => item !== index) : [...current, index]
                  )}
                >
                  <span className="option-check">{selected && <Check size={13} strokeWidth={3} />}</span>
                  <span>{goal}</span>
                </button>
              );
            })}
          </div>
          <p className="onboarding-note"><Sparkles size={14} /> {isArabic ? "سنخصّص التجربة بناءً على اختياراتك." : "We’ll personalize the experience around your choices."}</p>
          <button className="onboarding-primary" type="button" onClick={next}>{isArabic ? "متابعة" : "Continue"}</button>
        </div>
      );
    }

    if (step === 2) {
      return (
        <div className="onboarding-panel">
          <p className="onboarding-kicker">{isArabic ? "مستوى التصحيح" : "Correction level"}</p>
          <h2>{isArabic ? <>كيف تحب أن يصحّح لك <em>الكتاب</em>؟</> : <>How should <em>Al-Ketab</em> correct you?</>}</h2>
          <div className="recitation-sample" aria-label={isArabic ? "مثال على تصحيح التلاوة" : "Recitation correction example"}>
            <div className="sample-meta"><span>{isArabic ? "مثال · سورة الفاتحة" : "Example · Al-Fatihah"}</span><span className="live-status"><span /> {isArabic ? "يستمع" : "Listening"}</span></div>
            <div className="sample-words">
              <span>ٱلرَّحْمَٰنِ<i /></span><span>ٱلرَّحِيمِ<i /></span><span className="word-alert">مَٰلِكِ<i /></span><span>يَوْمِ<i /></span><span>ٱلدِّينِ<i /></span>
            </div>
            <div className="detector-bars" aria-hidden="true">
              {detectorLabels.map((item, index) => {
                const activeCount = level === "easy" ? 1 : level === "normal" ? 3 : 5;
                return <span key={item} className={index < activeCount ? "is-on" : ""}><b>{item}</b><i /></span>;
              })}
            </div>
          </div>
          <div className="onboarding-options level-options">
            {correctionLevels.map((item) => (
              <button
                className={`onboarding-option level-option ${level === item.id ? "is-selected" : ""}`}
                key={item.id}
                type="button"
                aria-pressed={level === item.id}
                onClick={() => setLevel(item.id)}
              >
                <span className="option-radio" />
                <span><strong>{item.label}</strong><small>{item.note}</small></span>
                {item.badge && <b className="option-badge">{item.badge}</b>}
              </button>
            ))}
          </div>
          <button className="onboarding-primary" type="button" onClick={next}>{isArabic ? "متابعة" : "Continue"}</button>
        </div>
      );
    }

    if (step === 3) {
      return (
        <div className="onboarding-panel">
          <p className="onboarding-kicker">{isArabic ? "هدفك اليومي" : "Your daily goal"}</p>
          <h2>{isArabic ? "كم من الوقت تحب أن تمضي مع القرآن كل يوم؟" : "How much time would you like to spend with the Quran each day?"}</h2>
          <div className="target-ring" style={{ "--target-progress": `${target * 6}deg` } as React.CSSProperties}>
            <div><strong>{formatNumber(target, isArabic)}</strong><span>{isArabic ? "دقيقة يوميًا" : "minutes daily"}</span></div>
          </div>
          <div className="onboarding-options target-options">
            {targetOptions.map((item) => (
              <button
                className={`onboarding-option ${target === item.value ? "is-selected" : ""}`}
                key={item.value}
                type="button"
                aria-pressed={target === item.value}
                onClick={() => setTarget(item.value)}
              >
                <span className="option-radio" />
                <strong>{formatNumber(item.value, isArabic)} {isArabic ? "دقيقة" : "minutes"}</strong>
                <small>{item.note}</small>
              </button>
            ))}
          </div>
          <button className="onboarding-primary" type="button" onClick={next}>{isArabic ? "حدّد هدفي" : "Set my goal"}</button>
        </div>
      );
    }

    if (step === 4) {
      return (
        <div className="onboarding-panel privacy-panel">
          <p className="onboarding-kicker">{isArabic ? "على جهازك" : "On your device"}</p>
          <div className="privacy-visual" aria-hidden="true">
            <span className="privacy-halo" />
            <ShieldCheck size={58} strokeWidth={1.4} />
            <div className="privacy-wave">{[1, 2, 3, 4, 5, 6, 7].map((bar) => <i key={bar} />)}</div>
          </div>
          <h2>{isArabic ? <>اقرأ بحرية.<br />صوتك يبقى خاصًا.</> : <>Recite freely.<br />Your voice stays private.</>}</h2>
          <p className="onboarding-copy align-start">{isArabic ? "يستمع الكتاب أثناء تلاوتك ويتابع كلماتك — وكل المعالجة تتم على جهازك." : "Al-Ketab listens and follows your words — with every part of the processing performed on your device."}</p>
          <div className="privacy-benefits">
            <div><LockKeyhole size={18} /><span><strong>{isArabic ? "خصوصية تامة" : "Completely private"}</strong><small>{isArabic ? "لا حساب، ولا تسجيلات على خادم." : "No account and no server recordings."}</small></span></div>
            <div><CloudOff size={18} /><span><strong>{isArabic ? "يعمل بلا إنترنت" : "Works offline"}</strong><small>{isArabic ? "في المسجد، الطائرة، وفي أي مكان." : "In the masjid, on a plane, anywhere."}</small></span></div>
            <div><Headphones size={18} /><span><strong>{isArabic ? "صوتك لك وحدك" : "Your voice is yours"}</strong><small>{isArabic ? "لا يُرفع ولا يُشارك مع أحد." : "Never uploaded or shared with anyone."}</small></span></div>
          </div>
          <button className="onboarding-primary" type="button" onClick={next}>{isArabic ? "متابعة بخصوصية" : "Continue privately"}</button>
        </div>
      );
    }

    const demoDone = demoIndex >= demoWords.length + 1;
    return (
      <div className="onboarding-panel demo-panel">
        <p className="onboarding-kicker">{isArabic ? "متابعة حية للكلمات" : "Live word tracking"}</p>
        <h2>{isArabic ? <>شاهد <em>الكتاب</em> يتابعك كلمة بكلمة</> : <>Watch <em>Al-Ketab</em> follow you word by word</>}</h2>
        <p className="onboarding-copy align-start">{isArabic ? "عرض توضيحي — لا حاجة إلى الميكروفون الآن." : "A quick demonstration — no microphone needed."}</p>
        <div className="live-demo-card">
          <div className="sample-meta"><span>{isArabic ? "سورة الفاتحة · ١–٢" : "Al-Fatihah · 1–2"}</span><span className="live-status"><span /> {demoDone ? (isArabic ? "تم" : "Done") : (isArabic ? "يستمع" : "Listening")}</span></div>
          <div className="demo-words">
            {demoWords.map((word, index) => (
              <span
                key={word}
                className={index === 6 && demoIndex === 7 ? "is-alert" : index < demoIndex ? "is-done" : index === demoIndex ? "is-current" : ""}
              >{word}<i /></span>
            ))}
          </div>
          <div className="demo-wave" aria-hidden="true">{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((bar) => <i key={bar} />)}</div>
        </div>
        <div className={`demo-result ${demoDone ? "is-complete" : ""}`}>
          <div>
            <span>{demoDone ? (isArabic ? "أحسنت — اكتملت المتابعة" : "Well done — tracking complete") : (isArabic ? "يتابع الكتاب تلاوتك" : "Al-Ketab is following your recitation")}</span>
            <strong>{formatNumber(Math.min(Math.max(demoIndex, 0), 8), isArabic)} / {isArabic ? "٨" : "8"}</strong>
          </div>
          <i><b style={{ width: `${Math.min(Math.max(demoIndex, 0), 8) * 12.5}%` }} /></i>
          {demoDone && <button type="button" onClick={restartDemo}><RotateCcw size={13} /> {isArabic ? "إعادة" : "Replay"}</button>}
        </div>
        <div className="demo-summary">
          <span><strong>{selectedLevel.label}</strong><small>{isArabic ? "مستوى التصحيح" : "Correction level"}</small></span>
          <span><strong>{formatNumber(target, isArabic)} {isArabic ? "د" : "min"}</strong><small>{isArabic ? "هدفك اليومي" : "Daily goal"}</small></span>
        </div>
        <a className="onboarding-primary onboarding-download" href={APP_STORE_URL} target="_blank" rel="noreferrer">
          {isArabic ? "حمّل التطبيق" : "Download the app"} {isArabic ? <ArrowLeft size={17} /> : <ArrowRight size={17} />}
        </a>
      </div>
    );
  };

  return (
    <div className="onboarding-shell" dir={isArabic ? "rtl" : "ltr"}>
      <div className="phone-top" aria-hidden="true"><span /></div>
      <div className="onboarding-phone">
        <div className="onboarding-grid" aria-hidden="true" />
        {step > 0 && (
          <div className="onboarding-progress">
            <button type="button" onClick={back} aria-label={isArabic ? "الخطوة السابقة" : "Previous step"}>{isArabic ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}</button>
            <div>{[0, 1, 2, 3, 4, 5].map((item) => <i className={item <= step ? "is-complete" : ""} key={item} />)}</div>
            <span>{formatNumber(step + 1, isArabic)} / {isArabic ? "٦" : "6"}</span>
          </div>
        )}
        {screenContent()}
      </div>
      <div className="phone-home" aria-hidden="true" />
      <span className="phone-button phone-button-left" aria-hidden="true" />
      <span className="phone-button phone-button-right" aria-hidden="true" />
      <div className="onboarding-hint"><Mic size={14} /> {isArabic ? "جرّب الجولة التعريفية" : "Try the interactive tour"}</div>
      <Volume2 className="phone-sound" size={16} aria-hidden="true" />
    </div>
  );
};
