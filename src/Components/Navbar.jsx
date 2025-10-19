import React from "react";
import { NavLink, Link } from "react-router";
import logoimg from "../assets/logo.png";
import github from "../assets/Vector.png";

const Navbar = () => {
  const links = [
    { path: "/", label: "Home" },
    { path: "/apps", label: "Apps" },
    { path: "/installation", label: "Installation" },
  ];

  return (
    <div className="max-w-[1280px] mx-auto navbar bg-base-100">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-1 rounded-md transition-all duration-300 ${
                      isActive ? "underline underline-offset-4" : ""
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className="text-xl flex gap-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
        >
          <img src={logoimg} alt="" /> HERO.IO
        </Link>
      </div>

      {/* Navbar Center (Desktop Menu) */}
      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1 hidden lg:flex text-[18px] gap-4">
          {links.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-1 rounded-md transition-all duration-300 ${
                    isActive ? "underline underline-offset-4" : ""
                  } hover:text-[#632EE3]`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <NavLink
          to="https://github.com/MOZID-2025"
          className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white flex items-center gap-2"
        >
          <img src={github} alt="" /> Contribute
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
