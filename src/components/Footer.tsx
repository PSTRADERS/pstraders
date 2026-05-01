import { KeyRound, Phone, Mail, MapPin, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primary text-cream">
      <div className="container-tight pt-20 pb-10">
        {/* Brand row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 pb-12 border-b border-cream/15">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gold/60 bg-gold/10 text-gold">
                <KeyRound className="w-5 h-5 -rotate-45" strokeWidth={1.75} />
              </span>
              <p className="font-display text-3xl font-medium tracking-[0.02em] leading-none">
                P S Traders
              </p>
              <span className="text-gold text-[10px] uppercase tracking-[0.35em] mt-2">Ltd</span>
            </div>
            <p className="text-cream/65 text-sm mt-5 leading-relaxed">
              Guaranteed rent, West London lettings, investor deals and provider partnerships — built on trust.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gold text-primary px-6 py-3 rounded-full text-[10px] uppercase tracking-[0.25em] font-medium hover:bg-gold/90 hover:gap-3 transition-all"
            >
              Book a Consultation <span aria-hidden>→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-cream text-primary px-6 py-3 rounded-full text-[10px] uppercase tracking-[0.25em] hover:bg-cream/90 hover:gap-3 transition-all"
            >
              List Your Property
            </a>
            <a
              href="#deals"
              className="inline-flex items-center gap-2 border border-cream/40 text-cream px-6 py-3 rounded-full text-[10px] uppercase tracking-[0.25em] hover:bg-cream/10 hover:gap-3 transition-all"
            >
              View Investment Deals
            </a>
          </div>
        </div>

        {/* Info grid */}
        <div className="grid md:grid-cols-3 gap-10 py-12 border-b border-cream/15">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-5">Explore</p>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#landlords" className="text-cream/80 hover:text-gold transition-colors">Landlords</a></li>
              <li><a href="#rentals" className="text-cream/80 hover:text-gold transition-colors">Rentals</a></li>
              <li><a href="#deals" className="text-cream/80 hover:text-gold transition-colors">Investor Deals</a></li>
              <li><a href="#partners" className="text-cream/80 hover:text-gold transition-colors">Work With Us</a></li>
              <li><a href="#contact" className="text-cream/80 hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-5">Contact</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <a href="tel:+447491967777" className="text-cream/85 hover:text-gold transition-colors">07491 967777</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <div className="flex flex-col">
                  <a href="mailto:info@pstrader.co.uk" className="text-cream/85 hover:text-gold transition-colors break-all">info@pstrader.co.uk</a>
                  <a href="mailto:pstraders.ltd@outlook.com" className="text-cream/55 hover:text-gold transition-colors text-xs break-all">pstraders.ltd@outlook.com</a>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-5">Company</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Building2 className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-cream/85">Company No. <span className="font-medium">14958592</span></span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-cream/85 leading-relaxed">
                  357a Hanworth Road,<br />
                  Hounslow, TW3 3SQ
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-cream/55">
          <p>© {year} P S Traders Ltd · Company No. 14958592 · All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <span className="uppercase tracking-[0.25em]">Property · Sourcing · Investment</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
