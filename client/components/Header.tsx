import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-12 h-12 bg-gradient-to-br from-spiritual-gold to-spiritual-saffron rounded-full flex items-center justify-center shadow-lg">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">RishiGyan</h1>
              <p className="text-xs text-muted-foreground">Spiritual Journey</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { name: "Home", path: "/" },
              { name: "Temples", path: "/temples" },
              { name: "Services", path: "/services" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side items */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              English
            </button>
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-spiritual-gold/90 transition-colors">
              Download App
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border pb-4 space-y-2">
            {[
              { name: "Home", path: "/" },
              { name: "Temples", path: "/temples" },
              { name: "Services", path: "/services" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 pt-2 space-y-2">
              <button className="w-full text-sm font-medium text-foreground hover:text-primary transition-colors py-2">
                English
              </button>
              <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-spiritual-gold/90 transition-colors">
                Download App
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
