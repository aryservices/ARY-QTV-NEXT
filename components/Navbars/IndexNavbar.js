import Link from "next/link";
import React, { useState } from "react";


export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = useState(false); // Boolean for open/close state
  const [searchField, setSearchField] = useState("");

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const handleSubmit = (e) => {
    alert(e.target.query.value);
  };

  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-181818 shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          {/* Logo */}
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 whitespace-nowrap uppercase">
                <img width="50%" src="/img/ary-qtv-logo.png" alt="QTV Logo" />
              </a>
            </Link>
            {/* Hamburger Menu */}
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)} // Toggle navbarOpen
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>

          {/* Menu Items */}
          <div
            className={`lg:flex flex-grow items-center lg:bg-opacity-0 lg:shadow-none ${
              navbarOpen ? "block" : "hidden"
            }`}
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              {/* Menu Links */}
              <Link href="/">
                <li
                  className="hover:text-white-500 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold cursor-pointer"
                  onClick={() => setNavbarOpen(false)} // Close menu on click
                >
                  <i className="text-yellow fas fa-home text-md leading-lg mr-2" /> Home
                </li>
              </Link>
              <Link href="/latestvideos">
                <li
                  className="hover:text-white-500 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold cursor-pointer"
                  onClick={() => setNavbarOpen(false)} // Close menu on click
                >
                  <i className="text-yellow fas fa-video text-md leading-lg mr-2" /> Latest Videos
                </li>
              </Link>
              <Link href="/on-air">
                <li
                  className="hover:text-white-500 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold cursor-pointer"
                  onClick={() => setNavbarOpen(false)} // Close menu on click
                >
                  <i className="text-yellow fas fa-file text-md leading-lg mr-2" /> ON AIR
                </li>
              </Link>
              <Link href="/popularplaylists">
                <li
                  className="hover:text-white-500 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold cursor-pointer"
                  onClick={() => setNavbarOpen(false)} // Close menu on click
                >
                  <i className="text-yellow fas fa-file text-md leading-lg mr-2" /> Popular
                </li>
              </Link>
              <Link href="/archiveplaylists">
                <li
                  className="hover:text-white-500 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold cursor-pointer"
                  onClick={() => setNavbarOpen(false)} // Close menu on click
                >
                  <i className="text-yellow fas fa-archive text-md leading-lg mr-2" /> Archive
                </li>
              </Link>
              <Link href="/schedule">
                <li
                  className="hover:text-white-500 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold cursor-pointer"
                  onClick={() => setNavbarOpen(false)} // Close menu on click
                >
                  <i className="text-yellow fas fa-clock text-md leading-lg mr-2" /> Schedule
                </li>
              </Link>
              <Link href="/blogs">
                <li
                  className="hover:text-white-500 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold cursor-pointer"
                  onClick={() => setNavbarOpen(false)} // Close menu on click
                >
                  <i className="text-yellow fas fa-clock text-md leading-lg mr-2" /> EDITORIAL
                </li>
              </Link>
            </ul>
            {/* Social Icons */}
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
              <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-1 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.facebook.com/ARYQTV/"
                  target="_blank"
                >
                  <i className="text-blueGray-400 fab fa-facebook leading-lg " />
                  {/* <span className="lg:hidden inline-block ml-2">Share</span> */}
                </a>
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-1 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://x.com/aryqtv"
                  target="_blank"
                >
                  <i className="text-blueGray-400 fab fa-twitter leading-lg " />
                  {/* <span className="lg:hidden inline-block ml-2">Tweet</span> */}
                </a>
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-1 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.instagram.com/aryqtvofficial/"
                  target="_blank"
                >
                  <i className="text-blueGray-400 fab fa-instagram leading-lg " />
                  {/* <span className="lg:hidden inline-block ml-2">Star</span> */}
                </a>
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-1 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.tiktok.com/@aryqtvofficial"
                  target="_blank"
                >
                  <i className="text-blueGray-400 fab fa-tiktok leading-lg " />
       
                </a>
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-1 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.youtube.com/channel/UCE2oY4S4wOu6WofU2YbfWsw"
                  target="_blank"
                >
                  <i className="text-blueGray-400 fab fa-youtube leading-lg " />

                </a>
                {/* <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-1 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://webmail.arydigital.tv/"
                  target="_blank"
                >
                  <i className="text-blueGray-400 fa fa-envelope leading-lg" />

                </a> */}
              </li>
              {/* Add more social icons as needed */}
              <Link href="https://live.aryqtv.tv/">
                <li className="flex items-center">
                  <button
                    className="bg-yellow text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <i className="fas fa-tv"></i> Watch LIVE
                  </button>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
