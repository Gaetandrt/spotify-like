"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiSquareChevRight } from "react-icons/ci";

type Props = {};

function ProfilePopup({}: Props) {
  const { data: session } = useSession();
  return (
    <div className="absolute flex flex-col z-10 top-20 right-2 w-1/5 h-1/2 rounded-xl bg-[#1B191F]">
      <Link href="/profile">
        <div className="flex items-center ease-in-out transition p-4 rounded-t-xl hover:bg-[#3A393D]">
          <div className="flex-none w-1/4">
            <Image
              src={session?.user?.image}
              width={50}
              height={50}
              className="rounded-full"
            ></Image>
          </div>
          <h1 className="flex-none w-2/4">{session?.user?.name}</h1>
          <div className="grow ml-12">
            <CiSquareChevRight size={28} />
          </div>
        </div>
        <div></div>
      </Link>
      <hr className="border-gray-500" />
      <button onClick={() => signOut()}>
        <div className="w-full p-4 flex flex-row justify-between items-center hover:bg-[#3A393D] ease-in-out transition">
          <p className="ml-2">Déconnexion</p>
          <div className="mr-3">
            <CiSquareChevRight size={28} />
          </div>
        </div>
      </button>
    </div>
  );
}

export default ProfilePopup;
