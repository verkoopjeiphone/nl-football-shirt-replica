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
    q: "Wanneer wordt mijn pre‑order geleverd?",
    a: "We verwachten levering rond mei/juni 2026, ruim op tijd voor het WK. Zodra de shirts binnen zijn, worden alle pre‑orders direct verstuurd.",
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
    <section className="py-16 md:py-24 px-4 bg-features-bg">
      <div className="container max-w-2xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
          VEELGESTELDE VRAGEN
        </h2>
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-4 bg-card">
              <AccordionTrigger className="font-heading text-sm tracking-wide text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
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
