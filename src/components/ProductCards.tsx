import oranjeShirt from "@/assets/oranje-shirt.jpg";
import witShirt from "@/assets/wit-shirt.jpg";

const products = [
  {
    label: "Thuis",
    image: oranjeShirt,
    alt: "Oranje fan-versie thuisshirt WK 2026",
    title: "Oranje thuisshirt",
    desc: "Fan-uitvoering met comfortabele stof en sportieve pasvorm.",
    note: "Pre-order nu — beperkte eerste levering.",
  },
  {
    label: "Uit",
    image: witShirt,
    alt: "Wit fan-versie uitshirt WK 2026",
    title: "Wit uitshirt",
    desc: "Fan-uitvoering, ideaal voor zomerse WK-avonden.",
    note: "Pre-order nu — wordt tegelijk geleverd.",
  },
];

const ProductCards = () => {
  return (
    <section id="shirts" className="py-20 md:py-32 px-4">
      <div className="container">
        <div className="mb-12">
          <p className="text-primary text-xs font-medium tracking-wide mb-2">Collectie 2026</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Kies je shirt
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {products.map((p) => (
            <div key={p.title} className="group rounded-xl overflow-hidden bg-card border border-border/50 hover:border-border transition-all duration-500">
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.alt}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full aspect-[4/5] object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <span className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm text-foreground text-[11px] font-heading font-medium px-3 py-1 rounded-full">
                  {p.label}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-5">{p.desc}</p>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-heading text-2xl font-bold text-foreground">€24,99</span>
                  <span className="text-xs text-muted-foreground line-through">€109,99</span>
                  <span className="bg-primary/15 text-primary text-[11px] font-medium px-2 py-0.5 rounded-full">
                    −77%
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mb-5">{p.note}</p>
                <a
                  href="#pre-order"
                  className="inline-flex items-center justify-center w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-sm font-medium py-3 rounded-lg transition-all duration-300 hover:shadow-[0_0_24px_hsl(24_95%_53%/0.25)]"
                >
                  Pre-order {p.label.toLowerCase()}shirt
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
