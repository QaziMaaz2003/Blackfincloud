# Blackfincloud

Marketing site for **Blackfin Cloud Services** (Microsoft Dynamics 365 & Power Platform), built in React as a blueprint for a later **WordPress + Divi** build.

- Content reference: https://www.blackfincloud.com
- Theme reference: https://speed-flow-spark.lovable.app/

## Stack

Vite + React 19 + TypeScript, plain CSS (no Tailwind), `react-router-dom` for the multipage routing. Images from Unsplash.

## Pages

| Route | Page |
| --- | --- |
| `/` | Home (why Blackfin, ecosystem, use cases, process, industries, work, gallery, ROI, FAQ) |
| `/about` | About (first item in the navbar) |
| `/solutions` | Solutions (+ low-code advantage, ROI calculator) |
| `/industries` | Industries |
| `/past-performance` | Past Performance |
| `/process` | Process |
| `/cmas-contract` | CMAS Contract |
| `/contact` | Contact (form + FAQ) |

Static hosting needs an SPA fallback to `index.html` for deep links (e.g. Netlify `_redirects`: `/* /index.html 200`). This does not apply once the site is on WordPress.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
```

## Structure — built to migrate to Divi

```
src/
  components/divi/      Section / Row / Column  (= Divi Section / Row / Column)
  components/modules/   Heading, Text, Button, Image, Blurb, Counter, Testimonial, Toggle (= Divi modules)
  sections/             Reusable page blocks: Shared.tsx (PageHero, Split, CtaBanner, StatsBand), Blocks.tsx (CardGrid, Timeline,
                        Gallery, Ecosystem, IndustryBlock, CaseStudy, StepBlock, WeekBars, ...), Content.tsx, Hero, Contact, Chrome (header/footer)
  pages/                One file per page/route
  content/site.ts       ALL copy, links, image URLs (copy into Divi modules from here)
  styles/tokens.css     Colors, fonts, radii, spacing (= Divi Theme Customizer / Design Presets)
  styles/main.css       Module styles using Divi-style class names (et_pb_*)
docs/
  DIVI-MAPPING.md       Section-by-section Divi build instructions
  WORDPRESS-MIGRATION.md
```

See [docs/DIVI-MAPPING.md](docs/DIVI-MAPPING.md) and [docs/WORDPRESS-MIGRATION.md](docs/WORDPRESS-MIGRATION.md).
