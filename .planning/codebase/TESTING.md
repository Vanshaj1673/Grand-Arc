# Testing

## Current State
No automated testing framework is currently configured in the project.

## Recommended Approach
- **Unit Testing**: Vitest for component logic.
- **Visual Regression**: Playwright or Percy to ensure the cinematic UI doesn't break across updates.
- **Performance**: Lighthouse CI to maintain the "90+ performance" goal.

## Manual Verification
Currently, verification is performed manually by checking:
- GSAP animation triggers and sequencing.
- Smooth scroll performance and synchronization.
- Responsive layout at various breakpoints.
- Video playback and poster fallback.
