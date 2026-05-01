import hero from "@/assets/hero-skyline.jpg";

const stats = [
  { v: "100%", l: "Rent paid on time" },
  { v: "3–5yr", l: "Lease lengths" },
  { v: "48hr", l: "Offer turnaround" },
  { v: "West London", l: "& beyond" },
];

const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex flex-col overflow-hidden">
      <img
        src={hero}
        alt="London skyline at dusk"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

      <div className="container-tight relative z-10 flex-1 flex items-center pt-32 pb-16">
        <div className="w-full">
          <p className="text-cream/70 text-[10px] md:text-xs uppercase tracking-[0.4em] mb-8 flex items-center gap-4">
            <span className="w-10 h-px bg-gold/60" />
            Guaranteed Rent · Lettings · Investor Deals
          </p>
          <h1 className="font-display text-cream text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.0] text-balance max-w-5xl">
            A trusted property partner. <em className="italic font-light text-gold">For everyone.</em>
          </h1>
          <p className="mt-10 text-cream/75 text-lg md:text-xl max-w-2xl leading-relaxed">
            Guaranteed rent for landlords, quality homes for tenants, compliant stock for providers and reliable solutions for agencies — all from one West London team.
          </p>
          <div className="mt-12 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-gold text-primary px-8 py-4 rounded-full text-xs uppercase tracking-[0.25em] hover:bg-gold/90 transition-all hover:gap-5 font-medium"
            >
              Book a Consultation <span aria-hidden>→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-cream text-primary px-8 py-4 rounded-full text-xs uppercase tracking-[0.25em] hover:bg-cream/90 transition-all hover:gap-5"
            >
              List Your Property
            </a>
            <a
              href="#deals"
              className="inline-flex items-center gap-3 border border-cream/40 text-cream px-8 py-4 rounded-full text-xs uppercase tracking-[0.25em] hover:bg-cream/10 transition-all"
            >
              View Investment Deals
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-cream/80 hover:text-cream px-4 py-4 text-xs uppercase tracking-[0.25em] transition-colors underline-offset-4 hover:underline"
            >
              Contact Us →
            </a>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative z-10 border-t border-cream/15">
        <div className="container-tight grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.l}
              className={`py-6 md:py-8 ${i !== 0 ? "md:border-l border-cream/15" : ""} ${i === 1 ? "border-l border-cream/15" : ""} ${i === 2 ? "border-t md:border-t-0 border-cream/15" : ""} ${i === 3 ? "border-t md:border-t-0 border-cream/15" : ""}`}
            >
              <p className="font-display text-cream text-2xl md:text-3xl">{s.v}</p>
              <p className="text-cream/60 text-[10px] md:text-xs uppercase tracking-[0.25em] mt-1">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
