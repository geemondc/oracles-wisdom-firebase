"use client"

import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
  SidebarContent,
  SidebarSeparator,
} from '@/components/ui/sidebar'
import { Home, Zap, BookOpen, Gem, Target, ExternalLink } from 'lucide-react'
import Link from 'next/link'

const mainLinks = [
  { href: '#principles', label: "Warren's Principles", icon: Home },
  { href: '#models', label: "Charlie's Models", icon: Zap },
  { href: '#tools', label: 'Interactive Tools', icon: Gem },
  { href: '#resources', label: 'Learning Resources', icon: BookOpen },
]

const externalLinks = [
    { href: 'https://ready-future-hub-life.lovable.app/', label: 'Future Ready Link Hub' },
    { href: 'https://dr-gee-advice-hub.lovable.app/', label: 'The Dr. Recommends Page' },
    { href: 'https://www.etsy.com/shop/FutureReadyShop', label: 'Inside/Out Sweatshirt at ETSY.COM' },
    { href: 'https://www.futurereadydiscoveries.com', label: 'Future Ready Discoveries' },
    { href: 'https://www.futurereadyownyourday.com', label: 'Own Your Day' },
]


export function AppSidebar() {
  return (
    <Sidebar className="border-r border-border/50 backdrop-blur-sm" collapsible="icon">
      <SidebarHeader>
        <SidebarTrigger>MENU</SidebarTrigger>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {mainLinks.map((link) => (
            <SidebarMenuItem key={link.href}>
              <SidebarMenuButton asChild className="link-shiny justify-center md:justify-start">
                <a href={link.href}>
                  <link.icon />
                  <span>{link.label}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        <SidebarSeparator />
         <SidebarMenu>
            {externalLinks.map((link) => (
            <SidebarMenuItem key={link.href}>
              <SidebarMenuButton asChild className="link-shiny justify-center md:justify-start">
                <Link href={link.href} target="_blank">
                  <ExternalLink />
                  <span>{link.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        {/* Can add user profile or other footer items here */}
      </SidebarFooter>
    </Sidebar>
  )
}
