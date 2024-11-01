import ForecastNavbar from "@/components/Navbar/ForecastNavbar";
import Temperature from "@/pages/Hero/Temperature";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="bg-base text-surface min-h-screen w-full pb-10">
      <Navbar />
      <Temperature />
      <ForecastNavbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
