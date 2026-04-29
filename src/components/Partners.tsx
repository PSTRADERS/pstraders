import { Building2, Home, Users, Briefcase, ArrowRight } from "lucide-react";

const audiences = [
  {
    icon: Home,
    tag: "Landlords",
    title: "Guaranteed monthly rent — even during voids.",
    body: "Hand us your property on a 3–5 year lease and receive fixed rent into your account, fully managed.",
    cta: "Get a rent offer",
    href: "#landlords",
  },
  {
    icon: Users,
    tag: "Tenants",
    title: "Quality, well-maintained homes across West London.",
    body: "Refurbished 2–5 bed properties with responsive management and professional contracts.",
    cta: "View rentals",
    href: "#rentals",
  },
  {
    icon: Building2,
    tag: "Housing Providers",
    title: "Compliant stock, ready to onboard.",
    body: "We supply suitable properties to registered providers and supported-living operators across London.",
    cta: "Discuss requirements",
    href: "#contact",
  },
  {
    icon: Briefcase,
    tag: "Agencies",
    title: "Stuck with a property? We'll find someone to take it on.",
    body: "Let us help you place hard-to-let stock — corporate tenants, providers or guaranteed-rent take-overs.",
    cta: "Refer a property",
    href: "#contact",
  },
];

const Partners = () => {
  return (
    <section id="partners" className="py-28 md:py-36 bg-cream/40">
      <div className="container-tight">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Work with us</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
            Something for <em className="italic font-light">everyone.</em>
          </h2>
          <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
            Whether you own one property or one hundred — whether you need a home, a tenant, stock or a solution — we'd like to help.
          </p>
        </div>

        {/* Asymmetric grid inspired by Rightmove / Knight Frank panels */}
        <div className="grid md:grid-cols-6 gap-5">
          {audiences.map((a, i) => {
            const Icon = a.icon;
            // First card spans 4 cols, rest 2 cols (alternating feel)
            const span = i === 0 ? "md:col-span-4 md:row-span-2" : "md:col-span-2";
            const isFeature = i === 0;
            return (
              <a
                key={a.tag}
                href={a.href}
                className={`group relative overflow-hidden rounded-sm border border-border/60 bg-background p-8 md:p-10 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 flex flex-col ${span} ${isFeature ? "md:p-14" : ""}`}
              >
                <div className={`flex items-center justify-between mb-${isFeature ? "10" : "6"}`}>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-medium">{a.tag}</span>
                  <Icon className={`text-primary/30 group-hover:text-gold transition-colors ${isFeature ? "w-10 h-10" : "w-7 h-7"}`} strokeWidth={1.25} />
                </div>
                <h3 className={`font-display leading-[1.15] text-balance mb-4 ${isFeature ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"}`}>
                  {a.title}
                </h3>
                <p className={`text-muted-foreground leading-relaxed mb-6 flex-1 ${isFeature ? "text-base md:text-lg" : "text-sm"}`}>
                  {a.body}
                </p>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary group-hover:gap-4 group-hover:text-gold transition-all mt-auto">
                  {a.cta} <ArrowRight className="w-3.5 h-3.5" />
                </span>
                {isFeature && (
                  <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-gold/10 group-hover:bg-gold/20 transition-colors duration-500" aria-hidden />
                )}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Partners;
