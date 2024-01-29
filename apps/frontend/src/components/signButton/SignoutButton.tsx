"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ProfilePopup from "../navbar/ProfilePopup";

const SignoutButton = () => {
  const { data: session } = useSession();
  const [showPopup, setShowPopup] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef);

  function useOutsideClick(ref: React.RefObject<HTMLElement>) {
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          setShowPopup(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  if (session?.user) {
    return (
      <div className="flex gap-4 ml-auto" ref={wrapperRef}>
        <p className="text-sm tracking-tight text-sky-400">
          <button onClick={() => {setShowPopup(!showPopup)}}>
            <Image
              src={session.user.image}
              width={50}
              height={50}
              className="rounded-full"
              alt='user'
            />
          </button>
        </p>
        {showPopup ? (
          <ProfilePopup />) : null}
      </div>
    );
  }
  return <button onClick={() => signIn()}>Sign in</button>;
};

export default SignoutButton;
