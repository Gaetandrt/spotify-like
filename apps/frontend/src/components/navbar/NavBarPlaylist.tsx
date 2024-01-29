import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiSquarePlus } from "react-icons/ci";

type NavBarPlaylistProps = {};

interface Playlist {
  id: number;
  title: string;
  picture: string;
}

function NavBarPlaylist({}: NavBarPlaylistProps) {
  const Playlist: Playlist[] = [
    {
      id: 1,
      title: "Playlist 45",
      picture:
        "https://cdns-images.dzcdn.net/images/playlist/5f8b1e7d2c3e6f5d4e5b5c3b1b8f0f2a/500x500-000000-80-0-0.jpg",
    },
    {
      id: 2,
      title: "Playlist 2",
      picture:
        "https://cdns-images.dzcdn.net/images/playlist/5f8b1e7d2c3e6f5d4e5b5c3b1b8f0f2a/500x500-000000-80-0-0.jpg",
    },
    {
      id: 3,
      title: "Playlist 3",
      picture:
        "https://cdns-images.dzcdn.net/images/playlist/5f8b1e7d2c3e6f5d4e5b5c3b1b8f0f2a/500x500-000000-80-0-0.jpg",
    },
    {
      id: 4,
      title: "Playlist 4",
      picture:
        "https://cdns-images.dzcdn.net/images/playlist/5f8b1e7d2c3e6f5d4e5b5c3b1b8f0f2a/500x500-000000-80-0-0.jpg",
    },
    {
      id: 5,
      title: "Playlist 5",
      picture:
        "https://cdns-images.dzcdn.net/images/playlist/5f8b1e7d2c3e6f5d4e5b5c3b1b8f0f2a/500x500-000000-80-0-0.jpg",
    },
    {
      id: 6,
      title: "Playlist 6",
      picture:
        "https://cdns-images.dzcdn.net/images/playlist/5f8b1e7d2c3e6f5d4e5b5c3b1b8f0f2a/500x500-000000-80-0-0.jpg",
    },
  ];

  return (
    <div>
      <div className="flex flex-row justify-between mb-4">
        <p className="text-white text-xl font-semibold">Playlists</p>
        <div>
          <Link href="?newPlaylist=true">
            <button className="hover:text-gray-400 text-white ease-in-out transition">
              <CiSquarePlus size={30}></CiSquarePlus>
            </button>
          </Link>
        </div>
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
                <p className="text-white text-lg">{playlist.title}</p>
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
