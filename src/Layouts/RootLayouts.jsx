import React from "react";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Pages/Shared/Footer/Footer";

const RootLayouts = () => {
  return (
   <div className="max-w-7xl mx-auto bg-fuchsia-50">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayouts;
