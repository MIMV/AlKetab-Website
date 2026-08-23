import React from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Bookmark,
  CircleDollarSign,
  BookOpenText,
  Check,
  Ear,
  Gauge,
  Headphones,
  Languages,
  ListMusic,
  Mic,
  Search,
  Share2,
  ShieldAlert,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Volume2,
  WifiOff,
} from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { ScreenshotsSection } from "./ScreenshotsSection";

export const FeaturesSection: React.FC = () => {
  const { isArabic } = useLanguage();

  const correctionLevels = isArabic ? [
    { label: "إيقاف", detail: "تلاوة بلا تصحيح", strength: 0 },
    { label: "سهل", detail: "تصحيح لطيف ومشجّع", strength: 28 },
    { label: "قياسي", detail: "الحركات والكلمات المتروكة", strength: 62, recommended: true },
    { label: "صارم", detail: "يضيف الشدة ومقادير المد", strength: 100 },
  ] : [
    { label: "Off", detail: "Recite without correction", strength: 0 },
    { label: "Easy", detail: "Gentle, encouraging correction", strength: 28 },
    { label: "Normal", detail: "Vowels and skipped words", strength: 62, recommended: true },
    { label: "Strict", detail: "Adds shadda and madd lengths", strength: 100 },
  ];

  const releaseUpdates = isArabic ? [
    { icon: Sparkles, title: "جولة أولى موجّهة", text: "تحدّد مستوى التصحيح وهدفك اليومي في نحو دقيقة." },
    { icon: Share2, title: "مشاركة نطاق من الآيات", text: "كصورة واحدة منسّقة أو فيديو تلاوة بصوت قارئك." },
    { icon: BookOpenText, title: "متصفح واحد للسور والأجزاء", text: "والتتبّع الآن من زر الميكروفون في الشريط السفلي." },
    { icon: Search, title: "أسرع بشكل ملحوظ", text: "بحث وتفسير وتظليل أسرع وأكثر سلاسة." },
  ] : [
    { icon: Sparkles, title: "A guided first-launch tour", text: "Set your correction level and daily goal in about a minute." },
    { icon: Share2, title: "Share a range of verses", text: "As one beautifully typeset image or a recitation video." },
    { icon: BookOpenText, title: "One Surah and Juz browser", text: "Tracking now lives on the microphone button in the footer." },
    { icon: Search, title: "Noticeably faster", text: "Faster search, tafsir, highlighting, and everyday navigation." },
  ];

  const completeAppFeatures = isArabic ? [
    {
      icon: BookOpenText,
      title: "ثلاثة مصاحف للقراءة",
      text: "مصحف المدينة، ومحاكاة الكتاب، والمصحف النصي الكبير، مع قراءة مريحة بملء الشاشة والوضع الأفقي.",
    },
    {
      icon: Languages,
      title: "تفسير ومعرفة كل كلمة",
      text: "التفسير، والمعنى، والإعراب، والصرف، واختلاف القراءات، والاستماع إلى نطق الكلمة.",
    },
    {
      icon: Headphones,
      title: "قراءك معك دون إنترنت",
      text: "استمع إلى القرآن بصوت مجموعة من القراء، وحمّل التلاوات لتبقى متاحة أينما كنت.",
    },
    {
      icon: Bookmark,
      title: "موضعك محفوظ دائمًا",
      text: "المفضلة، وآخر صفحة قرأتها، وسجل التنقل، مع مزامنة مواضعك وإشاراتك بين أجهزتك.",
    },
    {
      icon: Search,
      title: "بحث صُمّم للقرآن",
      text: "بحث سريع وشامل، ومحرك الفانوس المتقدم، وشريط الكلمات القرآنية، والبحث الصوتي الذكي.",
    },
    {
      icon: SlidersHorizontal,
      title: "قراءة تتكيّف معك",
      text: "الوضع الليلي، وحجم خط مرن، وألوان التجويد، وعلامات واضحة للأجزاء والآيات، ودعم كامل للـ iPad.",
    },
  ] : [
    {
      icon: BookOpenText,
      title: "Three ways to read",
      text: "Madinah Mushaf, book simulation, and large-text Mushaf, with comfortable full-screen and landscape reading.",
    },
    {
      icon: Languages,
      title: "Tafsir and every word in depth",
      text: "Tafsir, meaning, grammar, morphology, variant readings, and word-level pronunciation.",
    },
    {
      icon: Headphones,
      title: "Your reciters, even offline",
      text: "Listen to a wide selection of reciters and download recitations so they remain available anywhere.",
    },
    {
      icon: Bookmark,
      title: "Your place, always saved",
      text: "Favorites, last-read page, navigation history, and synchronized bookmarks across your devices.",
    },
    {
      icon: Search,
      title: "Search built for the Quran",
      text: "Fast comprehensive search, the advanced Al-Fanoos engine, Quran word bar, and smart voice search.",
    },
    {
      icon: SlidersHorizontal,
      title: "Reading that adapts to you",
      text: "Night mode, adjustable text, Tajweed colors, clear Juz and verse markers, and full iPad support.",
    },
  ];

  return (
    <>
      <aside className="privacy-warning" role="note" aria-label={isArabic ? "تنبيه مهم عن خصوصية الصوت" : "Important voice privacy notice"}>
        <span className="privacy-warning-icon"><ShieldAlert aria-hidden="true" /></span>
        <div>
          <strong>{isArabic ? "انتبه أين يُعالَج صوتك" : "Know where your voice is processed"}</strong>
          <p>{isArabic
            ? <>التطبيقات التي ترسل تلاوتك إلى السحابة لمعالجة الصوت يمكن أن <b>تستهلك باقة الإنترنت لديك بسرعة.</b> وليس هذا فقط؛ فقد تلتقط وترفع أكثر من صوتك وحده، بما في ذلك <b>أصوات المحيطين أو محادثات خاصة في الخلفية.</b> لذلك يعالج الكتاب تلاوتك بالكامل على جهازك، ولا يرفع صوتك إلى أي خادم.</>
            : <>Apps that send recitation audio to the cloud can <b>quickly consume your mobile data.</b> That is not the only risk: they may capture and upload more than your voice, including <b>people nearby or private conversations in the background.</b> Al-Kitab processes your recitation entirely on your device, so your audio is never uploaded to a server.</>}</p>
        </div>
      </aside>

      <section className="promise-strip" aria-label={isArabic ? "مزايا أساسية" : "Core benefits"}>
        <div><CircleDollarSign /><strong>{isArabic ? "وقف لله" : "Free"}</strong></div>
        <div><WifiOff /><strong>{isArabic ? "بلا إنترنت" : "Offline"}</strong></div>
        <div><ShieldCheck /><strong>{isArabic ? "خاص تمامًا" : "Completely private"}</strong></div>
      </section>

      <ScreenshotsSection />

      <section className="feature-section complete-app-section" id="complete-app">
        <div className="section-heading complete-app-heading">
          <p className="section-kicker">{isArabic ? "أكثر من تصحيح التلاوة" : "More than recitation correction"}</p>
          <h2>{isArabic ? <>تجربة قرآنية<br /><em>متكاملة.</em></> : <>A complete Quran<br /><em>experience.</em></>}</h2>
          <p>{isArabic
            ? "يضيف تصحيح التلاوة والمعلّم قدرات جديدة إلى تطبيق متكامل للقراءة والفهم والاستماع والبحث — وكل هذه الأدوات الأساسية ما زالت في قلب الكتاب."
            : "Recitation Correction and Quran Teacher add powerful new capabilities to a complete app for reading, understanding, listening, and searching — with every essential tool still at the heart of Al-Kitab."}</p>
        </div>
        <div className="complete-app-grid">
          {completeAppFeatures.map(({ icon: Icon, title, text }) => (
            <motion.article className="complete-app-card" whileHover={{ y: -5 }} key={title}>
              <span className="complete-app-icon"><Icon /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.article>
          ))}
        </div>
        <p className="complete-app-note"><ShieldCheck /> {isArabic ? "بدون إعلانات، وفي تصميم هادئ خالٍ من المشتتات." : "No ads, in a calm and distraction-free design."}</p>
      </section>

      <section className="feature-section correction-section" id="correction">
        <div className="section-heading">
          <p className="section-kicker"><span>01</span> {isArabic ? "تصحيح التلاوة" : "Recitation Correction"}</p>
          <h2>{isArabic ? <>عينٌ هادئة على<br /><em>كل كلمة.</em></> : <>A quiet eye on<br /><em>every word.</em></>}</h2>
          <p>{isArabic
            ? "يتابعك محرّك الكتاب لحظة بلحظة. تظهر علامة تحت كل كلمة لتعرف ما تمّ تأكيده وما يستحق أن تعود إليه، ثم يجمع سجل الجلسة كل ما يحتاج مراجعة."
            : "Al-Kitab follows you moment by moment. A mark appears under every word so you can see what was confirmed and what deserves another look, while the session log gathers everything worth revisiting."}</p>
        </div>
        <div className="correction-showcase">
          <div className="correction-verse-card">
            <div className="card-topline"><span>{isArabic ? "سورة الفاتحة · ١–٢" : "Al-Fatihah · 1–2"}</span><span className="listening-pill"><i /> {isArabic ? "يستمع إليك" : "Listening"}</span></div>
            <div className="correction-verse" aria-label={isArabic ? "مثال مرئي لتتبّع الكلمات" : "Visual word tracking example"}>
              <span className="confirmed">بِسْمِ<i><Check size={11} /></i></span>
              <span className="confirmed">ٱللَّهِ<i><Check size={11} /></i></span>
              <span className="confirmed">ٱلرَّحْمَٰنِ<i><Check size={11} /></i></span>
              <span className="active-word">ٱلرَّحِيمِ<i><Mic size={11} /></i></span>
              <span>ٱلْحَمْدُ<i /></span>
              <span>لِلَّهِ<i /></span>
              <span className="review-word">رَبِّ<i>{isArabic ? "حركة" : "Vowel"}</i></span>
              <span>ٱلْعَٰلَمِينَ<i /></span>
            </div>
            <div className="voice-line"><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /></div>
            <div className="session-log">
              <div><strong>{isArabic ? "سجل الجلسة" : "Session log"}</strong><span>{isArabic ? "كل ما يستحق المراجعة" : "Everything worth revisiting"}</span></div>
              <button type="button" aria-label={isArabic ? "استمع إلى الكلمة" : "Listen to the word"}><Volume2 size={16} /> رَبِّ</button>
            </div>
          </div>
          <div className="level-list">
            <div className="level-list-title"><Gauge size={18} /><span><strong>{isArabic ? "التصحيح على طريقتك" : "Correction your way"}</strong><small>{isArabic ? "غيّره في أي وقت" : "Change it any time"}</small></span></div>
            {correctionLevels.map((level) => (
              <div className={`correction-level ${level.recommended ? "is-recommended" : ""}`} key={level.label}>
                <span><strong>{level.label}</strong><small>{level.detail}</small></span>
                {level.recommended && <b>{isArabic ? "موصى به" : "Recommended"}</b>}
                <i><em style={{ width: `${level.strength}%` }} /></i>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="feature-section teacher-section" id="teacher">
        <div className="teacher-visual" aria-hidden="true">
          <div className="teacher-orbit"><span /><span /><span /></div>
          <div className="teacher-mic"><Mic size={42} strokeWidth={1.5} /></div>
          <div className="teacher-dialog expected"><small>{isArabic ? "المتوقّع" : "Expected"}</small><strong>ٱلرَّحْمَٰنِ</strong><i /></div>
          <div className="teacher-dialog heard"><small>{isArabic ? "ما سمعه" : "What it heard"}</small><strong>ٱلرَّحْمَنِ</strong><i>{isArabic ? "مد أقصر" : "Shorter madd"}</i></div>
        </div>
        <div className="section-heading teacher-copy">
          <p className="section-kicker"><span>02</span> {isArabic ? "معلّم القرآن" : "Quran Teacher"}</p>
          <h2>{isArabic ? <>لا يمرّ على<br /><em>الخطأ.</em></> : <>Nothing gets<br /><em>past it.</em></>}</h2>
          <p>{isArabic
            ? "يتوقّف عند الخطأ، ينطق الكلمة صحيحة، ثم ينتظر حتى تقولها كما ينبغي. لا يتعجّل، ولا ينتقل قبل أن تتقنها."
            : "It stops at a mistake, plays the word correctly, and waits until you say it right. Patient, always available, and never in a hurry."}</p>
          <ul className="feature-checks">
            <li><Check /> {isArabic ? "يلتقط الكلمة والحركة والشدة والمد" : "Catches the word, vowel, shadda, and madd"}</li>
            <li><Check /> {isArabic ? "يريك ما سمعه مقابل ما كان متوقّعًا" : "Shows what it heard against what was expected"}</li>
            <li><Check /> {isArabic ? "صبور، متاح دائمًا، وعلى جهازك" : "Patient, always available, and on your device"}</li>
          </ul>
        </div>
      </section>

      <section className="feature-section find-section">
        <div className="section-heading find-heading">
          <p className="section-kicker"><span>03</span> {isArabic ? "ابدأ من أي مكان" : "Start anywhere"}</p>
          <h2>{isArabic ? <>رتّل، والكتاب<br /><em>يعثر عليك.</em></> : <>Recite, and Al-Kitab<br /><em>finds you.</em></>}</h2>
          <p>{isArabic
            ? "ابدأ من أي آية في القرآن. يعرف الكتاب موضعك، يفتح الصفحة، ويواصل معك حتى من سورة إلى التي تليها دون لمسة واحدة."
            : "Begin from any verse in the Quran. Al-Kitab works out where you are, opens the page, and follows you from one Surah into the next without a tap."}</p>
        </div>
        <div className="find-grid">
          <motion.article whileHover={{ y: -5 }} className="find-card find-anywhere">
            <Search />
            <div className="quran-search-line"><span>وَقُل رَّبِّ زِدْنِي عِلْمًا</span><i /></div>
            <h3>{isArabic ? "ابدأ من أي آية" : "Start from any verse"}</h3>
            <p>{isArabic ? "يتعرّف تلقائيًا إلى موضعك ويتابع التلاوة." : "It identifies your place automatically and follows along."}</p>
          </motion.article>
          <motion.article whileHover={{ y: -5 }} className="find-card find-voice">
            <Mic />
            <div className="voice-search-wave">{[1,2,3,4,5,6,7,8,9].map((item) => <i key={item} />)}</div>
            <h3>{isArabic ? "اذهب بصوتك" : "Navigate with your voice"}</h3>
            <p>{isArabic ? "رتّل آية، فتفتح صفحتها. بلا أرقام ولا تمرير." : "Recite a verse and its page opens. No numbers or scrolling."}</p>
          </motion.article>
          <motion.article whileHover={{ y: -5 }} className="find-card find-continuous">
            <ArrowLeft />
            <div className="surah-flow"><span>{isArabic ? "الفاتحة" : "Al-Fatihah"}</span><i /><span>{isArabic ? "البقرة" : "Al-Baqarah"}</span><i /><span>{isArabic ? "آل عمران" : "Ali 'Imran"}</span></div>
            <h3>{isArabic ? "تلاوة بلا انقطاع" : "Continuous recitation"}</h3>
            <p>{isArabic ? "من سورة إلى أخرى دون أن تلمس الشاشة." : "Move from one Surah into the next without touching the screen."}</p>
          </motion.article>
        </div>
      </section>

      <section className="feature-section memorization-section" id="memorization">
        <div className="memorization-card review-card">
          <div className="memorization-icon"><Languages /></div>
          <p className="mini-kicker">{isArabic ? "وضع المراجعة" : "Review mode"}</p>
          <h3>{isArabic ? <>لا تظهر الكلمة<br />إلا حين ترتّلها.</> : <>Each word appears<br />only as you recite it.</>}</h3>
          <div className="hidden-verse" aria-label={isArabic ? "توضيح كشف الكلمات أثناء التلاوة" : "Reveal-as-you-recite example"}>
            <span className="is-shown">إِنَّ</span><span className="is-shown">مَعَ</span><span className="is-current">ٱلْعُسْرِ</span><span>يُسْرًا</span>
          </div>
        </div>
        <div className="memorization-copy section-heading">
          <p className="section-kicker"><span>04</span> {isArabic ? "الحفظ والمراجعة" : "Memorization & Review"}</p>
          <h2>{isArabic ? <>حين تتعثر،<br /><em>يهمس لك.</em></> : <>When you’re stuck,<br /><em>it whispers.</em></>}</h2>
          <p>{isArabic
            ? "إذا توقّفت عند كلمة، ينطقها لك الكتاب همسًا ثم يعيد الميكروفون مباشرة — من غير أن تكسر تلاوتك لتبحث عنها."
            : "If you get stuck on a word, Al-Kitab whispers it to you and hands the microphone straight back — without breaking your recitation."}</p>
          <div className="memorization-points">
            <div><Ear /><span><strong>{isArabic ? "تلميح لطيف" : "A gentle hint"}</strong><small>{isArabic ? "تسمع الكلمة ثم تكمل فورًا" : "Hear the word, then continue immediately"}</small></span></div>
            <div><ListMusic /><span><strong>{isArabic ? "استمع ثم ردّد" : "Listen and repeat"}</strong><small>{isArabic ? "الآية بصوت قارئك، ثم دورك" : "Hear your reciter, then take your turn"}</small></span></div>
          </div>
        </div>
      </section>

      <section className="privacy-section" id="privacy">
        <div className="privacy-lockup"><ShieldCheck /><span className="privacy-ring ring-a" /><span className="privacy-ring ring-b" /></div>
        <p className="section-kicker">{isArabic ? "خصوصية من أصل التصميم" : "Private by design"}</p>
        <h2>{isArabic ? <>ما تتلوه يبقى<br /><em>على جهازك.</em></> : <>What you recite stays<br /><em>on your device.</em></>}</h2>
        <p>{isArabic
          ? "لا يُرفع صوتك، ولا يُخزّن على خادم، ولا يسمعه أحد غيرك. محرّك التصحيح يعمل بالكامل على iPhone — لذلك يعمل حتى حين لا توجد إشارة."
          : "Your voice is never uploaded, never stored on a server, and never heard by anyone but you. The correction engine runs entirely on your iPhone — even when there is no signal."}</p>
        <div className="privacy-facts">
          <span><strong>0</strong><small>{isArabic ? "تسجيلات مرفوعة" : "recordings uploaded"}</small></span>
          <span><strong>0</strong><small>{isArabic ? "حسابات مطلوبة" : "accounts required"}</small></span>
          <span><strong>100%</strong><small>{isArabic ? "معالجة على الجهاز" : "on-device processing"}</small></span>
        </div>
      </section>

      <section className="release-section" id="new">
        <div className="section-heading release-heading">
          <p className="section-kicker"><span>05</span> {isArabic ? "وأيضًا في الإصدار الجديد" : "Also new in this release"}</p>
          <h2>{isArabic ? <>أسرع، أبسط،<br /><em>وأقرب إليك.</em></> : <>Faster, simpler,<br /><em>closer to you.</em></>}</h2>
        </div>
        <div className="release-grid">
          {releaseUpdates.map(({ icon: Icon, title, text }) => (
            <article key={title}><Icon /><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>
    </>
  );
};
