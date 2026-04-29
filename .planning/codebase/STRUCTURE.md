# Project Structure

```text
mall-deck/
├── public/                 # Static assets (videos, images, icons)
│   └── assets/
├── src/
│   ├── components/         # Reusable UI components (Navbar, Footer, Buttons)
│   ├── hooks/              # Custom React hooks (useLenis)
│   ├── sections/           # Major landing page sections
│   │   ├── Hero.jsx        # First fold with video background
│   │   ├── WhySection.jsx  # USP / Overview
│   │   ├── RetailSection.jsx
│   │   └── ...
│   ├── styles/             # Global styles and design tokens
│   │   ├── tokens.scss     # Design system variables
│   │   └── global.scss     # Global resets and utility classes
│   ├── App.jsx             # Root layout and section orchestration
│   └── main.jsx            # Entry point
├── index.html              # HTML template
├── vite.config.js          # Build configuration
└── package.json            # Dependencies and scripts
```

## Key Locations
- **`src/sections/`**: Contains the primary content blocks of the sales deck. Each section follows a pattern of `.jsx` for structure and `.module.scss` for scoped styling.
- **`src/styles/tokens.scss`**: Centralized source of truth for colors, typography, and spacing.
- **`src/hooks/useLenis.js`**: Critical hook that synchronizes smooth scroll with GSAP animations.
