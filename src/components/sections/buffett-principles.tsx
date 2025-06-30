import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent } from '../ui/card'

const principles = [
  {
    title: '1. Buy Businesses, Not Stocks',
    explanation:
      "Think like you're buying the entire company, not just a piece of paper that wiggles in price. Focus on the business's long-term health and profitability.",
    analogy: 'Like buying a whole lemonade stand, not just a cup of lemonade.',
    quote:
      'It is far better to buy a wonderful company at a fair price than a fair company at a wonderful price.',
  },
  {
    title: '2. Look for an Economic Moat',
    explanation:
      'Invest in companies with a strong, sustainable competitive advantage that protects them from competitors, like a castle moat protects it from invaders.',
    analogy: 'Like a castle with high walls and a wide moat that no one can cross.',
    quote:
      'The key to investing is not assessing how much an industry is going to affect society, or how much it will grow, but rather determining the competitive advantage of any given company and, above all, the durability of that advantage.',
  },
  {
    title: '3. Think Long-Term',
    explanation:
      "Don't get caught up in daily market noise. The goal is to own great businesses for many years, letting them grow and compound your wealth.",
    analogy: 'Like planting a small apple seed and patiently waiting for it to grow into a big tree that gives you apples every year.',
    quote: 'Our favorite holding period is forever.',
  },
  {
    title: '4. Stay in Your Circle of Competence',
    explanation:
      'Only invest in businesses you can easily understand. You don’t have to be an expert on every company, just the ones you own.',
    analogy: 'Play the games you know you can win. If you are great at baseball, don’t try to be a pro hockey player.',
    quote:
      'You only have to do a very few things right in your life so long as you don’t do too many things wrong.',
  },
  {
    title: '5. Demand a Margin of Safety',
    explanation:
      'Buy a business for significantly less than its underlying value. This discount provides a buffer in case things don’t go as planned.',
    analogy: 'Like buying a $10 toy on sale for only $6. You have a $4 cushion.',
    quote: 'The three most important words in investing are margin of safety.',
  },
]

export function BuffettPrinciples() {
  return (
    <section id="principles" className="w-full py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-2 text-glow">
          Warren Buffett's Core Principles
        </h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Timeless wisdom from the Oracle of Omaha, simplified.
        </p>
        <Card className="bg-card/50 backdrop-blur-sm">
          <CardContent className="p-4 md:p-6">
            <Accordion type="single" collapsible className="w-full">
              {principles.map((p, i) => (
                <AccordionItem value={`item-${i}`} key={i}>
                  <AccordionTrigger className="text-lg md:text-xl font-headline hover:no-underline text-left">
                    {p.title}
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-2">
                    <p className="text-base text-foreground/90">
                      {p.explanation}
                    </p>
                    <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground">
                      <p className="font-semibold text-accent/90">Kid-friendly analogy:</p>
                      <p>"{p.analogy}"</p>
                    </blockquote>
                    <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                       <p>"{p.quote}"</p>
                       <footer className="text-sm not-italic mt-1">- Warren Buffett</footer>
                    </blockquote>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
