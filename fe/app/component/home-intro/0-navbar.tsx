'use client'
import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";



export default function Home0Navbar({navbar} : {navbar :any}) {


  useEffect(()=>{
    gsap.fromTo(navbar, {opacity : 0}, {opacity:1,duration:1.2, ease : 'power1.easeIn'})
  },[])



  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);
  return (
    <nav ref={el=>navbar=el} className="w-full border-b border-gray-300 bg-white fixed z-[20]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        <a href="#" className="flex items-center">
          <img
            src="https://img.freepik.com/premium-vector/threeball-snowman-with-hat-red-scarf-waving-hand-carrot-nose-buttons-sticker-new-year-winter-sticker-snowflakes-blue-background_532792-170.jpg?w=740"
            className="h-12 mr-3"
            alt="GiftLab Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#222222]">
            GiftLab
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 "
            type="button"
            onClick={toggleMenu}
            aria-expanded={showMenu}
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden md:inline">
            <button
              type="button"
              className="rounded-[32px] duration-[300ms] hover:-translate-y-1 bg-slate-950 text-white md:py-[18px] md:pl-[24px] md:pr-[24px]  max-sm:py-[14px] max-sm:pl-[20px] max-sm:pr-[20px]
              md:text-[16px] max-sm:text-[14px] max-md:py-[18px] max-md:pl-[24px] max-md:pr-[24px] hover:text-[#fff] hover:bg-[#7371ff] "
            >
              Get in touch &#8594;
            </button>
          </div>
        </div>

        <div
          className={`${
            showMenu ? "flex" : "hidden"
          } items-center justify-between w-full md:w-auto md:flex md:order-1 max-sm:flex-none`}
          id="menu"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white max-sm:mt-3">
            <li>
              <a
                href="#"
                className="block py-3 pl-3 pr-4 text-[#222222] text-[18px] hover:text-[#7371ff] "
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-3 pl-3 pr-4 text-[#222222] text-[18px] hover:text-[#7371ff]"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-3 pl-3 pr-4 text-[#222222] text-[18px] hover:text-[#7371ff]"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-3 pl-3 pr-4 text-[#222222] text-[18px] hover:text-[#7371ff]"
              >
                Contact
              </a>
            </li>
            <li>
              <div className="md:hidden sm:inline max-sm:inline">
                <button
                  type="button"
                  className="rounded-full bg-slate-950 text-white md:py-[18px] md:pl-[24px] md:pr-[24px]  max-sm:py-[14px] max-sm:pl-[20px] max-sm:pr-[20px]
              md:text-[16px] max-sm:text-[14px] max-md:py-[18px] max-md:pl-[24px] max-md:pr-[24px] hover:text-[#fff] hover:bg-[#7371ff] "
                >
                  Get in touch &#8594;
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
