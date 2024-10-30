import { navItems } from "@/constant/Index";
import { LayoutGrid, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // 1024px is the 'lg' breakpoint in Tailwind
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Toggle Button for Mobile Navbar */}
      <div className="lg:hidden flex justify-end p-4">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? (
            <X className="w-6 h-6 text-neutral-900" />
          ) : (
            <LayoutGrid className="w-6 h-6 text-neutral-900" />
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
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-md transition-colors duration-200 ${
                      isActive
                        ? "text-accent bg-neutral/10"
                        : "text-neutral hover:text-accent hover:bg-neutral/5"
                    }`
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
