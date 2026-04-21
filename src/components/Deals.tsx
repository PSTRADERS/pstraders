import p1 from "@/assets/property-1.jpg";
import p3 from "@/assets/property-3.jpg";
import p5 from "@/assets/property-5.jpg";
import p6 from "@/assets/property-6.jpg";

type Deal = {
  img: string;
  strategy: "BRR" | "Flip" | "BRR" | "Buy-to-Let";
  title: string;
  location: string;
  purchase: string;
  refurb: string;
  gdv: string;
  roi: string;
  status: "Available" | "Reserved";
};

const deals: Deal[] = [
  {
    img: p1,
    strategy: "BRR",
    title: "Victorian Terrace BRR",
    location: "Manchester · M14",
    purchase: "£245,000",
    refurb: "£35,000",
    gdv: "£340,000",
    roi: "ROI 22%",
    status: "Available",
  },
  {
    img: p6,
    strategy: "Flip",
    title: "End-of-Terrace Flip",
    location: "Liverpool · L4",
    purchase: "£135,000",
    refurb: "£28,000",
    gdv: "£195,000",
    roi: "Net £24K",
    status: "Available",
  },
  {
    img: p5,
    strategy: "BRR",
    title: "Apartment Block Conversion",
    location: "Birmingham · B1",
    purchase: "£480,000",
    refurb: "£75,000",
    gdv: "£720,000",
    roi: "ROI 26%",
    status: "Reserved",
  },
  {
    img: p3,
    strategy: "Buy-to-Let",
    title: "Family Home — Ready Tenant",
    location: "Leeds · LS6",
    purchase: "£245,000",
    refurb: "£8,000",
    gdv: "£275,000",
    roi: "Yield 9.4%",
    status: "Available",
  },
];

const Deals = () => {
  return (
    <section id="deals" className="py-28 md:py-36 bg-background">
      <div className="container-tight">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Investor opportunities</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
              BRR & Flip deals in <em className="italic font-light">Manchester · Birmingham · London.</em>
            </h2>
            <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
              Sourced, analysed and packaged. Each deal comes with full numbers, comparables and a refurb scope — ready to move on.
            </p>
          </div>
          <a href="#contact" className="text-sm uppercase tracking-[0.2em] border-b border-primary pb-1 hover:gap-3 inline-flex items-center gap-2 transition-all">
            Get the deal pack <span aria-hidden>→</span>
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {deals.map((d) => (
            <article key={d.title} className="group bg-cream/40 overflow-hidden rounded-sm hover:bg-cream/60 transition-colors duration-500">
              <div className="grid sm:grid-cols-5 gap-0">
                <div className="sm:col-span-2 relative aspect-[4/3] sm:aspect-auto overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.title}
                    loading="lazy"
                    width={1280}
                    height={896}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s] ease-out"
                  />
                  <span className="absolute top-4 left-4 bg-primary text-cream text-[10px] uppercase tracking-[0.2em] px-3 py-1.5">
                    {d.strategy}
                  </span>
                </div>
                <div className="sm:col-span-3 p-7 flex flex-col">
                  <div className="flex items-start justify-between mb-2">
                    <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{d.location}</p>
                    <span className={`text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 ${d.status === "Available" ? "bg-gold/30 text-primary" : "bg-secondary text-muted-foreground"}`}>
                      {d.status}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl mb-5 leading-tight">{d.title}</h3>

                  <dl className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm border-t border-border/60 pt-4 mt-auto">
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Purchase</dt>
                      <dd className="font-display text-base mt-0.5">{d.purchase}</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Refurb</dt>
                      <dd className="font-display text-base mt-0.5">{d.refurb}</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">GDV / End Value</dt>
                      <dd className="font-display text-base mt-0.5">{d.gdv}</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Return</dt>
                      <dd className="font-display text-base mt-0.5 text-gold">{d.roi}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deals;
