'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import SearchModal from '@/components/SearchModal';
import AuthModal from '@/components/AuthModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authTab, setAuthTab] = useState<'login' | 'register'>('login');
  const { toggleCart, getTotalItems } = useCart();
  const { state: authState, logout } = useAuth();
  const cartItemCount = getTotalItems();

  const handleAuthClick = (tab: 'login' | 'register') => {
    setAuthTab(tab);
    setIsAuthOpen(true);
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h1 className="text-2xl font-light tracking-wide text-gray-900">
                LOGO
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-12">
            <Link
              href="/furniture"
              className="text-sm font-light tracking-wide text-gray-700 hover:text-gray-900 transition-colors duration-200 uppercase cursor-pointer"
            >
              Furniture
            </Link>
            <Link
              href="/lighting"
              className="text-sm font-light tracking-wide text-gray-700 hover:text-gray-900 transition-colors duration-200 uppercase cursor-pointer"
            >
              Lighting
            </Link>
            <Link
              href="/accessories"
              className="text-sm font-light tracking-wide text-gray-700 hover:text-gray-900 transition-colors duration-200 uppercase cursor-pointer"
            >
              Accessories
            </Link>
            <Link
              href="/products"
              className="text-sm font-light tracking-wide text-gray-700 hover:text-gray-900 transition-colors duration-200 uppercase cursor-pointer"
            >
              All Products
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 lg:gap-4">
            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 cursor-pointer rounded-lg hover:bg-gray-50"
                aria-label="Search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              
              <button 
                onClick={toggleCart}
                className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 cursor-pointer rounded-lg hover:bg-gray-50"
                aria-label={`Shopping cart ${cartItemCount > 0 ? `with ${cartItemCount} items` : ''}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119.993zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium min-w-[1.25rem]">
                    {cartItemCount > 99 ? '99+' : cartItemCount}
                  </span>
                )}
              </button>
            </div>

            {/* Auth Section */}
            <div className="hidden lg:flex items-center gap-4 ml-2">
              {authState.user ? (
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-700 whitespace-nowrap">
                    Hello, {authState.user.firstName}
                  </span>
                  <button
                    onClick={logout}
                    className="text-sm font-light tracking-wide text-gray-700 hover:text-gray-900 transition-colors duration-200 uppercase cursor-pointer whitespace-nowrap px-2 py-1 rounded hover:bg-gray-50"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => {
                      handleAuthClick('login');
                    }}
                    className="text-sm font-light tracking-wide text-gray-700 hover:text-gray-900 transition-colors duration-200 uppercase cursor-pointer whitespace-nowrap px-2 py-1 rounded hover:bg-gray-50"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => {
                      handleAuthClick('register');
                    }}
                    className="text-sm font-light tracking-wide text-gray-700 hover:text-gray-900 transition-colors duration-200 uppercase cursor-pointer whitespace-nowrap px-2 py-1 rounded hover:bg-gray-50"
                  >
                    Register
                  </button>
                </div>
              )}
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors duration-200 cursor-pointer rounded-lg hover:bg-gray-50 ml-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/furniture"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-base font-light tracking-wide text-gray-700 uppercase"
              >
                Furniture
              </Link>
              <Link
                href="/lighting"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-base font-light tracking-wide text-gray-700 uppercase"
              >
                Lighting
              </Link>
              <Link
                href="/accessories"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-base font-light tracking-wide text-gray-700 uppercase"
              >
                Accessories
              </Link>
              <Link
                href="/products"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-base font-light tracking-wide text-gray-700 uppercase"
              >
                All Products
              </Link>
              
              <button
                onClick={toggleCart}
                className="block px-3 py-2 text-base font-light tracking-wide text-gray-700 uppercase"
              >
                Cart ({cartItemCount})
              </button>

              {authState.user ? (
                <>
                  <div className="px-3 py-2 text-base font-light tracking-wide text-gray-700">
                    Hello, {authState.user.firstName}
                  </div>
                  <button
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="block px-3 py-2 text-base font-light tracking-wide text-gray-700 uppercase"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      handleAuthClick('login');
                      setIsMenuOpen(false);
                    }}
                    className="block px-3 py-2 text-base font-light tracking-wide text-gray-700 uppercase"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => {
                      handleAuthClick('register');
                      setIsMenuOpen(false);
                    }}
                    className="block px-3 py-2 text-base font-light tracking-wide text-gray-700 uppercase"
                  >
                    Register
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
      
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
      
      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)}
        defaultTab={authTab}
      />
    </header>
  );
};

export default Header;
