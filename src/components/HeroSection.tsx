const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 text-center px-4">
      <div className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 mb-8">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="text-xs font-body text-muted-foreground tracking-wide">
          WK 2026 — VS, MEXICO & CANADA — JUNI 2026
        </span>
        <span className="ml-2 bg-primary text-primary-foreground text-[10px] font-heading tracking-wider px-2.5 py-0.5 rounded-sm">
          ORANJE FAN SHIRT
        </span>
      </div>

      <h1 className="font-heading text-5xl md:text-8xl font-bold leading-none mb-2 text-foreground">
        FAN-VERSIE
      </h1>
      <p className="font-heading text-4xl md:text-7xl font-bold text-primary leading-none mb-6">
        VOETBALSHIRT 2026
      </p>

      <p className="max-w-xl mx-auto text-muted-foreground text-sm md:text-base leading-relaxed mb-8">
        Thuisshirt en uitshirt van het Nederlands elftal — voor een scherpe prijs.
        Comfortabel voor op de tribune, thuis kijken of casual dragen.
      </p>

      {/* Price box */}
      <div className="inline-flex items-center gap-6 bg-card border border-border rounded-lg px-6 py-4 mb-6">
        <div className="text-left">
          <p className="text-xs text-muted-foreground line-through">Officieel Nike-shirt: €109,99</p>
          <p className="text-xs text-muted-foreground">vs. onze fan-versie</p>
        </div>
        <span className="font-heading text-4xl font-bold text-foreground">€24,99</span>
        <div className="text-left">
          <span className="bg-primary text-primary-foreground text-xs font-heading px-2 py-1 rounded-sm">
            −77%
          </span>
          <p className="text-xs text-muted-foreground mt-1">Zelfde look,</p>
          <p className="text-xs text-muted-foreground">veel betaalbaardere prijs</p>
        </div>
      </div>

      <p className="text-primary text-sm mb-6">
        Eerste voorraad uitverkocht — pre‑order nu voor de volgende levering.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="#pre-order"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-sm tracking-widest px-8 py-3 rounded-sm transition-colors"
        >
          PLAATS EEN PRE-ORDER
        </a>
        <a
          href="#gripsokken"
          className="border border-muted-foreground/30 text-foreground font-heading text-sm tracking-widest px-8 py-3 rounded-sm hover:border-foreground transition-colors"
        >
          BEKIJK GRIPSOKKEN
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
