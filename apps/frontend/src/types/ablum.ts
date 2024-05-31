export interface Album {
  id: number;
  title: string;
  description: string;
  image_url?: string;
  createdAt: Date;
  artist_id: string;
  type: 'album';
}

