import { Outlet, Link, useLocation } from 'react-router';
import { Terminal, Code2, Heart } from 'lucide-react';

export function Layout() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header/Navigation */}
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Terminal className="size-6" />
                  <Heart className="size-3 absolute -top-1 -right-1 text-pink-500 fill-pink-500" />
                </div>
                <span className="font-mono">~/mum.codes</span>
              </div>
            </Link>
            
            <div className="flex items-center gap-6">
              <Link 
                to="/" 
                className={`transition-colors hover:text-primary ${
                  isActive('/') ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/blog" 
                className={`transition-colors hover:text-primary ${
                  isActive('/blog') ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Blog
              </Link>
              <Link 
                to="/portfolio" 
                className={`transition-colors hover:text-primary ${
                  isActive('/portfolio') ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Portfolio
              </Link>
              <Link 
                to="/about" 
                className={`transition-colors hover:text-primary ${
                  isActive('/about') ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                About
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Code2 className="size-4" />
              <span>Built with React & TypeScript (& lots of coffee)</span>
            </div>
            <div className="flex items-center gap-1">
              <span>Made with</span>
              <Heart className="size-4 text-pink-500 fill-pink-500" />
              <span>by a tired mum</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}