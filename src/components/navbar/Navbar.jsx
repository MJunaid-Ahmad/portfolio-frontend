import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', id: 'nav-home' },
    { name: 'Projects', path: '/projects', id: 'nav-projects' },
    { name: 'Resume', path: '/resume', id: 'nav-resume' },
    { name: 'Contact', path: '/contact', id: 'nav-contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-mid/80 backdrop-blur-md border-b border-edge py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo / Brand */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-xl font-bold font-poppins tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-violet-accent to-cyan-accent"
            id="nav-logo"
          >
            <Code2 className="h-6 w-6 text-cyan-accent" />
            <span>M. JUNAID</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                id={link.id}
                className={`font-medium text-sm transition-colors relative py-1 ${
                  location.pathname === link.path
                    ? 'text-cyan-accent'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-accent to-cyan-accent"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              id="nav-hire-me"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-accent to-cyan-accent text-white font-medium text-sm shadow-md hover:shadow-cyan-accent/20 hover:scale-105 transition-all duration-200"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="nav-mobile-toggle"
              aria-label="Toggle Menu"
              className="text-slate-300 hover:text-white focus:outline-none p-2 rounded-md hover:bg-slate-mid border border-transparent hover:border-edge"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-slate-mid/95 backdrop-blur-lg border-b border-edge"
          >
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  id={`${link.id}-mobile`}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-cyan-accent bg-void/55 border-l-2 border-cyan-accent'
                      : 'text-slate-300 hover:text-white hover:bg-void/30'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-3">
                <Link
                  to="/contact"
                  id="nav-hire-me-mobile"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-4 py-2.5 rounded-md bg-gradient-to-r from-violet-accent to-cyan-accent text-white font-medium shadow-md"
                >
                  Hire Me
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
