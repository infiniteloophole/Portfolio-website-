# 🎨 Quick Customization Guide

## Color Customization

### Change Primary Purple to Another Color

Find and replace in your components:
```jsx
// Instead of purple
className="text-purple-400"
className="from-purple-500"
className="border-purple-400/50"

// Try these colors:
// - Blue: text-blue-400, from-blue-500
// - Pink: text-pink-400, from-pink-500
// - Cyan: text-cyan-400, from-cyan-500
// - Amber: text-amber-400, from-amber-500
```

### Change Gradient Colors

In [src/components/GradientText.jsx](src/components/GradientText.jsx):
```jsx
// Current
<span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">

// Try alternatives:
// Cool: from-blue-400 via-cyan-400 to-teal-400
// Warm: from-orange-400 via-red-400 to-pink-400
// Monochrome: from-gray-400 via-gray-300 to-gray-500
```

## Animation Customization

### Speed Up/Slow Down Animations

In any component with animations:
```jsx
// Slow (0.8s to 1.2s)
duration: 1.2,

// Fast (0.4s to 0.5s)
duration: 0.4,

// Original
duration: 0.8
```

### Change Animation Direction

In [AnimatedSection.jsx](src/components/AnimatedSection.jsx):
```jsx
// Current: slide up from bottom
y: 60,  // slide from 60px down

// Try alternatives:
x: 100,  // slide from left
x: -100,  // slide from right
scale: 0.5,  // zoom in from small
rotation: 45,  // rotate in
```

### Stagger Effect Timing

```jsx
// In AnimatedSection usage:
<AnimatedSection delay={0.1}>  // Change 0.1 to 0.2, 0.05, etc
  {children}
</AnimatedSection>
```

## Floating Orbs Customization

In [src/components/FloatingOrbs.jsx](src/components/FloatingOrbs.jsx):

### Change Orb Colors
```jsx
// Current purple orb
background: 'radial-gradient(circle, rgba(168, 85, 247, 0.5), transparent 70%)',

// Try:
// Red: rgba(239, 68, 68, 0.5)
// Green: rgba(34, 197, 94, 0.5)
// Blue: rgba(59, 130, 246, 0.5)
// Cyan: rgba(34, 211, 238, 0.5)
```

### Change Animation Speed
```jsx
// Current
const duration = 8 + Math.random() * 4;  // 8-12 seconds

// Faster
const duration = 4 + Math.random() * 2;  // 4-6 seconds

// Slower
const duration = 12 + Math.random() * 6;  // 12-18 seconds
```

### Add More Orbs
Copy and paste an orb div:
```jsx
{/* Cyan orb */}
<div
  className="orb absolute w-96 h-96 rounded-full blur-3xl opacity-20"
  style={{
    background: 'radial-gradient(circle, rgba(34, 211, 238, 0.5), transparent 70%)',
    top: '30%',
    left: '50%',
  }}
/>
```

## Services Section Customization

### Change Icons
Import different icons from Lucide:
```jsx
// Current
import { Code2, Zap, Layers } from 'lucide-react';

// Change to:
import { Rocket, Cpu, Database } from 'lucide-react';

// Then update in render:
icon: Rocket,
icon: Cpu,
icon: Database,
```

### Add More Services
In [src/App.jsx](src/App.jsx), add to services array:
```jsx
{
  num: '04',
  title: 'Your Service Title',
  desc: 'Service description here',
  icon: YourIcon,
  points: ['Point 1', 'Point 2', 'Point 3']
}
```

## Form Customization

### Change Focus Color

In [src/App.jsx](src/App.jsx), contact form section:
```jsx
// Current
className="focus:border-purple-400/50"
className="focus:bg-white/5"

// Change to:
className="focus:border-blue-400/50"
className="focus:border-cyan-400/50"
```

## Navigation Customization

### Change Underline Color

In [src/index.css](src/index.css):
```css
nav a::after {
  /* Current - gradient underline */
  @apply absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300;
  
  /* Single color option */
  @apply bg-purple-400;
}
```

## Responsive Breakpoints

Tailwind breakpoints you can use:
```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

Example:
```jsx
className="text-2xl md:text-4xl lg:text-6xl"  // Different sizes per screen
```

## Text Styling Quick Reference

```jsx
// Size
className="text-xs text-sm text-base text-lg text-xl text-2xl text-3xl"

// Weight
className="font-light font-normal font-medium font-bold"

// Opacity
className="opacity-30 opacity-50 opacity-60 opacity-100"

// Letter Spacing
className="tracking-tight tracking-normal tracking-wide tracking-wider"
```

## Common Tweaks

### Make Animations Slower Throughout
In each component, increase duration:
```jsx
// Quick method: Find all "duration: 0.8" and change to "duration: 1.0"
```

### Make Hover Effects More Pronounced
```jsx
// Instead of scale(1.05), use scale(1.15)
// Instead of -translate-y-1, use -translate-y-2
```

### Increase Glow Effect
In [src/index.css](src/index.css):
```css
@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(168, 85, 247, 0.5);  /* increase 0.3 to 0.5 */
  }
  50% {
    box-shadow: 0 0 30px rgba(168, 85, 247, 0.8);  /* increase 0.6 to 0.8 */
  }
}
```

## Testing Your Changes

1. **Change color scheme**: Modify 2-3 color classes and see overall impact
2. **Test animation speed**: Speed up for snappier feel, slow down for elegant feel
3. **Try different hover effects**: Scale, opacity, or position changes
4. **Preview on mobile**: Use browser dev tools responsive mode

## Quick Color Palettes to Try

### Dark & Elegant
- Purple to Pink: `from-purple-600 to-pink-600`
- Blue to Cyan: `from-blue-600 to-cyan-600`
- Amber to Orange: `from-amber-600 to-orange-600`

### Vibrant
- Rainbow: `from-purple-500 via-pink-500 to-red-500`
- Neon: `from-cyan-400 to-blue-600`
- Modern: `from-violet-500 to-purple-600`

### Professional
- Slate: `from-slate-600 to-gray-600`
- Teal: `from-teal-600 to-cyan-600`
- Indigo: `from-indigo-600 to-blue-600`

---

**Pro Tip**: Use browser DevTools to test changes in real-time before committing! 🎨
