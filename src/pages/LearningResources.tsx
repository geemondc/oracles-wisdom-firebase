import { ExternalLink, BookOpen, Video, FileText } from "lucide-react";

const resources = [
  {
    category: "Essential Reading",
    icon: BookOpen,
    items: [
      { title: "The Intelligent Investor by Benjamin Graham", url: "https://www.amazon.com/Intelligent-Investor-Definitive-Investing-Essentials/dp/0060555661", desc: "The book Buffett calls 'the best book on investing ever written.'" },
      { title: "Poor Charlie's Almanack", url: "https://www.amazon.com/Poor-Charlies-Almanack-Charles-Expanded/dp/1578645018", desc: "A collection of Munger's speeches and mental models." },
      { title: "The Essays of Warren Buffett", url: "https://www.amazon.com/Essays-Warren-Buffett-Lessons-Corporate/dp/1531017509", desc: "Buffett's shareholder letters organized by theme." },
    ],
  },
  {
    category: "Annual Letters & Filings",
    icon: FileText,
    items: [
      { title: "Berkshire Hathaway Annual Letters", url: "https://www.berkshirehathaway.com/letters/letters.html", desc: "Decades of investing wisdom straight from Buffett." },
      { title: "Berkshire Annual Meeting Transcripts", url: "https://buffett.cnbc.com/annual-meetings/", desc: "CNBC's archive of Buffett and Munger Q&A sessions." },
    ],
  },
  {
    category: "Video & Lectures",
    icon: Video,
    items: [
      { title: "Buffett & Munger on YouTube", url: "https://www.youtube.com/results?search_query=warren+buffett+berkshire+annual+meeting", desc: "Hours of Q&A from annual meetings." },
      { title: "Charlie Munger: The Psychology of Human Misjudgment", url: "https://www.youtube.com/results?search_query=charlie+munger+psychology+human+misjudgment", desc: "Munger's legendary speech on cognitive biases." },
    ],
  },
];

export default function LearningResources() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 sm:px-6">
      <div className="text-center mb-12 animate-fade-in-up">
        <h1 className="font-display text-4xl sm:text-5xl text-primary text-glow-gold leading-tight mb-4">
          Learning Resources
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto" style={{ textWrap: "pretty" }}>
          Go deeper into value investing with these curated books, letters, and lectures.
        </p>
      </div>

      <div className="space-y-10">
        {resources.map((section, si) => (
          <section
            key={section.category}
            className="animate-fade-in-up"
            style={{ animationDelay: `${100 + si * 100}ms` }}
          >
            <div className="flex items-center gap-2 mb-4">
              <section.icon className="h-5 w-5 text-primary" />
              <h2 className="font-display text-xl text-primary text-glow-gold">
                {section.category}
              </h2>
            </div>
            <div className="space-y-3">
              {section.items.map((item) => (
                <a
                  key={item.title}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-border/60 rounded-lg p-4 bg-card/60 backdrop-blur-sm hover:bg-muted/60 transition-all duration-200 hover:border-primary/30 active:scale-[0.98] group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.desc}
                      </p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0 mt-1 group-hover:text-primary transition-colors" />
                  </div>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
