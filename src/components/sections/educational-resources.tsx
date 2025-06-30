import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { Book, Youtube, Dribbble } from 'lucide-react'

const resources = {
  books: [
    { title: "The Intelligent Investor", author: "Benjamin Graham", description: "The foundational text on value investing, often called the 'bible' of the subject." },
    { title: "Poor Charlie's Almanack", author: "Peter D. Kaufman", description: "A collection of talks and speeches from Charlie Munger, full of wit and wisdom." },
    { title: "The Warren Buffett Way", author: "Robert Hagstrom", description: "A detailed breakdown of the strategies and principles Buffett uses to invest." },
    { title: "A Few Lessons for Investors and Managers", author: "Peter Bevelin", description: "Distills wisdom from Buffett and Munger into easily digestible lessons." },
  ],
  videos: [
    { title: "Berkshire Hathaway Annual Meetings", channel: "CNBC", description: "Watch hours of Buffett and Munger answering shareholder questions on a wide range of topics." },
    { title: "Secret Millionaires Club", channel: "Warren Buffett", description: "An animated series for kids teaching financial lessons in a fun and engaging way." },
    { title: "The Swedish Investor", channel: "YouTube", description: "Creates excellent animated summaries of investment books and strategies." },
  ],
  tools: [
    { title: "CNBC Berkshire Hathaway Portfolio Tracker", provider: "CNBC", description: "See the latest holdings of Berkshire Hathaway's public stock portfolio." },
    { title: "Value Investing Calculators", provider: "Multiple", description: "Online tools to help calculate intrinsic value, margin of safety, and other key metrics." },
  ]
}

export function EducationalResources() {
  return (
    <section id="resources" className="w-full py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-2 text-glow">
          Educational Resources
        </h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Continue your journey with these hand-picked books, videos, and tools.
        </p>
        <div className="grid gap-8">
          <div>
            <h3 className="flex items-center gap-2 text-2xl font-headline font-semibold mb-4"><Book className="text-primary"/>Books</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {resources.books.map(item => (
                <Card key={item.title} className="hover:border-primary transition-colors bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.author}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h3 className="flex items-center gap-2 text-2xl font-headline font-semibold mb-4"><Youtube className="text-primary"/>Videos</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {resources.videos.map(item => (
                <Card key={item.title} className="hover:border-primary transition-colors bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.channel}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h3 className="flex items-center gap-2 text-2xl font-headline font-semibold mb-4"><Dribbble className="text-primary"/>Tools</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {resources.tools.map(item => (
                <Card key={item.title} className="hover:border-primary transition-colors bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.provider}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
