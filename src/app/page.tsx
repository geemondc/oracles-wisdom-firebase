import { AppSidebar } from '@/components/layout/app-sidebar'
import { Footer } from '@/components/layout/footer'
import { PageHeader } from '@/components/layout/page-header'
import { BuffettPrinciples } from '@/components/sections/buffett-principles'
import { EducationalResources } from '@/components/sections/educational-resources'
import { HeroSection } from '@/components/sections/hero-section'
import { InteractiveTools } from '@/components/sections/interactive-tools'
import { MungerModels } from '@/components/sections/munger-models'
import { PortfolioTracker } from '@/components/sections/portfolio-tracker'
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="relative flex min-h-screen w-full flex-col">
          <PageHeader />
          <main className="flex-grow w-full flex flex-col items-center justify-center text-center p-4 sm:p-6 lg:p-8">
            <div className="w-full max-w-5xl space-y-16 md:space-y-24">
              <HeroSection />
              <BuffettPrinciples />
              <MungerModels />
              <InteractiveTools />
              <PortfolioTracker />
              <EducationalResources />
            </div>
          </main>
          <Footer />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
