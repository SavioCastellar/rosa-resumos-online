
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Resumos', path: '/resumos' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-rosa-100">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-rosa-500" />
            <span className="font-serif text-xl font-semibold text-rosa-800">
              Rafaela Maroca
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "font-medium transition-colors hover:text-rosa-500",
                  location.pathname === item.path 
                    ? "text-rosa-500 border-b-2 border-rosa-500 pb-1" 
                    : "text-gray-600"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-rosa-500 hover:bg-rosa-600">
              <Link to="/resumos">Ver Resumos</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              className="text-rosa-800"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-rosa-100">
          <div className="container mx-auto px-4 py-3 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "block py-2 font-medium transition-colors hover:text-rosa-500",
                  location.pathname === item.path 
                    ? "text-rosa-500" 
                    : "text-gray-600"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="w-full bg-rosa-500 hover:bg-rosa-600 mt-3">
              <Link to="/resumos" onClick={() => setIsOpen(false)}>Ver Resumos</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
