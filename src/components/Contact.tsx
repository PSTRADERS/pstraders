import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-28 md:py-36 bg-cream/40">
      <div className="container-tight">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">— Get in touch</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
            Let's talk about your <em className="italic font-light">next move.</em>
          </h2>
          <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
            Landlord, tenant, investor or partner — reach out directly and we'll get back to you within one working day.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <a
            href="tel:+447491967777"
            className="group bg-background p-8 rounded-sm border border-border/60 hover:border-primary/30 hover:-translate-y-1 transition-all duration-500"
          >
            <Phone className="w-6 h-6 text-gold mb-6" strokeWidth={1.5} />
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">Call us</p>
            <p className="font-display text-2xl group-hover:text-gold transition-colors">07491 967777</p>
          </a>

          <a
            href="mailto:info@pstraders.co.uk"
            className="group bg-background p-8 rounded-sm border border-border/60 hover:border-primary/30 hover:-translate-y-1 transition-all duration-500"
          >
            <Mail className="w-6 h-6 text-gold mb-6" strokeWidth={1.5} />
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">Email</p>
            <p className="font-display text-lg leading-snug group-hover:text-gold transition-colors break-all">
              info@pstraders.co.uk
            </p>
            <p className="text-xs text-muted-foreground mt-2 break-all">
              pstraders.ltd@outlook.com
            </p>
          </a>

          <div className="bg-background p-8 rounded-sm border border-border/60">
            <MapPin className="w-6 h-6 text-gold mb-6" strokeWidth={1.5} />
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">Office</p>
            <p className="font-display text-lg leading-snug">
              357a Hanworth Road<br />
              Hounslow, TW3 3SQ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
