import { navItems } from "@/constant/NavItems";
import { NavLink } from "react-router-dom";
import logo from "@/assets/larana.png";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import MobileNavbar from "./MobileNavbar";



const Navbar = () => {
  return (
    <nav className="mx-auto py-4 lg:px-10 px-5 sticky top-0 backdrop-blur-lg border-b border-neutral-700">
      <div className="flex items-center space-x-10">
        <div className="flex-shrink-0">
          <NavLink to="/">
            <img src={logo} alt="logo" className="w-12 h-12" />
          </NavLink>
        </div>
        <div className="flex justify-between w-full items-center">
          <ul className="hidden lg:flex flex-wrap items-center gap-4 space-x-5">
            {navItems.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "text-accent" : "text-neutral"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="lg:flex hidden">
            <div className="relative">
              <Input type="text" placeholder="Search Country" />
              <Search className="absolute right-2 top-2 text-neutral" />
            </div>
          </div>
        </div>
        <MobileNavbar />
      </div>
    </nav>
  );
};

export default Navbar;
