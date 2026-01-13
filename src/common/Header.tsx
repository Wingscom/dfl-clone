"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Scroll-aware navbar logic
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
  };

  return (
    <div id="navbar-container" className="fixed top-4 left-0 right-0 z-50 flex justify-center transition-transform duration-300 px-4 md:px-8">
      <nav className="w-full max-w-7xl bg-background/60 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-md px-4 md:px-8 py-3 flex items-center justify-between shadow-sm shadow-black/5 dark:shadow-black/20">
        <div className="flex items-center gap-3">
          <Link href="/" className="block">
            <Image src="/assets/img/dfl_1764273424335.png" alt="DFL Logo" width={120} height={40} className="h-10 w-auto object-contain" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-black dark:text-muted-foreground">
          {/* About */}
          <div className="relative group">
            <Link href="/about" className="flex items-center gap-1 hover:text-primary transition-colors">
              About
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </Link>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-48 hidden group-hover:block">
              <div className="bg-white dark:bg-black/90 border border-black/5 dark:border-white/10 rounded-xl shadow-xl overflow-hidden p-1 backdrop-blur-xl">
                <Link href="/about" className="block px-4 py-2.5 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors">DFL</Link>
                <Link href="/vision" className="block px-4 py-2.5 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors">Vision</Link>
                <Link href="/partners" className="block px-4 py-2.5 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors">Partners & Mentors</Link>
              </div>
            </div>
          </div>

          {/* Programs */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-primary transition-colors cursor-default">
              Programs
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-48 hidden group-hover:block">
              <div className="bg-white dark:bg-black/90 border border-black/5 dark:border-white/10 rounded-xl shadow-xl overflow-hidden p-1 backdrop-blur-xl">
                <Link href="/accelerator" className="block px-4 py-2.5 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors">Accelerator</Link>
                <Link href="/sandbox" className="block px-4 py-2.5 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors">Sandbox</Link>
                <Link href="/blockchain" className="block px-4 py-2.5 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors">Blockchain</Link>
              </div>
            </div>
          </div>

          {/* Ecosystem */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-primary transition-colors cursor-default">
              Ecosystem
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-56 hidden group-hover:block">
              <div className="bg-white dark:bg-black/90 border border-black/5 dark:border-white/10 rounded-xl shadow-xl overflow-hidden p-1 backdrop-blur-xl">
                <Link href="/data" className="block px-4 py-2.5 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors">Market Data</Link>
                <Link href="/green-finance" className="block px-4 py-2.5 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors">Sustainable Finance</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Contact Button */}
        <Link href="/contact" className="hidden md:inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 rounded-full px-6 bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(76,174,79,0.3)] hover:shadow-[0_0_30px_rgba(76,174,79,0.5)] transition-all duration-300 h-10">
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button onClick={toggleMobileMenu} id="mobile-menu-btn" className="md:hidden p-2 -mr-2 text-black dark:text-white focus:outline-none" aria-label="Toggle menu">
          {isMobileMenuOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-4 top-20 p-6 bg-white/95 dark:bg-black/95 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-3xl shadow-2xl z-40 flex flex-col gap-6 max-h-[85vh] overflow-y-auto transform transition-all duration-300 origin-top ${
          isMobileMenuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 hidden'
        }`}
      >
        {/* About Section */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider px-2">About</h3>
          <div className="space-y-1">
            <Link href="/about" onClick={toggleMobileMenu} className="block px-4 py-3 text-lg font-medium hover:bg-black/5 dark:hover:bg-white/5 rounded-xl transition-colors">DFL</Link>
            <Link href="/vision" onClick={toggleMobileMenu} className="block px-4 py-3 text-lg font-medium hover:bg-black/5 dark:hover:bg-white/5 rounded-xl transition-colors">Vision</Link>
            <Link href="/partners" onClick={toggleMobileMenu} className="block px-4 py-3 text-lg font-medium hover:bg-black/5 dark:hover:bg-white/5 rounded-xl transition-colors">Partners & Mentors</Link>
          </div>
        </div>

        {/* Programs Section */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider px-2">Programs</h3>
          <div className="space-y-1">
            <Link href="/accelerator" onClick={toggleMobileMenu} className="block px-4 py-3 text-lg font-medium hover:bg-black/5 dark:hover:bg-white/5 rounded-xl transition-colors">Accelerator</Link>
            <Link href="/sandbox" onClick={toggleMobileMenu} className="block px-4 py-3 text-lg font-medium hover:bg-black/5 dark:hover:bg-white/5 rounded-xl transition-colors">Sandbox</Link>
            <Link href="/blockchain" onClick={toggleMobileMenu} className="block px-4 py-3 text-lg font-medium hover:bg-black/5 dark:hover:bg-white/5 rounded-xl transition-colors">Blockchain</Link>
          </div>
        </div>

        {/* Ecosystem Section */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider px-2">Ecosystem</h3>
          <div className="space-y-1">
            <Link href="/data" onClick={toggleMobileMenu} className="block px-4 py-3 text-lg font-medium hover:bg-black/5 dark:hover:bg-white/5 rounded-xl transition-colors">Market Data</Link>
            <Link href="/green-finance" onClick={toggleMobileMenu} className="block px-4 py-3 text-lg font-medium hover:bg-black/5 dark:hover:bg-white/5 rounded-xl transition-colors">Sustainable Finance</Link>
          </div>
        </div>

        <div className="pt-4 border-t border-black/5 dark:border-white/5">
          <Link href="/contact" onClick={toggleMobileMenu} className="flex items-center justify-center w-full py-4 text-lg font-bold text-white bg-primary rounded-xl shadow-lg">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
