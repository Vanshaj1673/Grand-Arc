# Plan 1: Cinematic Refinement & Animation Modernization

## Objective
Refactor the animation system to use modern React patterns and implement cinematic entry reveals for all sections.

## Proposed Changes

### Animation System
- **Refactor**: Replace `useEffect` + `gsap.context()` with `useGSAP()` across all components.
- **Sync**: Ensure Lenis is perfectly synced with the GSAP ticker.

### Section Refinements
- **Hero**: Refine reveal timing. Add subtle parallax to the background video.
- **WhySection**: Add staggered reveals for USP cards.
- **Retail/Dining/Entertainment**: Implement "Slide & Fade" entrance animations triggered by scroll.
- **Global**: Apply consistent "Gold Glow" effect to accented headlines.

## Step-by-Step Implementation

### 1. Refactor useLenis & App.jsx
- [ ] Update `src/hooks/useLenis.js` to ensure optimal ticker sync.
- [ ] Update `src/App.jsx` to use `useGSAP` if needed.

### 2. Modernize Section Animations
- [ ] **Hero**: Refactor `src/sections/Hero.jsx` to use `useGSAP`. Refine cinematic reveal sequence.
- [ ] **WhySection**: Update `src/sections/WhySection.jsx`. Add `ScrollTrigger` reveal for content cards.
- [ ] **Retail/Dining/Entertainment**: Update these sections with consistent reveal patterns (e.g., image slides in from side, text fades up).

### 3. Visual & Performance Polish
- [ ] **Styles**: Ensure `text-glow` mixin is applied to all `.headlineAccent` elements.
- [ ] **Performance**: Add `will-change: transform, opacity` to all animating elements in SCSS modules.

## Verification Plan

### Manual Verification
- [ ] Smooth scroll feels "buttery" and doesn't conflict with animations.
- [ ] All sections reveal themselves gracefully as they enter the viewport.
- [ ] Hero sequence executes with perfect timing on page load.
- [ ] Check performance in Chrome DevTools (no frame drops).
