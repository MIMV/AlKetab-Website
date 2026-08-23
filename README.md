# Al-Kitab — تطبيق الكتاب

The marketing website for **Al-Kitab (الكتاب)**, an iOS Quran app with private, offline, on-device recitation correction.

The site is available in Arabic and English, with a persistent language switch and full RTL/LTR support.

**Live site**: [quran.alketab.app](https://quran.alketab.app)
**App Store**: [Al-Kitab on the App Store](https://apps.apple.com/us/app/id543646326)

> رتّل، والكتاب يصحّح لك — مجانًا، بلا إنترنت، وبخصوصية تامة.

## About the app

Al-Kitab listens as you recite, follows word by word, and helps you improve. The correction engine runs entirely on iPhone: no account, no upload, and no internet connection required.

### Features

- **On-device recitation correction** — word-level confirmation and review marks, with Off, Easy, Normal, and Strict levels.
- **Quran Teacher** — stops at a mistake, plays the correct word, and waits until the recitation is corrected.
- **Start anywhere** — detects the verse from recitation and follows continuously across surahs.
- **Memorization and review** — reveal-as-you-recite, whispered word hints, and listen-and-repeat practice.
- **Private and offline** — voice never leaves the device; no account or connection required.
- **Faster everyday tools** — improved search, tafsir, highlighting, sharing, and unified Surah/Juz browsing.

## About this repository

This repo contains the source for the marketing website only — the Al-Kitab iOS app itself is closed-source.

### Tech stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Arabic-first, RTL responsive design
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
