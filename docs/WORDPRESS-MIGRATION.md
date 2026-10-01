# Moving to WordPress + Divi

The live site (blackfincloud.com) is already WordPress, so this is a redesign of an existing install.

1. **Stage first.** Clone the live site to a staging environment (host staging tool or a plugin like WP Staging). Do not build on production.
2. **Install Divi** (Elegant Themes licence) and create a **child theme** (`blackfincloud-child`). Put the custom CSS from `src/styles/main.css` (module styles only) into the child theme `style.css`, or into Divi → Theme Options → Custom CSS.
3. **Set globals** from `docs/DIVI-MAPPING.md` → *Global settings*: colors, fonts (Plus Jakarta Sans + Inter via Divi's Google Fonts), content width 1200px, button styles, Design Presets.
4. **Build the 9 pages** (Home, About, Power Platform, Products, Industries, Past Performance, Process, CMAS Contract, Contact) with the slugs listed in `DIVI-MAPPING.md`. First build the reusable Library layouts listed in `DIVI-MAPPING.md` (Page Hero, CTA Banner, Split Feature, Card Grid, Stats Band, FAQ, Timeline, etc.), then compose each page from them. Copy text from `src/content/site.ts`. Set Home as the static front page (Settings → Reading).
   - Create the primary menu in this order: **About, Power Platform, Products, Industries, Past Performance, Process, CMAS Contract**.
5. **Theme Builder**: create the Global Header and Global Footer described in the mapping doc.
6. **Forms**: set up the discovery-call form (Divi Contact Form / Fluent Forms) to email `contracts@blackfincloud.com`; enable spam protection (reCAPTCHA).
7. **Calendly**: already set to the client's real 30-minute booking link (`https://calendly.com/blackfincloud/30min`, the same one used on go.blackfingov.com).
8. **Media**: download the Unsplash images (IDs in the mapping doc) into the Media Library, add alt text, and compress them (e.g. ShortPixel/Imagify) — serve WebP.
9. **SEO**: the new slugs are `/about`, `/power-platform`, `/products`, `/industries`, `/past-performance`, `/process`, `/cmas-contract`, `/contact` — keep any existing live-site URLs that match, and 301-redirect the old ones (e.g. old Microsoft Low-Code Platforms page → `/power-platform`; the earlier draft slug `/solutions` → `/power-platform`); install Yoast/RankMath; copy the `<title>` and meta description from `index.html`; add Organization schema.
10. **Review**: check at Divi's tablet/phone previews (980/767/479px), test the form, run Lighthouse, then push staging to production.

## Content notes to confirm before launch

- Address: per the client, the **main address is 2055 Pine Street, Redding, CA 96001**; Foothill Ranch (26632 Towne Center Dr #312) is kept as an additional office. The phone number (949) 478-0901 is from the live site (the redesign reference showed (678) 916-0124) — confirm which is current.
- LinkedIn is Owen Scott's personal profile (https://www.linkedin.com/in/owenbscott/) as requested, not a company page.
- **Products** content is transcribed from go.blackfingov.com and the three product one-sheets supplied there. The product screenshots/one-sheets are the client's own marketing images; the standalone go.blackfingov.com site can stay as-is or redirect to `/products` once launched. The one-sheet for Geospatial Management says "less than 60 days" while the web page says "weeks" — both are shown as published.
- Drafted by us (not from the live site) — confirm with the client before launch:
  - FAQ answers, the ROI calculator factors, the LinkedIn and Calendly URLs.
  - Home: the "Why Blackfin" cards and "What teams build with us" use cases.
  - About: the values, the "Ways to work with Blackfin" cards and the timeline wording (dates come from the live site: 2007, 2010, LAUSD 2014–2018, LA County 2019, CMAS 2024).
  - Power Platform: platform feature bullets, use-case pills, capabilities and the integrations list.
  - Industries: the "common challenges / what we deliver" panels and the compliance cards.
  - Past Performance: case-study bullets and fact tiles (only facts from the live site are stated as results; no metrics were invented).
  - Process: the "You bring / We deliver" lists, the illustrative week bars and the commitments.
  - Contact: the "who should reach out" and "helpful to have in mind" content.
  - CMAS: the explainer, benefits, how-to-buy steps, FAQ and NAICS descriptions (verify against the actual CMAS contract and DGS rules).
- The leadership block uses initials instead of a photo of Owen Scott — add a real portrait when available.
- Government IDs (CMAS, CAGE, UEI, DUNS, NAICS) come from the redesign reference/live site — verify before publishing.
