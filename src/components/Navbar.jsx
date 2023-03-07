import React from "react";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <div className="container fixed h-20 min-w-full bg-white pt-3 shadow-lg ">
      <div className="mx-10 flex justify-between py-3">
        <div>
          <img
            src={logo}
            alt="logo not found"
            className="-mt-4 h-16 rounded-full"
          />
        </div>
        <ul className="flex gap-8 text-lg font-medium">
          <li className=" hover:cursor-pointer hover:text-xl">Home</li>
          <li className=" hover:cursor-pointer hover:text-xl">About</li>
          <li className=" hover:cursor-pointer hover:text-xl">Social</li>
          <li className=" hover:cursor-pointer hover:text-xl">Projects</li>
          <li className=" hover:cursor-pointer hover:text-xl">Contact</li>
        </ul>
        <div className="flex bg-white">
          <input
            className="-mr-10 -mt-4 h-16 rounded-full bg-sky-50 pl-4 outline-none"
            type="text"
            placeholder="Search.."
          />
          <button className="-mt-3 h-16 w-24 rounded-full bg-gradient-to-bl from-cyan-200 to-green-200 font-bold text-blue-800 ">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
