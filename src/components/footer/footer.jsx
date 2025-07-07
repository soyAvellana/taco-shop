import { FaInstagram, FaFacebookF } from "react-icons/fa";
import logo from "../../assets/img/LogoRemoved.png";

function Footer() {
  return (
    <footer className="bg-pink-400 text-red-700 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
        
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start max-w-xs">
          <img src={logo} alt="Aby's Taco Logo" className="h-40 mb-4" />
        </div>

        {/* Navigation Links + Social Media nebeneinander */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-8 text-lg font-bold">
            <a href="#" className="hover:underline hover:text-red-900 transition-colors">Menu</a>
            <a href="#" className="hover:underline hover:text-red-900 transition-colors">Order</a>
          </div>
          <div className="flex gap-8 text-lg font-bold">
            <a href="#" className="hover:underline hover:text-red-900 transition-colors">Contact</a>
            <a href="#" className="hover:underline hover:text-red-900 transition-colors">Imprint</a>
          </div>

          {/* Social Media direkt unter den Links, zentriert */}
          <div className="flex gap-8 text-2xl mt-3">
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-red-900 transition-colors">
              <FaInstagram />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-red-900 transition-colors">
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      {/* Adresse groß unterhalb */}
      <div className="mt-8 text-center text-lg font-bold text-red-700">
           <p> 123 Taco Street<br />
            Brooklyn, NY 11201<br />
            USA
          </p>
      </div>

      {/* Copyright */}
      <div className="mt-4 text-center text-sm text-black">
        <p>&copy; {new Date().getFullYear()} Aby's Taco. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
