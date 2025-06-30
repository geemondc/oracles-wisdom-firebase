import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { BrainCircuit, RefreshCw, CircleDot, Scale } from 'lucide-react'

const models = [
  {
    icon: RefreshCw,
    title: 'Inversion',
    description: "Instead of asking how to succeed, ask how to fail. Avoiding stupidity is often easier than seeking brilliance.",
    example: "Kid's Example: To get good grades, you first figure out everything that would make you get bad grades (not studying, not sleeping, etc.) and then you just don't do those things!",
  },
  {
    icon: CircleDot,
    title: 'Circle of Competence',
    description: "Everyone has areas they understand deeply and areas they don't. It's crucial to know the difference and stick to what you know.",
    example: "Kid's Example: If you're an amazing soccer player, you should focus on playing soccer, not trying to be a professional chef overnight. Know your strengths!",
  },
  {
    icon: BrainCircuit,
    title: 'Multiple Mental Models',
    description: "The world is complex. To understand it, you need a 'latticework' of models from different fields like physics, biology, and psychology.",
    example: "Kid's Example: If you only have a hammer, every problem looks like a nail. But if you have a whole toolbox (with saws, screwdrivers, etc.), you can solve any problem.",
  },
  {
    icon: Scale,
    title: 'Opportunity Cost',
    description: "Every decision you make means giving up on all the other options. The true cost of something is what you have to give up to get it.",
    example: "Kid's Example: If you have $5 and you buy a toy car, the opportunity cost is the ice cream cone you couldn't buy with that same $5.",
  }
]

export function MungerModels() {
  return (
    <section id="models" className="w-full py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-2 text-glow">
          Charlie Munger's Mental Models
        </h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Powerful thinking tools to help you make better decisions in life and investing.
        </p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          {models.map((model) => (
            <Card key={model.title} className="flex flex-col bg-card/50 backdrop-blur-sm hover:border-accent transition-colors">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <model.icon className="w-10 h-10 text-accent" />
                <div>
                    <CardTitle className="font-headline text-xl">{model.title}</CardTitle>
                    <CardDescription>{model.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="border-l-2 border-accent/50 pl-4 text-sm text-muted-foreground italic">
                    {model.example}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
