# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Minimalist single-page portfolio template built with Astro and Tailwind CSS v4. All content is customized through `src/config.ts` — no component edits needed for content changes.

## Development Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
```

No linting or testing frameworks are configured.

## Architecture

- `src/config.ts` — single source of truth. Exports `siteConfig` with: name, title, description, accentColor, social links (all optional), aboutMe, skills, projects, experience, education.
- `src/pages/index.astro` — single-page layout importing all section components and `global.css`.
- `src/components/` — one `.astro` component per section (Hero, About, Projects, Experience, Education, Header, Footer). Each imports `siteConfig` directly.
- `src/styles/global.css` — imports Tailwind and sets IBM Plex Mono as the base font.
- `astro.config.mjs` — Tailwind CSS v4 via `@tailwindcss/vite` plugin (not the older PostCSS integration).

### Key Patterns

- **Conditional rendering**: Sections with array data (projects, experience, education) check for non-empty arrays and hide entirely when data is removed from config. Nav links in Header also hide correspondingly.
- **Accent color propagation**: `siteConfig.accentColor` is applied via inline `style` attributes and CSS custom properties (`--accent-color`), not Tailwind theme config.
- **Icons are inline SVGs** from Tabler Icons — there is no icon package dependency. New icons should follow the same inline SVG pattern.
- **Hero animations**: Custom `fadeIn` keyframes with staggered delay classes defined in a `<style>` block within `Hero.astro`.
- **Header scroll effect**: Client-side `<script>` in `Header.astro` adds `bg-white/80 backdrop-blur-sm` classes on scroll > 100px.

### Adding a New Section

1. Create component in `src/components/` following existing patterns (import `siteConfig`, wrap in conditional if data-driven)
2. Add corresponding data shape to `src/config.ts`
3. Import and place in `src/pages/index.astro`
4. Add nav link in `Header.astro` with conditional rendering

## Styling Conventions

- Tailwind utility classes only — no custom CSS files beyond `global.css`
- Responsive breakpoints: `sm:`, `md:`, `lg:`, `xl:` prefixes throughout
- Section layout pattern: `lg:grid-cols-12` with title in `lg:col-span-4` and content in `lg:col-span-8`
- Consistent section padding: `p-8 sm:p-12 md:p-16 lg:p-24`
