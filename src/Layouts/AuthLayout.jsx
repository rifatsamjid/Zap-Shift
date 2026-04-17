import React from "react";
import authImage from "../assets/authImage.png";
import Logo from "../components/Logo/Logo";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Logo className=""></Logo>
      <div className="flex mt-34 p-4 flex-col-reverse lg:flex-row h-dvh items-center justify-center">
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
        <div className="flex-1 mt-54 flex justify-center items-center w-full h-dvh bg-[#FAFDF0]">
          <img className="" src={authImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
