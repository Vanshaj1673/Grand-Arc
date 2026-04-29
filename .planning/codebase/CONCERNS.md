# Concerns

## Performance
- **Heavy Media**: The use of high-resolution video backgrounds (`hero.mp4`) may impact LCP (Largest Contentful Paint) and overall Lighthouse scores, especially on slower connections.
- **Scroll Jank**: While Lenis is smooth, the combination of heavy GSAP ScrollTriggers and high-quality assets could cause performance degradation on low-end hardware.

## Maintenance
- **Hardcoded Content**: Currently, most section content (stats, copy, headlines) is hardcoded in the JSX files. This makes updates difficult for non-technical users.
- **Lack of Tests**: Zero automated test coverage makes refactoring the animation-heavy codebase risky.

## Technical Debt
- **Asset Fallbacks**: Need to ensure all videos have appropriate poster images and aria-labels for accessibility.
- **SCSS Injection**: The `additionalData` in `vite.config.js` is powerful but can lead to larger CSS bundles if not managed carefully (though usually fine for small projects).

## Security
- No major concerns as the project is currently a static front-end.
