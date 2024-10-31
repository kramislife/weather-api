import { forecastNavItems } from "@/constant/Index";
import { NavLink } from "react-router-dom";

const ForecastNavbar = () => {
  return (
    <nav>
      <div className="flex justify-betweeen h-full p-5">
        <ul className="flex flex-row space-x-10 font-chakra font-semibold">
          {forecastNavItems.map((item) => (
            <li key={item.id} className="relative">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-stone-200 after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-8px] after:w-1 after:h-1 after:bg-stone-200 after:rounded-full"
                    : "text-stone-400"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default ForecastNavbar;
