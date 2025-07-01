import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import logo from '../../assets/img/LogoRemoved.png';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
<nav className="bg-pink-600 border-gray-200 dark:bg-gray-900">

      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        {/* Logo + Text */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-20" alt="Taco Shop Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          </span>
        </a>

        {/* Dark Mode Umschalter + Burger Menü Button */}
        <div className="flex items-center space-x-4">
          
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

          {/* Burger Menü Button */}
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

       {/* Navigation Menü */}
<div className="hidden w-full md:block md:w-auto" id="navbar-default">
  <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
    <li>
      <a href="#" className="block py-2 px-3 text-gray-900 md:p-0 dark:text-white" aria-current="page">
        Home
      </a>
    </li>
    <li>
      <a href="#" className="block py-2 px-3 text-gray-900 md:p-0 hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500">
        About
      </a>
    </li>
    <li>
      <a href="#" className="block py-2 px-3 text-gray-900 md:p-0 hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500">
        Team
      </a>
    </li>
    <li>
      <a href="#" className="block py-2 px-3 text-gray-900 md:p-0 hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500">
        Menu
      </a>
    </li>
    <li>
      <a href="#" className="block py-2 px-3 text-gray-900 md:p-0 hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500">
        Contact
      </a>
    </li>
  </ul>
</div>
      </div>
    </nav>
  );
}

export default Navbar;
