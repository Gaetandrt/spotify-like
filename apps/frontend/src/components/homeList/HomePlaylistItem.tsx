import Image from 'next/image'
import React from 'react'

type HomePlaylistItemProps = {
    id: number,
    image?: string,
    title: string,
    nb_tracks: number,
}

function HomePlaylistItem({id, image, title, nb_tracks}: HomePlaylistItemProps) {
  return (
    <div className="flex flex-col gap-[2px]" key={`playlist-${id}`}>
    <Image
      src={image || "/playlist-default.jpg"}
      width={250}
      height={250}
      style={{ borderRadius: "5%" }}
      alt="Playlist"
    ></Image>
    <p className="mt-2">{title}</p>
    <p className="text-sm text-gray-400">{nb_tracks} titres</p>
  </div>
  )
}

export default HomePlaylistItem