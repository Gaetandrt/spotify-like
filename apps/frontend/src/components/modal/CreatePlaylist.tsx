"use client";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import { CiSquareRemove } from "react-icons/ci";
import { CiUnlock } from "react-icons/ci";
import Image from "next/image";
import { useState } from "react";

function Modal() {
  const searchParams = useSearchParams();
  const modal = searchParams.get("newPlaylist");
  const pathname = usePathname();
  const [playlistName, setPlaylistName] = useState("");
  const [playlistDescription, setPlaylistDescription] = useState("");
  const [isChecked, setIsChecked] = useState(true);

  return (
    <>
      {modal && (
        <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-30 z-50 overflow-auto flex items-center">
          <div
            className="bg-[#1B191F] rounded-lg  m-auto p-8 w-1/3 h-1/2"
            style={{ zIndex: 50 }}
          >
            <div className="flex flex-row justify-between">
              <p className="text-white font-semibold text-xl mb-6">
                Créer ma playlist
              </p>
              <Link href={pathname}>
                <div className="hover:text-gray-400 text-white ease-in-out transition">
                  <CiSquareRemove size={30}></CiSquareRemove>
                </div>
              </Link>
            </div>

            <div className="flex flex-row gap-5">
              <Image
                src="/playlist-default.jpg"
                width={180}
                height={180}
                style={{ borderRadius: "5%" }}
              />
              <div className="flex flex-col gap-6 w-full">
                <div>
                  <p className="text-white mb-2">Nom</p>
                  <input
                    type="text"
                    maxLength={28}
                    value={playlistName}
                    placeholder="Nom de la playlist"
                    onChange={(e) => setPlaylistName(e.target.value)}
                    className="bg-[#29282D] rounded-lg hover:bg-[#3A393D] p-1 focus:ring-2 focus:ring-violet-700 focus:outline-none text-white w-full ease-in-out transition"
                    style={{ paddingLeft: "5px" }}
                  />
                </div>
                <div className="flex flex-row justify-between">
                  <CiUnlock size={30} color="white"></CiUnlock>
                  <div>
                    <p className="text-white">Public</p>
                    <p className="text-gray-500 text-xs">
                      Tout le monde peu voir cette playlist
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-violet-600 mt-[8px]"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <p className="text-white mb-2">Desciption</p>
              <textarea
                value={playlistDescription}
                maxLength={200}
                placeholder="Description de la playlist"
                onChange={(e) => setPlaylistDescription(e.target.value)}
                className="bg-[#29282D] rounded-lg hover:bg-[#3A393D] p-1 h-28 focus:ring-2 focus:ring-violet-700 focus:outline-none text-white w-full ease-in-out transition"
                style={{ paddingLeft: "5px" }}
              />
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}

export default Modal;
