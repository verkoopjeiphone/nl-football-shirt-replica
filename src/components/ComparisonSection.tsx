import { Check, X } from "lucide-react";

const ComparisonSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-features-bg">
      <div className="container">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
          WAAROM EEN FAN-VERSIE?
        </h2>
        <p className="text-muted-foreground text-sm mb-10">
          Dezelfde Oranje-beleving, zonder de officiële prijs.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
          {/* Official */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-heading text-lg font-bold text-foreground mb-1">OFFICIEEL SHIRT</h3>
            <p className="font-heading text-3xl font-bold text-muted-foreground mb-4">€109,99</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                "Officieel Nike-product",
                "Hoge prijs per shirt",
                "Niet iedereen wil zoveel uitgeven",
                "Vaak snel uitverkocht rond toernooien",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <X className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Fan version */}
          <div className="bg-card border-2 border-primary rounded-lg p-6 relative">
            <h3 className="font-heading text-lg font-bold text-foreground mb-1">
              FAN-VERSIE VOETBALSHIRTSNL
            </h3>
            <p className="font-heading text-3xl font-bold text-primary mb-4">€24,99</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                "Comfortabele fan-versie voor kijkers en fans",
                "Veel vriendelijker voor je portemonnee",
                "Geschikt voor stadion, kroeg en thuis",
                "Pre‑order: zekerheid dat je erbij bent",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
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
