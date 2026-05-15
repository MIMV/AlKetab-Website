# YOUWARE.md - Al-Kitab Landing Page

This project is a professional landing page for the "Al-Kitab" iOS app, a modern Quran application.

## Project Details

- **App Name**: Al-Kitab (الكتاب)
- **Target Platform**: iOS (iPhone & iPad)
- **App Store Link**: `https://apps.apple.com/us/app/id543646326`
- **Language**: Arabic (RTL)
- **Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, HugeIcons.

## Key Features Implemented

1. **RTL Support**: The entire application is configured for Right-to-Left (RTL) support using `dir="rtl"` and Arabic language settings.
2. **Hero Section**: Features a floating 3D-like device mockup with a high-resolution screenshot and an animated "Aurora" background effect for a modern, spiritual aesthetic.
3. **Stats Counter**: A live-updating counter showing active users and app ratings.
4. **Features Grid**: A comprehensive grid of app features with custom HugeIcons and detailed Arabic descriptions.
5. **Screenshots Carousel**: A horizontal, infinitely scrolling carousel showcasing the app's user interface. The infinite scroll is implemented using Framer Motion, moving by exactly one set's width (3648px for 12 images) to ensure a seamless loop.
6. **Testimonials**: User reviews with Arabic names and avatars.
7. **FAQ Section**: Interactive accordion for frequently asked questions.
8. **App Store Integration**: Official Arabic App Store badges for downloading the app.

## Development Commands

- **Build project**: `npm run build`
- **Preview**: `npm run preview`

## Dependency Management

- **Vite & Plugins**: Moved to `dependencies` to ensure build tools are available in all environments (fixing `vite: not found` issues).

## Directory Structure

- `public/assets/`: Contains app icon, screenshots, and store badges.
- `src/components/`:
  - `Aurora.tsx`: WebGL-based background effect.
  - `HeroSection.tsx`: Main hero area with mockup.
  - `StatsCounter.tsx`: Live stats display.
  - `ScreenshotsCarousel.tsx`: Infinite scroll screenshots.
  - `FeaturesSection.tsx`: Feature highlights.
  - `TestimonialsSection.tsx`: User reviews.
  - `FAQSection.tsx`: Accordion FAQs.
  - `CTASection.tsx`: Call to action area.
  - `Header.tsx` & `Footer.tsx`: Navigation and site info.

## Special Instructions

- **Asset Paths**: Always use absolute paths starting with `/assets/` for images.
- **Typography**: The app uses standard sans-serif fonts optimized for Arabic readability.
- **Animations**: Framer Motion is used for most transitions; `ogl` is used for the Aurora background effect.
