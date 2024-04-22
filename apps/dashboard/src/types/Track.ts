export default interface Track {
  id: string;
  created_at: Date;
  artist_id: string;
  image: string;
  title: string;
  source: string;
  artist: string;
  objects_track_imageToobjects: string;
  objects_track_sourceToobjects: string;
}

export interface TrackEdit {
  id: string;
  artist_id: string;
  title: string;
  source: string;
  image: string;
}

export interface ICreateTrackDto {
  artist_id: string;
  title: string;
  source: string;
  image: string;
}