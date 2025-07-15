import { FaInstagram, FaFacebookF } from "react-icons/fa";
import logo from "../../assets/img/LogoRemoved.png";

function Footer() {
  return (
    <footer className="bg-[#ff8dc2] text-[#5c4622] py-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center space-y-8">

        <div className="w-[260px] md:w-[320px] aspect-[5/2] relative">
          <img
            src={logo}
            alt="Aby's Taco Logo"
            className="absolute inset-0 w-full h-full object-contain"
            loading="lazy"
          />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 text-[1.25rem] font-semibold">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Order</a>
          <a href="#" className="hover:underline">Menu</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:text-white text-2xl"><FaFacebookF /></a>
          <a href="#" className="hover:text-white text-2xl"><FaInstagram /></a>
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
