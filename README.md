# Portfolio Website Here https://portfolio-website-olive-theta-49.vercel.app

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS with **beautiful animations and interactive components**.

## ✨ Recent Enhancements

This portfolio has been enhanced with:
- **6 new animated components** (FloatingOrbs, GradientText, AnimatedSection, etc.)
- **Scroll-triggered animations** throughout all sections
- **Interactive hover effects** on all interactive elements
- **Floating gradient background orbs** for visual depth
- **Enhanced form styling** with smooth focus animations
- **Professional animations** using GSAP and ScrollTrigger

## 📚 Documentation

For complete information about the enhancements, see:

- **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)** - Start here! Quick overview and tips
- **[IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md)** - Full summary of what was built
- **[COMPONENTS.md](COMPONENTS.md)** - Detailed component documentation
- **[CUSTOMIZATION.md](CUSTOMIZATION.md)** - How to customize colors, speeds, and effects
- **[ANIMATION_SNIPPETS.md](ANIMATION_SNIPPETS.md)** - Code examples and patterns
- **[ENHANCEMENTS.md](ENHANCEMENTS.md)** - Feature overview
- **[FILE_REFERENCE.md](FILE_REFERENCE.md)** - Architecture and structure
- **[CHECKLIST.md](CHECKLIST.md)** - Implementation status

## Features

- ✨ Responsive design that works on all devices
- ✨ Smooth scrolling navigation with Lenis
- ✨ Dynamic project showcase with scroll-based animations
- ✨ Contact form with form validation
- ✨ **Animated background with floating gradient orbs**
- ✨ **Scroll-triggered section animations**
- ✨ **Interactive hover effects throughout**
- ✨ **Gradient text for emphasis**
- ✨ **Professional glassmorphism effects**
- ✨ **Smooth color transitions everywhere**
- Real-time local time display (Asia/Kolkata timezone)
- Smooth scroll-to-top button
- Dark theme with modern aesthetics

## Technologies Used

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Form Handling**: FormSubmit.co API

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. Install dependencies:

```bash
npm install --legacy-peer-deps
```

2. Start the development server:

```bash
npm run dev
```

The app will open at `http://localhost:5173`

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

Preview the build:

```bash
npm run preview
```

## Project Structure

```
src/
├── App.jsx          # Main portfolio component
├── index.css        # Tailwind CSS imports
└── main.jsx         # React entry point

public/             # Static assets

vite.config.js      # Vite configuration
tailwind.config.js  # Tailwind CSS configuration
postcss.config.js   # PostCSS configuration
```

## Customization

### Update Personal Information

Edit `src/App.jsx` and update:
- Name and title in the hero section
- Email and contact details
- Project information in the `projects` array
- Skills in the skills section
- About section content

### Update Contact Email

In the `handleSubmit` function, replace:
```javascript
'https://formsubmit.co/ajax/nsaquib22@gmail.com'
```

With your own email address.

## License

© 2025 Najmus Saquib. All rights reserved.
