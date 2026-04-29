import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

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

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          <a
            href="tel:+447491967777"
            className="group bg-background p-8 rounded-sm border border-border/60 hover:border-primary/30 hover:-translate-y-1 transition-all duration-500"
          >
            <Phone className="w-6 h-6 text-gold mb-6" strokeWidth={1.5} />
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">Call us</p>
            <p className="font-display text-2xl group-hover:text-gold transition-colors">07491 967777</p>
          </a>

          <a
            href="mailto:pstraders.ltd@outlook.com"
            className="group bg-background p-8 rounded-sm border border-border/60 hover:border-primary/30 hover:-translate-y-1 transition-all duration-500"
          >
            <Mail className="w-6 h-6 text-gold mb-6" strokeWidth={1.5} />
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">Email</p>
            <p className="font-display text-lg leading-snug group-hover:text-gold transition-colors break-all">
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

        <div className="bg-primary text-cream p-10 md:p-14 rounded-sm grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8">
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">— Quickest reply</p>
            <h3 className="font-display text-3xl md:text-4xl leading-tight text-balance">
              Prefer to message? <em className="italic font-light text-gold">We're on WhatsApp.</em>
            </h3>
            <p className="text-cream/70 mt-4 text-sm leading-relaxed max-w-lg">
              For property enquiries, viewings or a guaranteed rent offer — drop us a quick message and we'll reply the same day.
            </p>
          </div>
          <div className="md:col-span-4 flex md:justify-end">
            <a
              href="https://wa.me/447491967777"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-cream text-primary px-8 py-4 rounded-full text-xs uppercase tracking-[0.25em] hover:bg-cream/90 hover:gap-5 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
