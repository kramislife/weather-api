import { forecastNavItems } from "@/constant/Index";
import { NavLink } from "react-router-dom";

const ForecastNavbar = () => {
  return (
    <nav>
      <div className="flex justify-center items-center h-full p-5">
        <ul className="flex flex-row gap-10 items-center font-chakra font-semibold">
          {forecastNavItems.map((item) => (
            <li key={item.id} className="relative text-center">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-stone-200 after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-12px] after:w-1 after:h-1 after:bg-stone-200 after:rounded-full"
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
