import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const menu = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "SERVICE", link: "/service" },
    { name: "CONTACT", link: "/contact" },
    { name: "LOGIN", link: "/login" },
    { name: "ADMIN PAGE", link: "/admin" },
  ];

  return (
    <div className="sticky top-0 z-20 w-full bg-gray-400 shadow-md dark:bg-gray-800">
      <nav className="m-auto max-w-[1440px] items-center justify-between px-6 py-2 md:flex">
        {/* Logo Section */}
        <div className="flex items-center gap-1 text-2xl font-bold">
          <span
            className="cursor-pointer text-4xl font-bold text-red-500 hover:text-red-400"
            onClick={() => {
              navigate("/");
            }}>
            RCCESDI<span className="text-blue-600">.</span>
          </span>
        </div>

        {/* Mobile Menuber icon*/}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-6 top-4 text-2xl md:hidden">
          {open ? (
            <FaTimes className="animate-bounce cursor-pointer text-red-500 hover:text-red-700" />
          ) : (
            <FaBars className="cursor-pointer text-blue-500 hover:text-blue-700" />
          )}
        </div>

        {/* NavLink */}
        <div>
          <ul
            className={`md:bg-hidden absolute right-0 z-[-20] bg-gray-400 px-8 py-6 transition-all duration-300 ease-in-out md:static md:z-auto md:flex md:px-0 md:py-0 dark:bg-gray-800 ${
              // open ? "right-[0px]" : "right-[-160px]"
              open ? "right-[0px]" : "top-[-600px]"
              // open ? "top-[30px] " : "top-[-600px]"
            }`}>
            {menu.map((user, dex) => (
              <li
                key={dex}
                className="my-6 font-semibold hover:scale-105 md:my-0 md:ml-2">
                <NavLink
                  to={user.link}
                  className={({ isActive }) =>
                    `block px-2 py-2 duration-200 ${
                      isActive ? "text-red-500" : "text-black dark:text-white"
                    } hover:text-orange-700`
                  }>
                  {user.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
