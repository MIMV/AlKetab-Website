# Al-Kitab — تطبيق الكتاب

The marketing website for **Al-Kitab (الكتاب)**, an iOS Quran app that delivers a modern, distraction-free reading experience with deep study tools.

**Live site**: [quran.alketab.app](https://quran.alketab.app)
**App Store**: [Al-Kitab on the App Store](https://apps.apple.com/us/app/id543646326)

> تعرّف إلى الكتاب، تجربة قرآنية متقدمة تجمع بين سهولة الاستخدام وعمق المحتوى، في تصميم عصري خالٍ من المشتتات.

## About the app

Al-Kitab brings together everything a reader needs for a deeper, easier, and more personal engagement with the Quran — in a single, carefully designed app.

### Features

- **Complete reading experience** — three Mushaf views: Madinah Mushaf, book simulation, and large-print Mushaf.
- **Advanced study tools** — tafsir, word-by-word i'rāb (grammatical analysis), variant qira'āt, and word-level pronunciation playback.
- **AI-powered recitation tracking** — follow along with audio, hands-free mode, auto-scroll, and memorization review.
- **Rich audio** — recitations from a curated selection of reciters with offline download support.
- **Personalized experience** — favorite surahs, full sync across devices, automatic dark mode.
- **Smart search** — fast, comprehensive search powered by the Fānūs (الفانوس) search engine, plus voice search.
- **Ad-free, 100%.**

## About this repository

This repo contains the source for the marketing website only — the Al-Kitab iOS app itself is closed-source.

### Tech stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion + GSAP
- i18next (RTL/Arabic-first)
- Deployed to GitHub Pages at [quran.alketab.app](https://quran.alketab.app)

### Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to ./dist
npm run preview  # preview the production build
```

### Deployment

Pushes to `main` trigger [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds the site and publishes `dist/` to GitHub Pages. The custom domain is wired via [public/CNAME](public/CNAME).

## Contact

- Email: info@iPhoneIslam.com
- Twitter / X: [@iphoneislam](https://twitter.com/iphoneislam)
- Instagram: [@iphoneislam](https://instagram.com/iphoneislam)
