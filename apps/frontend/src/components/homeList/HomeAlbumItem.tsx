import { Album } from "@/types/ablum";
import Image from "next/image";
import React from "react";

type HomeAlbumItemProps = {
    album: Album
};

function HomeAlbumItem({ album }: HomeAlbumItemProps) {
  return (
    <div className="flex flex-col gap-[2px]" key={`album-${album.id}`}>
      <Image
        src={album.image_url || "/playlist-default.jpg"}
        width={250}
        height={250}
        style={{ borderRadius: "5%" }}
        alt="Album"
      ></Image>
      <p className="mt-2">{album.title}</p>
      <p className="text-sm text-gray-400">{album.artist_id}</p>
    </div>
  );
}

export default HomeAlbumItem;
