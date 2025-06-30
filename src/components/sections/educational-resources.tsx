import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { Book, Youtube, Dribbble, ExternalLink } from 'lucide-react'

const resources = {
  books: [
    { title: "The Intelligent Investor", author: "Benjamin Graham", description: "The foundational text on value investing, often called the 'bible' of the subject.", link: "https://amzn.to/467sAbF" },
    { title: "Poor Charlie's Almanack", author: "Peter D. Kaufman", description: "A collection of talks and speeches from Charlie Munger, full of wit and wisdom.", link: "https://amzn.to/4kfSayc" },
    { title: "The Warren Buffett Way", author: "Robert Hagstrom", description: "A detailed breakdown of the strategies and principles Buffett uses to invest.", link: "https://amzn.to/4ntEUZU" },
    { title: "A Few Lessons for Investors and Managers", author: "Peter Bevelin", description: "Distills wisdom from Buffett and Munger into easily digestible lessons.", link: "https://amzn.to/4etsA7C" },
  ],
  videos: [
    { title: "Berkshire Hathaway Annual Meetings Archive", channel: "CNBC", description: "Watch hours of Buffett and Munger answering shareholder questions on a wide range of topics.", link: "https://buffett.cnbc.com/annual-meetings/" },
    { title: "Secret Millionaires Club", channel: "Warren Buffett", description: "An animated series for kids teaching financial lessons in a fun and engaging way.", link: "https://pluto.tv/us/on-demand/series/630ea5ebc38c530013336d0b/season/1?utm_medium=textsearch&utm_source=google" },
  ],
  tools: [
    { title: "CNBC Berkshire Hathaway Portfolio Tracker", provider: "CNBC", description: "See the latest holdings of Berkshire Hathaway's public stock portfolio.", link: "https://www.cnbc.com/berkshire-hathaway-portfolio/" },
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
                <Link href={item.link} key={item.title} target="_blank" rel="noopener noreferrer" className="block group">
                  <Card className="h-full hover:border-primary transition-colors bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {item.title}
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </CardTitle>
                      <CardDescription>{item.author}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="flex items-center gap-2 text-2xl font-headline font-semibold mb-4"><Youtube className="text-primary"/>Videos</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {resources.videos.map(item => (
                 <Link href={item.link} key={item.title} target="_blank" rel="noopener noreferrer" className="block group">
                    <Card className="h-full hover:border-primary transition-colors bg-card/50 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                            {item.title}
                            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </CardTitle>
                        <CardDescription>{item.channel}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="flex items-center gap-2 text-2xl font-headline font-semibold mb-4"><Dribbble className="text-primary"/>Tools</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {resources.tools.map(item => (
                <Link href={item.link} key={item.title} target="_blank" rel="noopener noreferrer" className="block group">
                    <Card className="h-full hover:border-primary transition-colors bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                            {item.title}
                            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </CardTitle>
                        <CardDescription>{item.provider}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                    </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
