"use client"

import Link from 'next/link';
import { useState } from 'react';
import { Montserrat, Lato } from 'next/font/google'

// Fonts
const montserrat = Montserrat({ subsets: ['latin'] })
const lato = Lato({
  weight: "400",
  preload: false,
});

export default function SideBar(){
  // Setting state for SideBar toggler
  const [open, setOpen] = useState(false);
  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div>
    {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        type="button"
        className="z-20 fixed inline-flex text-sm pt- text-gray-500 md:hidden"
      >
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      {/* SideBar Container */}
      <div
        className={`${
          open ? "-translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 h-screen  transition-transform md:translate-x-0 md:p-10 z-10`}
        aria-label="Sidebar"
      >
        <div
          className={`${montserrat.className} h-full w-[250px] overflow-auto bg-black text-white md:rounded-[30px] py-[60px] px-[50px]`}
        >
          <h1 className="text-4xl font-bold">Board.</h1>

          <div className="text-lg mt-[60px]">
            <div className="mb-8">
              <Link href="" className="font-bold">
                Dashboard
              </Link>
            </div>
            <div className="mb-8">
              <Link href="">Transactions</Link>
            </div>
            <div className="mb-8">
              <Link href="">Schedules</Link>
            </div>
            <div className="mb-8">
              <Link href="">Users</Link>
            </div>
            <div className="mb-8">
              <Link href="">Settings</Link>
            </div>
          </div>

          <div className="text-sm mt-28">
            <div className="mb-3.5">
              <Link href="">Help</Link>
            </div>
            <div>
              <Link href="">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}