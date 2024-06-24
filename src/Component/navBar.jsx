import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logow from "../images/Logow.png";

const navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className="bg-violet-500 dark:bg-gray-900 fixed top-0 left-0 right-0 z-50">
        <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logow} className="h-8" alt="Flowbite Logo" />
            <Link to={"/"}>
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                AnalyticBox
              </span>
            </Link>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="mobile-menu"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              <li>
                <Link
                  to={"/Dashboard"}
                  className="block py-2 px-5 text-white hover:text-violet-500 hover:bg-white rounded-sm"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className="block py-2 px-5 text-white hover:text-violet-500 hover:bg-white rounded-sm"
                >
                  Engagement
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className="block py-2 px-5 text-white hover:text-violet-500 hover:bg-white rounded-sm"
                >
                  Comparison
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              onClick={toggleDropdown}
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded={isDropdownOpen ? "true" : "false"}
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src={""}
                alt="user photo"
              />
            </button>
            {isDropdownOpen && (
              <div
                className="z-50 absolute right-0 mt-60 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                id="user-dropdown"
              >
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">
                    User
                  </span>
                  <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                    user@gmails.com
                  </span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-300 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Setting
                    </a>
                  </li>
                  <li>
                  <Link to={"/"}>
                    <a
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-300 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Logout
                    </a>
                  </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
