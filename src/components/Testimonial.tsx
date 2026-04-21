const Testimonial = () => {
  return (
    <section className="py-28 md:py-36 bg-background">
      <div className="container-tight max-w-4xl text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">Client testimonial</p>
        <p className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.2] text-balance italic font-light">
          "Great working with Ginny. She helped us find a suitable company tenant for an HMO from one of our landlords. Prompt, transparent — and we closed the deal efficiently."
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary text-cream font-display flex items-center justify-center text-lg">K</div>
          <div className="text-left">
            <p className="font-medium">Khizer</p>
            <p className="text-sm text-muted-foreground uppercase tracking-[0.2em]">LIINK Ltd</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
