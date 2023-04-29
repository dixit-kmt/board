"use client"

import { Montserrat, Lato } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons"
import { useSession, signOut } from "next-auth/react";

const montserrat = Montserrat({ subsets: ["latin"] });
const lato = Lato({
  weight: "400",
  preload: false,
});

export default function Header() {
  const { data } = useSession();
  return (
    <div className="relative flex items-center">

      <h2 className={`${montserrat.className} text-2xl font-bold cursor-pointer`}>
        Dashboard
      </h2>

      <div className=" absolute top-auto right-0 flex items-center">

      {/* Search Bar */}
        <div className="hidden md:flex px-3 py-1 border rounded-lg bg-white text-[#b0b0b0] items-center">
          <input
            type="text"
            placeholder="Search..."
            className={`${lato.className} px-2 py-1 text-sm appearance-none leading-tight focus:outline-none focus:shadow-outline`}
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="w-[16px]" />
        </div>

        {/* Notifications */}
        <FontAwesomeIcon icon={faBell} className="w-[16px] mx-4 cursor-pointer" />

        {/* Profile Section */}
        <div className="peer">
          <img
            src={data?.user?.image}
            alt="image"
            width="26"
            height="26"
            className="rounded-full cursor-pointer"
          />
        </div>

        <div
          className="hidden peer-hover:flex hover:flex absolute top-[-10px] right-0
         p-4 rounded-lg w-max
         flex-col bg-white  z-10 mt-10"
        >
          <p className="text-sm font-bold mb-2"> Hi, {data?.user.name}</p>
          <p onClick={signOut} className="text-sm cursor-pointer">
            Sign Out
          </p>
        </div>

      </div>
    </div>
  );
}
