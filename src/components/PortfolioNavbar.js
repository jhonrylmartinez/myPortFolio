import React, { useState } from 'react';

const PortfolioHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="py-4 px-6 shadow-lg sticky top-0 bg-white z-50">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">Port<span className='text-green-500'>Folio</span></div>

        {/* Desktop Navigation */}
        <nav className="md:block hidden">
          <ol className="flex space-x-6 ">
            <li><a href="#home" className='hover:text-green-600'>Home</a></li>
            <li><a href="#about" className='hover:text-green-600'>About</a></li>
            <li><a href="#projects" className='hover:text-green-600'>Projects</a></li>
            <li><a href="#contact" className='hover:text-green-600'>Contact</a></li>
          </ol>
        </nav>

        {/* Mobile Navigation */}
        <nav className="md:hidden">
          <button className="p-2" onClick={toggleMobileMenu}>
            ☰
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white p-4 absolute top-16 right-6 rounded-lg shadow-lg">
            <ol className="space-y-4">
              <li><a href="#home" className="block">Home</a></li>
              <li><a href="#about" className="block">About</a></li>
              <li><a href="#projects" className="block">Projects</a></li>
              <li><a href="#contact" className="block">Contact</a></li>
            </ol>
          </div>
        )}
      </div>
    </header>
  );
};

export default PortfolioHeader;
