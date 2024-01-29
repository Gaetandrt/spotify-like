"use client";
import React, { useState } from "react";
import HomePlaylistItem from "@/components/homeList/HomePlaylistItem";
import HomeAlbumItem from "./HomeAlbumItem";
import { CiSquareChevLeft } from "react-icons/ci";
import { CiSquareChevRight } from "react-icons/ci";

interface elementList {
  type: string;
  elem: any;
}

interface Playlist {
  id: number;
  title: string;
  nb_tracks?: number;
}

interface AlbumList {
  id: number;
  title: string;
  artist: string;
  outAt: string;
}

type HomeListProps = {
  title: string;
  description?: string;
  elementList?: any;
};

function HomeList({ title, description }: HomeListProps) {
  const Playlist: Playlist[] = [
    {
      id: 1,
      title: "Playlist 45",
      nb_tracks: 45,
    },
    {
      id: 2,
      title: "Playlist 2",
      nb_tracks: 4,
    },
    {
      id: 3,
      title: "Playlist 3",
      nb_tracks: 302,
    },
  ];

  const AlbumList: AlbumList[] = [
    {
      id: 1,
      title: "Album 45",
      artist: "Artist 1",
      outAt: "Sorti le 12/11/2023",
    },
    {
      id: 2,
      title: "Album 2",
      artist: "Artist 2",
      outAt: "Sorti le 12/11/2023",
    },
    {
      id: 3,
      title: "Album 3",
      artist: "Artist 3",
      outAt: "Sorti le 12/11/2023",
    },
  ];

  let elementList: elementList[] = [];

  elementList.push({ type: "playlist", elem: Playlist[0] });
  elementList.push({ type: "playlist", elem: Playlist[1] });
  elementList.push({ type: "playlist", elem: Playlist[2] });
  elementList.push({ type: "album", elem: AlbumList[0] });
  elementList.push({ type: "album", elem: AlbumList[1] });
  elementList.push({ type: "album", elem: AlbumList[2] });

  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerView = 5;
  const maxIndex = elementList.length - itemsPerView;

  const nextItems = () => {
    let newIndex = currentIndex + itemsPerView;
    if (newIndex > maxIndex) {
      newIndex = maxIndex;
    }
    setCurrentIndex(newIndex);
  };

  const prevItems = () => {
    let newIndex = currentIndex - itemsPerView;
    if (newIndex < 0) {
      newIndex = 0;
    }
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div>
        <div className="flex flex-row justify-between">
          <div className="font-semibold text-lg">{title}</div>
          {description && (
            <div className="text-gray-400 text-sm">{description}</div>
          )}
          <div className="mr-4">
            <button
              onClick={prevItems}
              className="mr-2"
              disabled={currentIndex === 0}
              style={{ cursor: currentIndex === 0 ? "not-allowed" : "pointer" }}
            >
              <CiSquareChevLeft
                size={35}
                color={currentIndex === 0 ? "grey" : ""}
              />
            </button>
            <button
              onClick={nextItems}
              className="ml-2"
              disabled={currentIndex >= maxIndex}
              style={{
                cursor: currentIndex >= maxIndex ? "not-allowed" : "pointer",
              }}
            >
              <CiSquareChevRight
                size={35}
                color={currentIndex >= maxIndex ? "grey" : ""}
              />
            </button>
          </div>
        </div>
        <div className="flex mt-5 overflow-hidden">
          <div
            className="flex transition-all duration-500"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            <div className="flex w-full">
              {elementList.map((element, index) =>
                element.type === "playlist" ? (
                  <div className="w-1/5 min-w-[calc(100%/5)]" key={index}>
                    <HomePlaylistItem key={index} {...element.elem} />
                  </div>
                ) : (
                  <div className="w-1/5 min-w-[calc(100%/5)]" key={index}>
                    <HomeAlbumItem key={index} {...element.elem} />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeList;
