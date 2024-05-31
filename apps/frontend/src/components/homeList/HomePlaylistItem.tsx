import { Playlist } from '@/types/playlist'
import Image from 'next/image'
import React from 'react'

type HomePlaylistItemProps = {
  playlist: Playlist
}

function HomePlaylistItem({ playlist }: HomePlaylistItemProps) {
  return (
    <div className="flex flex-col gap-[2px]" key={`playlist-${playlist.id}`}>
      <Image
        src={"/playlist-default.jpg"}
        width={250}
        height={250}
        style={{ borderRadius: "5%" }}
        alt="Playlist"
      ></Image>
      <p className="mt-2">{playlist.name}</p>
      <p className="text-sm text-gray-400">{playlist.nb_tracks} titres</p>
    </div>
  )
}

export default HomePlaylistItem