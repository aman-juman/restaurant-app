import React from "react";
import Logo from "../assets/logo.png";
import { MdShoppingBasket } from "react-icons/md";

const Header = () => {
  return (
    <div className="fixed z-50 w-screen p-6 px-16">
      {/* desktop & tablet */}
      <div className="hidden md:flex w-full"></div>
      <div className="flex items-center gap-2">
        <img className="w-10 object-cover" src={Logo} alt="logo" />
        <p className="text-headingColor text-xl font-bold">City</p>
        <ul className="flex items-center gap-8 ml-auto">
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            Home
          </li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out  cursor-pointer">
            Menu
          </li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out  cursor-pointer">
            About Us
          </li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out  cursor-pointer">
            Services
          </li>
        </ul>
        <div className="relative flex items-center justify-center">
          <MdShoppingBasket className="text-textColor hover:text-headingColor duration-200 ease-in-out text-2xl cursor-pointer ml-8" />
          <div className="w-5 h-5 bg-cartNumBg rounded-full flex items-center justify-center absolute -top-3 -right-3">
            <p className="text-xs text-white font-semibold">2</p>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="flex md:hidden w-full"></div>
    </div>
  );
};

export default Header;
