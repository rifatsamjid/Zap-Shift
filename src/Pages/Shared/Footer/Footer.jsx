import React from "react";
import Logo from "../../../components/Logo/Logo";
import { NavLink } from "react-router";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const Links = (
      <>
        
          <NavLink to="">Service</NavLink>
        
          <NavLink to="">Coverage</NavLink>
        
          <NavLink to="">About Us</NavLink>
        
          <NavLink to="">Pricing</NavLink>
        
          <NavLink to="">Blog</NavLink>
        
          <NavLink to="">Contact</NavLink>
        
      </>)
  return (
    <footer className="footer footer-horizontal footer-center bg-black text-white p-10">
      <aside>
        <Logo />
        <p className="">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to <br /> business shipments — we
          deliver on time, every time.
        </p>
        
      </aside>
      <div className="flex justify-between items-center gap-4">
        {Links}
      </div>
      <div className="flex items-center gap-4 text-3xl">
        <FaLinkedin className="text-[#0575B3]"></FaLinkedin>
        <FaXTwitter className="bg-white rounded-full text-black"></FaXTwitter>
        < FaFacebook className="text-[#00B2FF]"></FaFacebook>
        <FaYoutube className="text-[#FF0000]"></FaYoutube>
      </div>
    </footer>
  );
};

export default Footer;
