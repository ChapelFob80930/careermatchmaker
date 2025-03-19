
import React from 'react';
import { NavBar } from '@/components/NavBar';
import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
  noNavbar?: boolean;
}

export function MainLayout({ children, className, noNavbar = false }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {!noNavbar && <NavBar />}
      
      <main className={cn(
        "flex-1 px-4 sm:px-6 lg:px-8 pt-16 pb-12 transition-all",
        className
      )}>
        {children}
      </main>
      
      <footer className="py-6 px-4 sm:px-6 lg:px-8 bg-secondary/50 backdrop-blur-sm border-t border-border/30">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CareerMatch. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
