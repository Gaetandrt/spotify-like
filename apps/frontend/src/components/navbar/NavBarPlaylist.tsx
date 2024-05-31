import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiSquarePlus } from "react-icons/ci";
import { PlaylistModal } from "../modals/playlist";
import { fetchPlaylist } from "@/services/PlaylistService";

type NavBarPlaylistProps = {};

interface Playlist {
  id: number;
  title: string;
  picture: string;
}

async function NavBarPlaylist({}: NavBarPlaylistProps) {

  const fetchData = async () => {
    const playlist = await fetchPlaylist();

    if (playlist.status === "success") {
      return playlist.data
    } else {
      return []
    }
  };

  const Playlist = await fetchData();

  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <p className="text-white text-xl font-semibold">Playlists</p>
        <PlaylistModal />
      </div>
      <div className="flex flex-col justify-start space-y-3 -ml-4 -mr-4">
        {Playlist.map((playlist) => (
          <Link href="/" key={playlist.id}>
            <div className="flex flex-row justify-start space-x-3 items-center hover:bg-slate-400/15 p-1 pt-2 pb-2 transition ease-in-out">
              <Image
                src="/playlist-default.jpg"
                alt="playlist"
                className="ml-4"
                width={50}
                height={50}
              />
              <div>
                <p className="text-white text-lg">{playlist.name}</p>
                <p className="text-gray-400 text-sm">Par Gaëtan Darrort</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NavBarPlaylist;
