import p1 from "@/assets/property-1.jpg";
import p3 from "@/assets/property-3.jpg";
import p5 from "@/assets/property-5.jpg";
import p6 from "@/assets/property-6.jpg";
import p2 from "@/assets/property-2.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Deal = {
  img: string;
  strategy: "BMV" | "Flip" | "BRR" | "Buy-to-Let";
  title: string;
  location: string;
  purchase: string;
  refurb: string;
  gdv: string;
  roi: string;
  status: "Available" | "Reserved";
};

const deals: Deal[] = [
  {
    img: p1,
    strategy: "BMV",
    title: "Victorian Terrace · BMV Buy-Refurb",
    location: "Manchester · M14",
    purchase: "£245,000",
    refurb: "£35,000",
    gdv: "£340,000",
    roi: "ROI 22%",
    status: "Available",
  },
  {
    img: p6,
    strategy: "Flip",
    title: "End-of-Terrace Flip Project",
    location: "Liverpool · L4",
    purchase: "£135,000",
    refurb: "£28,000",
    gdv: "£195,000",
    roi: "Net £24K",
    status: "Available",
  },
  {
    img: p2,
    strategy: "Flip",
    title: "1930s Semi · Cosmetic Flip",
    location: "London · N17",
    purchase: "£325,000",
    refurb: "£30,000",
    gdv: "£420,000",
    roi: "Net £45K",
    status: "Available",
  },
  {
    img: p5,
    strategy: "BRR",
    title: "Apartment Block Conversion",
    location: "London · SW9",
    purchase: "£620,000",
    refurb: "£90,000",
    gdv: "£880,000",
    roi: "ROI 24%",
    status: "Reserved",
  },
  {
    img: p3,
    strategy: "Buy-to-Let",
    title: "Family Home · Tenant Ready",
    location: "Leeds · LS6",
    purchase: "£245,000",
    refurb: "£8,000",
    gdv: "£275,000",
    roi: "Yield 9.4%",
    status: "Available",
  },
];

const Deals = () => {
  return (
    <section id="deals" className="py-28 md:py-36 bg-background">
      <div className="container-tight">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Investor opportunities</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
              Investment <em className="italic font-light">Opportunities.</em>
            </h2>
            <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
              Sourced, analysed and packaged. Each deal comes with full numbers, comparables and a refurb scope — ready to move on. Message us for BMV and high ROI deals.
            </p>
          </div>
          <a href="#contact" className="text-sm uppercase tracking-[0.2em] border-b border-primary pb-1 hover:gap-3 inline-flex items-center gap-2 transition-all">
            Get the deal pack <span aria-hidden>→</span>
          </a>
        </div>

        <Carousel opts={{ align: "start", loop: true }} className="px-0 md:px-12">
          <CarouselContent>
            {deals.map((d) => (
              <CarouselItem key={d.title} className="basis-full">
                <article className="group bg-cream/40 overflow-hidden rounded-sm">
                  <div className="grid md:grid-cols-5 gap-0">
                    <div className="md:col-span-3 relative aspect-[4/3] md:aspect-auto md:min-h-[480px] overflow-hidden">
                      <img
                        src={d.img}
                        alt={d.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-5 left-5 bg-primary text-cream text-[10px] uppercase tracking-[0.3em] px-4 py-2">
                        {d.strategy}
                      </span>
                    </div>
                    <div className="md:col-span-2 p-8 md:p-10 flex flex-col">
                      <div className="flex items-start justify-between mb-3">
                        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{d.location}</p>
                        <span className={`text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 ${d.status === "Available" ? "bg-gold/30 text-primary" : "bg-secondary text-muted-foreground"}`}>
                          {d.status}
                        </span>
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl mb-6 leading-tight">{d.title}</h3>

                      <dl className="grid grid-cols-2 gap-y-5 gap-x-6 text-sm border-t border-border/60 pt-6 mt-auto">
                        <div>
                          <dt className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Purchase</dt>
                          <dd className="font-display text-lg mt-1">{d.purchase}</dd>
                        </div>
                        <div>
                          <dt className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Refurb</dt>
                          <dd className="font-display text-lg mt-1">{d.refurb}</dd>
                        </div>
                        <div>
                          <dt className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">GDV / End Value</dt>
                          <dd className="font-display text-lg mt-1">{d.gdv}</dd>
                        </div>
                        <div>
                          <dt className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Return</dt>
                          <dd className="font-display text-lg mt-1 text-gold">{d.roi}</dd>
                        </div>
                      </dl>

                      <a href="#contact" className="mt-8 inline-flex items-center gap-3 bg-primary text-cream px-6 py-3 rounded-full text-xs uppercase tracking-[0.25em] hover:gap-5 hover:bg-primary/90 transition-all self-start">
                        Request full pack <span aria-hidden>→</span>
                      </a>
                    </div>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 md:-left-12 bg-background border-border" />
          <CarouselNext className="hidden md:flex -right-4 md:-right-12 bg-background border-border" />
        </Carousel>

        <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mt-8">
          Swipe / click arrows to view next deal
        </p>
      </div>
    </section>
  );
};

export default Deals;
