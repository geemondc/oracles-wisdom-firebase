import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import charlieImg from "@/assets/charlie-munger-character.png";
import brainImg from "@/assets/mental-models-brain.png";

const models = [
  {
    id: "inversion",
    title: "Inversion",
    subtitle: "Avoid disaster by thinking backward",
    content:
      "Instead of asking 'How do I succeed?', ask 'How would I guarantee failure?' Then avoid those things. Munger credited this simple mental trick — borrowed from mathematician Carl Jacobi — as one of his most powerful tools. Want a great marriage? List everything that would destroy one, then don't do those things.",
  },
  {
    id: "circle",
    title: "Circle of Competence",
    subtitle: "Know what you know — and what you don't",
    content:
      "Everyone has areas where they have deep knowledge and areas where they're clueless. The key isn't expanding your circle endlessly — it's knowing exactly where the boundary is. Disasters happen when you think your circle is bigger than it actually is. Honest self-assessment is a superpower.",
  },
  {
    id: "first-principles",
    title: "First Principles Thinking",
    subtitle: "Break problems down to their fundamental truths",
    content:
      "Don't reason by analogy ('everyone else does it this way'). Instead, decompose a problem into its most basic elements and rebuild your understanding from the ground up. This is how breakthrough insights happen — by questioning assumptions that everyone else takes for granted.",
  },
  {
    id: "confirmation-bias",
    title: "Confirmation Bias Awareness",
    subtitle: "Actively seek out what proves you wrong",
    content:
      "Humans naturally seek information that confirms what they already believe and dismiss evidence that contradicts it. Munger deliberately looks for disconfirming evidence. 'I never allow myself to have an opinion on anything that I don't know the other side's argument better than they do.' Destroy your best-loved ideas regularly.",
  },
  {
    id: "opportunity-cost",
    title: "Opportunity Cost",
    subtitle: "Every choice means giving something else up",
    content:
      "The true cost of anything is what you give up to get it. When evaluating an investment, don't just ask 'Is this good?' — ask 'Is this the best use of this capital compared to every other option available?' Munger and Buffett frequently pass on 'good' deals because they have 'great' alternatives.",
  },
  {
    id: "lollapalooza",
    title: "Lollapalooza Effect",
    subtitle: "When multiple forces combine, results go extreme",
    content:
      "When several psychological tendencies or economic forces all push in the same direction simultaneously, the result isn't just additive — it's explosive. Open auctions combine social proof, commitment bias, reciprocity, and scarcity to produce wildly irrational prices. Recognizing these multi-factor pile-ups is crucial for both investing and understanding human behavior.",
  },
];

export default function CharlieModels() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 sm:px-6">
      {/* Brain illustration hero */}
      <div className="mb-8 animate-fade-in-up rounded-xl overflow-hidden">
        <img
          src={brainImg}
          alt="Colorful brain made of gears and puzzle pieces representing mental models"
          className="w-full h-auto rounded-xl"
          loading="eager"
        />
      </div>

      <div className="flex items-center gap-5 mb-10 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
        <img
          src={charlieImg}
          alt="Animated Charlie Munger character"
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-accent/30 shadow-lg flex-shrink-0"
        />
        <div>
          <h1 className="font-display text-3xl sm:text-4xl text-accent text-glow-teal leading-tight mb-1">
            Charlie's Mental Models
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base" style={{ textWrap: "pretty" }}>
            Charlie Munger built a "latticework of mental models" from multiple
            disciplines — the toolkit for rational thinking.
          </p>
        </div>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {models.map((m, i) => (
          <AccordionItem
            key={m.id}
            value={m.id}
            className="border border-border/60 rounded-lg px-5 bg-card/60 backdrop-blur-sm border-glow-teal animate-fade-in-up"
            style={{ animationDelay: `${150 + i * 70}ms` }}
          >
            <AccordionTrigger className="text-left py-4 text-foreground hover:text-accent transition-colors duration-200 hover:no-underline">
              <span className="flex flex-col">
                <span className="font-medium">{m.title}</span>
                <span className="text-xs text-muted-foreground font-normal mt-0.5">
                  {m.subtitle}
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              {m.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
