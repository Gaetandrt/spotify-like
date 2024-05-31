"use client";
import React, { useEffect, useState } from "react";
import { HomeCarousel } from "../carousel";
import { Album } from "@/types/ablum";
import { Playlist } from "@/types/playlist";
import { createNewPlaylist, fetchPlaylist } from "@/services/PlaylistService";

type HomeListProps = {
  title: string;
  description?: string;
  elementList?: any;
};

async function HomeList({ title, description }: HomeListProps) {

  const fetchData = async () => {
    const playlist = await fetchPlaylist();

    if (playlist.status === "success") {
      return playlist.data
    } else {
      return []
    }
  };

  const elementList = await fetchData();

  return (
    <div className="w-full h-screen">
      <HomeCarousel items={elementList} title={title} />
    </div>
  );
}

export default HomeList;
