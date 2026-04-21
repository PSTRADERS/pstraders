import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";
import p4 from "@/assets/property-4.jpg";
import p5 from "@/assets/property-5.jpg";
import p6 from "@/assets/property-6.jpg";

type Property = {
  img: string;
  title: string;
  location: string;
  type: string;
  price: string;
  yieldPct: string;
  beds: number;
  status: "Available" | "Under Offer" | "Sourcing";
};

const properties: Property[] = [
  { img: p1, title: "Victorian Terrace HMO", location: "Didsbury, Manchester", type: "6-Bed HMO", price: "£385,000", yieldPct: "11.2%", beds: 6, status: "Available" },
  { img: p2, title: "Riverside Penthouse", location: "Salford Quays", type: "Corporate Let", price: "£525,000", yieldPct: "8.4%", beds: 3, status: "Available" },
  { img: p3, title: "Headingley Family Home", location: "Leeds, LS6", type: "BRRR Project", price: "£245,000", yieldPct: "14.1%", beds: 4, status: "Under Offer" },
  { img: p4, title: "Boutique Serviced Suite", location: "Birmingham CBD", type: "Serviced Accom.", price: "£175,000", yieldPct: "12.8%", beds: 2, status: "Available" },
  { img: p5, title: "Jewellery Quarter Block", location: "Birmingham, B1", type: "Apartment Block", price: "£1.2M", yieldPct: "9.6%", beds: 8, status: "Sourcing" },
  { img: p6, title: "Anfield Refurb Project", location: "Liverpool, L4", type: "Flip Opportunity", price: "£135,000", yieldPct: "ROI 28%", beds: 3, status: "Available" },
];

const statusStyles: Record<Property["status"], string> = {
  Available: "bg-gold/20 text-primary",
  "Under Offer": "bg-primary text-cream",
  Sourcing: "bg-secondary text-foreground",
};

const Properties = () => {
  return (
    <section id="properties" className="py-28 md:py-36 bg-cream/50">
      <div className="container-tight">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Current opportunities</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance max-w-2xl">
              A handpicked portfolio across the <em className="italic font-light">North & Midlands.</em>
            </h2>
          </div>
          <a href="#contact" className="text-sm uppercase tracking-[0.2em] border-b border-primary pb-1 hover:gap-3 inline-flex items-center gap-2 transition-all">
            Enquire <span aria-hidden>→</span>
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((p) => (
            <article key={p.title} className="group bg-background overflow-hidden rounded-sm shadow-[var(--shadow-card)] hover:-translate-y-1 transition-all duration-500">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s] ease-out"
                />
                <span className={`absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 ${statusStyles[p.status]}`}>
                  {p.status}
                </span>
              </div>
              <div className="p-7">
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">{p.type}</p>
                <h3 className="font-display text-2xl mb-1 leading-tight">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-5">{p.location}</p>
                <div className="flex items-end justify-between pt-5 border-t border-border">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Guide</p>
                    <p className="font-display text-xl">{p.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Yield</p>
                    <p className="font-display text-xl text-gold">{p.yieldPct}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
