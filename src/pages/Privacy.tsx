import { Link } from "react-router-dom";
import { KeyRound, ArrowLeft } from "lucide-react";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mt-10">
    <h2 className="font-display text-2xl md:text-3xl mb-4">{title}</h2>
    <div className="text-foreground/80 leading-relaxed space-y-3 text-base">{children}</div>
  </section>
);

const Privacy = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Simple header */}
      <header className="border-b border-border/60 bg-background/95 backdrop-blur">
        <div className="container-tight py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 text-foreground">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-gold/60 bg-gold/10 text-gold">
              <KeyRound className="w-4 h-4 -rotate-45" strokeWidth={1.75} />
            </span>
            <span className="font-display text-lg font-medium tracking-[0.02em]">P S Traders</span>
            <span className="text-gold text-[10px] uppercase tracking-[0.35em] mt-1">Ltd</span>
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>
        </div>
      </header>

      <article className="container-tight py-20 md:py-28 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Legal</p>
        <h1 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance">
          Privacy <em className="italic font-light text-gold">Policy.</em>
        </h1>
        <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
          P S Traders Ltd ("we", "us", "our") respects your privacy and is committed to protecting your personal data. This policy explains how we collect, use and safeguard the information you share with us.
        </p>
        <p className="text-sm text-muted-foreground mt-3">Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}</p>

        <Section title="1. Who we are">
          <p>
            P S Traders Ltd is a company registered in England and Wales under company number <strong>14958592</strong>, with its registered office at 357a Hanworth Road, Hounslow, TW3 3SQ. We are the data controller for the personal data we collect through this website and our services.
          </p>
        </Section>

        <Section title="2. Information we collect">
          <p>We may collect and process the following data:</p>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>Contact details you submit (name, email, phone, property address)</li>
            <li>Property and tenancy information shared during enquiries</li>
            <li>Correspondence you send to us by email, phone or WhatsApp</li>
            <li>Technical data (IP address, browser type, pages visited) collected automatically</li>
          </ul>
        </Section>

        <Section title="3. How we use your information">
          <p>We use your data to:</p>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>Respond to enquiries and provide our lettings, sourcing and management services</li>
            <li>Manage tenancies, landlord agreements and investor deal packs</li>
            <li>Comply with legal, regulatory and contractual obligations</li>
            <li>Improve our website and services</li>
          </ul>
        </Section>

        <Section title="4. Lawful basis">
          <p>
            We process personal data on the basis of: (a) your consent; (b) the performance of a contract with you; (c) compliance with a legal obligation; or (d) our legitimate interests in operating and growing our business.
          </p>
        </Section>

        <Section title="5. Sharing your information">
          <p>
            We do not sell your personal data. We may share it with trusted partners — including referencing agencies, contractors, accountants, legal advisers and IT providers — strictly to deliver our services or where required by law.
          </p>
        </Section>

        <Section title="6. Data retention">
          <p>
            We retain personal data only for as long as necessary to fulfil the purposes set out in this policy, including any legal, accounting or reporting requirements (typically up to 7 years for financial records).
          </p>
        </Section>

        <Section title="7. Cookies">
          <p>
            Our website uses essential cookies to function correctly and may use analytics cookies to understand how visitors interact with the site. You can control cookies through your browser settings.
          </p>
        </Section>

        <Section title="8. Your rights">
          <p>Under UK GDPR you have the right to:</p>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>Access the personal data we hold about you</li>
            <li>Request correction or deletion of your data</li>
            <li>Object to or restrict processing</li>
            <li>Data portability</li>
            <li>Withdraw consent at any time</li>
            <li>Lodge a complaint with the Information Commissioner's Office (ico.org.uk)</li>
          </ul>
        </Section>

        <Section title="9. Contact us">
          <p>
            For any privacy-related questions or to exercise your rights, please contact us at:
          </p>
          <ul className="space-y-1.5 mt-2">
            <li>Email: <a href="mailto:info@pstrader.co.uk" className="text-primary underline-offset-4 hover:underline">info@pstrader.co.uk</a></li>
            <li>Phone: <a href="tel:+447491967777" className="text-primary underline-offset-4 hover:underline">07491 967777</a></li>
            <li>Post: P S Traders Ltd, 357a Hanworth Road, Hounslow, TW3 3SQ</li>
          </ul>
        </Section>
      </article>

      <footer className="border-t border-border/60 py-8">
        <div className="container-tight flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} P S Traders Ltd · Company No. 14958592</p>
          <Link to="/" className="hover:text-foreground transition-colors uppercase tracking-[0.25em]">Back to home</Link>
        </div>
      </footer>
    </main>
  );
};

export default Privacy;
