import { Truck, Shirt, Tag, Trophy } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Verzending vanuit Nederland",
    desc: "Snelle levering zodra het WK-shirt binnen is.",
  },
  {
    icon: Shirt,
    title: "Comfortabele fan-versie",
    desc: "Fijne pasvorm en ademende stof voor kijken en casual dragen.",
  },
  {
    icon: Tag,
    title: "Betaalbare prijs",
    desc: "Slechts €24,99 — een fractie van de officiële prijs.",
  },
  {
    icon: Trophy,
    title: "Perfect voor het WK",
    desc: "Voor in het stadion, de kroeg of op de bank.",
  },
];

const FeaturesBar = () => {
  return (
    <section className="bg-features-bg border-y border-border py-6">
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => (
          <div key={f.title} className="flex items-start gap-3">
            <f.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="font-heading text-xs tracking-widest text-foreground mb-1">
                {f.title.toUpperCase()}
              </p>
              <p className="text-xs text-muted-foreground">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesBar;
