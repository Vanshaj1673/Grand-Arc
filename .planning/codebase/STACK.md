# Tech Stack

| Category | Technology | Version | Rationale |
|----------|------------|---------|-----------|
| **Core** | React | ^19.2.5 | Modern UI framework with concurrent features |
| **Build Tool** | Vite | ^8.0.10 | Fast development and optimized bundling |
| **Styling** | SCSS | ^1.99.0 | Sophisticated styling with tokens and modular CSS |
| **Styling** | Tailwind CSS | ^4.2.4 | Utility-first styling via Vite plugin |
| **Animation** | GSAP | ^3.15.0 | Professional-grade animation system for cinematic effects |
| **Animation** | @gsap/react | ^2.1.2 | GSAP hooks for React lifecycle management |
| **Smooth Scroll**| Lenis | ^1.3.23 | High-performance smooth scrolling for immersive UX |
| **Slider** | Swiper | ^12.1.3 | Modern touch slider for interactive components |

## Languages
- **JavaScript**: Primary application logic using ES Modules
- **JSX**: UI components structure
- **SCSS**: Styling with variables, nesting, and mixins

## Configuration
- `vite.config.js`: Integrated React and Tailwind plugins. Configured SCSS to automatically inject `tokens.scss` into all modules.
- `package.json`: Type "module" enabled for ESM support.

## Key Dependencies
- `gsap`: The core animation engine.
- `lenis`: Provides the foundation for smooth, cinematic scrolling.
- `@tailwindcss/vite`: V4 Tailwind integration using the new Vite plugin.
