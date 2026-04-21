const partners = [
  {
    title: "Housing Providers",
    body: "We partner with registered providers and supported-housing operators looking for compliant, well-located stock across West London.",
    cta: "Partner with us",
  },
  {
    title: "Corporate & Relocation",
    body: "Companies sourcing quality homes for relocating staff, contractors and project teams — fully managed, ready to move in.",
    cta: "Discuss requirements",
  },
  {
    title: "Investors & Sourcers",
    body: "JV opportunities, off-market deal swaps and pipeline sharing for serious investors and fellow sourcers.",
    cta: "Open the conversation",
  },
];

const Partners = () => {
  return (
    <section id="partners" className="py-28 md:py-36 bg-background">
      <div className="container-tight">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-6">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Work with us</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
              Providers, companies & investors — <em className="italic font-light">let's build together.</em>
            </h2>
          </div>
          <div className="md:col-span-6 flex items-end">
            <p className="text-muted-foreground text-lg leading-relaxed">
              We work with housing providers, corporate clients and fellow investors who need a reliable partner on the ground in London and beyond.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {partners.map((p, i) => (
            <div key={p.title} className="group bg-background p-10 md:p-12 hover:bg-cream/40 transition-colors duration-500 flex flex-col">
              <span className="font-display text-gold text-2xl mb-6">0{i + 1}</span>
              <h3 className="font-display text-2xl md:text-3xl mb-4 leading-tight">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-8 flex-1">{p.body}</p>
              <a href="#contact" className="text-sm uppercase tracking-[0.2em] inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                {p.cta} <span aria-hidden>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
