## Goals
- Make sections subtly auto-animate and feel alive while remaining chill.
- Convert Built With into a smooth, infinite horizontal slider.
- Enhance the Twitter slider with autoplay, hover-pause, and drag.
- Remove torn paper separators and tighten vertical rhythm.
- Add a Media section “broken TV” static effect with optional video embed.
- Propose fun, interactive landing ideas that amplify vibes without hurting performance.

## Section Motion & Interactivity
- Subtle auto-motion: Use Framer Motion and IntersectionObserver to animate in/out (opacity, parallax y) when sections enter viewport.
- Parallax: Apply slight parallax to hero GIF frame and select backgrounds (translateY 8–16px) tied to scroll.
- Ambient glows: Low-opacity animated glows behind headings, respecting `prefers-reduced-motion`.
- Hover micro-interactions: Scale 1.02–1.05 on cards/logos, shadow pulse on focus.

## Twitter Slider Upgrade
- Autoplay: Smooth auto-scroll using `requestAnimationFrame` or timed `scrollTo`, with easing.
- Hover/Touch pause: Pause autoplay on hover or while user dragging.
- Drag to scroll: Pointer-based drag for desktop; momentum on release.
- Infinite loop: Duplicate tweet array to create seamless loop; snap points preserved.
- Controls: Keep chevrons, add “Now Playing” badge and subtle edge gradient masks.

## Built With: Horizontal Slider
- Replace grid with infinite carousel:
  - Duplicate partners array and loop horizontally.
  - Autoplay with hover pause; drag support.
  - Uniform card sizes, glassmorphism background, consistent logo scaling.
- Lazy-load logos (`loading="lazy"`), local images from `public/assets`.

## Remove Separators
- Remove `TornPaperTop/Bottom` uses from `App.tsx`.
- Adjust section paddings to maintain rhythm; add subtle separators via spacing only.

## Media: Broken TV + Video Embed
- Broken TV effect:
  - Scanlines: CSS repeating-linear-gradient overlay.
  - Noise: Animated noise layer with keyframe jitter (opacity/translate).
  - Slight chromatic aberration text/edges.
- Embed mode:
  - Accept `videoUrl` (Vimeo/YouTube); render responsive `<iframe>` when present.
  - Fallback to static card with TV effect.
  - Optional “channel knob” to switch between sources.

## Fun, Chill Landing Ideas
- Zen Mode toggle: Dim lights, slow animations, lo-fi sound toggle (muted by default).
- Smoke particles: Soft, low-density canvas particles drifting near hero; auto-disabled on low-power or `reduced-motion`.
- Sticker confetti: On key actions (Subscribe/Join), emit playful sticker confetti (controlled count, 1s lifespan).
- Vibe Meter: Interactive dial reacting to cursor; ties to glow intensity site-wide.
- Sesh Timer: Ambient timer component you can start during a visit; subtle progress ring.
- Easter eggs: Konami code unlocks a special colorway for 10s.

## Accessibility & Performance
- Respect `prefers-reduced-motion` everywhere; provide a global Motion toggle.
- GPU-friendly transforms only; avoid layout thrash.
- Cap FPS for autoplay; pause when tab not visible.
- Lazy load images/iframes; compress logos; reuse widget script instance.
- Keyboard navigation for sliders; ARIA labels on controls.

## Implementation Steps
1. Update `TwitterFeed` with autoplay, loop, drag, hover-pause, gradient masks.
2. Convert `BuiltWith` to infinite horizontal slider, lazy-loaded local assets.
3. Remove separators in `App.tsx` and adjust spacing.
4. Add section motion hooks: parallax + ambient glows with motion guard.
5. Enhance `Media` with TV static overlay and optional `videoUrl` embed prop.
6. Introduce Zen Mode toggle and optional smoke/sticker effects (guarded by performance settings).
7. Add accessibility/perf utilities (motion provider, visibility pause, lazy-load).

## Deliverables
- Updated components: `TwitterFeed`, `BuiltWith`, `Media`, `App.tsx`, motion utilities.
- Configurable autoplay and motion settings with `prefers-reduced-motion` support.
- Documented props for new features (e.g., `Media` `videoUrl`).

## Verification
- Preview and test sliders (autoplay, drag, pause) across desktop/mobile.
- Lighthouse performance and accessibility pass.
- Test reduced-motion and tab visibility behavior.
- Validate Vimeo/YouTube embeds and TV effect rendering.

Confirm to proceed and I’ll implement these changes end-to-end immediately.