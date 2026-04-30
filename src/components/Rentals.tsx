import r1 from "@/assets/rental-1.jpg";
import r2 from "@/assets/rental-2.jpg";
import r3 from "@/assets/rental-3.jpg";
import r4 from "@/assets/rental-4.jpg";
import r5 from "@/assets/rental-5.jpg";
import r6 from "@/assets/rental-6.jpg";

type Rental = {
  img?: string;
  title: string;
  area: string;
  postcode: string;
  beds: number;
  baths: number;
  pcm: string;
  features: string[];
  status: "Available" | "Let Agreed" | "Coming Soon";
};

const rentals: Rental[] = [
  {
    img: r1,
    title: "Modern 2-Bed Apartment",
    area: "Brentford",
    postcode: "TW8",
    beds: 2,
    baths: 2,
    pcm: "£2,800",
    features: ["Recently refurbished", "Private balcony", "Allocated parking"],
    status: "Available",
  },
  {
    img: r2,
    title: "Bright 2-Bed with Balcony",
    area: "Hounslow",
    postcode: "TW3",
    beds: 2,
    baths: 1,
    pcm: "£2,100",
    features: ["South-facing balcony", "Open-plan living", "Concierge"],
    status: "Available",
  },
  {
    img: r3,
    title: "3-Bed Semi with Driveway",
    area: "Harrow",
    postcode: "HA2",
    beds: 3,
    baths: 2,
    pcm: "£2,650",
    features: ["Driveway parking", "Private garden", "Newly decorated"],
    status: "Available",
  },
  {
    img: r4,
    title: "Refurbished 4-Bed Family Home",
    area: "Uxbridge",
    postcode: "UB8",
    beds: 4,
    baths: 2,
    pcm: "£3,200",
    features: ["New kitchen", "Off-street parking", "Close to station"],
    status: "Coming Soon",
  },
  {
    img: r5,
    title: "Edwardian 2-Bed Conversion",
    area: "Hanwell",
    postcode: "W7",
    beds: 2,
    baths: 1,
    pcm: "£1,950",
    features: ["High ceilings", "Period features", "Garden access"],
    status: "Let Agreed",
  },
  {
    img: r6,
    title: "3-Bed Townhouse with Garage",
    area: "Hayes",
    postcode: "UB3",
    beds: 3,
    baths: 2,
    pcm: "£2,450",
    features: ["Garage + driveway", "Modern finish", "Family friendly"],
    status: "Available",
  },
  {
    title: "3-Bed Apartment Above Shop Unit",
    area: "Hayes",
    postcode: "UB3",
    beds: 3,
    baths: 1,
    pcm: "£2,000",
    features: ["Above commercial unit", "Spacious living area", "Excellent transport links"],
    status: "Available",
  },
  {
    title: "5-Bed Professional HMO",
    area: "Feltham",
    postcode: "TW14",
    beds: 5,
    baths: 1,
    pcm: "£3,500",
    features: ["All bills included potential", "Fully furnished HMO", "Close to Heathrow & rail"],
    status: "Available",
  },
];

const statusStyles: Record<Rental["status"], string> = {
  Available: "bg-gold/20 text-primary",
  "Let Agreed": "bg-primary text-cream",
  "Coming Soon": "bg-secondary text-foreground",
};

const Rentals = () => {
  return (
    <section id="rentals" className="py-28 md:py-36 bg-cream/50">
      <div className="container-tight">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Properties to rent · West London</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
              Quality homes across <em className="italic font-light">West London</em> — all arrangements welcome.
            </h2>
            <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
              A curated selection of professionally managed rentals, open to providers, families, professionals and corporate tenants.
            </p>
          </div>
          <a href="#contact" className="text-sm uppercase tracking-[0.2em] border-b border-primary pb-1 hover:gap-3 inline-flex items-center gap-2 transition-all">
            Book a viewing <span aria-hidden>→</span>
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {rentals.map((p) => (
            <article
              key={p.title}
              className="group bg-background overflow-hidden rounded-sm border border-border/60 hover:border-primary/30 hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 transition-all duration-500 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-primary">
                {p.img ? (
                  <img
                    src={p.img}
                    alt={`${p.title} in ${p.area} ${p.postcode}`}
                    loading="lazy"
                    width={1280}
                    height={896}
                    className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-[1.4s] ease-out"
                  />
                ) : (
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center text-cream text-center px-6"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 30% 20%, hsl(var(--gold) / 0.15), transparent 60%), radial-gradient(circle at 70% 80%, hsl(var(--cream) / 0.08), transparent 55%)",
                    }}
                  >
                    <span className="text-[10px] uppercase tracking-[0.4em] text-gold mb-3">— Photoshoot scheduled</span>
                    <p className="font-display text-2xl md:text-3xl italic font-light text-cream">Images coming soon</p>
                    <p className="text-cream/60 text-[10px] mt-3 uppercase tracking-[0.3em]">{p.postcode} · {p.area}</p>
                  </div>
                )}
                <span className={`absolute top-4 left-4 text-[10px] uppercase tracking-[0.25em] px-3 py-1.5 rounded-full ${statusStyles[p.status]}`}>
                  {p.status}
                </span>
                <span className="absolute top-4 right-4 bg-background/95 backdrop-blur text-primary text-[10px] uppercase tracking-[0.25em] px-3 py-1.5 rounded-full font-medium">
                  {p.postcode}
                </span>
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">{p.area}, London</p>
                <h3 className="font-display text-xl md:text-2xl mb-3 leading-tight">{p.title}</h3>
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">
                  <span>{p.beds} bed</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span>{p.baths} bath</span>
                </div>
                <ul className="space-y-2 mb-6 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span className="mt-2 w-1 h-1 rounded-full bg-gold flex-shrink-0" aria-hidden />
                      <span className="text-foreground/75">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-end justify-between pt-5 border-t border-border/60 mt-auto">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1">Per month</p>
                    <p className="font-display text-3xl leading-none">{p.pcm}</p>
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-primary hover:text-gold hover:gap-3 transition-all"
                  >
                    Enquire <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rentals;
