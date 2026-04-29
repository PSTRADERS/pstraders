import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#landlords", label: "Landlords" },
  { href: "#rentals", label: "Rentals" },
  { href: "#deals", label: "Investor Deals" },
  { href: "#partners", label: "Work With Us" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container-tight flex items-center justify-between">
        <a href="#top" className={cn("flex items-baseline gap-2 font-display text-lg tracking-tight transition-colors", scrolled ? "text-foreground" : "text-cream")}>
          <span className="font-medium">P S Traders</span>
          <span className={cn("text-xs uppercase tracking-[0.3em]", scrolled ? "text-muted-foreground" : "text-cream/70")}>Ltd</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm transition-colors hover:opacity-100",
                scrolled ? "text-foreground/80 hover:text-foreground" : "text-cream/80 hover:text-cream"
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className={cn(
            "hidden md:inline-flex items-center text-xs uppercase tracking-[0.2em] px-5 py-2.5 rounded-full transition-all",
            scrolled
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "bg-cream text-primary hover:bg-cream/90"
          )}
        >
          Get in touch
        </a>
      </div>
    </header>
  );
};

export default Navbar;
