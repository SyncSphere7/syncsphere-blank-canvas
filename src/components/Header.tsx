import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ThemeToggle } from './ThemeToggle';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const homeLink = isHomePage ? "#home" : "/";

  const servicesItems = [
    { title: "Website Design & Development", path: "/services/web-development" },
    { title: "AI Chatbot Solutions", path: "/services/chatbots" },
    { title: "Appointment Booking Systems", path: "/services/appointment-booking" },
    { title: "Social Media Management", path: "/services/social-media" },
    { title: "Email Marketing", path: "/services/email-marketing" },
    { title: "Google Business Management", path: "/services/google-business" },
    { title: "Business Automation", path: "/services/automations" },
    { title: "Analytics & Reporting", path: "/services/analytics" },
    { title: "Brand Identity", path: "/services/brand-identity" },
    { title: "Micro MVP Development", path: "/services/micro-mvp" },
  ];

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isHomePage) {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { replace: true });
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header className="bg-background py-4 px-6 sticky top-0 z-50 border-b border-white/10 dark:border-white/10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/syncsphere-logo.png" alt="SyncSphere Logo" className="h-12 mr-2" />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to={homeLink} className="text-foreground/80 hover:text-foreground transition-colors">Home</Link>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground/80 hover:text-foreground transition-colors bg-transparent">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid grid-cols-2 gap-2 p-4 w-[500px]">
                    {servicesItems.map((service) => (
                      <li key={service.path}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={service.path}
                            className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary hover:text-white focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{service.title}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link to="/pricing" className="text-foreground/80 hover:text-foreground transition-colors">Pricing</Link>
          <a href="#contact" onClick={handleContactClick} className="text-foreground/80 hover:text-foreground transition-colors cursor-pointer">Contact</a>
          <ThemeToggle />
        </nav>
        
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <Button variant="ghost" className="text-foreground p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-background w-full py-4 px-4 absolute left-0 top-full border-b border-white/10 z-50 max-h-screen overflow-y-auto">
          <nav className="flex flex-col space-y-3">
            <Link to={homeLink} className="text-foreground/80 hover:text-foreground py-2 px-3 rounded-md hover:bg-white/5" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <div className="flex flex-col space-y-1">
              <div className="text-foreground/80 py-2 px-3">Services</div>
              <div className="pl-3 flex flex-col space-y-1">
                {servicesItems.map((service) => (
                  <Link key={service.path} to={service.path} className="text-foreground/70 hover:text-primary text-sm py-2 px-3 rounded-md hover:bg-white/5" onClick={() => setIsMenuOpen(false)}>
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/pricing" className="text-foreground/80 hover:text-foreground py-2 px-3 rounded-md hover:bg-white/5" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
            <a href="#contact" onClick={(e) => { handleContactClick(e); setIsMenuOpen(false); }} className="text-foreground/80 hover:text-foreground py-2 px-3 rounded-md hover:bg-white/5 cursor-pointer">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
