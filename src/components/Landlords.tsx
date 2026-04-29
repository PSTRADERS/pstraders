import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { MessageCircle } from "lucide-react";

const benefits = [
  {
    tag: "Reliable income",
    title: "Long-term company let agreements",
    body: "We take your property on a 3–5 year company lease and pay a fixed monthly rent — straight to your account, even during voids. No tenant chasing, no gaps in income.",
  },
  {
    tag: "We handle everything",
    title: "One point of contact throughout",
    body: "Tenants, maintenance, compliance, inspections, check-ins — all managed by us. You deal with one team, not a rotating cast of agents and contractors.",
  },
  {
    tag: "Vetted occupants",
    title: "Professional tenants, properly managed",
    body: "Whether housed by us, a corporate tenant or a regulated provider, every occupant is qualified before move-in and the property is inspected regularly.",
  },
  {
    tag: "Returned in top condition",
    title: "We remain involved throughout",
    body: "On hand-back the property is professionally cleaned, refreshed and any wear repaired. No deposit disputes, no surprises — just your asset, looked after.",
  },
];

const Landlords = () => {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast({
        title: "Property registered",
        description: "Thanks — we'll be in touch within one business day.",
      });
    }, 700);
  };

  return (
    <section id="landlords" className="bg-background">
      {/* Dark hero block */}
      <div className="relative bg-primary text-cream py-28 md:py-40 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 30%, hsl(var(--cream)) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="container-tight relative text-center max-w-4xl">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-gold mb-8">
            — For Landlords & Agents —
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-balance">
            Have a property? <em className="italic font-light text-gold">We'll guarantee the rent.</em>
          </h2>
          <div className="w-12 h-px bg-gold/60 mx-auto my-10" />
          <p className="text-cream/75 text-lg leading-relaxed max-w-2xl mx-auto">
            We work with landlords and agents across West London who want long-term, hassle-free income.
            If your property is suitable, we have tenants and operators actively searching right now.
          </p>
        </div>
      </div>

      {/* Two-column: Benefits + Register form */}
      <div className="container-tight py-24 md:py-32 grid lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Benefits */}
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">— Why work with us</p>
          <h3 className="font-display text-3xl md:text-4xl leading-[1.1] text-balance mb-12">
            Long-term tenants. <em className="italic font-light">No void periods.</em>
          </h3>
          <div className="space-y-10">
            {benefits.map((b, i) => (
              <div key={b.title} className={i !== 0 ? "pt-10 border-t border-border/60" : ""}>
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">{b.tag}</p>
                <h4 className="font-display text-xl md:text-2xl mb-3">{b.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Register form */}
        <div className="lg:sticky lg:top-28 self-start">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">— Register a property</p>
          <h3 className="font-display text-3xl md:text-4xl leading-[1.1] text-balance mb-10">
            Tell us about your <em className="italic font-light">property.</em>
          </h3>

          <form onSubmit={onSubmit} className="bg-cream/50 p-8 md:p-10 rounded-sm space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">Your name</label>
                <Input required name="name" placeholder="Full name" className="bg-background border-border/60 h-11" />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">You are a</label>
                <Select name="role">
                  <SelectTrigger className="bg-background border-border/60 h-11">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="landlord">Landlord</SelectItem>
                    <SelectItem value="estate-agent">Estate Agent</SelectItem>
                    <SelectItem value="letting-agent">Letting Agent</SelectItem>
                    <SelectItem value="property-manager">Property Manager</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">Email</label>
                <Input required type="email" name="email" placeholder="you@email.com" className="bg-background border-border/60 h-11" />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">Phone</label>
                <Input required name="phone" placeholder="07000 000000" className="bg-background border-border/60 h-11" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">Property location</label>
                <Input required name="location" placeholder="Postcode / area" className="bg-background border-border/60 h-11" />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">Bedrooms</label>
                <Input required name="bedrooms" type="number" min={1} placeholder="e.g. 3" className="bg-background border-border/60 h-11" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">Asking rent (pcm)</label>
                <Input name="rent" placeholder="£" className="bg-background border-border/60 h-11" />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">Property type</label>
                <Select name="type">
                  <SelectTrigger className="bg-background border-border/60 h-11">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="terraced">Terraced House</SelectItem>
                    <SelectItem value="semi">Semi-Detached House</SelectItem>
                    <SelectItem value="detached">Detached House</SelectItem>
                    <SelectItem value="flat">Flat</SelectItem>
                    <SelectItem value="hmo">HMO</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">Additional information</label>
              <Textarea name="info" rows={3} placeholder="Licences, condition, availability…" className="bg-background border-border/60 resize-none" />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full bg-primary text-cream py-4 rounded-full text-xs uppercase tracking-[0.25em] hover:bg-primary/90 transition-all disabled:opacity-60"
            >
              {sending ? "Sending…" : "Register property →"}
            </button>
          </form>
        </div>
      </div>

      {/* WhatsApp CTA */}
      <div className="container-tight pb-24 md:pb-32">
        <div className="border-t border-border/60 pt-16 text-center">
          <h3 className="font-display text-2xl md:text-3xl leading-tight text-balance mb-6">
            Questions first? <em className="italic font-light">We're one message away.</em>
          </h3>
          <a
            href="https://wa.me/447491967777"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-cream px-8 py-4 rounded-full text-xs uppercase tracking-[0.25em] hover:bg-primary/90 hover:gap-5 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Landlords;
