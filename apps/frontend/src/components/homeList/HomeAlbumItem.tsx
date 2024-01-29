import Image from "next/image";
import React from "react";

type HomeAlbumItemProps = {
    id: number;
    image?: string;
    title: string;
    artist: string;
    outAt: string;
};

function HomeAlbumItem({ id, image, title, artist, outAt }: HomeAlbumItemProps) {
  return (
    <div className="flex flex-col gap-[2px]" key={`album-${id}`}>
      <Image
        src={image || "/playlist-default.jpg"}
        width={250}
        height={250}
        style={{ borderRadius: "5%" }}
        alt="Album"
      ></Image>
      <p className="mt-2">{title}</p>
      <p className="text-sm text-gray-400">{artist}</p>
      <p className="text-gray-400 text-xs">{outAt}</p>
    </div>
  );
}

export default HomeAlbumItem;
