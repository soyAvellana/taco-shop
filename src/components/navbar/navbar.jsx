import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import logo from '../../assets/img/LogoRemoved.png';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="bg-pink-600 border-gray-200 dark:bg-gray-900">
      <div className="flex items-center justify-between w-full p-4">
        
        {/* Logo */}
    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse ml-4">
 <img src={logo} className="h-20" alt="Taco Shop Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
        </a>

        {/* Navigation + Dark Mode + Burger Menü */}
        <div className="flex items-center space-x-4">
          
          {/* Navigation Links - sichtbar ab md */}
          <ul className="hidden md:flex font-medium flex-row space-x-8 rtl:space-x-reverse">
            <li><a href="#" className="block py-2 px-3 text-gray-900 dark:text-white">Home</a></li>
            <li><a href="#" className="block py-2 px-3 text-gray-900 dark:text-white">About</a></li>
            <li><a href="#" className="block py-2 px-3 text-gray-900 dark:text-white">Team</a></li>
            <li><a href="#" className="block py-2 px-3 text-gray-900 dark:text-white">Menu</a></li>
            <li><a href="#" className="block py-2 px-3 text-gray-900 dark:text-white">Contact</a></li>
          </ul>

          {/* Dark Mode Umschalter */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:scale-110 transition-transform"
          >
            {darkMode ? (
              <Sun size={22} className="text-yellow-500 transition-colors" />
            ) : (
              <Moon size={22} className="text-gray-800 dark:text-white transition-colors" />
            )}
          </button>

          {/* Burger Menü Button nur für kleine Bildschirme */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            aria-controls="navbar-default"
            aria-expanded={menuOpen}
            className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menü */}
      <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden`} id="navbar-default">
        <ul className="font-medium flex flex-col p-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 space-y-2">
          <li><a href="#" className="block py-2 px-3 text-gray-900 dark:text-white">Home</a></li>
          <li><a href="#" className="block py-2 px-3 text-gray-900 dark:text-white">About</a></li>
          <li><a href="#" className="block py-2 px-3 text-gray-900 dark:text-white">Team</a></li>
          <li><a href="#" className="block py-2 px-3 text-gray-900 dark:text-white">Menu</a></li>
          <li><a href="#" className="block py-2 px-3 text-gray-900 dark:text-white">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
