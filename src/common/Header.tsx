"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const navbar = document.getElementById('navbar-container');

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (navbar) {
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          navbar.style.transform = 'translateY(-150%)';
        } else {
          navbar.style.transform = 'translateY(0)';
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null);
  };

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <div id="navbar-container" className="fixed top-4 left-0 right-0 z-50 flex justify-center transition-transform duration-300 px-4 md:px-8">
      <nav className="w-full max-w-7xl bg-white/80 backdrop-blur-xl border border-black/5 dark:border-white/10 dark:bg-navy/80 rounded-md px-4 md:px-8 py-3 flex items-center justify-between shadow-sm shadow-black/[0.02] dark:shadow-black/5">
        <div className="flex items-center gap-3">
          <Link href="/" className="block">
            <Image src="/assets/img/dfl24-logo.png" alt="DFL24 Logo" width={220} height={100} className="h-10 w-auto object-contain" />
          </Link>
        </div>

        {/* Desktop: Sandbox▼, Funding, About▼, Partners, [Apply Now] */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-navy dark:text-white">
          {/* 1. Sandbox — flat */}
          <Link href="/sandbox" className="hover:text-blue-electric transition-colors">
            Sandbox
          </Link>

          {/* 2. Funding — flat */}
          <Link href="/accelerator" className="hover:text-blue-electric transition-colors">
            Funding
          </Link>

          {/* 3. About — dropdown */}
          <div className="relative group">
            <Link href="/about" className="flex items-center gap-1 hover:text-blue-electric transition-colors">
              About
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </Link>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-44 hidden group-hover:block">
              <div className="bg-white dark:bg-navy border border-black/5 dark:border-white/10 rounded-xl shadow-xl overflow-hidden p-1 backdrop-blur-xl">
                <Link href="/about" className="block px-4 py-2.5 text-navy dark:text-white hover:bg-primary/10 hover:text-primary rounded-lg transition-colors">DFL24</Link>
                <Link href="/vision" className="block px-4 py-2.5 text-navy dark:text-white hover:bg-primary/10 hover:text-primary rounded-lg transition-colors">Vision</Link>
              </div>
            </div>
          </div>

          {/* 4. Partners — flat */}
          <Link href="/partners" className="hover:text-blue-electric transition-colors">
            Partners
          </Link>
        </div>

        {/* 5. CTA */}
        <Link href="/contact" className="hidden md:inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-full px-6 bg-blue-electric hover:bg-blue-electric/90 text-white shadow-[0_0_20px_rgba(47,128,237,0.3)] hover:shadow-[0_0_30px_rgba(47,128,237,0.5)] duration-300 h-10">
          Apply Now
        </Link>

        {/* Mobile Menu Button */}
        <button onClick={toggleMobileMenu} className="md:hidden p-2 -mr-2 text-navy dark:text-white focus:outline-none" aria-label="Toggle menu">
          {isMobileMenuOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-x-4 top-20 p-6 bg-white/95 dark:bg-navy/95 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-3xl shadow-2xl z-40 flex flex-col gap-2 max-h-[85vh] overflow-y-auto transform transition-all duration-300 origin-top ${
          isMobileMenuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
        {/* Sandbox — flat */}
        <Link href="/sandbox" onClick={toggleMobileMenu} className="px-4 py-3 text-lg font-bold text-navy dark:text-white hover:text-blue-electric transition-colors">
          Sandbox
        </Link>

        {/* Funding — flat */}
        <Link href="/accelerator" onClick={toggleMobileMenu} className="px-4 py-3 text-lg font-bold text-navy dark:text-white hover:text-blue-electric transition-colors">
          Funding
        </Link>

        {/* About — accordion */}
        <div className="space-y-1">
          <button onClick={() => toggleDropdown('about')} className="w-full flex items-center justify-between px-4 py-3 text-lg font-bold text-navy dark:text-white">
            About
            <svg className={`w-5 h-5 transition-transform ${openDropdown === 'about' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          <div className={`space-y-1 overflow-hidden transition-all duration-300 ${openDropdown === 'about' ? 'max-h-40' : 'max-h-0'}`}>
            <Link href="/about" onClick={toggleMobileMenu} className="block px-6 py-3 text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary rounded-xl transition-colors">DFL24</Link>
            <Link href="/vision" onClick={toggleMobileMenu} className="block px-6 py-3 text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary rounded-xl transition-colors">Vision</Link>
          </div>
        </div>

        {/* Partners — flat */}
        <Link href="/partners" onClick={toggleMobileMenu} className="px-4 py-3 text-lg font-bold text-navy dark:text-white hover:text-blue-electric transition-colors">
          Partners
        </Link>

        <div className="pt-4 border-t border-black/5 dark:border-white/5">
          <Link href="/contact" onClick={toggleMobileMenu} className="flex items-center justify-center w-full py-4 text-lg font-bold text-white bg-blue-electric rounded-xl shadow-lg">
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}
