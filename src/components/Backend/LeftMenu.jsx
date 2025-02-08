import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  AiFillHome,
  AiFillInfoCircle,
  AiFillDashboard,
  AiFillContacts,
  AiFillLock,
  AiFillAppstore,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";

const LeftMenu = () => {
  const [Open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!Open);
  };

  const menuItem = [
    {
      link: "/admin",
      name: "Home",
      icon: <AiFillHome className="text-blue-500" />,
    },
    {
      link: "/admin/about",
      name: "About",
      icon: <AiFillInfoCircle className="text-green-500" />,
    },
    {
      link: "/admin/dashboard",
      name: "Service",
      icon: <AiFillDashboard className="text-yellow-500" />,
    },
    {
      link: "/admin/service",
      name: "Contact",
      icon: <AiFillContacts className="text-purple-500" />,
    },
    {
      link: "/admin/contact",
      name: "Login",
      icon: <AiFillLock className="text-red-500" />,
    },
    {
      link: "/admin/setting",
      name: "Product",
      icon: <AiFillAppstore className="text-pink-500" />,
    },
  ];

  return (
    <div className="flex h-screen">
      <div
        style={{ width: Open ? "200px" : "80px" }}
        className={`bg-gradient-to-b from-gray-900 to-gray-700 text-white shadow-2xl transition-all duration-300 ease-in-out`}>
        <section className="flex h-[60px] items-center justify-between px-4">
          <h1
            style={{ display: Open ? "block" : "none" }}
            className="cursor-pointer text-2xl font-bold text-white">
            Admin
          </h1>
          <div onClick={toggle} className="cursor-pointer text-2xl text-white">
            {Open ? <FaTimes /> : <FaBars />}
          </div>
        </section>
        <hr />
        <div className="flex h-[calc(100%-60px)] flex-col justify-between">
          <nav className="mt-4">
            {menuItem.map((item, index) => (
              <NavLink
                to={item.link}
                key={index}
                className="mx-2 my-2 flex items-center gap-4 rounded-lg p-3 transition-colors duration-300 hover:bg-blue-600">
                <div className="text-4xl">{item.icon}</div>
                <div
                  style={{ display: Open ? "block" : "none" }}
                  className="text-2xl font-semibold">
                  {item.name}
                </div>
              </NavLink>
            ))}
          </nav>
          <button className="mx-2 my-2 flex items-center gap-4 rounded-lg p-3 transition-colors duration-300 hover:bg-blue-600">
            <div className="text-2xl text-pink-500">
              <AiFillAppstore />
            </div>

            <div
              style={{ display: Open ? "block" : "none" }}
              className="font-semibold">
              Dark_Mode
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;
