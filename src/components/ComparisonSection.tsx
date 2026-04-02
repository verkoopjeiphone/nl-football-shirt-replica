import { Check, X } from "lucide-react";

const ComparisonSection = () => {
  return (
    <section className="py-20 md:py-32 px-4 bg-features-bg">
      <div className="container">
        <div className="mb-12">
          <p className="text-primary text-xs font-medium tracking-wide mb-2">Vergelijking</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Waarom een fan-versie?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
          {/* Official */}
          <div className="bg-card/50 border border-border/40 rounded-xl p-6">
            <p className="text-xs text-muted-foreground mb-1">Officieel shirt</p>
            <p className="font-heading text-3xl font-bold text-muted-foreground/60 mb-6">€109,99</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                "Officieel Nike-product",
                "Hoge prijs per shirt",
                "Niet iedereen wil zoveel uitgeven",
                "Vaak snel uitverkocht",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <X className="w-3.5 h-3.5 text-destructive/60 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Fan version */}
          <div className="bg-card border border-primary/30 rounded-xl p-6 relative">
            <span className="absolute -top-3 left-6 bg-primary text-primary-foreground text-[10px] font-medium px-3 py-1 rounded-full">
              Aanbevolen
            </span>
            <p className="text-xs text-muted-foreground mb-1">Fan-versie</p>
            <p className="font-heading text-3xl font-bold text-primary mb-6">€24,99</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                "Comfortabele fan-versie",
                "Veel vriendelijker voor je portemonnee",
                "Geschikt voor stadion, kroeg en thuis",
                "Pre-order: zekerheid dat je erbij bent",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
