import React, { useState } from 'react';

const PortfolioHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="py-4 px-6 shadow-lg sticky top-0 bg-white z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="#home" className="hover:text-green-500">Port<span className='text-green-500'>Folio</span></a>
        </div>

        {/* Desktop Navigation */}
        <nav className="md:block hidden">
          <ol className="flex space-x-6">
            <li><a href="#home" className='hover:text-green-600'>Home</a></li>
            <li><a href="#about" className='hover:text-green-600'>About</a></li>
            <li><a href="#projects" className='hover:text-green-600'>Projects</a></li>
            <li><a href="#contact" className='hover:text-green-600'>Contact</a></li>
          </ol>
        </nav>

        {/* Mobile Navigation */}
        <nav className="md:hidden">
          <button
            className="p-2 text-xl"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white p-4 absolute top-16 right-6 rounded-lg shadow-lg">
            <ol className="space-y-4">
              <li><a href="#home" className="block py-2 px-4">Home</a></li>
              <li><a href="#about" className="block py-2 px-4">About</a></li>
              <li><a href="#projects" className="block py-2 px-4">Projects</a></li>
              <li><a href="#contact" className="block py-2 px-4">Contact</a></li>
            </ol>
          </div>
        )}
      </div>
    </header>
  );
};

export default PortfolioHeader;
