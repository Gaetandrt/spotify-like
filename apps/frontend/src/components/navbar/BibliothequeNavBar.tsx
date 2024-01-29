"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
};

function BibliothequeNavBar({}: Props) {
  const path = usePathname();

  const roots = [
    {
      name: "Vue d'ensemble",
      href: "/bibliotheque",
      current: false,
    },
    {
      name: "Playlists",
      href: "/bibliotheque/playlists",
      current: false,
    },
    {
      name: "Coups de coeur",
      href: "/bibliotheque/loved",
      current: false,
    },
    {
      name: "Albums",
      href: "/bibliotheque/albums",
      current: false,
    },
    {
      name: "Artistes",
      href: "/bibliotheque/artists",
      current: false,
    }
  ];

  const currentRoot = roots.find((root) => root.href === path);
  if (currentRoot) {
    currentRoot.current = true;
  }

  return (
    <div className="flex flex-col h-full">
      <div className=" flex gap-10 flex-row bg-[#0F0D13] border-b border-gray-500">
        {roots.map((root) => (
          <Link href={root.href} key={root.name}>
            <div
              className={`flex flex-col items-center hover:text-white p-2 ease-in-out transition ${
                root.current
                  ? "text-white font-semibold border-b-2 border-[#A238FF]"
                  : "text-gray-400 font-normal"
              }`}
            >
              <p className="text-lg">{root.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BibliothequeNavBar;
