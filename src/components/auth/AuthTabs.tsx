'use client'
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

function AuthTabs() {
 const pathname = usePathname();
  const [isSignIn, setIsSignIn] = useState(pathname == '/signin');
  const router = useRouter();
  const handleSignin = () => {
    setIsSignIn(true);
    router.push("/signin");
  };
  const handleSignUp = () => {
    setIsSignIn(false);
    router.push("/signup");
  };

  return (
    <div className="w-full p-1 border-[1px]  border-gray-400 flex items-center rounded-2xl text-xs">
      <button
        onClick={handleSignin}
        className={
        `text-gray-400 flex-1  ${isSignIn ? "bg-blue-700 text-white rounded-2xl p-2 flex-1" : ""} `
        }
      >
        Sign In
      </button>
      <button
        onClick={handleSignUp}
        className={
         `text-gray-400 flex-1  ${!isSignIn ? "bg-blue-700 text-white rounded-2xl p-2 flex-1" : ""} `
        }
      >
        Sign Up
      </button>
    </div>
  );
}

export default AuthTabs;
