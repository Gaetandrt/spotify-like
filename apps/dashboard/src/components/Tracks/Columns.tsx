"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal, Pencil, Trash } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { TrackDialogEdit } from "./DialogEdit";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { TrackDialogDelete } from "./DialogDelete";

export type Tracks = {
  id: string;
  created_at: Date;
  artist_id: string;
  image: string;
  title: string;
  source: string;
  artist: string;
  objects_track_imageToobjects: string;
  objects_track_sourceToobjects: string;
};

export const columns: ColumnDef<Tracks>[] = [
  {
    accessorKey: "id",
    header: "ID",
    enableHiding: true,
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ cell }) => (
      <Image src={cell.getValue() as string} alt="Track" width={35} height={35} />
    ),
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "artist",
    header: "Artist",
  },
  {
    accessorKey: "created_at",
    header: "Created At",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const track = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <TrackDialogEdit track={track} />
            <TrackDialogDelete track={track} />
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
