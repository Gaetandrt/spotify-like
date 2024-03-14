import axiosAPI from "@/lib/axios";

export async function uploadArtistImage(file: File, filename :string): Promise<string> {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("filename", filename);

  const response = await axiosAPI.post("artists/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  console.log(response)

  return response.data;
}