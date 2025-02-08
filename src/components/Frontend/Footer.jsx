import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <footer className="flex flex-col justify-center pt-8 dark:bg-gray-800">
        <nav className="flex flex-wrap justify-center gap-3 text-[14px] font-medium text-green-600 md:gap-8 md:text-xl">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/service">SERVICE</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
          <button
            onClick={() => {
              navigate("/profile");
            }}>
            PROFILE
          </button>
          {/* <a href="/about">About</a> */}
        </nav>

        <div className="flex justify-center gap-4 py-6">
          <a
            title="facebook"
            href="https://facebook.com/miekhlas"
            target="_blank"
            rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
          </a>
          <a
            title="linkedin"
            href="https://www.linkedin.com/in/miekhlas/"
            target="_blank"
            rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
          </a>
          <a
            title="instagram"
            href="https://instagram.com/miekhlas"
            target="_blank"
            rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
          </a>
          <a
            title="twitter"
            href="https://twitter.com/miekhlas"
            target="_blank"
            rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
          </a>
        </div>
        <hr className="dark:text-gray-400" />
        <p className="py-2 text-center font-medium text-gray-700 dark:text-white">
          &copy; 2024{" "}
          <span className="text-green-400 dark:text-green-400">
            Sordar It Ltd.
          </span>{" "}
          All rights reservered.
        </p>
      </footer>
    </>
  );
}

export default Footer;
