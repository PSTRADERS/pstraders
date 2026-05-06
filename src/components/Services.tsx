const services = [
  {
    n: "01",
    title: "Guaranteed Rent",
    body: "Fixed monthly income, paid on time — even during voids. Long-term leases of 3–5 years with full management included.",
    highlight: true,
  },
  {
    n: "02",
    title: "West London Lettings",
    body: "Professionally refurbished 2–4 bed homes across West London. Open to providers, families, professionals and corporate tenants.",
  },
  {
    n: "03",
    title: "Investor Deal Sourcing",
    body: "Off-market BMV and high-ROI projects across the UK — fully analysed, packaged and ready for serious investors.",
  },
  {
    n: "04",
    title: "Provider & Agency Solutions",
    body: "Compliant stock for housing providers and supported-living operators — and we help agencies place tenants into hard-to-let properties.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-28 md:py-36 bg-background">
      <div className="container-tight">
        <div className="grid md:grid-cols-12 gap-10 mb-20">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">What we do</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
              Property solutions, end to <em className="italic font-light">end.</em>
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex items-end">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Whatever side of the deal you're on — landlord, tenant, investor or partner — we make property simple.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {services.map((s) => (
            <div
              key={s.n}
              className={`group p-10 md:p-12 transition-colors duration-500 ${
                s.highlight
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-background hover:bg-cream/40"
              }`}
            >
              <div className="flex items-baseline gap-6 mb-6">
                <span className={`font-display text-2xl ${s.highlight ? "text-gold" : "text-gold"}`}>{s.n}</span>
                <div className={`h-px flex-1 transition-colors ${s.highlight ? "bg-cream/20" : "bg-border group-hover:bg-primary/30"}`} />
                {s.highlight && (
                  <span className="text-[10px] uppercase tracking-[0.25em] text-gold">Most popular</span>
                )}
              </div>
              <h3 className="font-display text-2xl md:text-3xl mb-4 leading-tight">{s.title}</h3>
              <p className={`leading-relaxed ${s.highlight ? "text-cream/75" : "text-muted-foreground"}`}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
