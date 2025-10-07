import AuthTabs from "@/components/auth/AuthTabs";
import Image from "next/image";
import React, { ReactNode } from "react";
import { FaEye } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function SignIn({children}:{children:ReactNode}) {
  return (
    <div className="w-full flex h-screen">
      <div className="basis-1/2 bg-[url('/auth-texture.jpg')] bg-cover bg-center" />
      <div className="basis-1/2 flex flex-col items-center justify-center gap-y-4 py-5 px-10">
        <div className="w-2/3">

        <div className="text-2xl w-full font-bold text-start text-gray-500">
          Online Car Autoparts
        </div>
        <div className="text-lg w-full font-light text-start text-gray-300">
          We are happy to see you
        </div>
        <AuthTabs/>
        </div>
        
       {children}
      </div>
    </div>
  );
}

export default SignIn;
