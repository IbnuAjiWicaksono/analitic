import React, { useState } from 'react';
import Facebook from "../images/Facebook.png";
import Instagram from "../images/Instagram.png";
import Twitter from "../images/X.png";
import Youtube from "../images/Youtube.png";
import DigitalNews from "../images/DigitalNews.png";
import Marketplace from "../images/Marketplace.png";
import { Link } from 'react-router-dom';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="pt-2 mx-10">
        <button
          id="dropdownBgHoverButton"
          onClick={toggleDropdown}
          className=" gap-2 w-58 text-white bg-blue-500 hover:bg-blue-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
          type="button"
        >
          Social Media{' '}
          <svg
            className={`w-2.5 h-2.5 ms-3 ${isOpen ? 'transform rotate-180' : ''}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {isOpen && (
          <div
            id="dropdownBgHover"
            className="z-10 absolute mt-2 p-4 w-58 bg-white rounded-lg shadow dark:bg-gray-700"
          >
            <ul
              className=" text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownBgHoverButton"
            >
              <li>
                <div className="flex-row p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <div
                    className=" flex space-x-2 gap-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                  >
                   <img
                    className="w-6 h-6 rounded-sm"
                    src={Facebook}
                    alt="Facebook"
                  />
                    Facebook
                  </div>
                </div>
              </li>
              <li>
                <div className="flex-row p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <div
                    className=" flex space-x-2 gap-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                  >
                   <img
                    className="w-6 h-6 rounded-sm"
                    src={Instagram}
                    alt="Instagram"
                  />
                    Instagram
                  </div>
                </div>
              </li>
              <li>
                <div className="flex-row p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <Link to={"/Twitter"}>
                <div
                    className=" flex space-x-2 gap-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                  >
                   <img
                    className="w-6 h-6 rounded-sm"
                    src={Twitter}
                    alt="Twitter"
                  />
                    Twitter
                  </div>
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex-row p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <div
                    className=" flex space-x-2 gap-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                  >
                   <img
                    className="w-6 h-6 rounded-sm"
                    src={Youtube}
                    alt="Youtube"
                  />
                    Youtube
                  </div>
                </div>
              </li>
              <li>
                <div className="flex-row p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <div
                    className=" flex space-x-2 gap-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                  >
                   <img
                    class="w-6 h-6 rounded-sm"
                    src={DigitalNews}
                    alt="DigitalNews"
                  />
                    DigitalNews
                  </div>
                </div>
              </li>
              <li>
                <div className="flex-row p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <div
                    className=" flex space-x-2 gap-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                  >
                   <img
                    className="w-6 h-6 rounded-sm"
                    src={Marketplace}
                    alt="Marketplace"
                  />
                    Marketplace
                  </div>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
