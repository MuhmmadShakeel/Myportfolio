import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/images/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Contact",
  ];

  return (
    <nav className="w-full bg-[#05070d] font-[Orbitron] border-b border-[#009689]/30 backdrop-blur-lg">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <div className="flex items-center gap-3 cursor-pointer group">

          <img
            src={logo}
            alt="logo"
            className="h-10 w-auto transition-transform duration-300 group-hover:scale-110"
          />

          <h1 className="text-xl md:text-2xl font-bold tracking-widest text-[#009689] group-hover:text-[#00c4b4] transition duration-300">
            SHAKI DEV
          </h1>

        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-10 text-gray-300 font-medium">

          {navLinks.map((link, index) => (
            <li
              key={index}
              className="relative cursor-pointer group transition duration-300"
            >

              <span className="group-hover:text-[#009689] transition duration-300">
                {link}
              </span>

              {/* Hover line */}
              <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-gradient-to-r from-[#009689] to-[#00c4b4] group-hover:w-full transition-all duration-300"></span>

            </li>
          ))}

        </ul>

        {/* MOBILE MENU BUTTON */}
        <div
          className="md:hidden text-[#009689] cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </div>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#05070d] border-t border-[#009689]/30 px-6 py-6">

          <ul className="flex flex-col gap-6 text-gray-300 text-lg">

            {navLinks.map((link, index) => (
              <li
                key={index}
                className="hover:text-[#009689] transition duration-300 cursor-pointer"
                onClick={() => setOpen(false)}
              >
                {link}
              </li>
            ))}

          </ul>

        </div>
      )}
    </nav>
  );
}

export default Navbar;