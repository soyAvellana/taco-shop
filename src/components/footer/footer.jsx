import { FaInstagram, FaFacebookF } from "react-icons/fa";
import logo from "../../assets/img/LogoRemoved.png";

function Footer() {
  return (
<footer className="bg-pink-300 text-red-700 pt-12 pb-8">


      <div className="max-w-xl mx-auto px-4 text-center flex flex-col items-center space-y-6">

      
        <img src={logo} loading="lazy"  alt="Aby's Taco Logo" className="h-28" />

        <div className="flex flex-wrap justify-center gap-6 text-lg font-bold">
          <a href="#" className="hover:underline hover:text-red-900 transition-colors">Menu</a>
          <a href="#" className="hover:underline hover:text-red-900 transition-colors">Order</a>
          <a href="#" className="hover:underline hover:text-red-900 transition-colors">Contact</a>
          <a href="#" className="hover:underline hover:text-red-900 transition-colors">Imprint</a>
        </div>

        <div className="flex justify-center gap-6 text-2xl">
          <a href="#" className="hover:text-red-900 transition-colors">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-red-900 transition-colors">
            <FaFacebookF />
          </a>
        </div>

    
        <div className="text-lg font-bold leading-relaxed">
          Taco Street 123<br />
          Brooklyn, NY 11201<br />
          USA
        </div>

        <div className="text-sm text-black mt-4">
          &copy; {new Date().getFullYear()} Aby's Taco. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
