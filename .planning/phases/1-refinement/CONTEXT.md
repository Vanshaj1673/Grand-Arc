# Phase 1 Context: Refinement & Cinematic Polish

## Goal
Elevate the current baseline to "premium" status with refined timings, flawless transitions, and optimized performance.

## Objectives
- **Animation Modernization**: Transition from `useEffect` + `gsap.context()` to the specialized `useGSAP` hook for better React integration and safety.
- **Cinematic Transitions**: Implement scroll-driven entrance animations for all sections using `ScrollTrigger`.
- **Typography & Polish**: Ensure all typography follows the design system and use text-glow effects where appropriate.
- **Performance Optimization**: Add `will-change` hints and ensure smooth frame rates during heavy transitions.

## Key Files
- `src/App.jsx`: Main entry point for section orchestration.
- `src/sections/*.jsx`: Individual content blocks.
- `src/styles/tokens.scss`: Design system source of truth.
- `src/hooks/useLenis.js`: Scrolling engine.

## Constraints
- **Performance**: Must maintain smooth 60fps scrolling.
- **Browser Compatibility**: Ensure animations don't "stutter" on Safari.
- **Responsiveness**: All refined animations must work well on touch devices.
