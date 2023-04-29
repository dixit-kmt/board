"use client"

import { signIn } from "next-auth/react";

import Image from "next/image";
import Link from "next/link";

// Fonts
import { Montserrat, Lato } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });
const lato = Lato({
  weight: "400",
  preload: false,
});

// Logos
import GoogleLogo from '../../public/googlelogo.png';
import AppleLogo from "../../public/applelogo.png";

// AUTH USING GOOGLE IS WORKING
export default function SignInForm(){
  async function handleGoogleSignin() {
    signIn("google", { callbackUrl: "/dashboard" });
  }
    return (
      <div>
          <h2 className={`${montserrat.className} text-4xl font-bold`}>
            Sign In
          </h2>
          <p className={`${lato.className} mb-5 text-base font-normal`}>
            Sign in to your account
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div
              className="cursor-pointer rounded-lg bg-white text-xs w-[180px] p-2 flex items-center justify-center"
              onClick={handleGoogleSignin}
            >
              <Image
                src={GoogleLogo}
                width={22}
                alt="GoogleLogo"
                className="pr-1"
              ></Image>{" "}
              <p className={`${montserrat.className} text-xs text-[#858585]`}>
                Sign in with Google
              </p>
            </div>
            <div className="cursor-not-allowed rounded-lg bg-white text-xs w-[180px] flex p-2 items-center justify-center">
              <Image
                src={AppleLogo}
                width={20}
                alt="AppleLogo"
                className="pr-1"
              ></Image>
              <p className={`${montserrat.className} text-xs text-[#858585]`}>
                Sign in with Apple
              </p>
            </div>

            <div
              className={`${lato.className} col-span-2 rounded-lg text-sm p-8 bg-white`}
            >
              <div className="mb-4">
                <label className="block mb-2" htmlFor="email">
                  Email address
                </label>
                <input
                  className="appearance-none border rounded bg-[#f5f5f5] focus:bg-[#eaeaea] w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="appearance-none border bg-[#f5f5f5] focus:bg-[#eaeaea] rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <Link href="#" className="text-[#346BD4]">
                Forgot Password?
              </Link>
              <br />

              <button
                className={`${montserrat.className} cursor-not-allowed h-10 mt-4 rounded-lg bg-black text-white font-bold w-full`}
              >
                Sign In
              </button>
            </div>
          </div>
          <p
            className={`${lato.className} mt-5 text-center text-[#858585] font-normal`}
          >
            Dont have a account?{" "}
            <Link href="#" className="text-[#346bd4]">
              Register here
            </Link>
          </p>
      </div>
    );
} 