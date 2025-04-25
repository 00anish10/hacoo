import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <nav className={cn(" flex items-center justify-between py-4  bg-gradient-to-br from-[#FFF6F1] via-[#FFF9F4] ", className)}>
      <Link to="/" className="font-bold text-2xl flex items-center text-orange-500">
        HACOO
      </Link>
      
      <div className="hidden lg:flex items-center space-x-10  ">
        <Link to="#" className="text-gray-600 hover:text-[#1A1A1A] transition-colors text-base">Property</Link>
        <Link to="#" className="text-gray-600 hover:text-[#1A1A1A] transition-colors text-base">About Hacoo</Link>
        <Link to="#" className="text-gray-600 hover:text-[#1A1A1A] transition-colors text-base">Shopping & Delivery</Link>
        <Link to="#" className="text-gray-600 hover:text-[#1A1A1A] transition-colors text-base">Privacy Policy</Link>
      </div>
      
      <button className="bg-orange-500 hover:bg-black/90 transition-all duration-300 text-white px-6 py-2.5 rounded-full text-sm font-medium">
        Download App
      </button>
    </nav>
  );
};

export default Navbar;
