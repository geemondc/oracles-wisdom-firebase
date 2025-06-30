export function HeroSection() {
  return (
    <section id="hero" className="w-full py-16 md:py-24">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 text-glow animate-pulse">
          The Oracle's Outpost
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Inspired by Buffett’s nickname, “The Oracle of Omaha,” this outpost is where travelers gather to decode his investing insights.
        </p>
      </div>
    </section>
  )
}
