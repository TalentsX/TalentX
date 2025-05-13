import React, { useState } from 'react';
import logo from '../Assests/Talentxlogo.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white w-full text-black py-2 fixed z-10 shadow-md">
      <div className="max-w-[95%] mx-auto flex items-center justify-between">
        {/* Left Section - Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Talentx Logo" className="w-auto h-12" />
        </div>

        {/* Hamburger Icon - visible on mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Center + Right Section - Navigation & Contact */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute top-[60px] left-0 w-full bg-white md:static md:flex md:items-center md:gap-[40px] md:w-auto z-10`}
        >
          {/* Nav Links */}
          <ul className="flex flex-col md:flex-row gap-4 md:gap-[20px] px-6 py-4 md:p-0 flex items-center justify-center text-center">
            <li>
              <a href="/Insights" className="hover:text-gray-400">
                SERVICES
              </a>
            </li>
            <li>
              <a href="/solutions" className="hover:text-gray-400">
                DATA PRIVACY
              </a>
            </li>
            <li>
              <a href="/research" className="hover:text-gray-400">
                ABOUT US
              </a>
            </li>
            <li><div className="flex justify-center md:justify-end px-6 md:px-0 pb-4 md:pb-0">
            <a href="/contact">
              <button className="bg-[#8B53FF] px-4 py-2 rounded-2xl text-white w-full md:w-auto">
                CONTACT
              </button>
            </a>
          </div></li>
          </ul>
                    
        </div>
      </div>
    </div>
  );
};
