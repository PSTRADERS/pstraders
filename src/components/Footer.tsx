const Footer = () => {
  return (
    <footer className="bg-primary text-cream py-16">
      <div className="container-tight">
        <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-cream/15">
          <div className="md:col-span-5">
            <p className="font-display text-3xl">P S Traders <span className="text-gold">Ltd</span></p>
            <p className="text-cream/60 text-sm mt-3 max-w-sm leading-relaxed">
              Guaranteed rent, West London lettings, investor deals and provider partnerships — built on trust.
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.3em] text-cream/50 mb-4">Explore</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#landlords" className="hover:text-gold transition-colors">Landlords</a></li>
              <li><a href="#rentals" className="hover:text-gold transition-colors">Rentals</a></li>
              <li><a href="#deals" className="hover:text-gold transition-colors">Investor Deals</a></li>
              <li><a href="#partners" className="hover:text-gold transition-colors">Work With Us</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-cream/50 mb-4">Connect</p>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:pstraders.ltd@outlook.com" className="hover:text-gold transition-colors">pstraders.ltd@outlook.com</a></li>
              <li><a href="tel:+447491967777" className="hover:text-gold transition-colors">07491 967777</a></li>
              <li className="text-cream/60">357a Hanworth Road,<br/>Hounslow, TW3 3SQ</li>
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
