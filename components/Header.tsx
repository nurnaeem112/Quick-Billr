import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Close mobile menu on route change for better navigation experience
    setIsMenuOpen(false);
  }, [location]);
  
  const activeLinkClass = "font-semibold bg-gradient-to-r from-primary-500 to-primary-700 text-transparent bg-clip-text";
  const inactiveLinkClass = "text-gray-600 hover:text-primary-600 transition-colors dark:text-gray-300 dark:hover:text-primary-400";
  const mobileLinkClass = "block py-2 text-lg text-center";

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40 dark:bg-gray-800/80 dark:border-b dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center space-x-2">
              <svg className="h-8 w-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-xl font-bold text-gray-800 dark:text-gray-100">QuickBillr</span>
            </NavLink>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/about" className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}>About</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}>Contact</NavLink>
          </nav>
          <div className="flex items-center">
            <ThemeToggle />
            <NavLink
              to="/builder"
              className="ml-4 hidden sm:inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-primary-600 to-primary-700 hover:shadow-lg hover:brightness-110 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-700"
            >
              Create Invoice
            </NavLink>
            <div className="md:hidden ml-2">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state. */}
        {isMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="pt-2 pb-4 space-y-1">
                <NavLink to="/about" className={({ isActive }) => `${mobileLinkClass} ${isActive ? activeLinkClass : inactiveLinkClass}`}>About</NavLink>
                <NavLink to="/contact" className={({ isActive }) => `${mobileLinkClass} ${isActive ? activeLinkClass : inactiveLinkClass}`}>Contact</NavLink>
                 <NavLink
                    to="/builder"
                    className="sm:hidden mt-2 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-primary-600 to-primary-700 hover:shadow-lg hover:brightness-110 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-700"
                >
                    Create Invoice
                </NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;