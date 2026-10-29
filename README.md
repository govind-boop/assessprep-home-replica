# AssessPrep homepage replica (Astro)

A hand-coded [Astro](https://astro.build) replica of the **current live AssessPrep homepage**
(<https://www.assessprep.com/>, built in Framer). It is a 1:1 copy of what is live today, not a
redesign: same sections, order, copy, images, layout, colours, fonts and spacing, with the
basic interactions reimplemented in plain CSS and a little vanilla JS.

Only the homepage is replicated. Nav, footer and CTA links point at the live
`www.assessprep.com` URLs.

## Running it

Requires Node `>=22.22` (Astro is pinned to `7.4.1`, the last release that supports Node 22.22).

```sh
npm install
npm run dev              # http://localhost:4340
# or, in the background:
npx astro dev --background --port 4340   # stop with: npx astro dev stop
npm run build && npm run preview         # static production build in dist/
```

## Structure

```
src/
  layouts/Base.astro        <head>, meta, Google Fonts
  styles/global.css         design tokens, self-hosted fonts, shared buttons/badges
  data/site.ts              nav menus + all outbound links
  components/
    Navbar.astro            floating bar that compacts to a pill on scroll, hover dropdowns,
                            hamburger menu below 1200px
    Hero.astro              heading, CTA, concentric rings, school-logo marquee
    Stats.astro             4 stat icons + "Wave goodbye to ___" word ticker
    Features.astro          4 feature cards (2 SVG illustrations + 2 Lottie animations)
    Impact.astro            "See the difference..." numbers
    AIAssistant.astro       dark "AssessPrep AI" bento (authored at 1200x900, scaled to fit)
    Integrations.astro      rotating integrations orbit
    Testimonials.astro      auto-scrolling review carousel with click-to-play YouTube videos
    CTA.astro               "Simplify your assessments today"
    Footer.astro            desktop footer + the different mobile footer the live site uses
public/
  images/                   images/SVGs downloaded from framerusercontent.com + YouTube thumbs
  icons/                    inline SVG icons extracted from the live DOM
  lottie/                   the two Lottie JSON files from the live site
  fonts/                    Inter Display + Switzer (self-hosted, from the live site)
```

## What was replicated

In page order: navbar (incl. dropdown menus and mobile menu), hero + trusted-by logo marquee,
stats row, "Wave goodbye to" ticker, "All-in-One Platform" feature cards, "Impact at a Glance"
numbers, "AssessPrep AI" bento, "10+ Integrations" orbit, "Trusted by educators worldwide"
testimonials, the "Simplify your assessments today" CTA, and the footer.

Responsive at the same breakpoints Framer uses: desktop (1200px and up), tablet (810–1199px)
and mobile (below 810px). Mobile-only copy from the live site is kept (e.g. "Students insights
generated", the "Curriculum" menu label, the mobile footer link set and its "© 2025" line).

Fonts match what the live page actually loads: **Plus Jakarta Sans** (headings),
**Inter Tight** (body), **Inter**, **Manrope** (footer legal), **Inter Display** (stats/AI
copy) and **Switzer** (the "Wave goodbye to" line). The live homepage does **not** use Gelica,
so this replica doesn't either.

## Known gaps / approximations

- **Framer motion is approximated.** Scroll and appear animations (fade/slide-ins, the 3D tilt
  on the hero heading, staggered star fills) are left out or simplified. The logo marquee,
  testimonial carousel, word ticker, orbit rotation and sphere spin are CSS/JS
  re-implementations, so speeds and easing are close but not identical.
- **"Wave goodbye to" ticker.** It steps one word every ~2.2s. The live ticker's exact timing
  wasn't reverse-engineered.
- **Integrations header canvas.** The faint animated particle canvas behind "10+ Integrations"
  is replaced by its static radial-gradient background.
- **Hidden live micro-interactions.** These aren't reproduced in the AI bento: the toggle
  knob, Generate button hover and similar states. All artwork, copy and layout are reproduced.
  The "AI-powered grading" and "Translate assessments" tiles use the live site's flattened
  artwork, so their text is part of the image.
- **Lottie.** The two feature-card animations use the original Lottie JSON with
  `lottie-web`'s *light* build (SVG renderer, no expression support).
- **YouTube.** Testimonial videos load as a thumbnail with a play button. The real
  `youtube-nocookie` embed only loads on click. The live site embeds iframes up front.
- **Dropdown icon tiles.** The tinted icon tiles in the nav menus are recreated in CSS. The icons
  themselves are the live SVGs.
- **Font licensing.** Switzer (Fontshare) and Inter Display were copied from the live site's font
  CDN. Check licensing before shipping to production.
- **Tablet (810–1199px)** is a sensible adaptation rather than a pixel match. Desktop (1440px)
  and mobile (390px) were the verified targets.
