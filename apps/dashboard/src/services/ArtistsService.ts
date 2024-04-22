import { Artist } from "@/types/Artist";
import { formSchema } from "@/components/Artists/Form/FormSchema";
import axiosAPI, { fetcher } from "@/lib/axios";
import { z } from "zod";
import { AutocompleteData } from "@/types/Utils";
import { ApiResponse, UploadResponse } from "@/lib/api-response";

export async function uploadArtistImage(file: File, filename: string): Promise<UploadResponse> {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("filename", filename);

    const response = await axiosAPI.post<UploadResponse>("/artists/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    throw new Error("Error uploading image");
  }
}

export async function createNewArtist(values: z.infer<typeof formSchema>, image: string): Promise<ApiResponse<Artist>> {
  try {
    const response = await fetcher<Artist>("/artists", "post", {
      username: values.username,
      first_name: values.firstname,
      last_name: values.lastname,
      email: values.email,
      image_id: image,
    });

    return response;
  } catch (error) {
    console.error(error)
    throw error;
  }
}

export async function fetchArtists(): Promise<ApiResponse<Artist[]>> {
  try {
    const response = await fetcher<Artist[]>("/artists", "get");

    return response;
  } catch (error) {
    throw error;
  }
}

export async function fetchAutcompleteArtists(): Promise<AutocompleteData[]> {
  try {
    const response = await axiosAPI.get("/artists/autocomplete")

    return response.data;
  } catch (error) {
    throw error;
  }
}