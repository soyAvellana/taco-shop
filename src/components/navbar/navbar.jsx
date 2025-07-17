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
   <nav className="bg-[#F96CA2] border-black dark:bg-gray-900 shadow-lg">
  <div className="flex items-center justify-between w-full px-8 py-6">


  <Link to="/" className="flex items-center space-x-4 rtl:space-x-reverse">
  <img src={logo} loading="lazy" className="h-24" alt="Taco Shop Logo" />
</Link>

   
        <div className="flex items-center space-x-6">

<ul className="hidden md:flex font-extrabold flex-row space-x-6 font-body text-lg">
  <li>
    <Link
      to="/"
className="block py-2.5 px-5 rounded-xl text-[#FDE6C2] bg-transparent hover:bg-[#FFECE2] hover:text-[#B42E58] transition-all duration-200 ease-in-out font-medium tracking-wide shadow-sm hover:shadow-md"

    >
      HOME
    </Link>
  </li>
  <li>
    <Link
      to="/about"
className="block py-2.5 px-5 rounded-xl text-[#FDE6C2] bg-transparent hover:bg-[#FFECE2] hover:text-[#B42E58] transition-all duration-200 ease-in-out font-medium tracking-wide shadow-sm hover:shadow-md"
    >
      ABOUT
    </Link>
  </li>
  <li>
    <Link
      to="/team"
className="block py-2.5 px-5 rounded-xl text-[#FDE6C2] bg-transparent hover:bg-[#FFECE2] hover:text-[#B42E58] transition-all duration-200 ease-in-out font-medium tracking-wide shadow-sm hover:shadow-md"
    >
      TEAM
    </Link>
  </li>
  <li>
    <Link
      to="/menu"
className="block py-2.5 px-5 rounded-xl text-[#FDE6C2] bg-transparent hover:bg-[#FFECE2] hover:text-[#B42E58] transition-all duration-200 ease-in-out font-medium tracking-wide shadow-sm hover:shadow-md"
    >
      MENU
    </Link>
  </li>
  <li>
    <Link
      to="/order"
className="block py-2.5 px-5 rounded-xl text-[#FDE6C2] bg-transparent hover:bg-[#FFECE2] hover:text-[#B42E58] transition-all duration-200 ease-in-out font-medium tracking-wide shadow-sm hover:shadow-md"
    >
      ORDER
    </Link>
  </li>
  <li>
    <Link
      to="/contact"
className="block py-2.5 px-5 rounded-xl text-[#FDE6C2] bg-transparent hover:bg-[#FFECE2] hover:text-[#B42E58] transition-all duration-200 ease-in-out font-medium tracking-wide shadow-sm hover:shadow-md"
    >
      CONTACT
    </Link>
  </li>
</ul>



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


<div
  className={`md:hidden transition-all duration-300 ease-in-out transform overflow-hidden ${
    menuOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
  }`}
  id="navbar-default"
>
  <ul className="flex flex-col px-6 py-8 space-y-4 bg-[#FDE6C2] dark:bg-gray-800 rounded-b-3xl shadow-lg font-body text-xl font-semibold text-center">
    {[
      { path: '/', label: 'HOME' },
      { path: '/about', label: 'ABOUT' },
      { path: '/team', label: 'TEAM' },
      { path: '/menu', label: 'MENU' },
      { path: '/order', label: 'ORDER' },
      { path: '/contact', label: 'CONTACT' },
    ].map(({ path, label }) => (
     
     <li key={label}>
        <Link
          to={path}
          onClick={() => setMenuOpen(false)}
          className="block w-full py-3 rounded-xl text-[#B42E58] bg-white dark:bg-gray-700 dark:text-white hover:bg-[#FFECE2] dark:hover:bg-gray-600 transition-all duration-200 shadow-md"
        >
          {label}
        </Link>
      </li>
    ))}
  </ul>
</div>

    </nav>
  );
}

export default Navbar;
