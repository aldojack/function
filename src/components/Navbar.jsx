import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../assets/logo.svg";
import BagIcon from "../assets/bag-icon.svg";
import MenuIcon from "../assets/menu-icon.svg";
import Search from "../assets/search.svg";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  function handleNav() {
    setNav(!nav);
  }
  return (
    <div className=" bg-white w-full h-16 border-b-2 md:border-b-0 z-[100] pt-4">
      <div className="flex justify-between md:justify-center items-center w-full h-full flex-wrap md:flex-nowrap px-8 2xl:px-16">
        {/* Logo */}
        <div className="h-full border-r-0 md:border-r-2 flex-shrink-0 order-1 md:order-first">
          <img
            src={Logo}
            alt="Functions Logo"
            width="170"
            height="50"
            className="h-full pr-8"
          />
        </div>
        {/* Navigation Menu */}
        <nav aria-label="Main Navigation">
          <ul className="hidden md:flex items-center justify-center space-x-6">
            <li className="ml-10 text-sm hover:border-b hover:underline cursor-pointer">
              <a href="#">What's New</a>
            </li>
            <li className="ml-10 text-sm hover:border-b hover:underline cursor-pointer">
              <a href="#">Designers</a>
            </li>
            <li className="ml-10 text-sm hover:border-b hover:underline cursor-pointer">
              <a href="#">Clothing</a>
            </li>
            <li className="ml-10 text-sm hover:border-b hover:underline cursor-pointer">
              <a href="#">Accessories</a>
            </li>
            <li className="ml-10 text-sm hover:border-b hover:underline cursor-pointer">
              <a href="#">Journal</a>
            </li>
            <li className="ml-10 text-sm hover:border-b hover:underline cursor-pointer">
              <a href="#">Gifts</a>
            </li>
          </ul>
          <button
            aria-haspopup="true"
            aria-expanded={nav}
            onClick={handleNav}
            className="md:hidden flex order-first cursor-pointer"
          >
            <img
              src={MenuIcon}
              alt="Open Menu"
              width="17"
              height="17"
              className="md:hidden"
            />
            <span className=" ml-4">Menu</span>
          </button>
        </nav>
        <div className="order-2 cursor-pointer">
          <img
            src={BagIcon}
            alt=""
            width="17"
            height="17"
            className="md:hidden"
          />
        </div>
        {/* Search Bar */}
        <div className="ml-auto w-full my-4 block order-last md:hidden lg:flex lg:flex-shrink-1 lg:max-w-[20rem]">
          <div className="relative">
            <input
              type="search"
              className="bg-[#F1F1F2] w-full px-12 py-4"
              placeholder="Search for 'Cashmere'"
            />
            <img
              src={Search}
              className="absolute top-0 left-0 mt-5 ml-4"
              alt="search icon within search bar"
            />
          </div>
        </div>
      </div>
      {/* Popout Menu */}
      <button
        aria-label="Mobile Navigation"
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/80"
            : "hidden"
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
            <img src={Logo} alt="Company Logo" width="150" height="35" />
            <button
              onClick={handleNav}
              className="rounded-full shadow-lg p-3 cursor-pointer bg-red-500 hover:bg-red-600"
              aria-label="Close mobile navigation"
            >
              <AiOutlineClose />
            </button>
          </div>
          <nav className="py-4 mt-4 flex flex-col items-center border-y border-[#3936EE]">
            <ul>
              <li className="py-4 text-sm hover:text-[#3936EE] ease-in duration-300 cursor-pointer">
                <a href="#" onClick={() => setNav(false)}>
                  What's New
                </a>
              </li>
              <li className="py-4 text-sm hover:text-[#3936EE] ease-in duration-300 cursor-pointer">
                <a href="#" onClick={() => setNav(false)}>
                  Designers
                </a>
              </li>
              <li className="py-4 text-sm hover:text-[#3936EE] ease-in duration-300 cursor-pointer">
                <a href="#" onClick={() => setNav(false)}>
                  Clothing
                </a>
              </li>
              <li className="py-4 text-sm hover:text-[#3936EE] ease-in duration-300 cursor-pointer">
                <a href="#" onClick={() => setNav(false)}>
                  Accessories
                </a>
              </li>
              <li className="py-4 text-sm hover:text-[#3936EE] ease-in duration-300 cursor-pointer">
                <a href="#" onClick={() => setNav(false)}>
                  Journal
                </a>
              </li>
              <li className="py-4 text-sm hover:text-[#3936EE] ease-in duration-300 cursor-pointer">
                <a href="#" onClick={() => setNav(false)}>
                  Gifts
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </button>
    </div>
  );
}
