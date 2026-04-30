## Add floating WhatsApp button

Add an always-visible WhatsApp chat button fixed to the bottom-right of every page, linking to `https://wa.me/447491967777`.

### Design

- Round green button (WhatsApp brand green `#25D366`), 56px on desktop, 52px on mobile
- White WhatsApp icon centered (using `MessageCircle` from lucide-react styled as the WhatsApp glyph, since lucide doesn't ship a brand WhatsApp icon — alternatively inline a small SVG of the official WhatsApp logo for authenticity)
- Soft drop shadow + subtle pulse/ping ring on idle to draw attention
- Hover: slight scale-up, shadow deepens
- Position: `fixed bottom-6 right-6` with `z-50` so it sits above all sections
- Tooltip on hover: "Chat on WhatsApp"
- `aria-label="Chat on WhatsApp"`, opens in new tab (`target="_blank"`, `rel="noopener noreferrer"`)

### Implementation

1. Create `src/components/WhatsAppFloat.tsx` — self-contained fixed-position anchor with inline SVG of the official WhatsApp logo (so the icon is recognisably WhatsApp rather than a generic chat bubble).
2. Mount it once in `src/pages/Index.tsx` after `<Footer />` so it appears on the home page. (If we later add more routes, we can lift it into `App.tsx`.)

No other files change. The existing "Chat on WhatsApp" CTA inside the Contact section stays as-is.