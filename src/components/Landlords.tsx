import { useState } from "react";
import { Check, MessageCircle, ShieldCheck, Wrench, FileText, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Guaranteed rent, paid on time",
    body: "Fixed monthly rent direct to your account — paid whether the property is occupied or not. No voids, no chasing.",
  },
  {
    icon: Wrench,
    title: "Full management & maintenance",
    body: "We cover day-to-day repairs, inspections and tenant liaison so you never get a 2am phone call.",
  },
  {
    icon: FileText,
    title: "3–5 year leases",
    body: "Long, secure agreements with a professional company — perfect for hands-off landlords and portfolio owners.",
  },
  {
    icon: Clock,
    title: "Property handed back in great condition",
    body: "Regular inspections, professional cleans and a full schedule of condition at the end of the term.",
  },
];

const Landlords = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    role: "Landlord",
    phone: "",
    email: "",
    location: "",
    bedrooms: "",
    rent: "",
    propertyType: "House",
    notes: "",
  });

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Property registered",
        description: "Thanks — we'll be in touch within one working day.",
      });
      setSubmitting(false);
      setForm({
        name: "",
        role: "Landlord",
        phone: "",
        email: "",
        location: "",
        bedrooms: "",
        rent: "",
        propertyType: "House",
        notes: "",
      });
    }, 700);
  };

  return (
    <section id="landlords" className="bg-primary text-cream relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container-tight relative py-24 md:py-32">
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">— For landlords & agents</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
            Guaranteed rent. Zero hassle. <em className="italic font-light text-gold">For 3–5 years.</em>
          </h2>
          <p className="text-cream/70 mt-6 text-lg leading-relaxed">
            We lease your property directly, pay you a fixed monthly rent and take care of everything in between — tenants, maintenance, compliance and condition.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7 space-y-8">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-5 pb-8 border-b border-cream/10 last:border-0">
                <div className="shrink-0 w-12 h-12 rounded-full bg-cream/5 border border-cream/15 flex items-center justify-center">
                  <b.icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-2xl mb-2">{b.title}</h3>
                  <p className="text-cream/70 leading-relaxed">{b.body}</p>
                </div>
              </div>
            ))}

            <div className="flex flex-wrap gap-3 pt-2">
              {["Vetted tenants", "Compliance handled", "Quarterly inspections", "End-of-term cleans"].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cream/80 border border-cream/20 rounded-full px-4 py-2"
                >
                  <Check className="w-3 h-3 text-gold" /> {tag}
                </span>
              ))}
            </div>

            <a
              href="https://wa.me/447491967777"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-4 bg-gold text-primary px-7 py-4 rounded-full text-xs uppercase tracking-[0.25em] hover:gap-5 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Talk to us on WhatsApp
            </a>
          </div>

          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28 bg-cream text-foreground p-8 md:p-10 rounded-sm">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">— Register a property</p>
              <h3 className="font-display text-3xl mb-6 leading-tight">
                Get a guaranteed rent <em className="italic font-light">offer</em>.
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className="col-span-2 w-full px-4 py-3 text-sm bg-background border border-border focus:border-primary outline-none rounded-sm"
                  />
                  <select
                    value={form.role}
                    onChange={(e) => update("role", e.target.value)}
                    className="px-4 py-3 text-sm bg-background border border-border focus:border-primary outline-none rounded-sm"
                  >
                    <option>Landlord</option>
                    <option>Agent</option>
                  </select>
                  <select
                    value={form.propertyType}
                    onChange={(e) => update("propertyType", e.target.value)}
                    className="px-4 py-3 text-sm bg-background border border-border focus:border-primary outline-none rounded-sm"
                  >
                    <option>House</option>
                    <option>Flat</option>
                    <option>HMO</option>
                    <option>Block</option>
                  </select>
                  <input
                    required
                    type="tel"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className="px-4 py-3 text-sm bg-background border border-border focus:border-primary outline-none rounded-sm"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className="px-4 py-3 text-sm bg-background border border-border focus:border-primary outline-none rounded-sm"
                  />
                  <input
                    required
                    placeholder="Postcode / area"
                    value={form.location}
                    onChange={(e) => update("location", e.target.value)}
                    className="px-4 py-3 text-sm bg-background border border-border focus:border-primary outline-none rounded-sm"
                  />
                  <input
                    placeholder="Bedrooms"
                    value={form.bedrooms}
                    onChange={(e) => update("bedrooms", e.target.value)}
                    className="px-4 py-3 text-sm bg-background border border-border focus:border-primary outline-none rounded-sm"
                  />
                  <input
                    placeholder="Asking rent (PCM)"
                    value={form.rent}
                    onChange={(e) => update("rent", e.target.value)}
                    className="col-span-2 px-4 py-3 text-sm bg-background border border-border focus:border-primary outline-none rounded-sm"
                  />
                  <textarea
                    placeholder="Anything else we should know?"
                    value={form.notes}
                    onChange={(e) => update("notes", e.target.value)}
                    rows={3}
                    className="col-span-2 px-4 py-3 text-sm bg-background border border-border focus:border-primary outline-none rounded-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-primary text-cream py-4 rounded-sm text-xs uppercase tracking-[0.25em] hover:bg-primary/90 transition-colors disabled:opacity-60"
                >
                  {submitting ? "Sending…" : "Request an offer"}
                </button>
                <p className="text-[11px] text-muted-foreground text-center leading-relaxed">
                  We'll reply within one working day. No obligation.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landlords;
