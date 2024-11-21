import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavigationBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex items-center justify-center w-full h-[50px] px-4 ">
       
      <div className="hidden md:flex  items-center space-x-4 text-[rgb(33,39,50)]  font-[Proximanova, sans-serif]">
       
        <Link href="/tools/qr-code-generator/url" className="nav-link hover:text-brand-orange-main">
          QR Code Generator
        </Link>
        
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMobileMenu} className="text-[rgb(33,39,50)] focus:outline-none">
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-4 md:hidden">
          <Link href="/free-url-shortener" className="nav-link hover:text-blue-300 text-2xl" onClick={toggleMobileMenu}>
            Home
          </Link>
          <Link href="/qr-code-generator" className="nav-link hover:text-blue-300 text-2xl" onClick={toggleMobileMenu}>
            QR Code Generator
          </Link>
          <Link href="/stats" className="nav-link hover:text-blue-300 text-2xl" onClick={toggleMobileMenu}>
            Stats
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavigationBar;
