# Architecture

## System Design
The application is a **single-page interactive sales deck** built with a **component-driven architecture**. It prioritizes cinematic visual impact and smooth transitions over complex data management.

## Core Patterns
- **Section-Based Orchestration**: `App.jsx` acts as the primary layout controller, stacking full-width sections that the user scrolls through.
- **Smooth Scroll Synchronization**: The `useLenis` hook manages the scrolling engine, syncing it with the GSAP ticker to ensure that animations triggered by `ScrollTrigger` are perfectly aligned with the user's scroll position.
- **Atomic Styling**: Using SCSS modules for component-scoped styles combined with a centralized design token system.
- **Cinematic Animations**: GSAP is used for high-fidelity entry animations (`useEffect` with `gsap.context`) and scroll-driven interactions.

## Data Flow
- **One-Way Data Flow**: Standard React props pattern.
- **Ref-Based DOM Access**: Heavy use of `useRef` to target elements for GSAP animations.
- **Global Tokens**: SCSS variables injected via Vite configuration ensure a consistent visual language across all modules.

## Entry Points
- `src/main.jsx`: Bootstraps the React application.
- `src/App.jsx`: Defines the main document structure and imports all content sections.
