# Scrapbook Page-Turn View Transitions — PLAN 📖

> **Status (2026-07-27):** Phases 0–2 shipped & verified. Whole-site soft page-turn
> is live on every internal link; card→detail shared-element morphs work for
> Portfolio→Project and Blog→Post. Build passes, no console errors, transitions
> confirmed firing in-browser. Phase 3 (directional turns, extra flourishes) remains
> optional/deferred.

## Goal

Make navigating the portfolio feel like flipping through a handmade scrapbook /
zine — cutesy, quirky, tactile page-turn animations between routes, plus a few
"shared element" morphs (a project card growing into its detail page). Delightful,
not distracting.

---

## Important technical reality: "cross-document" vs what we'll actually build

The literal **Cross-Document View Transitions API** (`@view-transition { navigation: auto }`)
only fires on *full-page document navigations* (a real MPA where each click reloads
the browser document). **This site is a single-page app** — `frontend/src/App.tsx`
mounts one `RouterProvider` and `routes.tsx` uses `createBrowserRouter` with
client-side navigation. There is no document reload between pages, so the
cross-document API never triggers here.

Converting to an MPA to get "true" cross-document transitions would be a large,
disruptive rewrite (lose shared state, refetch on every click, rebuild routing) for
**zero visible benefit** — the visitor cannot tell the difference.

**What we'll use instead:** React Router v7's built-in **same-document view
transitions**, which drive the *same* browser View Transitions API
(`document.startViewTransition`) for client-side navigations. Same visual power
(page-turns, shared-element morphs), correct fit for an SPA.

- `<Link viewTransition>` — opts a navigation into a view transition.
- `useViewTransitionState(to)` — lets a component know it's part of the active
  transition, so we can tag shared elements with a `view-transition-name`.

> If we ever genuinely want cross-document transitions, that's a separate
> "migrate to MPA" project — explicitly out of scope here.

---

## Current stack (confirmed)

| Piece | Detail |
|---|---|
| Framework | React 18.3 SPA |
| Router | `react-router` v7 (`createBrowserRouter`, `RouterProvider`) |
| Build | Vite 6, `@vitejs/plugin-react-swc` |
| Styling | Tailwind v4 + hand-rolled CSS in `frontend/src/styles/globals.css` with `--zine-*` design tokens |
| Layout shell | `frontend/src/components/Layout.tsx` (`<Outlet/>`, already has `.zine-page-fade`) |
| Routes | `/`, `/about`, `/blog`, `/blog/:slug`, `/portfolio`, `/portfolio/:id` |

Existing animation conventions to stay consistent with: `.zine-page-fade`,
`.reveal` / `useReveal`, `.zine-card` hover wobble, cubic-bezier easings with a
little overshoot (`cubic-bezier(.2,.8,.4,1.2)`).

---

## Browser support & graceful degradation

- **Supported:** Chromium (111+), Safari 18+. Full page-turn effect.
- **Not yet:** Firefox (behind a flag as of writing).
- **Fallback:** React Router simply performs an **instant** client navigation where
  the API is missing — no error, no broken layout. The site works exactly as it does
  today; the animation is pure progressive enhancement.
- **Accessibility:** hard requirement to honor `prefers-reduced-motion: reduce` —
  collapse all transitions to a quick cross-fade (or none). Non-negotiable.

---

## Design: the transition vocabulary

### 1. Default "page turn" (route → route)
The signature effect. Outgoing page lifts/rotates away like a turning scrapbook
page (subtle 3D `rotateY` + shadow + slight translate), incoming page settles in
underneath. Kept gentle (~450–550ms) so it reads as "quirky", not "slow".

- Optional **directional** variant: forward nav turns left-to-right, `back` turns
  the other way. Nice-to-have (phase 3), needs nav-direction tracking.

### 2. Shared-element morph (list card → detail)
- **Portfolio card → Project detail:** the card title (and/or its accent/washi-tape)
  carries a `view-transition-name` so it morphs into the detail page's `<h1>` /
  header. Feels like the card *unfolds* into the page.
- **Blog card → Blog post:** same idea with the post title.
- Requires matching `view-transition-name` on both the source element (in
  `Portfolio.tsx` / `Blog.tsx`) and the destination (`ProjectDetail.tsx` /
  `BlogPost.tsx`). Names must be **unique per navigation** (e.g.
  `project-title-<id>`) or the API throws.

### 3. Scrapbook flourishes (cutesy layer)
Pseudo-element decorations on the transition group to sell the "paper" feel:
- A soft page-shadow gradient sweeping across during the turn.
- Optional torn-paper / tape "spine" accent using existing `--zine` tokens.
- Keep these CSS-only (`::view-transition-old/new`, `::view-transition-group`).

---

## Implementation plan (incremental, each step shippable)

### Phase 0 — Spike & safety net
1. Confirm `useViewTransitionState` / `viewTransition` prop are exported by the
   installed `react-router` (v7). Pin the version in `package.json` (currently `"*"`).
2. Add the `prefers-reduced-motion` guard CSS first, so every later phase is
   already accessible.

### Phase 1 — Global page-turn (biggest bang for buck)
3. Add `viewTransition` to the nav `<Link>`s in `Layout.tsx` and the in-page
   navigational links (back links, card links).
4. In `globals.css`, define `::view-transition-old(root)` / `-new(root)` keyframes
   for the page-turn (rotateY/translate/opacity + shadow). Replace or coexist with
   `.zine-page-fade`.
5. Test all six routes both directions; verify fallback + reduced-motion.

### Phase 2 — Shared-element morphs
6. Portfolio: give each card's title `viewTransitionName: project-title-${id}` when
   `useViewTransitionState` reports it's the transitioning link; mirror the name on
   the detail `<h1>`.
7. Repeat for Blog → BlogPost with the slug.
8. Tune easing/duration so the morph and the page-turn compose nicely (may scope the
   card transition so the root page-turn doesn't fight it).

### Phase 3 — Flourishes & polish (optional / nice-to-have)
9. Directional turn based on nav direction (forward vs `back`).
10. Paper-shadow sweep + tape/torn-edge pseudo-element decoration.
11. Reduce/disable heavy effects on small screens if they feel cramped.

---

## Files we'll touch

| File | Change |
|---|---|
| `frontend/src/styles/globals.css` | New `::view-transition-*` keyframes, reduced-motion guard, page-turn + morph styling |
| `frontend/src/components/Layout.tsx` | `viewTransition` on nav links; possibly a wrapper `view-transition-name` on `<main>` |
| `frontend/src/pages/Portfolio.tsx` | `viewTransition` on card links + `useViewTransitionState`, shared name on title/tape |
| `frontend/src/pages/ProjectDetail.tsx` | matching `view-transition-name` on header, `viewTransition` on back link |
| `frontend/src/pages/Blog.tsx` | same pattern as Portfolio |
| `frontend/src/pages/BlogPost.tsx` | same pattern as ProjectDetail |
| `package.json` | pin `react-router` to a concrete v7 version |
| (maybe) `frontend/src/components/zine/useViewTransitionLink.tsx` | small helper to DRY the shared-name pattern |

---

## Risks & mitigations

- **`react-router: "*"`** could resolve to a version without the API → pin it (Phase 0).
- **Duplicate `view-transition-name`** on a page throws → generate unique names per id/slug.
- **Transition fighting** (root page-turn vs card morph) → scope names / adjust which
  element owns `root`.
- **Perf on low-end devices** → keep transforms GPU-friendly (transform/opacity only),
  short durations, reduced-motion escape hatch.
- **Layout tokens** → reuse `--zine-*` variables so the effect matches the existing look.

---

## Decisions (locked)

1. **Scope: whole site.** Global page-turn on all nav routes **and** shared-element
   morphs for both Portfolio → Project *and* Blog → Post.
2. **Intensity: soft turn + paper-shadow sweep.** Gentle rotate/slide with a shadow
   sweep — charming, low risk of feeling gimmicky or slow. No full 3D flip.
3. **Shared-element morphs: in scope** (follows from whole-site scope).

### Still open (later polish, not blocking v1)
- **Directional turns** (forward vs `back`) — deferred to Phase 3 unless it falls out
  naturally.

---

## Definition of done

- Navigating between routes plays a scrapbook page-turn in supported browsers.
- At least one shared-element morph (card → detail) if in scope.
- Zero regressions in unsupported browsers (instant nav fallback).
- `prefers-reduced-motion` fully respected.
- Visuals consistent with the existing `--zine` design language.
