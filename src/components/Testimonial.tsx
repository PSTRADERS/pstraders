const testimonials = [
  {
    quote:
      "Great working with Ginny. She helped us find a suitable company tenant for an HMO from one of our landlords. Prompt, transparent — and we closed the deal efficiently.",
    name: "Khizer",
    role: "LIINK Ltd",
    initial: "K",
  },
  {
    quote:
      "P S Traders took over my Hounslow property on a guaranteed rent lease. Rent has landed on time every single month — exactly as promised. Genuinely hassle-free.",
    name: "TW3",
    role: "Landlord · TW3",
    initial: "L",
  },
  {
    quote:
      "Professional, responsive and thorough from viewing through to move-in. The property was spotless and any small issues were sorted within a day. Highly recommend.",
    name: "UB1",
    role: "Tenant · West London",
    initial: "T",
  },
];

const Testimonial = () => {
  return (
    <section className="py-28 md:py-36 bg-background">
      <div className="container-tight">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">What people say</p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-balance">
            Built on <em className="italic font-light">trust.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="bg-cream/40 p-8 md:p-10 rounded-sm flex flex-col"
            >
              <span className="font-display text-gold text-5xl leading-none mb-4" aria-hidden>"</span>
              <blockquote className="font-display text-lg md:text-xl leading-[1.4] text-balance flex-1 italic font-light">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 pt-6 border-t border-border/60">
                <div className="w-11 h-11 rounded-full bg-primary text-cream font-display flex items-center justify-center">
                  {t.initial}
                </div>
                <div>
                  <p className="font-medium text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] mt-0.5">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
