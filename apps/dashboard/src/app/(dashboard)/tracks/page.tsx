import { DataTable } from "@/components/Tracks/data-table";
import { columns } from "@/components/Tracks/Columns";
import { Button } from "@/components/ui/button";

export default function Tracks() {
  const data = [
    {
      id: "1",
      created_at: new Date(),
      artist_id: "1",
      image: "/spotify-logo.svg",
      title: "Track 1",
      source: "source1",
      artist: "Artist 1",
      objects_track_imageToobjects: "Object 1",
      objects_track_sourceToobjects: "Object 1",
    },
    {
      id: "2",
      created_at: new Date(),
      artist_id: "2",
      image: "/spotify-logo.svg",
      title: "Track 2",
      source: "source2",
      artist: "Artist 2",
      objects_track_imageToobjects: "Object 2",
      objects_track_sourceToobjects: "Object 2",
    },
    {
      id: "3",
      created_at: new Date(),
      artist_id: "3",
      image: "/spotify-logo.svg",
      title: "Track 3",
      source: "source3",
      artist: "Artist 3",
      objects_track_imageToobjects: "Object 3",
      objects_track_sourceToobjects: "Object 3",
    },
    {
      id: "4",
      created_at: new Date(),
      artist_id: "4",
      image: "/spotify-logo.svg",
      title: "Track 4",
      source: "source4",
      artist: "Artist 4",
      objects_track_imageToobjects: "Object 4",
      objects_track_sourceToobjects: "Object 4",
    }
  ];

  return (
    <main className="">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 w-24 mb-10">
        Tracks
      </h2>
      <DataTable columns={columns} data={data} />
    </main>
  );
}