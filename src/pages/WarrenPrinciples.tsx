import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import warrenImg from "@/assets/warren-buffett-character.png";
import heroImg from "@/assets/future-ready-hero.jpg";
import moatImg from "@/assets/economic-moat-castle.png";

const principles = [
  {
    id: "1",
    title: "Buy Businesses, Not Stocks",
    content:
      "When you buy a stock, think of it as buying a piece of a real business. Focus on the quality of the business — its products, customers, competitive advantage, and management — not just a ticker symbol that goes up or down. Buffett famously said: 'I am a better investor because I am a businessman, and a better businessman because I am an investor.'",
  },
  {
    id: "2",
    title: "Look for an Economic Moat",
    content:
      "A 'moat' is a durable competitive advantage that protects a company from competitors — like a castle moat protects from invaders. Moats can come from brand power (Coca-Cola), switching costs (Apple ecosystem), network effects (Visa), or cost advantages (Geico). The wider the moat, the safer the investment.",
  },
  {
    id: "3",
    title: "Think Long-Term",
    content:
      "Buffett's favorite holding period is 'forever.' He doesn't try to time the market or chase short-term gains. He buys excellent businesses at fair prices and lets compound interest do the heavy lifting over decades. Time is the friend of the wonderful business.",
  },
  {
    id: "4",
    title: "Stick to Your Circle of Competence",
    content:
      "Know what you understand well and stay within those boundaries. Buffett avoided tech stocks for years because he didn't understand them deeply enough. It's not about the size of your circle — it's about knowing where the edges are. 'Risk comes from not knowing what you're doing.'",
  },
  {
    id: "5",
    title: "Mr. Market is Your Servant, Not Your Master",
    content:
      "Benjamin Graham's allegory: imagine the stock market as an emotional business partner named Mr. Market who offers to buy or sell shares every day. Some days he's euphoric, other days panicked. You don't have to respond — just wait for prices that make sense. Use his irrationality to your advantage.",
  },
  {
    id: "6",
    title: "The Margin of Safety",
    content:
      "Always buy at a significant discount to your estimate of intrinsic value. This buffer protects you when your estimates are wrong (they often are) or when unexpected problems arise. If a bridge can hold 30 tons, don't drive a 29-ton truck over it. Build in a margin.",
  },
  {
    id: "7",
    title: "Only Buy What You Understand",
    content:
      "If you can't explain the business to a ten-year-old, you probably don't understand it well enough to invest. Complexity is the enemy of good investing. Simple, predictable businesses with clear earnings streams are Buffett's bread and butter.",
  },
  {
    id: "8",
    title: "Price vs. Value",
    content:
      "'Price is what you pay. Value is what you get.' A great company at a terrible price is a bad investment. A mediocre company at a great price might be a good one. The key is understanding the difference between market price and true intrinsic value.",
  },
  {
    id: "9",
    title: "Management Matters",
    content:
      "Invest in companies run by honest, capable, and shareholder-oriented managers. Buffett looks for CEOs who are passionate about their business, allocate capital wisely, and communicate transparently. 'When management with a reputation for brilliance tackles a business with a reputation for bad economics, it is the reputation of the business that remains intact.'",
  },
  {
    id: "10",
    title: "Be Fearful When Others Are Greedy",
    content:
      "And be greedy when others are fearful. Market panics create the best buying opportunities. When everyone is selling in terror, quality assets go on sale. Buffett made some of his best investments during the 2008 financial crisis. Emotional discipline separates great investors from average ones.",
  },
];

export default function WarrenPrinciples() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 sm:px-6">
      {/* Hero with duo illustration */}
      <div className="mb-10 animate-fade-in-up rounded-xl overflow-hidden max-w-sm mx-auto">
        <img
          src={heroImg}
          alt="Future Ready painted portrait"
          className="w-full h-auto rounded-xl"
          loading="eager"
        />
      </div>

      <div className="text-center mb-12 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
        <h1 className="font-display text-4xl sm:text-5xl text-primary text-glow-gold leading-tight mb-4">
          The Oracle's Outpost
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto" style={{ textWrap: "pretty" }}>
          Inspired by Buffett's nickname, <em>The Oracle of Omaha</em>, this outpost is
          where travelers gather to decode his investing insights.
        </p>
      </div>

      {/* Warren character + section intro */}
      <section className="animate-fade-in-up" style={{ animationDelay: "150ms" }}>
        <div className="flex items-center gap-5 mb-6">
          <img
            src={warrenImg}
            alt="Animated Warren Buffett character"
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-primary/30 shadow-lg flex-shrink-0"
          />
          <div>
            <h2 className="font-display text-2xl text-primary text-glow-gold mb-1">
              Warren Buffett's Core Principles
            </h2>
            <p className="text-muted-foreground text-sm">
              Timeless wisdom from the Oracle of Omaha, simplified.
            </p>
          </div>
        </div>

        {/* Moat illustration between accordion items */}
        <div className="mb-6 rounded-lg overflow-hidden">
          <img
            src={moatImg}
            alt="A magical golden castle with a moat representing economic moats"
            className="w-full h-auto rounded-lg opacity-90"
            loading="lazy"
          />
          <p className="text-xs text-muted-foreground text-center mt-2 italic">
            The Economic Moat — a castle protected from competition
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {principles.map((p, i) => (
            <AccordionItem
              key={p.id}
              value={p.id}
              className="border border-border/60 rounded-lg px-5 bg-card/60 backdrop-blur-sm border-glow-gold animate-fade-in-up"
              style={{ animationDelay: `${200 + i * 60}ms` }}
            >
              <AccordionTrigger className="text-left py-4 text-foreground hover:text-primary transition-colors duration-200 hover:no-underline">
                <span className="flex items-center gap-3">
                  <span className="text-primary/70 font-mono text-xs tabular-nums w-6">
                    {p.id.padStart(2, "0")}
                  </span>
                  <span className="font-medium">{p.title}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5 pl-9">
                {p.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
