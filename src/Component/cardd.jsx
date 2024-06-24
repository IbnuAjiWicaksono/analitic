import React from "react";
import Facebook from "../images/Facebook.png";
import Instagram from "../images/Instagram.png";
import Twitter from "../images/X.png";
import Youtube from "../images/Youtube.png";
import DigitalNews from "../images/DigitalNews.png";
import Marketplace from "../images/Marketplace.png";

const Cardd = () => {
  return (
    <div className="p-10">
      <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Active Keywords
          </h5>
          <h5>{"3"} active keyword</h5>
        </div>
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-md"
                    src={Facebook}
                    alt="Facebook"
                  />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Facebook
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  Keywords : {}
                  </p>
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center ">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-md"
                    src={Instagram}
                    alt="Instagram"
                  />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Instagram
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  Keywords : {}
                  </p>
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-md"
                    src={Twitter}
                    alt="Twitter"
                  />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Twitter
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  Keywords : {}
                  </p>
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center ">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-md"
                    src={Youtube}
                    alt="Youtube"
                  />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Youtube
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  Keywords : {}
                  </p>
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center ">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-md"
                    src={Marketplace}
                    alt="Marketplace"
                  />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    E-Commerse
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  Keywords : {}
                  </p>
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center ">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-md"
                    src={DigitalNews}
                    alt="DigitalNews"
                  />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    DigitalNews
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    Keywords : {}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cardd;
