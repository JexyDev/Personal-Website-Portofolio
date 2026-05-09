import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'motion/react';
import {
  Home,
  FolderOpen,
  User,
  Mail,
  Award,
  Moon,
  Sun,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';
import { Separator } from './ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export default function ModernSidebar() {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Projects', path: '/projects', icon: FolderOpen },
    { name: 'Certificates', path: '/certificates', icon: Award },
    { name: 'About', path: '/about', icon: User },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        variant="outline"
        size="icon"
        className="fixed top-6 left-6 z-50 lg:hidden bg-white dark:bg-black border-gray-200 dark:border-gray-800"
      >
        {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Overlay for mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar - Desktop (always visible) */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-80 bg-background border-r border-border flex-col z-40">
        {/* Header */}
        <div className="p-8">
          <Link to="/" className="block group">
            <motion.div
              className="flex items-center gap-4 mb-2"
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center border-2 border-border overflow-hidden">
                <img src="/projects/profile.png" alt="Jeremy Darrell" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="font-bold text-lg text-foreground">Jeremy Darrell</h2>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">PPLG Student</p>
              </div>
            </motion.div>
          </Link>
          <div className="flex items-center gap-2 mt-4">
            <Badge variant="secondary" className="text-[10px] uppercase font-bold">
              SMK Wikrama
            </Badge>
            <Badge variant="outline" className="text-[10px] uppercase font-bold">
              Class XI
            </Badge>
          </div>
        </div>

        <Separator className="mx-8 opacity-50" />

        {/* Navigation */}
        <nav className="flex-1 px-6 py-6 overflow-y-auto">
          <div className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                >
                  <motion.div
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all group ${active
                      ? 'bg-foreground text-background shadow-lg shadow-foreground/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                    {active && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute right-4"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </motion.div>
                    )}
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </nav>

        <Separator className="mx-8" />

        {/* Footer */}
        <div className="p-8">
          <Button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            variant="outline"
            className="w-full justify-start gap-3"
          >
            {mounted && theme === 'dark' ? (
              <>
                <Moon className="h-4 w-4" />
                <span>Dark Mode</span>
              </>
            ) : (
              <>
                <Sun className="h-4 w-4" />
                <span>Light Mode</span>
              </>
            )}
          </Button>
          <div className="mt-4 text-center space-y-2">
            <div className="flex flex-col gap-1">
              <p className="text-[10px] text-muted-foreground/60 leading-relaxed">
                Ref: <a href="https://site.agann.my.id/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline underline-offset-2">Afgan</a>
              </p>
              <p className="text-[10px] text-muted-foreground/60 leading-relaxed italic">
                Built with AI assistance
              </p>
            </div>
            <p className="text-xs text-muted-foreground font-medium pt-2 border-t border-border/20">
              © 2026 Jeremy Darrell
            </p>
          </div>
        </div>
      </aside>

      {/* Sidebar - Mobile (animated) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="lg:hidden fixed left-0 top-0 h-screen w-80 bg-white dark:bg-black border-r border-gray-200 dark:border-gray-900 flex flex-col z-40"
          >
            {/* Header */}
            <div className="p-8">
              <Link to="/" className="block group" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="flex items-center gap-4 mb-2">
                  <Avatar className="h-16 w-16 ring-2 ring-gray-200 dark:ring-gray-800 ring-offset-2 ring-offset-white dark:ring-offset-black">
                    <AvatarImage src="/projects/profile.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="font-semibold text-lg text-black dark:text-white">Jeremy Darrell</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Fullstack Developer</p>
                  </div>
                </div>
              </Link>
              <div className="flex items-center gap-2 mt-4">
                <Badge variant="secondary" className="text-xs">
                  Open to Work
                </Badge>
                <Badge variant="outline" className="text-xs">
                  XI PPLG
                </Badge>
              </div>
            </div>

            <Separator className="mx-8" />

            {/* Navigation */}
            <nav className="flex-1 px-6 py-6 overflow-y-auto">
              <div className="space-y-1">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.path);
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div
                        className={`relative flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${active
                          ? 'bg-black dark:bg-white text-white dark:text-black'
                          : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-900'
                          }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span>{item.name}</span>
                        {active && (
                          <div className="absolute right-4">
                            <ChevronRight className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </nav>

            <Separator className="mx-8" />

            {/* Footer */}
            <div className="p-8">
              <Button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                variant="outline"
                className="w-full justify-start gap-3"
              >
                {mounted && theme === 'dark' ? (
                  <>
                    <Moon className="h-4 w-4" />
                    <span>Dark Mode</span>
                  </>
                ) : (
                  <>
                    <Sun className="h-4 w-4" />
                    <span>Light Mode</span>
                  </>
                )}
              </Button>
              <div className="mt-4 text-center space-y-2">
                <div className="flex flex-col gap-1">
                  <p className="text-[10px] text-muted-foreground/60 leading-relaxed">
                    Ref: <a href="https://site.agann.my.id/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline underline-offset-2">Afgan</a>
                  </p>
                  <p className="text-[10px] text-muted-foreground/60 leading-relaxed italic">
                    Built with AI assistance
                  </p>
                </div>
                <p className="text-xs text-muted-foreground font-medium pt-2 border-t border-border/20">
                  © 2026 Jeremy Darrell
                </p>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}