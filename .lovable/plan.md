# P S Traders — Refinements & Footer Rebuild

## 1. Rentals (`src/components/Rentals.tsx`)
- Title: change to **"Quality homes across *West London*."** (drop "— all arrangements welcome").
- Status updates — set `status: "Let Agreed"` for every rental EXCEPT:
  - HA2 (3-Bed Semi with Driveway) → stays Available
  - UB3 (3-Bed Townhouse with Garage) → stays Available
  - UB3 (3-Bed Apartment Above Shop Unit) → stays Available
  - TW14 (5-Bed Professional HMO) → stays Available
- All others (TW8, TW3, UB8, W7) → `Let Agreed`.

## 2. Deals — Investor Opportunities (`src/components/Deals.tsx`)
- Title: change to **"Investment *Opportunities*."** (drop "— BMV & High ROI").
- Swap 2 properties to London:
  - Birmingham B23 1930s Semi → **London · N17** (adjust purchase £325k, refurb £30k, GDV £420k, Net £45K)
  - Birmingham B1 Apartment Block → **London · SW9** (adjust purchase £620k, refurb £90k, GDV £880k, ROI 24%)

## 3. About (`src/components/About.tsx`)
- `120+ Deals sourced` → **`75+`**
- `£18M Property transacted` → **`£7M`**

## 4. Testimonials (`src/components/Testimonial.tsx`)
- Landlord (TW3) → name **"Mr Grover"**, role stays "Landlord · TW3", initial "G"
- Tenant (UB1) → name **"C Flores"**, role stays "Tenant · West London", initial "C"

## 5. Contact (`src/components/Contact.tsx`)
- Email card: show both
  - Primary: **info@pstrader.co.uk**
  - Secondary (smaller): pstraders.ltd@outlook.com

## 6. Hero CTAs (`src/components/Hero.tsx`)
Strengthen action buttons. Replace current 2 buttons with 4 stronger CTAs:
- **Book a Consultation** → `#contact` (primary cream button)
- **List Your Property** → `#contact` (outline)
- **View Investment Deals** → `#deals` (outline)
- **Contact Us** → `#contact` (ghost/text link)

Layout: wrap in flex; on mobile stacks, on desktop row.

## 7. Navbar Logo Premium Refresh (`src/components/Navbar.tsx`)
- Add small `KeyRound` lucide icon (gold) before wordmark.
- Tighten spacing; use `font-display font-medium tracking-[0.02em]` for "P S Traders", separator dot, then "Ltd" in gold uppercase tracking.
- Same treatment in Footer brand block.

## 8. Footer Rebuild (`src/components/Footer.tsx`)
New structure with premium feel and full company info.

```text
┌─────────────────────────────────────────────────────────────┐
│ [Key icon] P S Traders · Ltd                                │
│ Tagline line                                                │
│                                                             │
│ EXPLORE        CONTACT              COMPANY                 │
│ Landlords      07491 967777         Company No. 14958592    │
│ Rentals        info@pstrader.co.uk  357a Hanworth Road      │
│ Investor Deals pstraders.ltd@…      Hounslow, TW3 3SQ       │
│ Work With Us                                                │
│ Contact                                                     │
│                                                             │
│ CTA row: [Book a Consultation] [List Your Property]         │
│         [View Investment Deals]                             │
├─────────────────────────────────────────────────────────────┤
│ © 2026 P S Traders Ltd. Company No. 14958592   Privacy │ … │
└─────────────────────────────────────────────────────────────┘
```

Details:
- Logo with `KeyRound` icon in gold + refined wordmark
- 4-column grid (brand / explore / contact / company) on desktop
- CTA row above bottom bar with 3 strong pill buttons
- Bottom bar: copyright (with year + company no.) · Privacy Policy link (`/privacy`) · tagline
- Phone, email (both), company number, address all included

## 9. Privacy Policy Page
- New file `src/pages/Privacy.tsx` — standard UK privacy policy template referencing P S Traders Ltd, Company No. 14958592, registered at 357a Hanworth Road, Hounslow, TW3 3SQ, contact info@pstrader.co.uk. Sections: Introduction, Data we collect, How we use it, Lawful basis, Sharing, Cookies, Your rights, Contact.
- Includes Navbar + simple footer link back home.
- Register route in `src/App.tsx`: `<Route path="/privacy" element={<Privacy />} />` before the catch-all.

## Files touched
- Edit: `Rentals.tsx`, `Deals.tsx`, `About.tsx`, `Testimonial.tsx`, `Contact.tsx`, `Hero.tsx`, `Navbar.tsx`, `Footer.tsx`, `App.tsx`
- Create: `src/pages/Privacy.tsx`
