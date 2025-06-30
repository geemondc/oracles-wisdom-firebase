"use client"

import { SidebarTrigger } from '@/components/ui/sidebar'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '../ui/button'

export function PageHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
            <SidebarTrigger asChild>
                <Button variant="ghost" size="sm">MENU</Button>
            </SidebarTrigger>
        </div>
        <h1 className="text-xl sm:text-2xl font-headline text-glow whitespace-nowrap">
            Oracle Outpost
        </h1>
        <div className="flex items-center justify-end gap-2">
            <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
