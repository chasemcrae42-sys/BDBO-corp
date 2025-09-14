'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@/styles/ThemeProvider';
import { seoConfig } from '@/seo/seo.config';

interface NavLink {
  href: string;
  label: string;
  external?: boolean;
}

interface HeaderProps {
  navLinks?: NavLink[];
  showCTA?: boolean;
  ctaText?: string;
  ctaHref?: string;
  transparent?: boolean;
}

export function Header({
  navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#join', label: 'Join Us' },
    { href: 'https://discord.gg/E8FscEVuhy', label: 'Discord', external: true },
  ],
  showCTA = true,
  ctaText = 'Download Now',
  ctaHref = '#download',
  transparent = true,
}: HeaderProps) {
  const { mode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || !transparent || isMenuOpen
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200/50 dark:border-gray-700/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={mode === 'dark' ? '/logos/horizontal-logo-inverted.png' : '/logos/horizontal-logo.png'}
              alt={`${seoConfig.siteName} Logo`}
              width={200}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    isScrolled || !transparent
                      ? 'text-gray-700 dark:text-gray-300'
                      : 'text-gray-900 dark:text-white'
                  } hover:text-primary dark:hover:text-primary-light transition-colors font-medium text-md`}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${
                    isScrolled || !transparent
                      ? 'text-gray-700 dark:text-gray-300'
                      : 'text-gray-900 dark:text-white'
                  } hover:text-primary dark:hover:text-primary-light transition-colors font-medium text-md`}
                >
                  {link.label}
                </Link>
              )
            ))}

            {/* Theme Toggle Button */}
            <Image
              src={mode === 'dark' ? '/images/light.png' : '/images/dark.png'}
              alt={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              width={28}
              height={28}
              onClick={toggleTheme}
              className="w-7 h-7 cursor-pointer hover:scale-110 transition-transform"
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Hamburger Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <span className={`block w-full h-0.5 ${
                  isScrolled || !transparent || isMenuOpen
                    ? 'bg-gray-700 dark:bg-gray-300'
                    : 'bg-gray-900 dark:bg-white'
                } transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-full h-0.5 ${
                  isScrolled || !transparent || isMenuOpen
                    ? 'bg-gray-700 dark:bg-gray-300'
                    : 'bg-gray-900 dark:bg-white'
                } transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-full h-0.5 ${
                  isScrolled || !transparent || isMenuOpen
                    ? 'bg-gray-700 dark:bg-gray-300'
                    : 'bg-gray-900 dark:bg-white'
                } transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <div className="pt-2 pb-6 px-6 space-y-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-b-lg">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleNavClick}
                  className="block text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors font-medium text-lg"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="block text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors font-medium text-lg"
                >
                  {link.label}
                </Link>
              )
            ))}
            {/* Theme Toggle in Mobile Menu */}
            <div className="flex items-center justify-center mt-8">
              <Image
                src={mode === 'dark' ? '/images/light.png' : '/images/dark.png'}
                alt={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                width={32}
                height={32}
                onClick={toggleTheme}
                className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform"
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}