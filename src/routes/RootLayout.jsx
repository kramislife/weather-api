import ForecastNavbar from "@/components/Forecast/ForecastNavbar";
import Temperature from "@/components/Hero/Temperature";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="bg-base text-surface h-screen w-screen">
      <Navbar />
      <Temperature />
      <ForecastNavbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
