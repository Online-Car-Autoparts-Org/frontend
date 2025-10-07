import Image from "next/image";
import React from "react";
import { FaEye } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { MdEmail, MdPerson } from "react-icons/md";

function SignIn() {
  return (
    <form className="w-2/3 space-y-4 ">
      <div className="rounded-2xl border-[1px]  flex justify-between p-4 border-gray-400 text-gray-400 items-center">
        <input
          className="outline-0 focus:outline-0 flex-1"
          placeholder="Enter your First Name"
        />
        <MdPerson />
      </div>
      <div className="rounded-2xl border-[1px]  flex justify-between p-4 border-gray-400 text-gray-400 items-center">
        <input
          className="outline-0 focus:outline-0 flex-1"
          placeholder="Enter your Last Name"
        />
        <FaPerson />
      </div>
      <div className="rounded-2xl border-[1px]  flex justify-between p-4 border-gray-400 text-gray-400 items-center">
        <input
          className="outline-0 focus:outline-0 flex-1"
          placeholder="Enter your email"
        />
        <MdEmail />
      </div>
      <div className="rounded-2xl border-[1px]  flex justify-between p-4 border-gray-400 text-gray-400 items-center">
        <input
          className="outline-0 focus:outline-0 flex-1"
          placeholder="Enter your password"
        />
        <FaEye />
      </div>
      <button className="rounded-2xl border-[1px] w-full   p-4 bg-blue-700 text-gray-50 text-center text-sm ">
        SignIn
      </button>
      <div className="flex items-center w-full my-6">
        <div className="h-px flex-grow bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        <span className="mx-4 text-gray-500 text-sm font-medium">OR</span>
        <div className="h-px flex-grow bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>
      <button className="rounded-2xl border-[1px] w-full flex  p-4 items-center space-x-2 justify-center text-gray-400 text-center text-sm ">
        <Image
          alt={"google logo"}
          width={20}
          height={20}
          src={"/google_logo.png"}
        />{" "}
        <span>Signin with google</span>
      </button>
    </form>
  );
}

export default SignIn;
