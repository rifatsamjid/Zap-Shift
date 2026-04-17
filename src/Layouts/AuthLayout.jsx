import React from "react";
import authImage from "../assets/authImage.png";
import Logo from "../components/Logo/Logo";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Logo className=""></Logo>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen gap-6">
        <div className="flex-1 flex justify-center items-center -mt-30 sm:mt-0 md:mt-0 lg:mt-0 w-full">
          <Outlet></Outlet>
        </div>
        <div className="flex-1 w-full flex justify-center items-center bg-[#FAFDF0] rounded-xl p-6 lg:p-10">
          <img
            className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full"
            src={authImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
