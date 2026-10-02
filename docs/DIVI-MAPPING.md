# React → Divi mapping

The React site is a blueprint of the Divi build. Every React block is one Divi builder element:

| React | Divi |
| --- | --- |
| `<Section>` (`src/components/divi`) | **Section** (Regular) |
| `<Row layout="1_3,1_3,1_3">` | **Row** with that column structure (`4_4`, `1_2,1_2`, `1_4,1_4,1_4,1_4`, `2_3,1_3` …) |
| `<Column>` | **Column** |
| `Heading`, `Text` | **Text** module (H2/H1 + paragraph in the visual editor) |
| `Button` | **Button** module |
| `Image` | **Image** module |
| `Blurb` | **Blurb** module (icon or image on top, title, body) |
| `Counter` | **Number Counter** module (hero stats) |
| `Testimonial` | **Testimonial** module |
| `Toggle` | **Toggle** (or **Accordion**) module |
| `RoiCalculator`, comparison table | **Code** module (HTML/CSS/JS pasted from the React output) |
| discovery form | **Contact Form** module (or Fluent Forms / WPForms) |
| Header / Footer | **Theme Builder** → Global Header / Global Footer |

CSS class names in the React app (`et_pb_section`, `et_pb_row`, `et_pb_blurb`, …) intentionally match Divi's, so the custom CSS can be re-used.

**All copy is in `src/content/site.ts`** (single file, grouped by page) — copy from there into modules. **All colors/fonts/radii are in `src/styles/tokens.css`** — see "Global settings" below.

## Global settings (Divi → Theme Customizer)

| Token | Value | Where in Divi |
| --- | --- | --- |
| `--bf-accent` | `#1f8bff` | General Settings → Color Palette (Accent); Buttons → Background |
| `--bf-teal` | `#22d3c5` | Color Palette (secondary accent) |
| `--bf-navy-900` / `--bf-navy-950` | `#0a1a33` / `#060f1f` | Dark section backgrounds, header/footer |
| `--bf-ink` | `#0d1b2e` | General Settings → Typography → Body text color |
| `--bf-muted` | `#55657a` | Lead/paragraph color inside cards |
| `--bf-bg-alt` | `#f4f7fb` | Alternating section background |
| Heading font | Plus Jakarta Sans 700/800 | Typography → Header font |
| Body font | Inter 400/500/600 | Typography → Body font (17px, line-height 1.65) |
| Content width | 1200px | Layout Settings → Website Content Width |
| Radius | 16px cards / pill buttons | Design Presets for Blurb, Toggle; Button border radius 999px |
| Breakpoints | 980 / 767 / 479 | Same as Divi's tablet / phone / small phone |

Create Design Presets: **Button/Primary**, **Button/Ghost** (transparent, white 2px border), **Blurb/Card** (white, 1px `#e2e8f1` border, 16px radius, soft shadow, hover lift via Transform → Translate Y −6px), **Toggle/FAQ**.

## Pages (9 Divi pages)

Create these WordPress pages (Pages → Add New, edit with Divi). Slugs match the React routes so URLs stay identical.

| Page | Slug | React file | Main menu |
| --- | --- | --- | --- |
| Home | `/` (set as Front Page) | `src/pages/Home.tsx` | via logo |
| Products | `/products` | `Products.tsx` | 1st item |
| About | `/about` | `About.tsx` | 2nd |
| Power Platform | `/power-platform` (formerly `/solutions` — 301 redirect) | `PowerPlatform.tsx` | 3rd |
| Industries | `/industries` | `Industries.tsx` | 4th |
| Past Performance | `/past-performance` | `PastPerformance.tsx` | 5th |
| Process | `/process` | `Process.tsx` | 6th |
| CMAS Contract | `/cmas-contract` | `CmasContract.tsx` | 7th |
| Contact | `/contact` | `Contact.tsx` | "Book Consultation" button |

**Primary menu order (Appearance → Menus):** Products, About, Power Platform, Industries, Past Performance, Process, CMAS Contract. The header's "Book Consultation" button links to `/contact`.

### Reusable Divi Library layouts (build once, save as **Global**, reuse)

| Library item | React | Divi build | Used on |
| --- | --- | --- | --- |
| **Page Hero** | `PageHero` (Shared.tsx) | Section, bg image + dark gradient overlay; Text (eyebrow, H1, lead) | every inner page |
| **CTA Banner** | `CtaBanner` | Dark gradient Section; Text; 2 Buttons | every page |
| **Split Feature** | `Split` | Row 1_2,1_2: Text (eyebrow, H2, lead, checklist, pills, Button) + Image; optional floating badge (Text module, absolute position) | About, Power Platform, Products, Contact, CMAS, Process, Contact, CMAS |
| **Card Grid** | `CardGrid` (Blocks.tsx) | Text heading + rows of 3 or 4 **Blurb** modules (icon or image on top) | nearly every page |
| **Stats Band** | `StatsBand` | Dark Section; Row of 4 **Number Counter** modules | Home, About, Past Performance |
| **Mission Band** | `MissionBand` | Dark Section; one large Text (quote) | About |
| **Timeline** | `Timeline` | Code module (HTML/CSS in `main.css` `.bf-timeline`) or 6 Blurbs in alternating columns | About |
| **Photo Mosaic** | `Gallery` | Divi **Gallery** module (grid layout) or a Row of Image modules; captions as overlay text | Home, About |
| **Ecosystem flow** | `Ecosystem` | Code module (`.bf-flow`) or Row 1_4×4 of Blurbs with arrow icons + a pill Text module beneath | Home, Power Platform |
| **Industry block** | `IndustryBlock` | Split Feature + Row 1_2,1_2 of two Text panels (Common challenges / What we deliver) | Industries |
| **Case study** | `CaseStudy` | Split Feature + Row of 4 fact tiles (Text modules or Code) | Past Performance |
| **Step block** | `StepBlock` | Split Feature with numbered badge + Row of two Text panels (You bring / We deliver) | Process |
| **Stepper / week bars** | `Stepper`, `WeekBars` | Code modules (`.bf-stepper`, `.bf-weeks`) | Process |
| **Credential tiles** | `CredentialTiles` | Row 1_4×4 of Text/Blurb modules | About, CMAS |
| **Contact action cards** | `ContactCards` | Row 1_4×4 of Blurbs with the whole card linked (Blurb → Link) | Contact |
| **Numbered steps** | `NumberedSteps` | Dark Section; Row of Blurbs with a large number as the title prefix | Contact, CMAS |
| **FAQ** | `Faq` (Content.tsx) | Toggle modules; the first open | Home (3), Power Platform (4), Process (3), Contact (5), CMAS (3) |
| **Deployment Notes** | `Deployment` | Dark Section; Testimonial + Image | Home, Past Performance |
| **ROI calculator** | `Roi` + `RoiCalculator.tsx` | Code module (markup + ~15 lines JS) | Home, Power Platform |
| **Advantage table** | `Advantage` | Code module with the comparison table | Home, Power Platform |

Page Hero background images, titles and lead text per page are in `pages` in `src/content/site.ts`. **Section backgrounds alternate white / `#f4f7fb` (dotted) / dark** to give the pages rhythm; the order below reflects that.

### Home (`/`) — 14 sections
Hero (2_3,1_3: copy + glass "One connected Microsoft stack" card; then stats row, credentials, clients) → **Why Blackfin** (6 Blurbs, 2 rows of 3) → **Ecosystem flow** + Button → **Stats Band** (160+ / 15+ / 4 / 100+) → **Advantage table** → **Use cases** (6 image Blurbs) → Process teaser (dark) → Industries teaser → Past-performance teaser → **Photo mosaic** → Deployment Notes → **ROI calculator** → About teaser → FAQ (3) → CTA banner.

### About (`/about`) — 14 sections
Page Hero → Split "Our story" (with "160+ deployments" badge) → Stats Band (Since 2010 · 60+ · 100+ · 160+) → Core competencies / Key differentiators panels → **Mission Band** → **Timeline** (2007, 2010, 2014–2018, 2019, 2024, Today) → **Values** (4 Blurbs) → Leadership (Owen Scott; initials avatar) → Photo mosaic → **Ways to work with Blackfin** (3 Blurbs) → Experience (Architecture / Governance / Adoption / Support) → **Credentials tiles** → Industries + clients pills → CTA.

### Power Platform (`/power-platform`) — 10 sections (renamed from "Solutions")
Page Hero → Ecosystem flow → 4 Split Features (Dynamics 365, Power Apps, Power Automate, Power BI; each with checklist + use-case pills + "Discuss …" Button) → Advantage table → **Capabilities** (8 Blurbs, 2 rows of 4) → Split "Built on the Microsoft tools you already use" (integration pills: Microsoft 365, Teams, Outlook, SharePoint, Excel, Azure, legacy databases, line-of-business systems) → ROI calculator → FAQ (4) → CTA.

### Industries (`/industries`) — 8 sections
Page Hero → **jump links** (pills with in-page anchors `#government-public-sector` etc.; set each Industry block's CSS ID) → 4 **Industry blocks** (image with optional badge, use-case pills, challenges/deliver panels) → **Compliance image band** (bg image + overlay Text) → 4 Blurbs (Role-based access, Traceable records, Microsoft-grade platform, Procurement-ready) → "Also serving" pills → CTA.

### Past Performance (`/past-performance`) — 10 sections
Page Hero → Stats Band (160+ / 4 / 15+ / 2019) → Case study LA County → Case study NY Power Authority → Deployment Notes → Case study LAUSD → **Also delivered for** (Chicago Elections Board, financial services, non-profits, small business) → **Why agencies choose Blackfin** (3 Blurbs) → Trusted-by pills → CTA. Each case study has 4 fact tiles (client, year/sector, platform, focus).

### Process (`/process`) — 9 sections
Page Hero → **Stepper** (01 Discovery → 02 Sprints → 03 GoLive) → 3 **Step blocks** → **Typical engagement** week bars (illustrative) → Documentation & training (dark, 3 Blurbs) → **Our commitments** (4 Blurbs) → FAQ (3) → CTA.

### Contact (`/contact`) — 7 sections
Page Hero → **Contact action cards** (Call, Email, Book a call → Calendly 30-min link, Visit → Google Maps link to the Redding address) → Discovery-call form (Divi Contact Form) → **Who should reach out** (4 image Blurbs) → Split "Helpful to have in mind" (checklist) → "What happens next" numbered steps (dark) → FAQ (5).

### Products (`/products`) — 9 sections
Content transcribed from **go.blackfingov.com** ("Blackfin Cloud for Government") plus its three product one-sheets. All text is in `productsPage`, `productsIntro`, `products`, `productValues`, `productsBand` and `productsCta` in `site.ts`.

Page Hero ("Tools you can use. Deployed now."; Buttons: *Schedule a Call* → Calendly, *See the products* → `#geospatial-management`) → **Deployment band** (dark; 4 Number Counters: < 60, < 30, < 30 days and a 30 min demo) → **Product overview** (heading + 3 card Blurbs with number, summary, deployment-time pill and an in-page "See …" link) → **3 Product sections** (CSS IDs `geospatial-management`, `project-task-automation`, `procurement-vendor-management`) → **Why Blackfin Cloud for Government** (3 Blurbs) → CTA banner "Schedule your 30 minute demo".

Each **Product section** = Row 1_2,1_2 (Text: eyebrow "Product 0N", H2, optional tagline pill, lead, checklist, 2 Buttons; Image module(s) in a browser-style frame with a floating "Less than N days" badge) + a Row of 3 (or 4) feature-group panels. Panels are Text modules with an icon and a checklist (or numbered list for "Deployment steps").

| Product | Panels |
| --- | --- |
| Geospatial Management | Potential uses · Core features · Deployment steps (< 60 days) |
| Project & Task Automation | Automation · Operations · Deployment steps (< 30 days) |
| Procurement & Vendor Management | Core capabilities · Financial & operational control · Workflow automation · Reporting & insights (< 30 days) |

- **Buttons:** "Schedule your 30 minute demo" → `https://calendly.com/blackfincloud/30min?back=1` (new tab). "View one-sheet" → Divi **Image** module with *Open in Lightbox* pointing at the full one-sheet image (the React version uses a modal with a Download link).
- **Images** are the client's own files, copied to `public/products/` → upload them to the WordPress Media Library: `geospatial-map.jpg`, `project-dashboard.jpg`, `procurement-dashboard.jpg`, `procurement-spend.jpg` (screenshots cropped from the one-sheets) and `geospatial-one-sheet.jpg`, `project-task-one-sheet.jpg`, `procurement-one-sheet.jpg` (full one-sheets).
- **Home** has a Products teaser (3 overview cards + "Explore all products" Button) between the comparison table and the use cases.

### CMAS Contract (`/cmas-contract`) — 8 sections
Page Hero → Split "What is CMAS?" (badge with contract number) → **Credentials tiles** (CMAS / CAGE / UEI / DUNS) → **NAICS list** (Code/Text module; codes + descriptions in `naicsDetail`) + Button → **Benefits** (3 Blurbs) → **How to buy** (4 numbered steps, dark) → FAQ (3) → CTA.

Scroll-in animations: on Text / Blurb / Toggle / Image modules set **Animation → Fade** (Direction: Up, Duration 600ms). Card hover lift: Blurb → Transform → hover state (Translate Y −6px). Section decoration (dotted alt background, teal/blue glows on dark sections) is plain CSS in `main.css` — paste it into Divi's custom CSS.

## Header / Footer (Theme Builder)

- **Header**: Fixed, transparent over hero, becomes `rgba(6,15,31,.92)` after scroll (Divi: Sticky Options → Background color on sticky). Logo (Image module or SVG), Menu module (Products, About, Power Platform, Industries, Past Performance, Process, CMAS Contract — **Products first**), Button "Book Consultation" → `/contact`. The active page link is teal (Divi: Menu → Link → Active Link Color `#22d3c5`).
- **Footer**: Dark section, Row 2_3,1_3,1_3,1_3 → logo + blurb + social icons · Explore (menu links + Contact) · Contact details · Government + NAICS. Legal row underneath.

## Images (Unsplash — free license; download into Media Library on WordPress)

| Use | Photo ID |
| --- | --- |
| Home hero | `1522071820081-009f0129c71c` |
| Use case — procurement | `1450101499163-c8848c66ca85` |
| Use case — case management | `1573167243872-43c6433b9d40` |
| Use case — grants | `1517842645767-c639042777db` |
| Use case — sales | `1526628953301-3e589a6a8b74` |
| Use case — automation | `1518770660439-4636190af475` |
| Use case — dashboards | `1518186285589-2f7649de83e0` |
| Mosaic — workflow mapping | `1552581234-26160f608093` |
| Mosaic — prototype reviews | `1522202176988-66273c2fd55f` |
| Mosaic — agile sprints | `1553028826-f4804a6dba3b` |
| Mosaic — open collaboration | `1556761175-4b46a572b786` |
| About hero | `1521737604893-d14cc237f11d` |
| About story | `1531482615713-2afd69097998` |
| Home About teaser | `1556761175-b413da4baf72` |
| Power Platform hero | `1451187580459-43490279c0fa` |
| Dynamics 365 | `1551288049-bebda4e38f71` |
| Power Apps | `1498050108023-c5249f4df085` |
| Power Automate | `1518770660439-4636190af475` |
| Power BI | `1460925895917-afdab827c52f` |
| Integrations | `1531973576160-7125cd663d86` |
| Industries hero | `1449824913935-59a10b8d2000` |
| Industry — Government | `1529107386315-e1a2ed48a620` |
| Industry — Financial | `1554224155-6726b3ff858f` |
| Industry — Non-profit | `1559526324-4b87b5e36e44` |
| Industry — Commercial | `1497366216548-37526070297c` |
| Compliance band | `1614064641938-3bbee52942c7` |
| Past Performance hero | `1477959858617-67f85cf4f1df` |
| LA County | `1450101499163-c8848c66ca85` |
| NY Power Authority | `1504384308090-c894fdcc538d` |
| LAUSD | `1580582932707-520aed937b7b` |
| Deployment notes | `1517245386807-bb43f82c33c4` |
| Process hero | `1519389950473-47ba0277781c` |
| Process step 01 | `1552664730-d307ca884978` |
| Process step 02 | `1531403009284-440f080d1e12` |
| Process step 03 | `1542744173-8e7e53415bb0` |
| Contact hero | `1521791136064-7986c2920216` |
| Who — Non-profits | `1559027615-cd4628902d4a` |
| Who — Commercial | `1497366811353-6870744d04b2` |
| CMAS hero | `1486406146926-c627a92ad1ab` |
| CMAS explainer | `1554469384-e58fac16e23a` |

URL pattern: `https://images.unsplash.com/photo-<ID>?auto=format&fit=crop&w=1200&q=75`.

## Not replicable 1:1 in Divi (and the fallback)

- Animated counters use Divi's Number Counter (counts up on view) — behavior matches.
- ROI calculator and comparison table are Code modules; keep them in one shared Code module each so they can be edited in one place.
- Form validation/success state: use Divi Contact Form's built-in validation and success message.
- Icons in blurbs are inline SVG in React; in Divi use the Blurb icon picker (Divi icons: "Group", "Grid", "Flash", "Bar chart", "Layers", "Shield", "Lifesaver").

## Company details used across the site (`contact` in `site.ts`)

| Item | Value | Where it appears |
| --- | --- | --- |
| Main address | 2055 Pine Street, Redding, CA 96001 | Footer, Contact page (list + "Visit" card; each links to Google Maps) |
| Additional office | 26632 Towne Center Dr #312, Foothill Ranch, CA 92610 | Footer, Contact page (labelled "Foothill Ranch office") |
| LinkedIn | https://www.linkedin.com/in/owenbscott/ | Footer social icon, About → Owen Scott block ("Connect on LinkedIn" Button) |
| Booking link | https://calendly.com/blackfincloud/30min?back=1 | Header "Book Consultation" button, Home hero "Schedule free discovery call", the CTA banner on every page, Contact page (hero button, "Book a call" card, "Book on our calendar" link), Products page (all "Schedule…" buttons). Inquiry buttons ("Talk to a specialist", "Request a quote under CMAS", etc.) still go to /contact. All open in a new tab. |
| Policy links | blackfincloud.com/terms-and-conditions/ and /privacy/ | Footer legal row (open in a new tab) |

## Logos (`public/`)

| File | Source upload | Use |
| --- | --- | --- |
| `logo-white.png` | `white.png` (white fish mark, transparent) | Header and footer (both on dark navy), next to the "Blackfin Cloud" wordmark text. In Divi: Theme Builder header/footer Logo/Image module. |
| `logo-dark.png` | `trans.png` (full dark BCS lockup, transparent; resized 2300px → 640px) | Light backgrounds: About → "Our story" and the Products overview heading. |
| `favicon.png`, `apple-touch-icon.png` | `BCS_logo.png` (lockup on white) | Browser tab icon / home-screen icon. In WordPress: Appearance → Customize → Site Identity → Site Icon (use `apple-touch-icon.png`, 180px, or a 512px export of the original). |

Original uploads remain in the client's Downloads folder; the repo holds the optimized copies only.
