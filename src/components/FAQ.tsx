import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is guaranteed rent and how does it work?",
    a: "We lease your property directly from you on a 3–5 year agreement and pay you a fixed monthly rent — on time, every month, whether the property is occupied or not. We handle tenants, management, day-to-day maintenance and void periods. You get predictable income and zero hassle.",
  },
  {
    q: "Which areas do you cover?",
    a: "Our lettings and management focus is West London — Hounslow, Brentford, Hayes, Feltham, Harrow, Uxbridge, Hanwell and surrounding postcodes. For investor deal sourcing we work across the UK, with a particular focus on London, the Midlands and the North West.",
  },
  {
    q: "What types of tenancies do you accept?",
    a: "All arrangements are welcome — standard ASTs, families, professionals, sharers, corporate lets and contracts with housing providers. Each property is matched with the most suitable tenant profile.",
  },
  {
    q: "Do you charge landlords any fees?",
    a: "On guaranteed rent agreements there are no management fees, no commission, no void deductions and no surprise charges. The rent we agree is the rent you receive each month.",
  },
  {
    q: "How quickly can you take on a property?",
    a: "We typically issue an offer within 48 hours of a viewing. Once terms are agreed, we can complete paperwork and take the keys within 1–2 weeks, depending on the property's condition.",
  },
  {
    q: "What's included in an investor deal pack?",
    a: "Every deal comes fully analysed: purchase price, refurb scope and costs, comparables, GDV/end value, projected ROI or yield, and exit strategy. Packs are sent only to verified investors on our list.",
  },
  {
    q: "How do I register as an investor or list a property?",
    a: "The fastest way is to message us on WhatsApp using the floating button, call 07491 967777, or email info@pstraders.co.uk. We'll get back to you within one working day.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-28 md:py-36 bg-background">
      <div className="container-tight">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">— FAQs</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
              Questions, <em className="italic font-light text-gold">answered.</em>
            </h2>
            <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
              Everything landlords, tenants and investors usually ask before working with us. Can't find what you're looking for?
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] border-b border-primary pb-1 hover:gap-3 transition-all"
            >
              Get in touch <span aria-hidden>→</span>
            </a>
          </div>

          <div className="md:col-span-7">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((item, i) => (
                <AccordionItem
                  key={item.q}
                  value={`item-${i}`}
                  className="border-b border-border/60"
                >
                  <AccordionTrigger className="text-left font-display text-lg md:text-xl py-6 hover:no-underline hover:text-gold transition-colors">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/75 text-base leading-relaxed pb-6">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
