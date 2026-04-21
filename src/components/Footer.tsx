const Footer = () => {
  return (
    <footer className="bg-primary text-cream py-16">
      <div className="container-tight">
        <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-cream/15">
          <div className="md:col-span-5">
            <p className="font-display text-3xl">P S Traders <span className="text-gold">Ltd</span></p>
            <p className="text-cream/60 text-sm mt-3 max-w-sm leading-relaxed">
              UK property sourcing, HMO conversions, BRRR projects and corporate lets — built on relationships.
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.3em] text-cream/50 mb-4">Explore</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-gold transition-colors">Services</a></li>
              <li><a href="#properties" className="hover:text-gold transition-colors">Properties</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-cream/50 mb-4">Connect</p>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:hello@pstradersltd.co.uk" className="hover:text-gold transition-colors">hello@pstradersltd.co.uk</a></li>
              <li><a href="tel:+441612000000" className="hover:text-gold transition-colors">+44 (0)161 200 0000</a></li>
              <li className="text-cream/60">Manchester, United Kingdom</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} P S Traders Ltd. All rights reserved.</p>
          <p className="uppercase tracking-[0.25em]">Property · Sourcing · Investment</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
