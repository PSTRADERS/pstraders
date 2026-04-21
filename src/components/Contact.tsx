import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast({ title: "Thanks for getting in touch", description: "We'll be in contact within one working day." });
    }, 700);
  };

  return (
    <section id="contact" className="py-28 md:py-36 bg-cream/40">
      <div className="container-tight grid md:grid-cols-12 gap-16">
        <div className="md:col-span-5">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Get in touch</p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-balance mb-8">
            Let's talk about your <em className="italic font-light">next deal.</em>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Whether you're a landlord looking for guaranteed rent or an investor seeking the next opportunity — we'd love to hear from you.
          </p>

          <dl className="space-y-6 text-sm">
            <div>
              <dt className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-1">Office</dt>
              <dd className="font-display text-lg">Manchester, United Kingdom</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-1">Email</dt>
              <dd><a href="mailto:hello@pstradersltd.co.uk" className="font-display text-lg hover:text-gold transition-colors">hello@pstradersltd.co.uk</a></dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-1">Phone</dt>
              <dd><a href="tel:+441612000000" className="font-display text-lg hover:text-gold transition-colors">+44 (0)161 200 0000</a></dd>
            </div>
          </dl>
        </div>

        <form onSubmit={onSubmit} className="md:col-span-7 bg-background p-8 md:p-12 rounded-sm shadow-[var(--shadow-card)] space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">First name</label>
              <Input required name="firstName" className="mt-2 border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary" />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Last name</label>
              <Input required name="lastName" className="mt-2 border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Email</label>
              <Input required type="email" name="email" className="mt-2 border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary" />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Phone</label>
              <Input name="phone" className="mt-2 border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary" />
            </div>
          </div>
          <div>
            <label className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Message</label>
            <Textarea required name="message" rows={5} className="mt-2 border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary resize-none" />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-xs uppercase tracking-[0.25em] hover:bg-primary/90 hover:gap-5 transition-all disabled:opacity-60"
          >
            {sending ? "Sending…" : "Send message"} <span aria-hidden>→</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
