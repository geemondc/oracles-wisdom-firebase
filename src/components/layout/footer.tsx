import Link from 'next/link'

const links = [
  { href: 'https://ready-future-hub-life.lovable.app/', label: 'Future Ready Link Hub' },
  { href: 'https://dr-gee-advice-hub.lovable.app/', label: 'The Dr. Recommends Page' },
  { href: 'https://www.etsy.com/shop/FutureReadyShop', label: 'Inside/Out Sweatshirt at ETSY.COM' },
  { href: 'https://www.futurereadydiscoveries.com', label: 'Future Ready Discoveries' },
  { href: 'https://www.futurereadyownyourday.com', label: 'Own Your Day' },
]

export function Footer() {
  return (
    <footer className="w-full border-t border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-center">
          {links.map((link) => (
            <Link href={link.href} key={link.href} target="_blank" rel="noopener noreferrer" className="link-shiny text-sm text-muted-foreground hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Oracle's Wisdom. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
