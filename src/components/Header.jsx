import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  Sidebar.propTypes = {
    children: PropTypes.string.isRequired,
  };

  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: <FaTh />,
    },
    {
      path: "/about",
      name: "About",
      icon: <FaUserAlt />,
    },
    {
      path: "/service",
      name: "Service",
      icon: <FaRegChartBar />,
    },
    {
      path: "/contact",
      name: "Contact",
      icon: <FaCommentAlt />,
    },
    {
      path: "/login",
      name: "Login",
      icon: <FaShoppingBag />,
    },
    {
      path: "/login",
      name: "LOGIN",
      icon: <FaThList />,
    },
  ];
  return (
    <div className="flex">
      <div
        style={{ width: isOpen ? "200px" : "40px" }}
        className="transition-al h-[100vh] w-[200px] bg-gray-400">
        <div className="mx-auto flex justify-center bg-blue-300">
          <h1
            style={{ display: isOpen ? "block" : "none" }}
            className="cursor-pointer pl-2 text-2xl font-bold text-red-600">
            admin
          </h1>
          <div
            style={{ marginLeft: isOpen ? "50px" : "0px" }}
            className="cursor-pointer py-2 text-xl transition-all">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="flex items-center gap-4 text-xl text-white"
            activeclassName="active">
            <div className="p-2">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="text-2xl text-white">
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};
export default Sidebar;
