export interface ICreateArtistDto {
  id: string;
  created_at: Date;
  image_id: string;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
}

export type Artist = {
  id: string;
  created_at: Date;
  image_id: string;
  image_url: string;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
}