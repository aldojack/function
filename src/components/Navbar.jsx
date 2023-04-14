import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../assets/logo.svg";
import BagIcon from '../assets/bag-icon.svg';
import MenuIcon from '../assets/menu-icon.svg';

export default function Navbar() {
    const [nav, setNav] = useState(false);
    function handleNav() {
      setNav(!nav);
    }
  return (
    <div className=" bg-white w-full h-24 border-b-2 md:border-b-0 z-[100] pt-4">
      <div className="flex justify-between md:justify-center items-center w-full h-full flex-wrap md:flex-nowrap px-8 2xl:px-16">
      {/* Logo */}
      <div className="h-full border-r-0 md:border-r-2 flex-shrink-0 order-1 md:order-first">
        <img src={Logo} alt="Functions Logo" width="170" height="50" className="h-full pr-8"/>
      </div>
        {/* Navigation Menu */}
        <nav>
          <ul className="hidden md:flex items-center justify-center">
            <li className="ml-10 text-sm hover:border-b hover:underline cursor-pointer">
              What's New
            </li>
            <li className="ml-10 text-sm hover:border-b hover:underline cursor-pointer">
              Designers
            </li>
            <li className="ml-10 text-sm hover:border-b hover:underline cursor-pointer">
              Clothing
            </li>
            <li className="ml-10 text-sm hover:border-b hover:underline cursor-pointer">
              Accessories
            </li>
            <li className="ml-10 text-sm hover:border-b hover:underline cursor-pointer">
              Journal
            </li>
            <li className="ml-10 text-sm hover:border-b hover:underline cursor-pointer">
              Gifts
            </li>
          </ul>
          <div onClick={handleNav} className="md:hidden flex order-first cursor-pointer">
            {/* <AiOutlineMenu size={35} /> */}
            <img src={MenuIcon} alt="" width="17" height="17" className="md:hidden"/>
            <span className=" ml-4">Menu</span>
          </div>
        </nav>
        <div className="order-2">
          <img src={BagIcon} alt="" width="17" height="17" className="md:hidden"/>
        </div>
        {/* Search Bar */}
        <div className="ml-auto w-full mt-4 block order-last md:flex md:flex-shrink-0 md:max-w-[330px]">
        <input type="search" className="bg-[#F1F1F2] w-full px-5 py-4" placeholder="Search for 'Cashmere'"/>
        </div>
      </div>
      {/* Popout Menu */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/80" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-between">
            <img src={Logo} alt="" width="150" height="35" />
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg p-3 cursor-pointer bg-red-500 hover:bg-red-600"
            >
              <AiOutlineClose />
            </div>
          </div>
          <nav className="py-4 flex flex-col items-center border-y border-[#FF7F50]">
            <ul>
              <li
                onClick={() => setNav(false)}
                className="py-4 text-sm hover:text-[#FF7F50] ease-in duration-300 cursor-pointer"
              >
                Home
              </li>
              <li
                onClick={() => setNav(false)}
                className="py-4 text-sm hover:text-[#FF7F50] ease-in duration-300 cursor-not-allowed"
              >
                Account
              </li>
              <li
                onClick={() => setNav(false)}
                className="py-4 text-sm hover:text-[#FF7F50] ease-in duration-300 cursor-not-allowed"
              >
                Log Off
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
