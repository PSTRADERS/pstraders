const benefits = [
  { n: "01", t: "Guaranteed rent", d: "Fixed monthly income paid on time — every month, even during voids." },
  { n: "02", t: "3–5 year leases", d: "Long-term contracts straight to your account. No tenant chasing." },
  { n: "03", t: "Full management", d: "We handle tenants, maintenance, compliance and check-ins end-to-end." },
  { n: "04", t: "Property returned in top condition", d: "Professional cleaning, repairs and refresh on hand-back. No wear-and-tear disputes." },
];

const Landlords = () => {
  return (
    <section id="landlords" className="relative py-28 md:py-36 bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle at 25% 30%, hsl(var(--cream)) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />
      <div className="container-tight relative">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">For landlords · Guaranteed rent</p>
            <h2 className="font-display text-cream text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
              Guaranteed rent. <em className="italic font-light text-gold">Zero hassle.</em>
            </h2>
          </div>
          <div className="md:col-span-5 flex items-end">
            <p className="text-cream/75 text-lg leading-relaxed">
              We take your property on a long-term lease and pay you a fixed monthly rent — whether it's occupied or not. Perfect for landlords who want income without the headaches.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-cream/15 mb-16">
          {benefits.map((b) => (
            <div key={b.n} className="bg-primary p-8 hover:bg-primary/60 transition-colors duration-500">
              <span className="font-display text-gold text-2xl">{b.n}</span>
              <h3 className="font-display text-xl text-cream mt-4 mb-3">{b.t}</h3>
              <p className="text-cream/70 text-sm leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>

        <div className="bg-cream text-primary p-10 md:p-14 rounded-sm grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Are you a landlord?</p>
            <h3 className="font-display text-3xl md:text-4xl leading-tight text-balance">
              Get a guaranteed rent offer on your property within 48 hours.
            </h3>
          </div>
          <div className="md:col-span-4 flex md:justify-end">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-primary text-cream px-8 py-4 rounded-full text-xs uppercase tracking-[0.25em] hover:gap-5 hover:bg-primary/90 transition-all"
            >
              Reach out today <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landlords;
