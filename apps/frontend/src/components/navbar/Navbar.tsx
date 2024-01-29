import React from "react";
import Image from "next/image";
import Link from "next/link";
import SignoutButton from "../signButton/SignoutButton";
import { CiCompass1, CiHome, CiBoxList } from "react-icons/ci";
import NavBarPlaylist from "./NavBarPlaylist";
import SearchInput from "./SearchInput";
import ProfilePopup from "./ProfilePopup";

type NavbarProps = {
  children: React.ReactNode;
};

const Navbar = ({ children: children }: NavbarProps) => {
  const linkClass =
    "flex items-center space-x-2 hover:bg-slate-400/20 hover:rounded-lg p-2";

  return (
    <div className="flex flex-col h-full">
      <div className=" flex justify-between p-4 ml-[calc(16.666%)] w-10/12 bg-[#0F0D13] border-b border-gray-500">
        <SearchInput />
        <SignoutButton />
      </div>
      <div className="ml-auto w-10/12 h-full overflow-auto mt-8 pl-32 pr-32 bg-[#0F0D13]">{children}</div>
      <div className="absolute w-2/12 h-full bg-[#1B191F] p-2 pt-4 -mt-1 border-r border-gray-500">
        <div className="flex-col justify-start space-y-6">
          <div className="text-black p-2">
            <Image src="deezer.svg" width={140} height={100} alt="logo" />
          </div>
          <div className="flex flex-col justify-start space-y-3">
            <Link href="/">
              <div className={linkClass}>
                <CiHome size={26} />
                <p className="text-white text-xl font-semibold">Accueil</p>
              </div>
            </Link>
            <Link href="/">
              <div className={linkClass}>
                <CiCompass1 size={26} />
                <p className="text-white text-xl font-semibold">Décrouvrir</p>
              </div>
            </Link>
            <Link href="/bibliotheque">
              <div className={linkClass}>
                <CiBoxList size={26} />
                <p className="text-white text-xl font-semibold">Bibliothèque</p>
              </div>
            </Link>
          </div>
          <div className="p-2">
            <hr className="border-gray-500 pr-1 mb-2" />
            <NavBarPlaylist />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
