"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  Activity, 
  BarChart2, 
  CalendarClock, 
  ChevronRight, 
  Dumbbell, 
  Menu, 
  Settings, 
  Utensils, 
  UserCircle 
} from "lucide-react";
import { usePathname } from "next/navigation";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const pathname = usePathname();

  const routes = [
    {
      label: "Dashboard",
      icon: Activity,
      href: "/dashboard",
    },
    {
      label: "Workouts",
      icon: Dumbbell,
      href: "/dashboard/workouts",
    },
    {
      label: "Nutrition",
      icon: Utensils,
      href: "/dashboard/nutrition",
    },
    {
      label: "Health Metrics",
      icon: BarChart2,
      href: "/dashboard/metrics",
    },
    {
      label: "Calendar",
      icon: CalendarClock,
      href: "/dashboard/calendar",
    },
    {
      label: "Profile",
      icon: UserCircle,
      href: "/dashboard/profile",
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/dashboard/settings",
    },
  ];

  return (
    <div className="flex min-h-screen bg-muted/30">
      {/* Sidebar for desktop */}
      <aside 
        className={cn(
          "fixed z-30 hidden h-screen md:block transition-all duration-300",
          isSidebarOpen ? "w-64" : "w-20"
        )}
      >
        <div className="flex flex-col h-full border-r bg-background">
          <div className={cn(
            "h-16 flex items-center px-6 border-b",
            isSidebarOpen ? "justify-between" : "justify-center"
          )}>
            {isSidebarOpen ? (
              <Link href="/" className="flex items-center gap-2">
                <Activity className="h-6 w-6 text-primary" />
                <span className="font-bold text-xl tracking-tight">FitTrack</span>
              </Link>
            ) : (
              <Activity className="h-6 w-6 text-primary" />
            )}
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="hidden md:flex"
            >
              <ChevronRight className={cn(
                "h-4 w-4 transition-transform",
                isSidebarOpen ? "" : "rotate-180"
              )} />
            </Button>
          </div>
          
          <ScrollArea className="flex-1 py-4">
            <nav className="grid gap-1 px-2">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                    pathname === route.href
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <route.icon className="h-5 w-5" />
                  {isSidebarOpen && <span>{route.label}</span>}
                </Link>
              ))}
            </nav>
          </ScrollArea>

          <div className={cn(
            "p-4 border-t",
            isSidebarOpen ? "" : "flex justify-center"
          )}>
            <div className={cn(
              "flex items-center gap-3",
              isSidebarOpen ? "" : "justify-center"
            )}>
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                JS
              </div>
              {isSidebarOpen && (
                <div>
                  <p className="text-sm font-medium">Hillol Das Pias</p>
                  <p className="text-xs text-muted-foreground">Premium Plan</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>
      
      {/* Mobile navbar */}
      <header className="fixed top-0 left-0 right-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <Link href="/" className="flex items-center gap-2 mb-8">
              <Activity className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl tracking-tight">FitTrack</span>
            </Link>
            <nav className="grid gap-2">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                    pathname === route.href
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <route.icon className="h-5 w-5" />
                  <span>{route.label}</span>
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        
        <Link href="/" className="flex items-center gap-2">
          <Activity className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl tracking-tight">FitTrack</span>
        </Link>
      </header>
      
      {/* Main content */}
      <main className={cn(
        "flex-1 transition-all duration-300",
        isSidebarOpen ? "md:pl-64" : "md:pl-20"
      )}>
        <div className="min-h-screen">
          {children}
        </div>
      </main>
    </div>
  );
}