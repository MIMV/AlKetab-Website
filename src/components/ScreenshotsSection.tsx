import { useRef } from "react";
import { ArrowLeft, ArrowRight, MoveHorizontal } from "lucide-react";
import { useLanguage } from "../LanguageContext";

const screenshotNumbers = Array.from({ length: 10 }, (_, index) =>
  String(index + 1).padStart(2, "0"),
);
const arabicScreenshotNumbers = [
  screenshotNumbers[1],
  screenshotNumbers[0],
  ...screenshotNumbers.slice(2),
];

export function ScreenshotsSection() {
  const { isArabic } = useLanguage();
  const railRef = useRef<HTMLDivElement>(null);

  const scrollRail = (direction: "previous" | "next") => {
    const rail = railRef.current;

    if (!rail) return;

    const logicalDirection = direction === "next" ? 1 : -1;
    const languageDirection = isArabic ? -1 : 1;

    rail.scrollBy({
      left: logicalDirection * languageDirection * rail.clientWidth * 0.72,
      behavior: "smooth",
    });
  };

  const copy = isArabic
    ? {
        kicker: "داخل التطبيق",
        title: "لقطات من الكتاب",
        description:
          "تعرّف على التصحيح، والمعلّم، والمراجعة، والبحث — اسحب لترى المزيد.",
        count: "١٠ لقطات",
        hint: "اسحب أفقياً لاستكشاف اللقطات",
        previous: "اللقطات السابقة",
        next: "اللقطات التالية",
        gallery: "لقطات تطبيق الكتاب",
        imageAlt: (number: string) => `لقطة ${number} من تطبيق الكتاب`,
      }
    : {
        kicker: "Inside the app",
        title: "See Al-Ketab in action",
        description:
          "Explore correction, Quran Teacher, review, and search — swipe to see more.",
        count: "10 screenshots",
        hint: "Swipe horizontally to explore",
        previous: "Previous screenshots",
        next: "Next screenshots",
        gallery: "Al-Ketab app screenshots",
        imageAlt: (number: string) => `Al-Ketab app screenshot ${number}`,
      };

  return (
    <section className="screenshots-section" id="screenshots">
      <div className="screenshots-header">
        <div>
          <p className="section-kicker">{copy.kicker}</p>
          <h2>{copy.title}</h2>
          <p className="screenshots-description">{copy.description}</p>
        </div>

        <div className="screenshots-actions">
          <span className="screenshots-count">{copy.count}</span>
          <div className="screenshots-buttons">
            <button
              type="button"
              className="screenshot-scroll-button"
              onClick={() => scrollRail("previous")}
              aria-label={copy.previous}
            >
              {isArabic ? <ArrowRight size={19} /> : <ArrowLeft size={19} />}
            </button>
            <button
              type="button"
              className="screenshot-scroll-button"
              onClick={() => scrollRail("next")}
              aria-label={copy.next}
            >
              {isArabic ? <ArrowLeft size={19} /> : <ArrowRight size={19} />}
            </button>
          </div>
        </div>
      </div>

      <div
        key={isArabic ? "ar" : "en"}
        ref={railRef}
        className="screenshots-rail"
        dir={isArabic ? "rtl" : "ltr"}
        role="region"
        aria-label={copy.gallery}
        tabIndex={0}
      >
        {(isArabic ? arabicScreenshotNumbers : screenshotNumbers).map((number) => (
          <figure className="screenshot-card" key={number}>
            <picture>
              <source
                srcSet={`/assets/${isArabic ? "ar" : "en"}/${number}.webp`}
                type="image/webp"
              />
              <img
                src={`/assets/${isArabic ? "ar" : "en"}/${number}.png`}
                alt={copy.imageAlt(number)}
                width="660"
                height="1434"
                loading="lazy"
                decoding="async"
                draggable="false"
              />
            </picture>
          </figure>
        ))}
      </div>

      <p className="screenshots-hint">
        <MoveHorizontal size={17} aria-hidden="true" />
        <span>{copy.hint}</span>
      </p>
    </section>
  );
}
