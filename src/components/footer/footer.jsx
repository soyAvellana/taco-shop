import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom"; // wichtig für interne Navigation
import logo from "../../assets/img/LogoRemoved.png";

function Footer() {
  return (
    <footer className="bg-[#ff8dc2] text-[#7a1538] py-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center space-y-8">

        <div className="w-[260px] md:w-[320px] aspect-[5/2] relative">
          <img
            src={logo}
            alt="Aby's Taco Logo"
            className="absolute inset-0 w-full h-full object-contain"
            loading="lazy"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-[1.25rem] font-semibold">
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/order" className="hover:underline">Order</Link>
          <Link to="/menu" className="hover:underline">Menu</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <a
            href="https://www.facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white text-2xl"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white text-2xl"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Adresse & Copyright */}
        <div className="text-base md:text-lg font-medium leading-relaxed">
          <p>1728 Taco Street, Brooklyn, NY 11201</p>
          <p className="mt-2">&copy; {new Date().getFullYear()} ABY’S TACO</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
