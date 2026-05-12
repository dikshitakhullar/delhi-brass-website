# Delhi Brass Website — To Do & Context

## Live URL
https://delhi-brass-website-nu.vercel.app/

## GitHub
https://github.com/dikshitakhullar/delhi-brass-website (private)

## Tech Stack
- **Next.js 16** (App Router) + **Tailwind CSS v4** + **Framer Motion**
- **Fonts**: Forum (headings) + Tenor Sans (body) via next/font/google
- **Hosting**: Vercel (auto-deploys on push to main)
- **Forms**: Google Apps Script → Google Sheet (`1ISDbogs0erRA3NT8ilcAdG4DF2o7iGFaG72vIldDG4o`)
- **E-commerce**: WhatsApp enquiry model (no Shopify yet)
- **WhatsApp**: 919810088181

## Pages
| Page | URL | Status |
|------|-----|--------|
| Homepage | `/` | Live |
| Chandeliers | `/chandeliers` | Live — 102 products, 5 images each |
| Gates | `/gates` | Live — 12 designs |
| About Us | `/about` | Live — timeline with legacy photos |
| Contact Us | `/contact` | Live — 3 locations, WhatsApp CTA |
| Trade Programme | `/trade` | Live — form → Google Sheets |
| Policies | `/policies` | Live — refund, quality, alterations |
| Designer Form (internal) | `/contact-form` | Live — staff CRM → Google Sheets |

## Google Sheet
- **Sheet ID**: `1ISDbogs0erRA3NT8ilcAdG4DF2o7iGFaG72vIldDG4o`
- **Tab "Trade Applications"**: receives trade form submissions
- **Tab "Designer Contacts"**: receives in-store designer form submissions
- **Apps Script URL**: `https://script.google.com/macros/s/AKfycbx31EMYrnMSqTAjq-oN8Y27y8vAvw8IyPENqF1CiZpzptLovIcYXKwsTEt8KzZCgIoq/exec`

---

## Priority 1 — Before Sharing Publicly

- [ ] **Get real project photos** for M3M Trump Tower, DLF Camellias, Central Park Resorts, Paras Quartier — or temporarily hide the Projects section on the homepage
- [ ] **Test forms end-to-end** — submit test entries on `/trade` and `/contact-form`, verify they appear in Google Sheets
- [ ] **Custom domain** — connect delhibrass.com in Vercel Dashboard → Settings → Domains (update DNS at registrar)
- [ ] **Google Analytics / Meta Pixel** — add tracking before sharing

## Priority 2 — New Product Pages

- [ ] **Railings page** (`/railings`) — same pattern as Gates. Need railing photos organized and categorized
- [ ] **Screen Partitions page** — CNC jali, Mughal patterns, room dividers
- [ ] **Wall Lights page** — when wall light products are ready
- [ ] **Table Lamps / Floor Lamps** — future
- [ ] **Metal Furniture** — future

## Priority 3 — Content Improvements

- [ ] **Gates catalog** — extract proper product names, materials, descriptions from the PDF at `/final gates/Delhi_Brass_Gate_Catalog.pdf`
- [ ] **About page legacy photos** — there are more HK Sir Photos (avif files in `about-us/` folder: Photos-2, 6, 10, 11) that could be added to the timeline
- [ ] **Chandelier descriptions** — currently all say "Handcrafted chandelier from our X collection." Add unique descriptions per product when ready
- [ ] **Product dimensions/specs** — add to product data when available (JSON is at `data/chandeliers.json`)

## Priority 4 — Technical Improvements

- [ ] **Individual product pages** (`/chandeliers/[slug]`) — for SEO and shareability. Currently products are modal-only. When moving to Shopify this becomes automatic
- [ ] **Sitemap.xml** — generate once custom domain is set
- [ ] **Structured data (JSON-LD)** — LocalBusiness schema for About page, Product schema for chandeliers
- [ ] **Image CDN** — if the repo gets too large (500MB+), move images to Cloudinary or Vercel Blob Storage
- [ ] **Refactor inline styles to Tailwind** — many components use inline `style={{}}` instead of Tailwind classes. Works fine but inconsistent. Low priority.
- [ ] **Extract shared FadeIn / Counter** — `components/FadeIn.tsx` exists but not all files import it yet (about, contact, trade still have local copies)
- [ ] **Use `lib/constants.ts`** — the WA number, locations, and client data are centralized in `lib/constants.ts` but not all files import from there yet

## Priority 5 — Future Features

- [ ] **Shopify integration** — when ready, replace JSON product data with Storefront API. The Product type interface is already defined in `lib/types.ts`
- [ ] **Regenerate grand-lantern-cylinder** lifestyle image — current one is out of scale, needs double-height hotel lobby
- [ ] **Search** — product search across chandeliers + gates
- [ ] **Blog / Journal** — project case studies, behind-the-scenes
- [ ] **Testimonials** — client quotes

---

## Key Files & Folders

```
app/                          # Pages (Next.js App Router)
  layout.tsx                  # Root layout — fonts, navbar, footer, intro
  page.tsx                    # Homepage — composes all home sections
  chandeliers/page.tsx        # Product grid with modal
  gates/page.tsx              # Gate designs grid
  about/page.tsx              # Heritage timeline + factory + materials
  contact/page.tsx            # Locations + WhatsApp
  trade/page.tsx              # Trade application form
  policies/page.tsx           # Refund/exchange policies
  contact-form/page.tsx       # Internal staff CRM form

components/                   # Shared components
  Navbar.tsx                  # Cream nav, mobile hamburger
  Footer.tsx                  # 4-column footer with real addresses
  IntroOverlay.tsx            # Mara-style title card intro
  FadeIn.tsx                  # Shared scroll-triggered fade animation
  home/                       # Homepage section components
    HeroSection.tsx           # Text + image with dim-to-bright
    CategoryGrid.tsx          # Asymmetric 4-card grid
    FeaturedPiece.tsx         # Noir Crystal Cascade spotlight
    HeritageSection.tsx       # 1948 counter + description
    ProjectsGrid.tsx          # M3M, DLF, Central Park, Paras
    ClienteleBar.tsx          # 7 client logos
    ShowroomsAndTrade.tsx     # Showroom cards + trade CTA

data/                         # Product data (JSON)
  chandeliers.json            # 102 products with 5 image paths each
  gates.json                  # 12 gate designs

lib/
  constants.ts                # WA number, locations, clients, shared values
  types.ts                    # TypeScript interfaces

public/images/                # All product + site images
  chandeliers/                # 102 folders, each with studio + 4 lifestyle images
  gates/                      # 12 gate photos
  mockup/                     # Hero images, category card images
  about/                      # Legacy photos, factory photos
  clients/                    # 7 client logos
```

## Design Tokens

```
Cream backgrounds: #f8f5f0, #fcfaf6, #f5f0e6
Dark charcoal:     #1c1916
Card background:   #ece6da
Gold accent:       #dcc99b
Text dark:         #1a1a1a, #2a2218
Text muted:        #888, #8a7e6e, #6a6050
```

## How to Deploy

```bash
# Push to GitHub (auto-deploys on Vercel)
git add -A && git commit -m "description" && git push origin main

# Or manual deploy
npx vercel --yes
```
