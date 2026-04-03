# DFL24 WEBSITE — FULL REDESIGN BRIEF

You are refactoring the DFL24 website (Next.js 16 + Tailwind v4 + TypeScript + framer-motion). The current site has been rejected by stakeholders. You must redesign it following the specifications below. Do NOT create a new project — refactor the existing codebase in place.

---

## CRITICAL ISSUES TO FIX (Stakeholder Feedback)

1. **Design looks like a clone of old site, looks fake** → Redesign all pages with new branding
2. **Font and colors not following brand guidelines** → Must change
3. **About Us and Products sections have no real content** → Fill with content below
4. **Member registration tab doesn't work** → Fix the form (currently `action="#"`)
5. **Logo not updated, OG image still old** → Replace everywhere
6. **Short description / meta tags not updated** → Update all metadata
7. **Mobile version is broken** → Fix responsive on all pages
8. **Site needs to be rebuilt, not patched** → Treat this as a visual overhaul

---

## BRANDING GUIDELINES

### Logo
- New logo file: `/public/assets/img/dfl24-logo.png` (DFL in solid blue, 24 in blue→teal gradient with line art)
- Replace ALL references to `logo-v2-dfl.jpg` with `dfl24-logo.png`
- Logo should render on white/light backgrounds with no background color of its own

### Color System (Navy-First — must match logo)
```css
/* PRIMARY — from logo */
--navy: #0B1F3A;           /* Deep navy - for dark sections, text */
--blue-logo: #0540A9;      /* Logo blue - primary brand color */
--blue-mid: #1260C7;       /* Mid blue */
--blue-electric: #2F80ED;  /* Electric blue - accent, CTAs */

/* SECONDARY — from logo "24" gradient */
--teal: #00B4A6;           /* Teal - secondary accent */
--teal-light: #3DD6C8;     /* Light teal */
--cyan: #00D4FF;           /* Cyan highlight */

/* NEUTRALS */
--dark-gray: #1F2937;
--light-gray: #F5F7FA;
--light-bg: #F0F4FA;
--white: #FFFFFF;
```

### Typography
- **Headings**: `Sora` (from Google Fonts) — weight 600, 700, 800
- **Body**: `DM Sans` (from Google Fonts) — weight 400, 500, 600
- Remove Nunito entirely
- Headlines: Bold, clean, tight tracking
- Body: High readability, generous line height

### Design Style
- Minimal, structured, grid-based
- Dashboard / fintech UI inspired
- No stock photo backgrounds on hero sections — use gradients, geometric patterns, SVG circuit-line patterns
- Navy-first: dark hero sections with light text, alternating with light sections
- Rounded cards (2rem+), subtle shadows, glass-morphism effects
- Smooth scroll, subtle entrance animations (already has framer-motion)

---

## FILE-BY-FILE CHANGES

### 1. `src/app/globals.css`
Update ALL CSS custom properties:
```css
:root {
  --background: 210 30% 98%;
  --foreground: 213 50% 12%;
  --card: 0 0% 100%;
  --card-foreground: 213 50% 12%;
  --primary: 214 93% 33%;        /* #0540A9 - logo blue */
  --primary-foreground: 0 0% 98%;
  --secondary: 174 100% 35%;     /* #00B4A6 - teal */
  --secondary-foreground: 0 0% 98%;
  --accent: 213 84% 56%;         /* #2F80ED - electric blue */
  --accent-foreground: 0 0% 98%;
  --highlight: 191 100% 50%;     /* #00D4FF - cyan */
  --highlight-foreground: 213 50% 12%;
  --muted: 210 30% 95%;
  --muted-foreground: 215 15% 45%;
  --border: 214 20% 90%;
  --input: 214 20% 90%;
  --ring: 214 93% 33%;
  --radius: 1rem;
}

.dark {
  --background: 220 25% 6%;
  --foreground: 0 0% 98%;
  --card: 220 20% 10%;
  --card-foreground: 0 0% 98%;
  --primary: 214 93% 40%;
  --primary-foreground: 0 0% 98%;
  --secondary: 174 100% 35%;
  --secondary-foreground: 0 0% 98%;
  --accent: 213 84% 56%;
  --accent-foreground: 0 0% 98%;
  --highlight: 191 100% 50%;
  --highlight-foreground: 0 0% 98%;
  --muted: 220 15% 15%;
  --muted-foreground: 220 10% 60%;
  --border: 220 15% 18%;
  --input: 220 15% 18%;
  --ring: 214 93% 40%;
}
```

Also update the `@theme inline` block to reference these new values. Remove any leftover green (#4CAE4F) references.

### 2. `src/app/layout.tsx`
- Replace `Nunito` font import with `Sora` + `DM_Sans` from `next/font/google`
- Use Sora for headings (via CSS class), DM Sans as default body
- Update metadata:
  - title: "DFL24 — Da Nang Fintech Lab | Sandbox your Future"
  - description: "Your Gateway to Fintech Innovation in Vietnam. Sandbox-as-a-Service, cross-border testing, regulatory acceleration — everything fintech companies need to build, test, and scale."
  - OG image: point to new image or `/assets/img/dfl24-logo.png`
- Update favicon reference
- Remove `@replit` from twitter meta

### 3. `src/common/Header.tsx`
- Replace logo: `logo-v2-dfl.jpg` → `dfl24-logo.png`
- Simplify nav structure for single-page feel. Keep current multi-page routing but update styling:
  - Nav text color should be `--navy` on light, white on dark
  - CTA button "Apply for Sandbox" should use `--blue-electric` (#2F80ED) background
  - Mobile menu needs proper z-index, smooth animation, and full-width tap targets
  - Navbar background: `bg-white/80 backdrop-blur-xl` (light mode)
- Fix: dropdown menus should work on mobile (currently desktop-only hover)

### 4. `src/common/Footer.tsx`
- Replace logo reference
- Form `action="#"` → integrate with a service or at minimum add `https://formspree.io/f/YOUR_ID` placeholder with comment
- Update footer description: "The Future of Fintech Innovation & Sandbox Infrastructure"
- Remove "Strategic Initiative under Resolution 259/NQ-CP" — keep it simpler
- Update "Join DFL in DAVAS 2026" section styling

### 5. `src/app/page.tsx` (HOMEPAGE — most critical)
This is the main landing page. Restructure with this content:

#### HERO SECTION
- Headline: "Your Gateway to Fintech Innovation in Vietnam"
- Sub-headline: "Sandbox-as-a-Service. Cross-border testing. Regulatory acceleration. Everything fintech companies need to build, test, and scale — in one platform."
- Slogan badge: "Sandbox your Future"
- 2 CTAs: "Apply for Sandbox" (primary) + "Join DFL in DAVAS 2026" (secondary)
- Background: Navy gradient with subtle geometric/circuit pattern (CSS only, no image)

#### ABOUT DFL24 SECTION
Full content:
"DFL24 – Danang Fintech Lab. Where innovation meets sovereignty. Where every district becomes a gateway to the future.

DFL24 is not just a fintech sandbox. It is a purpose-built innovation ecosystem, strategically anchored inside the Vietnam International Financial Centre (VIFC) in Đà Nẵng. As one of the first 10 strategic investors licensed as members of VIFC Đà Nẵng, we stand at the forefront of shaping Vietnam's new financial landscape."

**What We Deliver** (5 items as cards):
1. Sandbox 2.0 Infrastructure — A living laboratory that enables real-world testing with real data, real users, and real market dynamics.
2. Regulatory & Legal Navigation — Direct support from experts to streamline approvals and embed compliance from day one.
3. Cross-Border Testing — A launchpad to Southeast Asia's most vibrant economies, enabling seamless piloting and scaling across borders.
4. Corporate Innovation Programs — Tailored collaborations with financial institutions and enterprises to co-create next-generation solutions.
5. End-to-End Growth Support — From incubation and acceleration to go-to-market execution, de-risking every step of the journey.

#### THE STORY BEHIND "24" SECTION
"24 is not a year. It is not a number of hours. It is a statement of identity, unity, and ambition.

24 stands for the 24 districts and townships of Đà Nẵng – including the two island districts of Hoàng Sa (Paracel) and Trường Sa (Spratly)."

4 meaning cards:
- Completeness — Just as 24 districts make Đà Nẵng whole, DFL24 brings together every piece of the fintech puzzle: regulation, infrastructure, capital, and talent.
- Unwavering Presence — Like the 24/7 rhythm of a city that never sleeps, we stand ready to support innovators anytime, anywhere.
- A Vision Without Borders — The two island districts remind us that true innovation knows no boundaries.
- Rooted Yet Global — We draw strength from our local foundation, while thinking and acting on a global scale. 24 is our anchor; Southeast Asia is our horizon.

Closing: "More Than a Sandbox. A Launchpad with Purpose."

#### PRODUCT SUITE SECTION
5 products in card grid:

**1. Sandbox-as-a-Service**
- Tagline: Launch fast. Test safely. Scale with confidence.
- What you get: Secure cloud sandbox environment, API integrations (Payment, KYC, Banking simulation), Built-in compliance layer (KYC/AML, reporting)
- Use cases: Payment flow testing, Credit scoring models, Crypto on/off ramp validation

**2. Cross-border Sandbox**
- Tagline: Test across markets. Launch globally.
- What you get: Multi-market testing (Vietnam ↔ International), FX simulation & multi-currency flows, Regulatory advisory & pilot structuring

**3. Corporate Sandbox Program**
- What you get: Startup solution testing environment, Curated deal flow access, Pilot execution (4–12 weeks) with KPI tracking
- Use cases: AI fraud detection (banks), Cross-border payments (airlines), Embedded lending (platforms)

**4. Embedded Finance Lab**
- Tagline: Monetize your platform with financial services.
- What you get: Embedded finance design (payments, lending, wallets), Sandbox testing & API integration, Go-to-market & pilot launch support
- Use cases: SaaS integrating payments, Marketplace offering lending, Platforms launching wallets

**5. Compliance Sandbox**
- Tagline: Test compliance before regulators do.
- What you get: KYC/AML/transaction monitoring testing, Risk simulation & audit scenarios, Regulatory advisory & sandbox readiness
- Use cases: Crypto AML testing, Compliance AI validation, RegTech product certification

#### BUNDLED SOLUTIONS SECTION
3 packages:
- Startup Package: Sandbox + Compliance
- Scale-up Package: Cross-border + Compliance
- Corporate Package: Sandbox + Deal Flow

#### COHORT 01 — 2026 SECTION
- 5 startups, 2 corporates, 3 months
- Benefits: Full sandbox access, Regulatory support, Pilot execution, Investor & partner exposure
- Tagline: "Your fast track into Vietnam's fintech ecosystem"

#### WHY DFL24 SECTION
5 advantage cards:
- Speed → Launch sandbox in weeks, not months
- Regulatory Access → Direct pathway into Vietnam sandbox frameworks
- Cross-border Capability → Test globally from one platform
- Cost Advantage → 4–5× cheaper than Singapore
- Full-stack Support → Tech + compliance + market entry

#### CTA SECTION
- "Ready to build in Vietnam?"
- "Book a free consultation and enter the DFL sandbox ecosystem."
- Buttons: "Apply Now" + "Talk to our team"
- LinkedIn links: https://www.linkedin.com/company/dfl24/ and https://www.linkedin.com/showcase/fintech-sandbox-vietnam/

### 6. ALL OTHER PAGES
- `about/page.tsx` — Keep team section, update branding colors
- `vision/page.tsx` — Update branding
- `partners/page.tsx` — Keep partner logos and mentors, update branding
- `accelerator/page.tsx` — Update branding
- `sandbox/page.tsx` — Update branding
- `blockchain/page.tsx` — Update branding, remove inline style injection in useEffect
- `contact/page.tsx` — Update branding
- `data/page.tsx` — Update branding
- `green-finance/page.tsx` — Update branding, fix `text-black dark:text-black` → should be `text-foreground`

### 7. ALL METADATA across layouts
Search and replace in ALL layout.tsx and page.tsx files:
- Remove `site: "@replit"` from twitter meta
- Update all descriptions to mention DFL24 (not just DFL)
- Update all OG images to new logo/image
- Update all titles to use "DFL24" consistently

---

## DESIGN PATTERNS TO FOLLOW

### Hero sections (all pages)
- Navy gradient background (#0B1F3A → #0E2A52) with CSS geometric pattern overlay
- White text, Sora font
- No stock images in hero backgrounds — use gradients + abstract SVG patterns

### Cards
- White background, rounded-2xl or rounded-3xl
- Subtle border (border-gray-100 or border-primary/10)
- Hover: slight lift (translateY -2px) + shadow increase
- Icon in colored circle (primary/10 background)

### Section alternation
- Dark navy section → Light white/gray section → Dark navy section
- This creates visual rhythm

### Buttons
- Primary: bg-blue-electric (#2F80ED), white text, rounded-full, shadow
- Secondary: bg-transparent, border-primary, text-primary, rounded-full
- Hover: darken slightly + increase shadow

### Typography scale
- Hero headline: text-5xl md:text-7xl, font-black, tracking-tighter
- Section headline: text-3xl md:text-5xl, font-bold
- Card title: text-xl or text-2xl, font-bold
- Body: text-lg, font-normal, text-muted-foreground

---

## IMPORTANT NOTES

- Keep all existing images in `/public/assets/img/` — they're fine, just update logo
- Keep framer-motion animations (FadeInUp, FadeIn components)
- Keep the multi-page routing structure (about, vision, partners, etc.)
- The homepage should be the most polished page — it's the landing page
- Ensure mobile hamburger menu works properly with smooth open/close
- Fix any `text-black dark:text-black` patterns → should be `text-foreground`
- Remove any hardcoded green colors (#4CAE4F, hsl(122...)) → replace with blue palette
- Test that dark mode still works (though light mode is primary)
