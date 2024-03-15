import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <nav className="bg-indigo-700 text-white h-20 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center max-w-7xl mx-auto h-full">
          <div>
            <h1 className="text-lg sm:text-2xl font-semibold">LOGO</h1>
          </div>
          <div className="hidden sm:flex">
            <ul className="flex gap-6 text-sm sm:text-base">
              <li>
                <NavLink to="/" activeClassName="font-bold">
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/products/manage" activeClassName="font-bold">
                  Manage Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/orders/manage" activeClassName="font-bold">
                  Manage Orders
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="sm:hidden z-30">
            {/* Hamburger menu icon */}
            <svg
              className="w-6 h-6 cursor-pointer"
              viewBox="0 0 20 20"
              fill="currentColor"
              onClick={toggleNav}
            >
              <path
                fillRule="evenodd"
                d="M2 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </nav>
      {showNav && (
        <div className="flex fixed top-0 bottom-0 right-0 h-screen bg-indigo-700 py-32 px-10 text-white sm:hidden">
          <ul className="flex flex-col gap-4 text-sm">
            <li>
              <NavLink to="/" activeClassName="font-bold" onClick={toggleNav}>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products/manage"
                activeClassName="font-bold"
                onClick={toggleNav}
              >
                Manage Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/orders/manage"
                activeClassName="font-bold"
                onClick={toggleNav}
              >
                Manage Orders
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
