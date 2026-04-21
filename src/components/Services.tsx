const services = [
  {
    n: "01",
    title: "Rent-to-HMO & Guaranteed Rent",
    body: "Convert your property into a licensed HMO and enjoy guaranteed monthly rent with hassle-free, fully managed lets.",
  },
  {
    n: "02",
    title: "BRRR Projects & Flips",
    body: "Buy, refurbish, refinance, rent — or flip. We source projects designed to maximise return on capital invested.",
  },
  {
    n: "03",
    title: "Company Lets & Corporate Housing",
    body: "Premium, fully managed homes for companies and travelling professionals across the UK.",
  },
  {
    n: "04",
    title: "Landlord & Investor Support",
    body: "Hands-free management, tailored guidance and clear exit strategies — built around your portfolio goals.",
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
              From a single rental conversion to a full BRRR pipeline, we package and deliver property opportunities tailored to your strategy.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {services.map((s) => (
            <div
              key={s.n}
              className="group bg-background p-10 md:p-12 hover:bg-cream/40 transition-colors duration-500"
            >
              <div className="flex items-baseline gap-6 mb-6">
                <span className="font-display text-gold text-2xl">{s.n}</span>
                <div className="h-px flex-1 bg-border group-hover:bg-primary/30 transition-colors" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl mb-4 leading-tight">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
