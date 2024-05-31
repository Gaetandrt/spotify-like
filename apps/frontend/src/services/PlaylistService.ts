import { fetcher } from "@/lib/axios";
import { ApiResponse, Metadata } from "@/lib/api-response";
import { CreatePlaylist, Playlist } from "@/types/playlist";

export async function createNewPlaylist(values: CreatePlaylist): Promise<ApiResponse<Playlist>> {
  try {
    const response = await fetcher<Playlist>("/playlist", "post", {
      data: {
        ...values
      }
    });

    return response;
  } catch (error) {
    console.error(error)
    throw error;
  }
}

export async function fetchPlaylist(): Promise<ApiResponse<Playlist[]>> {
  try {
    const response = await fetcher<Playlist[]>("/playlist", "get");
    return response;
  } catch (error) {
    throw error;
  }
}
