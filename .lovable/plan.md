## Copy & layout cleanup across the site

### 1. `src/components/Services.tsx`
- Lettings card body → "Professionally refurbished 2–4 bed homes across West London. Open to providers, families, professionals and corporate tenants — all arrangements welcome."
- Investor Deal Sourcing card body → "Off-market BMV and high-ROI projects across the UK — fully analysed, packaged and ready for serious investors."

### 2. `src/components/Rentals.tsx` (header block)
- Heading → "Quality homes across *West London* — all arrangements welcome."
- Subhead → "A curated selection of professionally managed rentals, open to providers, families, professionals and corporate tenants."

### 3. `src/components/Deals.tsx` (header block)
- Heading → "Investment Opportunities — *BMV & High ROI.*"
- Subhead → "Sourced, analysed and packaged. Each deal comes with full numbers, comparables and a refurb scope — ready to move on. Message us for BMV and high ROI deals."

### 4. `src/components/About.tsx`
- "Est. 2019" → "Est. 2023"
- "Manchester, UK" → "London"

### 5. `src/components/Testimonial.tsx`
- Landlord name "Placeholder Landlord" → "TW3"
- Tenant name "Placeholder Tenant" → "UB1"

### 6. Remove the entire Landlords section (items 4 + 5 + 6)
The Landlords component contains both the "Why work with us" benefits column and the "Register a property" form, plus the inline WhatsApp button. The user wants all of it gone (the floating WhatsApp button already covers chat). Action:
- In `src/pages/Index.tsx`: remove the `import Landlords from "@/components/Landlords"` line and the `<Landlords />` render.
- Delete `src/components/Landlords.tsx`.

### 7. Remove inline WhatsApp banner from Contact (item 6 follow-through)
- In `src/components/Contact.tsx`: remove the navy "Prefer to message? We're on WhatsApp." banner block (lines ~48–69) and drop the now-unused `MessageCircle` import. The phone / email / office cards stay. The floating WhatsApp button remains the single chat entry point.

No styling system, design tokens, or other components are touched.