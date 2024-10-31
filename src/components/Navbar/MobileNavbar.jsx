import { navItems } from "@/constant/NavItems";
import { useMobileNavbar } from "@/hooks/useMobileNavbar";
import { LayoutGrid, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const MobileNavbar = () => {
  const { isOpen, toggleMenu } = useMobileNavbar();

  return (
    <>
      {/* Toggle Button for Mobile Navbar */}
      <div className="lg:hidden flex justify-end">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? (
            <X className="w-6 h-6 text-neutral-300" />
          ) : (
            <LayoutGrid className="w-6 h-6 text-neutral-300 " />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 right-0 w-full bg-base/95 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-neutral/20 z-50">
          <ul className="flex flex-col items-center space-y-8 text-lg font-medium">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="w-full text-center transition-all duration-200 hover:scale-105"
              >
                <NavLink
                  to={item.path}
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 rounded-md transition-colors duration-200"
                      : "text-neutral hover:text-accent hover:bg-gray-700/20"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default MobileNavbar;
