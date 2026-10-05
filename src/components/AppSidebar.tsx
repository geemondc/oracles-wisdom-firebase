import { Home, Target, Wrench, BookOpen, ExternalLink } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navItems = [
  { title: "Warren's Principles", url: "/", icon: Home },
  { title: "Charlie's Models", url: "/charlie", icon: Target },
  { title: "Interactive Tools", url: "/tools", icon: Wrench },
  { title: "Learning Resources", url: "/resources", icon: BookOpen },
];

const externalLinks = [
  { title: "Future Ready Link Hub", url: "https://futurereadylinkhub.com" },
  { title: "The Dr. Recommends", url: "https://thedoctorrecommends.com" },
  { title: "Inside/Out Sweatshirt at ETSY", url: "https://www.etsy.com" },
  { title: "Future Ready Discoveries", url: "https://futurereadydiscoveries.com" },
  { title: "Own Your Day", url: "https://ownyourday.com" },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();

  return (
    <Sidebar collapsible="icon" className="border-r border-border/50">
      <SidebarContent className="bg-sidebar pt-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-oracle-gold/70 font-display text-xs tracking-widest uppercase">
            Navigate
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className="hover:bg-muted/50 transition-colors duration-200"
                      activeClassName="bg-muted text-primary font-medium"
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {!collapsed && (
          <SidebarGroup>
            <SidebarGroupLabel className="text-oracle-gold/70 font-display text-xs tracking-widest uppercase">
              External
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {externalLinks.map((link) => (
                  <SidebarMenuItem key={link.title}>
                    <SidebarMenuButton asChild>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:bg-muted/50 transition-colors duration-200 flex items-center gap-2"
                      >
                        <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                        <span className="text-sm">{link.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
    </Sidebar>
  );
}
