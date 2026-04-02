import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is dit een officieel Nike-shirt?",
    a: "Nee, dit is een fan-versie. Het is géén officieel Nike-product en dus geen officiële merchandising van de KNVB of Nike.",
  },
  {
    q: "Wanneer wordt mijn pre-order geleverd?",
    a: "We verwachten levering rond mei/juni 2026, ruim op tijd voor het WK. Zodra de shirts binnen zijn, worden alle pre-orders direct verstuurd.",
  },
  {
    q: "Kan ik mijn maat ruilen?",
    a: "Binnen Nederland kun je binnen 14 dagen na ontvangst ruilen voor een andere maat, zolang de voorraad strekt en het shirt ongedragen is.",
  },
  {
    q: "Van welk materiaal zijn de shirts gemaakt?",
    a: "De shirts zijn gemaakt van ademend polyester, comfortabel en licht — ideaal voor het dragen tijdens wedstrijden.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 md:py-32 px-4 bg-features-bg">
      <div className="container max-w-xl">
        <p className="text-primary text-xs font-medium tracking-wide mb-2">FAQ</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-10">
          Veelgestelde vragen
        </h2>
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-border/40 rounded-xl px-5 bg-card/50 data-[state=open]:bg-card transition-colors"
            >
              <AccordionTrigger className="font-heading text-sm font-medium text-foreground hover:no-underline py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
