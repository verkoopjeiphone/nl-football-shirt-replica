const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-32 text-center px-4">
      <div className="animate-fade-in">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-4 py-1.5 mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-body text-muted-foreground">
            WK 2026 — Pre-order open
          </span>
        </div>

        <h1 className="font-heading text-5xl md:text-[5.5rem] font-bold leading-[0.95] mb-4 text-foreground">
          Fan-versie
          <br />
          <span className="text-primary">voetbalshirt</span>
        </h1>

        <p className="max-w-md mx-auto text-muted-foreground text-sm md:text-base leading-relaxed mb-12">
          Het Nederlands elftal shirt voor een fractie van de prijs. 
          Comfortabel, betaalbaar en klaar voor het WK.
        </p>

        {/* Price */}
        <div className="inline-flex items-center gap-8 mb-10">
          <div className="text-right">
            <p className="text-xs text-muted-foreground line-through">€109,99</p>
            <p className="text-[10px] text-muted-foreground">Nike officieel</p>
          </div>
          <div className="h-8 w-px bg-border" />
          <div className="text-left">
            <span className="font-heading text-4xl font-bold text-foreground">€24,99</span>
          </div>
          <span className="bg-primary/15 text-primary text-xs font-medium px-2.5 py-1 rounded-full">
            −77%
          </span>
        </div>

        <p className="text-primary/80 text-xs mb-8 tracking-wide">
          Eerste voorraad uitverkocht — pre-order nu voor de volgende levering
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#pre-order"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-sm font-medium px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_hsl(24_95%_53%/0.3)]"
          >
            Pre-order plaatsen
          </a>
          <a
            href="#gripsokken"
            className="border border-border text-muted-foreground hover:text-foreground font-body text-sm px-8 py-3 rounded-lg hover:border-foreground/20 transition-all duration-300"
          >
            Bekijk gripsokken
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
