import { Truck, Shirt, Tag, Trophy } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Verzending NL",
    desc: "Snelle levering zodra het shirt binnen is.",
  },
  {
    icon: Shirt,
    title: "Comfortabel",
    desc: "Ademende stof, fijne pasvorm.",
  },
  {
    icon: Tag,
    title: "€24,99",
    desc: "Een fractie van de officiële prijs.",
  },
  {
    icon: Trophy,
    title: "WK-ready",
    desc: "Stadion, kroeg of op de bank.",
  },
];

const FeaturesBar = () => {
  return (
    <section className="border-y border-border/40 py-8">
      <div className="container grid grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f) => (
          <div key={f.title} className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <f.icon className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="font-heading text-sm font-semibold text-foreground mb-0.5">
                {f.title}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesBar;
