import hero from "@/assets/hero-skyline.jpg";

const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={hero}
        alt="UK city skyline at dusk"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="container-tight relative z-10 pt-32 pb-20">
        <p className="text-cream/80 text-xs uppercase tracking-[0.4em] mb-6 animate-fade-in">
          Property Investment · Sourcing · Management
        </p>
        <h1 className="font-display text-cream text-5xl md:text-7xl lg:text-8xl leading-[1.02] text-balance max-w-5xl">
          Your trusted partner in <em className="italic font-light">property investments.</em>
        </h1>
        <p className="mt-8 text-cream/75 text-lg md:text-xl max-w-xl leading-relaxed">
          We connect landlords, investors and corporate clients with high-yield UK opportunities — from HMOs to refurbishment flips.
        </p>
        <div className="mt-12 flex flex-wrap gap-4">
          <a href="#properties" className="inline-flex items-center gap-3 bg-cream text-primary px-8 py-4 rounded-full text-sm uppercase tracking-[0.2em] hover:bg-cream/90 transition-all hover:gap-5">
            View Properties <span aria-hidden>→</span>
          </a>
          <a href="#services" className="inline-flex items-center gap-3 border border-cream/40 text-cream px-8 py-4 rounded-full text-sm uppercase tracking-[0.2em] hover:bg-cream/10 transition-all">
            Our Services
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
