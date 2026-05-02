# Add FAQs Section

## 1. New component: `src/components/FAQ.tsx`
Two-column editorial layout matching the site's premium aesthetic:
- Left column: section label, headline ("Questions, *answered.*"), supporting copy, "Get in touch" link
- Right column: shadcn `Accordion` (single-collapsible) styled with display font triggers, gold hover, hairline dividers

7 FAQs covering the full audience:
1. What is guaranteed rent and how does it work?
2. Which areas do you cover?
3. What types of tenancies do you accept?
4. Do you charge landlords any fees?
5. How quickly can you take on a property?
6. What's included in an investor deal pack?
7. How do I register as an investor or list a property?

## 2. Mount in `src/pages/Index.tsx`
Insert `<FAQ />` between `<Testimonial />` and `<Contact />` so it acts as the final pre-conversion content block.

## 3. Add nav link in `src/components/Navbar.tsx`
Add `{ href: "#faq", label: "FAQs" }` between "Work With Us" and "Contact".

## Files
- Create: `src/components/FAQ.tsx`
- Edit: `src/pages/Index.tsx`, `src/components/Navbar.tsx`
