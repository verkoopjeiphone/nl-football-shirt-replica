import oranjeShirt from "@/assets/oranje-shirt.jpg";
import witShirt from "@/assets/wit-shirt.jpg";

const products = [
  {
    label: "Thuis",
    image: oranjeShirt,
    alt: "Oranje fan-versie thuisshirt WK 2026",
    title: "Oranje thuisshirt 2026",
    desc: "Oranje thuisshirt in fan-uitvoering, met comfortabele stof en sportieve pasvorm.",
    note: "Pre‑order nu – beperkte eerste levering.",
  },
  {
    label: "Uit",
    image: witShirt,
    alt: "Wit fan-versie uitshirt WK 2026",
    title: "Wit uitshirt 2026",
    desc: "Wit uitshirt in fan-uitvoering, ideaal voor zomerse WK-avonden.",
    note: "Pre‑order nu – uitshirt wordt tegelijk geleverd.",
  },
];

const ProductCards = () => {
  return (
    <section id="shirts" className="py-16 md:py-24 px-4">
      <div className="container">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
          KIES JE ORANJE SHIRT
        </h2>
        <p className="text-primary text-sm mb-10">
          Zelfde Oranje vibe – zonder de officiële prijs.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((p) => (
            <div key={p.title} className="bg-card border border-border rounded-lg overflow-hidden group">
              <div className="relative">
                <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-heading tracking-widest px-2.5 py-0.5 rounded-sm z-10">
                  {p.label.toUpperCase()}
                </span>
                <img
                  src={p.image}
                  alt={p.alt}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] font-heading text-muted-foreground tracking-widest">FAN-VERSIE</span>
                <h3 className="font-heading text-xl font-bold text-foreground mt-1 mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="font-heading text-2xl font-bold text-foreground">€24,99</span>
                  <span className="text-xs text-muted-foreground line-through">Nike: €109,99</span>
                  <span className="bg-primary text-primary-foreground text-[10px] font-heading px-2 py-0.5 rounded-sm">
                    −77%
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mb-4">{p.note}</p>
                <a
                  href="#pre-order"
                  className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-xs tracking-widest px-6 py-2.5 rounded-sm transition-colors"
                >
                  PRE-ORDER {p.label.toUpperCase()}SHIRT
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCards;
