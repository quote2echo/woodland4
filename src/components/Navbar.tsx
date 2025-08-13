import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, TreePine } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/accommodation', label: t('nav.accommodation') },
    { path: '/dining', label: t('nav.dining') },
    { path: '/events', label: t('nav.events') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-resort-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <TreePine className="h-8 w-8 text-resort-forest" />
            <div>
              <div className="font-bold text-xl text-resort-forest">Woodland Resort</div>
              <div className="text-xs text-resort-gray">Kragujevac</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-resort-forest border-b-2 border-resort-forest'
                    : 'text-resort-gray hover:text-resort-forest'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <LanguageSelector />
            <button className="bg-resort-gold hover:bg-resort-gold/90 text-resort-white font-semibold px-6 py-2 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
              {t('nav.bookNow')}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-resort-gray hover:text-resort-forest hover:bg-resort-cream/50"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-resort-white border-t">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-resort-forest bg-resort-cream/30'
                      : 'text-resort-gray hover:text-resort-forest hover:bg-resort-cream/20'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <LanguageSelector />
              </div>
              <button className="w-full bg-resort-gold hover:bg-resort-gold/90 text-resort-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 mt-4">
                {t('nav.bookNow')}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}