# AGENTS.md

> **Project:** Nexa Flow Engineering (`nexafloweng`) — Static B2B Sales & Procurement Website  
> **Tech Stack:** Next.js 16 (App Router, Turbopack), TypeScript, Tailwind CSS, shadcn-style UI, Lucide Icons  
> **Core Objective:** Lightweight, high-speed static lead generation (RFQ) for GCC piping procurement.

---

## 1. Technical Guidelines & Performance Rules

* **Static Export:** `next.config.js` must set `output: 'export'` and `images: { unoptimized: true }`. No server-side runtime required.
* **Mobile-First & Ultra-Lightweight:** 
  * Design for mobile screens first (`360px+`), then scale up using Tailwind (`md:`, `lg:`).
  * Minimize JS bundle size. Avoid heavy animation libraries; use native CSS transitions (`transition-all duration-200`).
  * Ensure fast rendering for field procurement engineers on mobile/low-bandwidth networks.
* **Color Palette (Professional Navy / Steel Blue):**
  * **Primary:** Deep Navy (`#12283F` / `bg-navy`, `#0B1C2E` / `bg-navy-dark`)
  * **Accent:** Steel Blue (`#2F6899` / `bg-steel-600`)
  * **Background:** Clean White / Light Slate (`#FFFFFF` / `bg-slate-50`)

---

## 2. Project Directory Structure

```text
nexafloweng/
├── public/
│   └── images/             # Optimized WebP assets
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout + viewport metadata
│   │   ├── page.tsx        # High-conversion landing page
│   │   ├── products/
│   │   │   └── page.tsx    # Full inventory catalog page
│   │   ├── quote/
│   │   │   └── page.tsx    # Dedicated RFQ page (form + WhatsApp)
│   │   └── globals.css     # Minimal CSS + Tailwind setup
│   ├── components/
│   │   ├── ui/             # Fast shadcn-style components (button, card, input)
│   │   ├── Navbar.tsx      # Sticky multi-page nav with mobile drawer
│   │   ├── Hero.tsx        # Compact mobile hero + quote CTAs
│   │   ├── Products.tsx    # Responsive product grid & spec chips
│   │   ├── Standards.tsx   # Trust badges (ASTM, API 5L, ASME)
│   │   ├── QuoteForm.tsx   # Client form: mailto + WhatsApp submit
│   │   └── Footer.tsx      # Direct WhatsApp/Call links & locations
│   └── config/
│       ├── site.ts         # Company contacts, UAE/KSA locations
│       └── catalog.tsx     # Product specifications data
├── package.json
└── AGENTS.md
```

---

## 3. Core Page Sections & Mobile Components

### A. Mobile Header & Action Bar (Navbar.tsx)
Top Bar (Mobile): Tap-to-call phone number and WhatsApp button for quick procurement access.

Main Bar: Logo, compact hamburger menu, and a high-visibility "Get a Quote" primary button linking to `/quote`.

### B. Mobile Hero Section (Hero.tsx)
Title: "Industrial Piping, Fittings & Valve Stockist — GCC"

Sub-text: "API 5L line pipes, ASTM flanges, and valves with full EN 10204 3.1 MTR traceability."

Primary CTAs: Full-width mobile buttons: [ Request Quick Quote ] → `/quote` and [ View Inventory ] → `/products`.

### C. Responsive Product Grid (Products.tsx, /products page)
Single column on mobile (grid-cols-1), two on tablet (md:grid-cols-2), four on desktop (lg:grid-cols-4).

Card Items:

Seamless Line Pipes: API 5L, ASTM A106/A333, SCH 40 to SCH 160.

Buttweld Fittings: ASME B16.9 Tees, Elbows, Reducers.

Forged Flanges: ASME B16.5 Weld Neck, Slip-On, Blind (Class 150-2500).

Flow Valves: Gate, Globe, Ball, and Check valves.

### D. Standards & Certification Badges (Standards.tsx)
Horizontal scrolling or responsive wrap badges: API 5L | ASTM A106 | ASME B16.5 | ISO 9001:2015 | EN 10204 3.1.

### E. Dedicated RFQ Page (QuoteForm.tsx, /quote page)
Mobile-friendly inputs with large tap targets (h-12 minimum height).

Fields: Name, Company, Email/Phone, Destination (UAE / KSA / Oman / Qatar / Kuwait), and Bill of Materials (BOM) detail box.

Dual submit: fast `mailto:` link to the RFQ inbox or a prefilled WhatsApp message (`wa.me`) — no backend required.

## 4. Visual Assets & Image Fallbacks
To keep load times fast without relying on heavy external assets, use standard royalty-free placeholders or inline SVG placeholders:

Hero Background / Storage Yard:

## 5. Agent Implementation Directives
Keep HTML markup semantic (<header>, <main>, <section>, <footer>).

Do not load heavy 3D or dynamic canvas animation libraries.

Ensure every form input and button has an accessible aria-label and adequate padding (p-3 minimum) for touchscreens.

Export the static site build using npm run build and ensure zero dynamic server routes exist.