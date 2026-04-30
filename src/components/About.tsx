import about from "@/assets/about.jpg";

const stats = [
  { n: "120+", l: "Deals sourced" },
  { n: "£18M", l: "Property transacted" },
  { n: "11.4%", l: "Avg. gross yield" },
  { n: "98%", l: "Client retention" },
];

const About = () => {
  return (
    <section id="about" className="py-28 md:py-36 bg-primary text-primary-foreground">
      <div className="container-tight grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-6 order-2 md:order-1">
          <div className="relative">
            <img
              src={about}
              alt="PS Traders team reviewing property plans"
              loading="lazy"
              width={1280}
              height={1280}
              className="w-full aspect-square object-cover rounded-sm"
            />
            <div className="absolute -bottom-6 -right-6 bg-cream text-primary p-6 hidden md:block">
              <p className="font-display text-3xl">Est. 2023</p>
              <p className="text-xs uppercase tracking-[0.25em] mt-1">London</p>
            </div>
          </div>
        </div>
        <div className="md:col-span-6 md:pl-8 order-1 md:order-2">
          <p className="text-xs uppercase tracking-[0.3em] text-cream/60 mb-4">About P S Traders</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
            Relationships first. <em className="italic font-light text-gold">Returns always.</em>
          </h2>
          <p className="mt-6 text-cream/75 leading-relaxed text-lg">
            Deal sourcing is more than transactions — it's about building relationships and creating solutions. We work with landlords, investors and companies to identify opportunities, structure win-win arrangements, and help every property reach its full potential.
          </p>
          <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-cream/15">
            {stats.map((s) => (
              <div key={s.l}>
                <p className="font-display text-4xl text-cream">{s.n}</p>
                <p className="text-xs uppercase tracking-[0.25em] text-cream/60 mt-2">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
