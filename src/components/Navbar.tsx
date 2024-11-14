import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

const navigation = [
  { name: 'nav.services', href: '/#services' },
  { name: 'nav.projects', href: '/success-stories' },
  { name: 'nav.diffusion', href: '/diffusions' },
  { name: 'nav.team', href: '/#team' },
  { name: 'nav.reviews', href: '/#reviews' },
  { name: 'nav.partners', href: '/partenaires' },
  { name: 'nav.pricing', href: '/pricing' },
  { name: 'nav.about', href: '/about' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href.startsWith('/#')) {
      return location.pathname === '/' && location.hash === href.substring(1);
    }
    return location.pathname === href;
  };

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('/#')) {
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        !isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            onClick={() => setIsOpen(false)}
          >
            <div className="w-10 h-10 bg-highlight rounded-xl flex items-center justify-center transform transition-transform duration-300 group-hover:rotate-12">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">Meet'eka</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`relative text-sm font-medium transition-colors hover:text-highlight ${
                  isActive(item.href) ? 'text-highlight' : 'text-gray-900'
                } after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-highlight after:transform after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100 ${
                  isActive(item.href) ? 'after:scale-x-100' : ''
                }`}
              >
                {t(item.name)}
              </Link>
            ))}
            <div className="border-l border-gray-200 pl-8">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden fixed inset-0 top-[64px] bg-white transform transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="h-full overflow-auto py-6 px-4">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`p-4 rounded-xl text-center font-medium transition-all ${
                    isActive(item.href)
                      ? 'bg-highlight text-white'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  {t(item.name)}
                </Link>
              ))}
              <div className="mt-4 p-4 border-t border-gray-100">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}