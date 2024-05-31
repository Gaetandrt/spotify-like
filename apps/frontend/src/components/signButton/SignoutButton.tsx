"use client";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import React, { useRef, useState } from "react";

const SignoutButton = () => {
  const { data: session } = useSession();
  const [showPopup, setShowPopup] = useState(false);
  const wrapperRef = useRef(null);


  if (session?.user) {
    return (
      <>
        <div className="flex gap-4 ml-auto" ref={wrapperRef}>
          <p className="text-sm tracking-tight text-sky-400">
            <button onClick={() => { setShowPopup(!showPopup) }}>
              <Image
                src={String(session.user.image)}
                width={50}
                height={50}
                className="rounded-full"
                alt='user'
              />
            </button>
          </p>
        </div>
        {showPopup && (
        <div className="absolute top-[70px] right-1 z-10">
          <div className="bg-[#1B191F] rounded-md shadow-md w-96 h-[600px] z-50">
            
          </div>
        </div>
        )}
      </>
    );
  }
  return <button onClick={() => signIn()}>Sign in</button>;
};

export default SignoutButton;
