# Portfolio Revamp — Design & Build Spec

> The single source of truth for revamping deepchaulagain.com.np.
> Written for two readers: **Deep** (to decide, write, and learn) and **coding agents** (to implement without guessing).
> If something here conflicts with a later instruction from Deep, Deep wins — then update this file.

---

## 0. The one-line idea

**A field notebook that turns into a blueprint when the lamp goes off.**

Deep works with data, helped build an earthbag dome house, swims, rides, and types fast. The site should feel like a page from Deep's notebook: warm paper, ink, margin notes, a faint graph grid, hand-drawn marks. It should *not* feel like a SaaS landing page.

Three ideas tie everything together:

| Thread | Where it shows up |
|---|---|
| **दीप (Deep) means "lamp"** *(confirm meaning/spelling — TODO(deep))* | The theme toggle is a lamp. Lamp on = paper, lamp off = blueprint (dark mode). Hovering the name reveals the meaning. |
| **Data person** | The hero is a quiet plot area with a crosshair cursor and a coordinate readout. Section labels look like figure annotations. |
| **Builder / maker** | Blueprint dark mode, hand-drawn underlines, polaroid photos from the dome-house build, ruler-tick details. |

If a new feature doesn't connect to one of these threads, it probably doesn't belong.

---

## 1. Principles

1. **Content is the design.** Real sentences, real projects, real photos. Design only frames them.
2. **One column, left-aligned, generous whitespace.** Text measure ~65ch. Nothing centered except where centering carries meaning.
3. **Two fonts, one accent colour.** Restraint makes the few playful moments land.
4. **Interactions reward curiosity; they never block reading.** Everything works without hover, without JS animations, and with `prefers-reduced-motion`.
5. **Fast.** A notebook doesn't make you wait.

### Anti-slop list — never do these

- Gradients (backgrounds, text, buttons), glassmorphism, glows, neon, `backdrop-blur` headers
- Typewriter effects, "Hi, I'm …", "passionate", "leveraging", "actionable insights", "scalable solutions"
- Two-tone headings ("My **Projects**"), centered section titles with subtitle paragraphs
- Skill icon grids, progress bars for skills, star ratings
- Cards with `shadow-lg` + `hover:scale-105`, pill-tag clouds with 7+ tags
- Particles, parallax, scroll-jacking, auto-playing carousels, cursor trails
- Emoji as bullets or decoration, stock illustrations, AI-generated images
- Tailwind's default blue (`blue-600`) or indigo/purple anywhere
- Placeholder or invented content shipped to production

---

## 2. Visual system

### 2.1 Colour tokens

Define in `src/index.css` with Tailwind v4 `@theme` + CSS custom properties. Components use tokens only — never raw hex, never `gray-*`/`blue-*` utilities.

| Token | Paper (lamp on) | Blueprint (lamp off) | Use |
|---|---|---|---|
| `--bg` | `#F4EFE6` | `#0F2A44` | page background |
| `--ink` | `#1C1B19` | `#E8EEF5` | body text, headings |
| `--muted` | `#6B655C` | `#9FB3C8` | secondary text, annotations |
| `--rule` | `#E2DACB` | `rgba(232,238,245,.10)` | hairlines, section rules |
| `--grid` | `#E2DACB` | `rgba(232,238,245,.045)` | background graph-paper lines (fainter than rules in blueprint) |
| `--accent` | `#C8102E` (Nepal-flag crimson) | `#FF8A6B` | links on hover, the underline stroke, one highlight per screen |
| `--selection` | `#C8102E1F` | `#FF8A6B33` | `::selection` background |
| `--frame` | `#FFFFFF` | `#163A5C` | polaroid frames |

Rules:
- Accent is **scarce**: link hover strokes, the crosshair dot, the active section label. Never large fills.
- All text pairs must meet WCAG AA (4.5:1). The values above were chosen to pass; re-check if any are changed.
- Blueprint mode also gets a faint grid on the whole page (`--grid` lines every 24px) — paper mode keeps the grid only inside the hero plot.

### 2.2 Typography

| Role | Font | Notes |
|---|---|---|
| Display (name, section titles) | **Fraunces** (variable) | Use `font-variation-settings: "SOFT" 50, "WONK" 1` on italics — the wonky italic is the human touch. Weight 400–500, never bold. |
| Body | **IBM Plex Sans** | 17–18px, line-height 1.6 |
| Annotations, labels, data | **IBM Plex Mono** | 12–13px, uppercase, `letter-spacing: .06em`, colour `--muted` |

- Fluid sizes with `clamp()`: name `clamp(2.5rem, 6vw, 4.5rem)`, section titles `clamp(1.5rem, 3vw, 2rem)`.
- Load via Google Fonts with `display=swap` and only the weights used, or self-host (preferred, Phase 4).
- No more than these three families. No handwriting font — "hand-drawn" comes from SVG strokes, not fonts.

### 2.3 Layout

```
desktop ≥1024px                         mobile
┌──────────┬───────────────────────┐    ┌───────────────────┐
│ margin   │ main column (≤680px)  │    │ § 01 — WORK       │  ← label goes inline
│ § 01     │                       │    │ main column       │
│ WORK     │ content…              │    │ (16px gutters)    │
│ (sticky) │                       │    └───────────────────┘
└──────────┴───────────────────────┘
```

- Left margin column (~160px) holds sticky mono section labels: `§ 01 — WORK`. The active one turns `--accent`.
- No fixed header bar. A small top line holds: name (home link) on the left, lamp toggle on the right. It scrolls away.
- Section spacing: `clamp(6rem, 12vh, 10rem)`. Hairline `--rule` between sections, with three ruler ticks at the left end.

---

## 3. Page structure (cut from 5 sections to 4)

### § 00 — Intro (the plot)
- Name in Fraunces. "Deep" has a dotted underline; hover/focus shows a tiny note: *दीप — "lamp". (Hence the switch up there.)*
- **One** sentence in Deep's own words about what Deep does. TODO(deep)
- A mono line: `KATHMANDU · 27.71°N 85.32°E · <live local time>`
- Background: the hero is a "plot area" — faint graph grid + the crosshair interaction (§4.1).
- No photo here. No buttons. Just the words and a down-pointing hand-drawn arrow next to `§ 01`.

### § 01 — Work
- A numbered **list**, not cards. 3 real projects max. Each row:
  `01   Histopathology image classification          PyTorch · Grad-CAM    ↗`
- Click a row → expands inline (§4.4) showing: *What I did / The hard part / What I learned* (2–3 sentences each) + links + one image.
- Desktop hover → a small preview image follows the cursor (§4.5).
- Tools appear as **one mono line per project**, max 3–4 items. No global skills section.
- At the end, a single prose line: *"Tools I reach for: Python, pandas, SQL, Power BI, Git, Linux. I started on C, C++ and Java."*

### § 02 — Now
Follows the [nownownow.com](https://nownownow.com) convention. A short list, dated:
- Learning: … · Reading: … · Riding: … · Building: …  — all TODO(deep)
- `last updated <date>` in mono. This section is what makes repeat visitors feel there's a person here.

### § 03 — Off-screen
- 3–5 **polaroids** (dome-house build, swimming, motorcycle, …) with handwritten-style captions in Fraunces italic. Slightly rotated (§4.6).
- One or two sentences per hobby, not a list of adjectives.

### § 04 — Say hello
- One sentence + email (click to copy, §4.7), GitHub, LinkedIn, Monkeytype. Text links, not icon squares.
- **No phone numbers** on the public site.
- Contact form: **removed** (see §6). If Deep wants it back, it stays a single textarea + email, styled as a notebook page.

### Footer
- `Built by hand in <city>. Last updated <build date>. It's <time> in Kathmandu — <"I'm probably asleep" | "probably coding" | …>.`
- The time-of-day phrase changes with Kathmandu time. Phrases: TODO(deep).

---

## 4. Interactions & motion

Global motion rules:
- Durations 150–300ms. Easing: `cubic-bezier(.2,.7,.2,1)` (define as `--ease`).
- Animate only `transform`, `opacity`, `stroke-dashoffset`, `clip-path`, `grid-template-rows`.
- `@media (prefers-reduced-motion: reduce)`: disable all movement; state changes happen instantly.
- Pointer-only effects (crosshair, cursor preview) run only when `matchMedia('(hover: hover) and (pointer: fine)')` matches.
- Every hover effect has an equivalent `:focus-visible` state.

### 4.1 Crosshair plot cursor (signature interaction) — hero only
Moving the pointer over the hero draws thin horizontal + vertical `--rule` lines through the cursor and a small mono readout near it showing **lat/long**, with the hero's centre mapped to Kathmandu (27.7172°N, 85.3240°E) and the edges ±0.5°. A small `--accent` dot sits fixed at the centre labelled `me`.

Implementation notes (learning: *avoid React re-renders for high-frequency events*):
```jsx
// PlotCursor.jsx — write CSS variables directly; no useState per mousemove
const onMove = (e) => {
  const r = el.current.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width;   // 0..1
  const y = (e.clientY - r.top) / r.height;
  el.current.style.setProperty('--x', `${x * 100}%`);
  el.current.style.setProperty('--y', `${y * 100}%`);
  readout.current.textContent =
    `${(27.7172 + (0.5 - y)).toFixed(2)}°N ${(85.324 + (x - 0.5)).toFixed(2)}°E`;
};
```
Lines are two absolutely positioned 1px divs using `left: var(--x)` / `top: var(--y)`. Hidden on touch; on touch devices show the static dot + label only.

### 4.2 Hand-drawn link underline — every inline text link
An inline SVG squiggle under the link that **draws itself** on hover/focus, in `--accent`. 3 slightly different path shapes, chosen by a stable hash of the link text so they don't all look identical.
```css
.ink-link svg path { stroke-dasharray: 1; stroke-dashoffset: 1;
  transition: stroke-dashoffset .35s var(--ease); }       /* path has pathLength="1" */
.ink-link:is(:hover, :focus-visible) svg path { stroke-dashoffset: 0; }
```
Learning: `pathLength="1"` normalises any path so the dash trick works without measuring.

### 4.3 Lamp toggle (theme) — top right
- Text button in mono: `LAMP: ON` / `LAMP: OFF`, with a tiny SVG pull-cord that swings (rotate ±8°, once) on click.
- Theme change uses the **View Transitions API**: a circular `clip-path` reveal expanding from the click point. Fallback: instant swap.
- Default follows `prefers-color-scheme`; an explicit choice is saved in `localStorage` (wrapped in try/catch). Theme is set via `data-theme` on `<html>` — **no React state needed for colours**; all colours come from CSS variables.
- Set `data-theme` with a tiny inline script in `index.html` before paint to avoid a flash.

### 4.4 Project row expand — click
- Uses the `grid-template-rows: 0fr → 1fr` trick for smooth height animation without measuring.
- The row's `↗` arrow rotates to `↘` when open. The row number gets a hand-drawn circle (SVG stroke draw, same technique as 4.2).
- Real `<button aria-expanded aria-controls>` for the row header. Only one open at a time is **not** required.
- Deep-linkable: opening a row sets `#work-<slug>`; loading that hash opens it.

### 4.5 Cursor-follow preview — project rows, desktop only
- A 240×160 image, `position: fixed`, follows the pointer with a slight lag (lerp `0.15` in `requestAnimationFrame`), rotated `-2deg`, 1px `--ink` border, no shadow.
- Fades in over 150ms on row enter, out on leave. Hidden while a row is expanded.

### 4.6 Polaroids — Off-screen section
- White (paper) / `#163A5C` (blueprint) frame, 1px `--rule` border, each with `--r` rotation between −4° and 4° set in data.
- Hover/focus: rotate to 0, `translateY(-4px)`. Click: opens a larger view in a native `<dialog>` (learning: `<dialog>` gives focus trapping and Esc for free).
- A strip of "tape" (semi-transparent rectangle) on top of each — pure CSS pseudo-element.

### 4.7 Copy email — click
- Clicking the email copies it via `navigator.clipboard.writeText`. A small Fraunces-italic note *"copied ✓"* appears beside it, rotated −3°, fades after 1.5s. Announced via an `aria-live="polite"` region.
- `mailto:` remains the fallback (e.g., right-click / no clipboard API).

### 4.8 Typing easter egg — anywhere (Monkeytype nod)
When the visitor types letters while not focused in an input, track keystrokes over a rolling 10s window. After 15+ characters, a mono toast appears bottom-left:
`you're typing at 52 wpm. my best is <N> → monkeytype` (link). WPM = (chars / 5) / minutes. Hides after 3s idle.
- Ignore modifier combos (Ctrl/Cmd shortcuts). Never `preventDefault`. Desktop only. Deep's best WPM: TODO(deep).

### 4.9 Small details
- `::selection` uses `--selection`.
- Focus ring: 2px dashed `--accent`, offset 3px (notebook feel, very visible).
- Custom favicon: a small lamp or the letter "d" in Fraunces italic. TODO(deep): choose.
- Scroll-linked: the active margin label turns `--accent` (IntersectionObserver, not scroll listeners).
- Page load: content fades up once, 8px, staggered 60ms by section. That's the only entrance animation on the site.
- `cursor: pointer` only on things that are clickable; no custom cursor sprite.

---

## 5. Content Deep must write (agents: never invent these)

Agents leave `TODO(deep): …` placeholders and list them in the PR description. Deep, answer these in plain language — imperfect and specific beats polished and vague.

1. One sentence: what do you do / what do you want to do? (Bad: "data-driven solutions". Good: "I'm a CS student who likes finding out why models get things wrong.")
2. For each of 3 projects: what you did, the hardest part, what you learned. Real links only.
   - Histopathology classification (exists)
   - Earthbag dome house (exists — what was *your* role? a number? bags filled, days, people?)
   - A third real one, or ship with two.
3. The "Now" list: learning / reading / riding / building, + date.
4. 3–5 personal photos (originals; agents will compress) + one-line captions.
5. Monkeytype best WPM; footer time-of-day phrases; city you build from.
6. Confirm: दीप = "lamp" and you're happy using it.

---

## 6. Tech decisions

| Keep | Change | Remove |
|---|---|---|
| React 18 + Vite + Tailwind v4 | All colours/fonts → CSS tokens in `index.css` `@theme` | `tailwind.config.js` (ignored by v4, imports a missing plugin) |
| GoatCounter (one privacy-friendly analytics) | Content moves into `src/content/*.js` data files | Umami script, unused Cloudflare Turnstile script, devicon CDN |
| Zoho verification file (if still needed — TODO(deep)) | Theme via `data-theme` + CSS, not React state | Supabase client + contact form (and the `@supabase/supabase-js` dep) |
| | Images → WebP/AVIF, ≤200KB, explicit `width`/`height` | `pic-one.JPG`, `pic-one.png` (10MB + 5MB), `react.svg`, `vite.svg` |
| | `README.md` rewritten for this project | Phone numbers |

**No new runtime dependencies** without Deep's OK. All interactions above are doable with CSS + small hooks — no Framer Motion, GSAP, or Lenis. (That's also the learning goal.)

### Target file structure
```
src/
  content/       site.js · projects.js · now.js · photos.js     ← all text lives here
  components/
    Intro.jsx  Work.jsx  ProjectRow.jsx  Now.jsx  OffScreen.jsx  Polaroid.jsx
    Hello.jsx  Footer.jsx  TopLine.jsx
    InkLink.jsx  LampToggle.jsx  PlotCursor.jsx  CursorPreview.jsx
    CopyEmail.jsx  TypingToast.jsx  MarginLabel.jsx
  hooks/         useFinePointer.js · useReducedMotion.js · useKathmanduTime.js
  index.css      tokens, base styles, reduced-motion rules
```

### Budgets (check before each merge)
- Lighthouse (mobile): Performance ≥ 95, Accessibility = 100, Best Practices ≥ 95, SEO = 100
- LCP < 1.5s on fast 4G · CLS < 0.02 · JS < 80KB gzipped · total page < 600KB on first load
- `<title>`, `<meta name="description">`, Open Graph + Twitter image (a 1200×630 notebook-style card)

---

## 7. Phases (one PR each)

Each phase lists what Deep should **learn** while it's built. Agents: explain these concepts briefly in the PR description.

| # | Phase | Done when | Learn |
|---|---|---|---|
| 1 | **Clean up** | Placeholder project, fake links, phone numbers, unused scripts/deps/images, dead config removed; images compressed; site still works | Why image weight dominates load time; `loading` vs `fetchpriority`; reading a Lighthouse report |
| 2 | **Content** | `src/content/*` exists, filled with Deep's words (TODOs where missing) | Separating data from presentation |
| 3 | **Tokens & type** | Paper + blueprint themes via CSS vars, fonts loaded, no `gray-*`/`blue-*` left, no-flash theme script | CSS custom properties, `@theme`, `clamp()`, colour contrast |
| 4 | **Layout & sections** | New 4-section structure, margin labels, list-based Work, responsive at 360px | Semantic HTML, CSS grid, sticky positioning |
| 5 | **Interactions** | §4.1–4.9 implemented with reduced-motion + touch fallbacks | `requestAnimationFrame`, IntersectionObserver, View Transitions, SVG stroke animation, `<dialog>` |
| 6 | **Polish & ship** | Budgets in §6 met, OG image, favicon, README, tested in Chrome/Firefox/Safari + a real phone | Performance budgets, accessibility testing with keyboard only |

---

## 8. Instructions for coding agents

1. Read this whole file before changing code. Work on **one phase per branch/PR** unless told otherwise.
2. **Never invent personal content** (bio, projects, numbers, dates, quotes, photos). Use `TODO(deep): <question>` and list every TODO in the PR description.
3. Check every visual change against the **Anti-slop list** (§1). If a request seems to require one of those, ask first.
4. Use only the tokens in §2. If a new token is needed, add it to this file in the same PR.
5. Every interaction needs: keyboard access, `:focus-visible` styling, reduced-motion behaviour, and a touch fallback.
6. Do not add runtime dependencies without asking.
7. Match existing code style; keep components small; no copy-pasted SVGs — make an `Icon`/`Squiggle` component.
8. Before opening a PR: `npm run lint`, `npm run build`, check the page at 360px, 768px, 1280px in both themes, tab through the entire page, and report Lighthouse scores.
9. When a phase is finished, tick it in §9 and note anything deferred.

---

## 9. Progress

- [x] Phase 1 — Clean up · first load ~9 MB → ~270 KB. Deferred: devicon CDN stays until the Skills grid is replaced in Phase 4; `animate-fade-in` class is a no-op (its config was dead) and goes away in Phase 4.
- [x] Phase 2 — Content · `src/content/{site,projects,now,photos}.js` hold all text and links; components read from them; one `Icon` component replaces the copy-pasted SVGs. Existing copy kept as-is; every `null` field is a `TODO(deep)` and is skipped when rendering. Section headings stay in components until the Phase 4 layout.
- [x] Phase 3 — Tokens & type · done together with Phase 4 (one PR). Paper/blueprint tokens in `index.css`, `data-theme` set before paint, Fraunces + IBM Plex via Google Fonts, no `gray-*`/`blue-*` left; all text pairs checked ≥ 4.5:1.
- [x] Phase 4 — Layout & sections · TopLine, Intro (§ 00), Work list, Now (hidden while empty), Off-screen polaroids, Say hello, Footer with Kathmandu time. Checked at 360 / 768 / 1100px, both themes, no horizontal overflow. Deferred: Lighthouse not run yet (Phase 6); fonts are ~323 KB, so self-host + subset them in Phase 6 to stay well under the 600 KB budget.
- [x] Phase 5 — Interactions · §4.1–4.9 built: crosshair plot cursor, drawn underlines (`InkLink`/`Squiggle`), lamp pull-cord + circular View Transition reveal, expandable deep-linkable project rows with drawn number circle, trailing cursor preview, polaroids → `<dialog>`, click-to-copy email, typing toast, active margin labels, one-time fade-up. Mouse-only effects are off on touch screens; reduced motion skips the reveal, the fade-up and all transitions. Waiting on content: project stories (rows show only the summary until then), name-meaning note (hidden until `site.nameMeaning` is set), Monkeytype best (toast omits it). Not built: the hand-drawn arrow next to `§ 01` (§3). Not verified: reduced-motion mode in a real browser setting, Safari/Firefox.
- [ ] Phase 6 — Polish & ship

### Decisions log
| Date | Decision | Why |
|---|---|---|
| 2026-11-02 | Concept: field notebook / blueprint, lamp toggle | Ties name, data work, and building together; avoids template look |
| 2026-11-02 | Drop contact form, Supabase, Umami, Turnstile | Less to maintain; email link is more personal |
| 2026-11-02 | GoatCounter loaded from `index.html`, not a React effect | Avoids double-counting under StrictMode; no JS needed for it |
| 2026-11-02 | Unanswered content is `null` and skipped by components, never shown as "TODO" | The live site never shows half-written text |
| 2026-11-03 | Phases 3 and 4 done as one PR | Recolouring the old layout only to replace it would be throwaway work |
| 2026-11-03 | Margin shows `§ 01`; the section title is a separate Fraunces wonky-italic heading | Gives the display font a job beyond the name; avoids printing "WORK" twice |
| 2026-11-03 | Existing About paragraphs sit under the intro sentence; the hobbies paragraph moved to Off-screen | Keeps Deep's own words until rewritten, instead of dropping them |
| 2026-11-03 | Profile photo is a polaroid (re-cropped square from the original), not a hero image | Spec says no photo in the intro; a print fits the notebook idea |
| 2026-11-03 | Fonts from Google Fonts for now | Simplest start; self-hosting is a Phase 6 task |
| 2026-11-04 | Crosshair origin is the accent dot beside the coordinates in the intro line, not the plot's centre | A centred dot landed mid-paragraph; on the coordinates, pointing at it reads exactly Kathmandu |
| 2026-11-04 | Hidden strokes are also `stroke-opacity: 0` | Round line caps paint a dot even for a zero-length dash |
| 2026-11-04 | Project summary moved inside the expandable row | Keeps the Work list scannable: number, title, tools |
| 2026-11-02 | ESLint: `react/prop-types` and `react/no-unescaped-entities` off | Plain-JS project without PropTypes; apostrophes in copy are fine |
