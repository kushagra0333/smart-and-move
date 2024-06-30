import React from "react";
import { CiSearch } from "react-icons/ci";

function Header() {
  return (
    <header className="py-3 shadow w-full">
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="font-bold text-3xl text-primary ">
          Register<span className="text-secondary">Karo</span>
        </h2>

        <div className="flex items-center gap-6">
          <a
            className="hidden sm:block hover:text-violet-900 transition"
            to="/"
          >
            Home
          </a>
          <a
            className="hidden sm:block hover:text-violet-900 transition"
            to="/"
          >
            Our Services
          </a>
          <a
            className="hidden sm:block hover:text-violet-900 transition"
            to="/"
          >
            Blog
          </a>
          <a
            className="hidden sm:block hover:text-violet-900 transition"
            to="/"
          >
            Contact Us
          </a>
          <a
            className="hidden sm:block hover:text-violet-900 transition"
            to="/"
          >
            About us
          </a>
          <a
            className="hidden sm:block hover:text-violet-900 transition"
            to="/"
          >
            <CiSearch />
          </a>
          <a className=" bg-secondary text-white px-4 py-2 transition" to="/">
            Talk An Expert
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
