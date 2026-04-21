import hero from "@/assets/hero-skyline.jpg";

const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={hero}
        alt="London skyline at dusk"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="container-tight relative z-10 pt-32 pb-20">
        <p className="text-cream/80 text-xs uppercase tracking-[0.4em] mb-6">
          Guaranteed Rent · West London Lettings · Investor Deals
        </p>
        <h1 className="font-display text-cream text-5xl md:text-7xl lg:text-8xl leading-[1.02] text-balance max-w-5xl">
          Guaranteed rent for landlords. <em className="italic font-light text-gold">Quality homes for tenants.</em>
        </h1>
        <p className="mt-8 text-cream/75 text-lg md:text-xl max-w-2xl leading-relaxed">
          Fixed monthly income for landlords across HA, UB, TW & W7 — and a curated selection of refurbished rentals for families, professionals and corporate tenants.
        </p>
        <div className="mt-12 flex flex-wrap gap-4">
          <a href="#landlords" className="inline-flex items-center gap-3 bg-cream text-primary px-8 py-4 rounded-full text-sm uppercase tracking-[0.2em] hover:bg-cream/90 transition-all hover:gap-5">
            I'm a Landlord <span aria-hidden>→</span>
          </a>
          <a href="#rentals" className="inline-flex items-center gap-3 border border-cream/40 text-cream px-8 py-4 rounded-full text-sm uppercase tracking-[0.2em] hover:bg-cream/10 transition-all">
            View Rentals
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/50 text-[10px] uppercase tracking-[0.4em]">
        Scroll
      </div>
    </section>
  );
};

export default Hero;
