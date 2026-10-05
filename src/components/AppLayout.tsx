import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { SkyBackground } from "@/components/SkyBackground";
import { useTheme } from "@/components/ThemeProvider";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AppLayout({ children }: { children: React.ReactNode }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full relative">
        <SkyBackground />
        <AppSidebar />
        <div className="flex-1 flex flex-col relative z-10">
          <header className="h-14 flex items-center justify-between border-b border-border/30 px-4 backdrop-blur-sm bg-background/50">
            <div className="flex items-center gap-3">
              <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
              <h1 className="font-display text-lg text-primary text-glow-gold tracking-wide">
                Oracle Outpost
              </h1>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-primary active:scale-95 transition-all duration-200"
              aria-label="Toggle day/night mode"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
          </header>
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
