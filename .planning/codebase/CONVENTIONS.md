# Coding Conventions

## JavaScript / React
- **Functional Components**: All components are defined as functional components with hooks.
- **GSAP Animations**: Animations are encapsulated within `useEffect` using `gsap.context()` for easy cleanup.
- **Refs**: Use `useRef` for DOM targeting, especially for GSAP.
- **Smooth Scroll**: Always use the `useLenis` hook in the root `App.jsx` and pass the instance to components that need programmatic scrolling.

## Styling (SCSS)
- **CSS Modules**: Every component has a corresponding `.module.scss` file.
- **Design Tokens**: Direct use of raw color values is discouraged. Use variables from `tokens.scss`.
- **Mixins**: Use reusable mixins from `mixins.scss` for layout, glassmorphism, and typography effects.
- **Naming**: CamelCase for class names (e.g., `.videoWrap`, `.heroContent`) to match JS property access in CSS Modules.
- **Responsive Design**: Use the `@include md`, `@include lg` mixins for media queries.

## File Organization
- **Sections**: Large page-level content blocks go in `src/sections/`.
- **Components**: Reusable UI atoms go in `src/components/`.
- **Assets**: All public assets go in `public/assets/`.
