import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Scissors } from 'lucide-react';

interface NavbarProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Navbar = ({ mobileMenuOpen, setMobileMenuOpen }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Scissors className="text-purple-600 mr-2" size={28} />
              <span className="text-2xl font-bold text-purple-900">
                Snip<span className="text-teal-600">X</span>
              </span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8 ml-8">
              <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">Home</Link>
              <Link to="/technologies" className="text-gray-700 hover:text-purple-600 transition-colors">Technologies</Link>
              <Link to="/editor" className="text-gray-700 hover:text-purple-600 transition-colors">Editor</Link>
              {/* <Link to="/options" className="text-gray-700 hover:text-purple-600 transition-colors">Features</Link> */} {/* Old link */}
              <Link to="/features" className="text-gray-700 hover:text-purple-600 transition-colors">Features</Link> {/* New link */}
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white p-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-purple-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/technologies"
              className="text-gray-700 hover:text-purple-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Technologies
            </Link>
            <Link
              to="/editor"
              className="text-gray-700 hover:text-purple-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Editor
            </Link>
            {/* <Link
              to="/options"
              className="text-gray-700 hover:text-purple-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link> */} {/* Old link */}
             <Link
              to="/features"
              className="text-gray-700 hover:text-purple-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link> {/* New link */}
            <Link
              to="/login"
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
