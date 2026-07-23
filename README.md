# Thaariq Kurnia Portfolio

A dual-mode personal portfolio built with Vue 3. The site combines a professional portfolio with an immersive archive experience centered on Raphael, an AI portfolio assistant currently in development.

## Experience Overview

The application has three primary experiences:

| Route     | Experience       | Purpose                                                                                                                               |
| --------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `/`       | Gateway          | A focused entry portal into the immersive world.                                                                                      |
| `/world`  | Archive World    | An interactive Raphael-themed archive with a Three.js intelligence orb and orbiting memory nodes.                                     |
| `/formal` | Formal Portfolio | A professional, recruiter-friendly portfolio with biography, experience, projects, contact details, and a Raphael development notice. |

Legacy paths `/world/archive` and `/world/room` redirect to `/world`.

## Current Status

- The formal portfolio is complete as a responsive editorial experience.
- Archive World is available as the immersive alternative.
- Raphael appears as a lightweight floating assistant entry in formal mode.
- Raphael's conversation capability is not active yet. Its panel only communicates that the assistant is in development and coming soon.
- Three.js is lazy-loaded only with Archive World and is not included in the formal route's runtime path.
- Portal transitions connect the Gateway, Archive World, and formal portfolio.
- Direct refreshes use URL-aware initial document styling to avoid flashing the wrong visual mode.

## Technology

- Vue 3 with Composition API and Single-File Components
- TypeScript
- Vue Router
- Vite
- Bun
- Three.js for the Archive World intelligence orb
- GSAP and ScrollTrigger for formal portfolio reveals
- Lucide Vue for interface icons
- Tailwind CSS tooling, with most current interface styling authored as component-scoped CSS
- ESLint, Oxlint, Prettier, and `vue-tsc`

## Portfolio Skills

The portfolio currently presents these capabilities:

| Area                  | Skills                                                  |
| --------------------- | ------------------------------------------------------- |
| Interface systems     | Vue.js, React, Next.js, TypeScript, Tailwind CSS, Figma |
| Backend and APIs      | Express.js, Django, .NET, Go Fiber, REST APIs           |
| Data and delivery     | PostgreSQL, SQL Server, SQLite, Prisma, Git             |
| Additional experience | HTML, CSS, Flutter, product design, prototyping         |

Portfolio content is centralized in `src/data/portfolio.ts`. Update that file instead of duplicating profile, skill, experience, education, or project data inside components.

## Project Structure

```text
.
|-- public/
|   |-- documents/
|   |   `-- thaariq-kurnia-cv.pdf
|   |-- icons/                        # Technology icons referenced by portfolio data
|   |-- images/                       # Project imagery
|   `-- rapunzz-logo.png              # Browser icon and brand asset
|-- src/
|   |-- components/
|   |   |-- formal/
|   |   |   |-- About.vue
|   |   |   |-- AssistantPanel.vue   # Raphael coming-soon notice
|   |   |   |-- Contact.vue
|   |   |   |-- Experience.vue
|   |   |   |-- Hero.vue
|   |   |   |-- Navbar.vue
|   |   |   `-- Project.vue
|   |   `-- immersive/
|   |       `-- IntelligenceOrb.vue  # Three.js scene used only by Archive World
|   |-- data/
|   |   `-- portfolio.ts              # Single source of truth for portfolio content
|   |-- router/
|   |   `-- index.ts
|   |-- styles/
|   |   |-- base.css                  # Reset, fonts, and design foundations
|   |   `-- main.css                  # Tailwind entry and shared global styling
|   |-- views/
|   |   |-- formal/
|   |   |   `-- FormalPortfolioView.vue
|   |   `-- immersive/
|   |       |-- ArchiveWorldView.vue
|   |       `-- GatewayView.vue
|   |-- App.vue                       # Shared shell and portal route transition
|   `-- main.ts                       # Router-ready mount and document mode bootstrap
|-- index.html
|-- package.json
`-- vite.config.ts
```

The source tree is organized by product domain. Keep formal and immersive components/views in their matching folders, shared portfolio content in `src/data`, global CSS in `src/styles`, and directly served documents in `public/documents`.

## Local Development

Requirements:

- Bun
- Node.js `^20.19.0` or `>=22.12.0`

Install dependencies:

```sh
bun install
```

Start the development server:

```sh
bun run dev
```

Create a production build:

```sh
bun run build
```

Preview the production build:

```sh
bun run preview
```

## Deployment

This project uses Vue Router history mode, so the host must rewrite unknown routes to `index.html`. Netlify uses `public/_redirects`, which Vite copies into the production output:

```text
/* /index.html 200
```

Keep this rule so direct visits and hard refreshes on `/formal`, `/world`, and legacy redirect paths resolve through Vue Router instead of returning a hosting 404.

## Quality Checks

```sh
bun run type-check
bunx eslint src
bun run build-only
git diff --check
```

The production build currently reports a chunk-size warning for Archive World because Three.js is intentionally isolated in that lazy route. The formal application bundle remains separate.

## Architecture Notes

### Routing and visual modes

Routes with `meta.immersive: true` do not render the formal navbar or Raphael assistant panel. `App.vue` controls this shell behavior and the portal transition. `main.ts` waits for `router.isReady()` before mounting and assigns the document mode based on the resolved route.

### Raphael assistant

Raphael is a product concept, not a working chatbot yet. In formal mode, `src/components/formal/AssistantPanel.vue` should remain a concise coming-soon notice with no chat composer, simulated responses, or misleading active controls until a real assistant service exists.

Archive World may present Raphael as its central intelligence orb, but conversation remains unavailable there as well.

### Three.js lifecycle

`src/components/immersive/IntelligenceOrb.vue` owns the WebGL renderer. Any future changes must preserve its cleanup behavior:

- Stop the animation frame loop when the component unmounts.
- Dispose geometries, materials, and textures.
- Dispose the renderer.
- Call `forceContextLoss()` so leaving Archive World releases the WebGL context.
- Keep the component imported only from the lazy-loaded Archive World route.

### Motion and accessibility

- Preserve `prefers-reduced-motion` behavior.
- Keep keyboard focus states and semantic buttons/links.
- Maintain the skip link and section-aware navigation.
- Verify desktop and mobile layouts after interface changes.

## Design Direction

The project deliberately uses two related visual languages:

| Mode      | Direction                                                                                                                   |
| --------- | --------------------------------------------------------------------------------------------------------------------------- |
| Formal    | Warm editorial minimalism, cream surfaces, dark brown typography, restrained amber accents, professional content hierarchy. |
| Immersive | Dark archive chamber, amber energy, orbital geometry, grid and circuit motifs, focused sci-fi atmosphere.                   |

Raphael is the conceptual bridge between both modes. Formal mode should remain professional and must not load WebGL. Archive World can be expressive and spatial.

## AI Agent Handoff

For future AI-assisted development, preserve these decisions unless the project owner requests a change:

1. Use Bun as the package manager.
2. Treat `src/data/portfolio.ts` as the content source of truth.
3. Keep Three.js exclusive to `ArchiveWorldView` and its lazy chunk.
4. Keep Raphael visible in formal mode only as a floating coming-soon notice until its backend exists.
5. Do not add a chat input, fake conversation, or simulated AI responses while Raphael is unavailable.
6. Keep `Back to world` at the right edge of the formal desktop navbar and inside the mobile menu.
7. Preserve the URL-aware anti-flash bootstrap and router-ready mount.
8. Preserve WebGL disposal when leaving Archive World.
9. Prefer small, scoped component changes and reuse existing portfolio data.
10. Run type-check, ESLint, production build, and `git diff --check` before considering work complete.

Local AI-agent skills and tool configuration live under `.opencode/` and are intentionally excluded from Git. They are development-machine helpers, not application dependencies.

Available project-local skills:

| Skill                       | Load when working on                                                          |
| --------------------------- | ----------------------------------------------------------------------------- |
| `portfolio-project-context` | New-session onboarding, architecture, routing, scripts, or cross-mode changes |
| `formal-portfolio-mode`     | Formal sections, navbar, responsive editorial UI, or GSAP reveals             |
| `archive-world-mode`        | Gateway, Archive World, Three.js, memory orbit, or immersive visuals          |
| `raphael-assistant`         | Raphael's launcher, development notice, or future AI integration              |
| `portfolio-content-data`    | Profile, skills, experience, education, projects, media, links, or CV         |

Restart OpenCode after adding or changing a local skill because skills are discovered when a session starts.

## Suggested Next Work

1. Connect Raphael to a real assistant API with a documented privacy and failure-handling strategy.
2. Add automated route and component tests.
3. Add deployment documentation once a production host is selected.
4. Add optimized screenshots or a short preview video to this README.

## Owner

**Thaariq Kurnia Spama**

Full-Stack Developer, Depok, Indonesia

- GitHub: [rapunzzz](https://github.com/rapunzzz)
- LinkedIn: [thaariqkurnia](https://www.linkedin.com/in/thaariqkurnia)
- Email: [kurniathaariq55@gmail.com](mailto:kurniathaariq55@gmail.com)
