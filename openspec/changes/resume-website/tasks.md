## 1. Project Setup

- [ ] 1.1 Initialize SolidJS project with Vite TypeScript template (`npx degit solidjs/templates/ts`)
- [ ] 1.2 Install Tailwind CSS v4 (`tailwindcss`, `@tailwindcss/vite`)
- [ ] 1.3 Install Park UI for SolidJS (`@park-ui/panda-preset` or Tailwind版) と Ark UI (`@ark-ui/solid`)
- [ ] 1.4 Install Kobalte (`@kobalte/core`)
- [ ] 1.5 Configure `vite.config.ts` with plugins and verify dev server starts
- [ ] 1.6 Set up base CSS with Tailwind import, Park UI theme, Japanese font (Noto Sans JP)

## 2. Resume Data

- [ ] 2.1 Create TypeScript type definitions for resume data structure (`src/data/types.ts`)
- [ ] 2.2 Create resume data file with basic info, positions, and links (`src/data/resume.ts`)
- [ ] 2.3 Add skills data (frontend, mobile, backend, infrastructure, AI tools)
- [ ] 2.4 Add values, strengths, growth areas, and career direction data
- [ ] 2.5 Add career history entries (all projects from original resume)
- [ ] 2.6 Add interests, recent technologies, and favorite books data

## 3. Components

- [ ] 3.1 Create `Section` shared wrapper component using Park UI Card/Container
- [ ] 3.2 Create `Header` component (name, links, experience, positions) with Park UI Badge
- [ ] 3.3 Create `Skills` component with Park UI Tabs or Accordion for categories
- [ ] 3.4 Create `Values` component using Park UI Card layout
- [ ] 3.5 Create `Career` component with timeline-style project entries using Park UI components
- [ ] 3.6 Create `Interests` component (interests, technologies, books)

## 4. Animation & Polish

- [ ] 4.1 Add scroll-triggered fade-in animations using Kobalte transitions
- [ ] 4.2 Add hover effects and micro-interactions on cards and links
- [ ] 4.3 Assemble all components in `App.tsx` in correct section order
- [ ] 4.4 Apply responsive layout (mobile-first, max-width container for desktop)
- [ ] 4.5 Add print-friendly styles via `@media print`
- [ ] 4.6 Polish typography, spacing, and color scheme with Park UI theme

## 5. Verification

- [ ] 5.1 Verify `npm run dev` starts without errors
- [ ] 5.2 Verify `npm run build` produces static output in `dist/`
- [ ] 5.3 Verify all resume sections render correctly in browser
- [ ] 5.4 Verify responsive layout on mobile (375px) and desktop (1280px) viewports
- [ ] 5.5 Verify animations work smoothly on scroll and interaction
