import { Link } from "react-router-dom";
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
    <nav className="bg-pink-300 border-black dark:bg-gray-900 shadow-lg">
      <div className="flex items-center justify-between w-full px-8 py-6">

        {/* Logo */}
        <a href="/" className="flex items-center space-x-4 rtl:space-x-reverse">
          <img src={logo} className="h-24" alt="Taco Shop Logo" />
        </a>

        {/* Navigation + Dark Mode + Burger Menü */}
        <div className="flex items-center space-x-6">

          {/* Navigation Links */}
          <ul className="hidden md:flex font-extrabold flex-row space-x-10 rtl:space-x-reverse font-body text-lg">
            <li>
              <a href="#" className="block py-2 px-3 text-red-700 dark:text-white hover:text-red-900 hover:underline transition-colors">
                HOME
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-red-700 dark:text-white hover:text-red-900 hover:underline transition-colors">
                ABOUT
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-red-700 dark:text-white hover:text-red-900 hover:underline transition-colors">
                TEAM
              </a>
            </li>
            <li>
              <Link
                to="/menu"
                className="block py-2 px-3 text-red-700 dark:text-white hover:text-red-900 hover:underline transition-colors"
              >
                MENU
              </Link>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-red-700 dark:text-white hover:text-red-900 hover:underline transition-colors">
                ORDER
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-red-700 dark:text-white hover:text-red-900 hover:underline transition-colors">
                CONTACT
              </a>
            </li>
          </ul>

          {/* Dark Mode Umschalter */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:scale-110 transition-transform"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun size={26} className="text-yellow-500 transition-colors" />
            ) : (
              <Moon size={26} className="text-gray-800 dark:text-white transition-colors" />
            )}
          </button>

          {/* Burger Menü Button nur für kleine Bildschirme */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            aria-controls="navbar-default"
            aria-expanded={menuOpen}
            className="md:hidden inline-flex items-center p-3 w-12 h-12 justify-center text-lg text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menü */}
      <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden`} id="navbar-default">
        <ul className="font-medium flex flex-col p-6 space-y-4 border-t border-gray-200 bg-pink-300 dark:bg-gray-800 dark:border-gray-700 text-lg font-body">
          <li><a href="#" className="block text-red-700 dark:text-white hover:text-red-900 hover:underline transition-colors">HOME</a></li>
          <li><a href="#" className="block text-red-700 dark:text-white hover:text-red-900 hover:underline transition-colors">ABOUT</a></li>
          <li><a href="#" className="block text-red-700 dark:text-white hover:text-red-900 hover:underline transition-colors">TEAM</a></li>
          <li><a href="#" className="block text-red-700 dark:text-white hover:text-red-900 hover:underline transition-colors">MENU</a></li>
          <li><a href="#" className="block text-red-700 dark:text-white hover:text-red-900 hover:underline transition-colors">ORDER</a></li>
          <li><a href="#" className="block text-red-700 dark:text-white hover:text-red-900 hover:underline transition-colors">CONTACT</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
