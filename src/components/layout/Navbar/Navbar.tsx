'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navVariants = {
    expanded: {
      width: '100%',
      borderRadius: 0,
      marginTop: 0,
      backgroundColor: 'rgba(17, 24, 39, 0.95)',
      height: '64px',
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.4
      }
    },
    compact: {
      width: '85%',
      borderRadius: '9999px',
      marginTop: '16px',
      backgroundColor: 'rgba(17, 24, 39, 0.3)',
      height: '48px',
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.4
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      opacity: 1,
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const menuItemVariants = {
    closed: { x: 50, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/hotels', label: 'Hotels' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <>
      <motion.nav
        initial="compact"
        animate={scrolled ? "expanded" : "compact"}
        variants={navVariants}
        className="fixed z-50 left-0 right-0 mx-auto backdrop-blur-md shadow-lg border border-white/10"
        layout
      >
        <motion.div 
          className={`${scrolled ? 'max-w-7xl mx-auto' : ''} h-full px-4 sm:px-6 lg:px-8`}
        >
          <div className="flex items-center justify-between h-full">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/" className="font-bold text-xl">
                <motion.span
                  className="bg-gradient-to-r from-white via-white to-gray-100 text-transparent bg-clip-text"
                  style={{ fontSize: scrolled ? '1.25rem' : '1rem' }}
                >
                  HotelFinder
                </motion.span>
              </Link>
            </motion.div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.href}
                    whileHover={{ y: -2 }}
                    className="relative"
                  >
                    <Link
                      href={link.href}
                      className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 
                        ${pathname === link.href 
                          ? 'text-white' 
                          : 'text-white/80 hover:text-white'}`}
                    >
                      <span>{link.label}</span>
                      {pathname === link.href && (
                        <motion.span
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-white rounded-full"
                          layoutId="activeTab"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-white/90 hover:text-white p-2 rounded-md focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  variants={{
                    closed: { d: "M4 6h16M4 12h16M4 18h16" },
                    open: { d: "M6 18L18 6M6 6l12 12" }
                  }}
                  animate={isMobileMenuOpen ? "open" : "closed"}
                  transition={{ duration: 0.3 }}
                />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-gradient-to-b from-gray-900 to-gray-800 z-50 shadow-xl"
          >
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex justify-end p-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-white/80 hover:text-white rounded-full bg-white/10"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              {/* Mobile Menu Links */}
              <nav className="px-4 py-8 flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.href}
                    variants={menuItemVariants}
                    whileHover={{ x: 10 }}
                    className="w-full"
                  >
                    <Link
                      href={link.href}
                      className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors
                        ${pathname === link.href
                          ? 'bg-white/10 text-white'
                          : 'text-white/70 hover:text-white hover:bg-white/5'
                        }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Footer Info */}
              <div className="mt-auto p-6">
                <motion.div
                  variants={menuItemVariants}
                  className="text-white/60 text-sm"
                >
                  <p className="mb-2">Contact Us</p>
                  <p>info@hotelfinder.com</p>
                  <p>+1 (555) 123-4567</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;