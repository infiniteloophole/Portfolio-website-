# 🎬 Animation Snippets & Code Reference

## Scroll-Triggered Animation Template

Use this pattern to create scroll animations for any element:

```jsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MyComponent() {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top 75%',  // when top of element is 75% down viewport
        toggleActions: 'play none none reverse',
      },
      duration: 0.8,
      y: 60,        // slide up from 60px below
      opacity: 0,   // fade in
      ease: 'power3.out',
    });
  }, []);

  return <div ref={elementRef}>Your content here</div>;
}
```

## Hover Animation Template

Create interactive hover effects:

```jsx
const handleHover = (ref) => {
  gsap.to(ref.current, {
    scale: 1.05,
    duration: 0.3,
    ease: 'back.out',
  });
};

const handleHoverEnd = (ref) => {
  gsap.to(ref.current, {
    scale: 1,
    duration: 0.3,
  });
};

// In JSX:
<div
  ref={elementRef}
  onMouseEnter={() => handleHover(elementRef)}
  onMouseLeave={() => handleHoverEnd(elementRef)}
>
  Hover me!
</div>
```

## Continuous/Looping Animation

Create repeating animations like floating:

```jsx
gsap.to(element, {
  y: -50,
  duration: 8,
  repeat: -1,      // infinite repeat
  yoyo: true,      // back and forth
  ease: 'sine.inOut',
});
```

## Staggered Animations

Animate multiple elements with delay:

```jsx
gsap.from('.item', {
  duration: 0.6,
  y: 100,
  opacity: 0,
  stagger: 0.1,  // 0.1s delay between each item
  ease: 'back.out',
});
```

## Common Animation Effects

### Fade In
```jsx
gsap.from(element, {
  duration: 0.8,
  opacity: 0,
  ease: 'power2.out',
});
```

### Slide In from Left
```jsx
gsap.from(element, {
  duration: 0.8,
  x: -100,
  opacity: 0,
  ease: 'power3.out',
});
```

### Slide In from Right
```jsx
gsap.from(element, {
  duration: 0.8,
  x: 100,
  opacity: 0,
  ease: 'power3.out',
});
```

### Zoom In
```jsx
gsap.from(element, {
  duration: 0.8,
  scale: 0,
  opacity: 0,
  ease: 'back.out',
});
```

### Rotate In
```jsx
gsap.from(element, {
  duration: 0.8,
  rotation: -180,
  opacity: 0,
  ease: 'back.out',
});
```

### Glow Effect
```jsx
gsap.to(element, {
  boxShadow: '0 0 30px rgba(168, 85, 247, 0.8)',
  duration: 0.5,
  yoyo: true,
  repeat: 1,
});
```

## Easing Options

```javascript
// Ease Options (most common):
'power1.out'    // subtle
'power2.out'    // medium
'power3.out'    // strong
'power4.out'    // very strong

'back.out'      // bouncy
'elastic.out'   // springy
'bounce.out'    // bouncing
'sine.inOut'    // smooth

// Usage:
ease: 'power3.out'
```

## Color Transitions

```jsx
// Change color on hover
gsap.to(element, {
  color: 'rgb(168, 85, 247)',  // Purple
  borderColor: 'rgba(168, 85, 247, 0.5)',
  backgroundColor: 'rgba(168, 85, 247, 0.1)',
  duration: 0.3,
});
```

## Multiple Properties Animation

```jsx
gsap.to(element, {
  duration: 0.6,
  y: -10,
  scale: 1.05,
  opacity: 0.8,
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
  ease: 'power2.out',
});
```

## Timeline Animations (Sequence)

```jsx
const timeline = gsap.timeline();

timeline
  .from(element1, { duration: 0.5, opacity: 0 })
  .from(element2, { duration: 0.5, y: 20 }, "-=0.3")  // 0.3s before end
  .from(element3, { duration: 0.5, scale: 0 });
```

## Conditional Animations

```jsx
const triggerAnimation = (shouldAnimate) => {
  if (shouldAnimate) {
    gsap.to(element, {
      duration: 0.6,
      opacity: 1,
      y: 0,
    });
  }
};
```

## Reset Animation

```jsx
// Reset element to original state
gsap.set(element, {
  opacity: 1,
  y: 0,
  scale: 1,
  rotation: 0,
});
```

## ScrollTrigger Advanced Options

```jsx
gsap.from(element, {
  scrollTrigger: {
    trigger: element,
    start: 'top 80%',      // [trigger position] [viewport position]
    end: 'bottom 20%',     // animation ends here
    scrub: 1,              // linked to scrollbar (1 = 1 second lag)
    markers: true,         // debug markers (remove in production)
    toggleActions: 'play none none reverse',
    // play - play forward
    // none - don't interrupt
    // none - don't reverse
    // reverse - play backward on scroll back
  },
  duration: 1,
  y: 100,
  opacity: 0,
});
```

## Animation Variants

### Subtle (Professional)
```jsx
{
  duration: 0.6,
  y: 20,
  opacity: 0,
  ease: 'power2.out',
}
```

### Medium (Standard)
```jsx
{
  duration: 0.8,
  y: 60,
  opacity: 0,
  ease: 'power3.out',
}
```

### Dramatic (Bold)
```jsx
{
  duration: 1.0,
  scale: 0,
  rotation: -180,
  opacity: 0,
  ease: 'back.out',
}
```

## Performance Tips

```javascript
// ✅ Good - Uses GPU acceleration
gsap.to(element, {
  transform: 'translateY(100px)',  // or use y property
  opacity: 0.5,
  duration: 0.6,
});

// ❌ Avoid - CPU intensive
gsap.to(element, {
  top: '100px',        // avoid position changes
  left: '100px',       // use transform instead
  width: '100px',      // avoid layout shifts
});

// ✅ Best practice - Only animate what matters
gsap.to(element, {
  y: 100,      // lightweight
  opacity: 0.5, // lightweight
  duration: 0.6,
});
```

## Debugging Animations

```jsx
// Add console logs
gsap.to(element, {
  duration: 0.6,
  y: 100,
  onStart: () => console.log('Animation started'),
  onComplete: () => console.log('Animation complete'),
  onUpdate: () => console.log('Animation updating...'),
});

// Or check state
const animation = gsap.to(element, {
  duration: 0.6,
  y: 100,
});

console.log(animation.progress());  // 0 to 1
console.log(animation.isActive());  // true/false
```

## Common Mistakes to Avoid

```javascript
// ❌ Wrong - ref not set
useEffect(() => {
  gsap.to(elementRef, ...);  // Wrong: missing .current
}, []);

// ✅ Correct
useEffect(() => {
  gsap.to(elementRef.current, ...);  // Correct
}, []);

// ❌ Wrong - infinite animations on re-render
useEffect(() => {
  gsap.to(element, { ...animation });  // Creates new animation every render
});

// ✅ Correct - use dependencies or cleanup
useEffect(() => {
  const animation = gsap.to(element, { ...animation });
  return () => animation.kill();  // Cleanup
}, []);
```

## Real-World Examples Used in Your Portfolio

### Service Items Lift on Hover
```jsx
gsap.to(card, {
  y: -4,
  duration: 0.3,
});
```

### Floating Orbs
```jsx
gsap.to(orb, {
  y: -50 + Math.random() * 100,
  duration: 8 + Math.random() * 4,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut',
});
```

### Section Fade-In on Scroll
```jsx
gsap.from(section, {
  scrollTrigger: {
    trigger: section,
    start: 'top 75%',
    toggleActions: 'play none none reverse',
  },
  duration: 0.8,
  y: 60,
  opacity: 0,
  ease: 'power3.out',
});
```

### Form Input Focus Glow
```css
input:focus {
  box-shadow: inset 0 0 0 1px rgba(168, 85, 247, 0.3);
}
```

---

**Pro Tip**: Test animations in DevTools slow-motion (speed down to 0.25x) to fine-tune timing! 🎬
