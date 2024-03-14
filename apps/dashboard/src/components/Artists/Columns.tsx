"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Pencil, Trash } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { TrackDialogEdit } from "./DialogEdit";

export type Artist = {
  id: string;
  created_at: Date;
  image: string;
  name: string;
  // album: Album[];
  // objects: Objects;
  // track: Track[];
};

export const columns: ColumnDef<Artist>[] = [
  {
    accessorKey: "image",
    header: "Picture",
    cell: ({ cell }) => (
      <Image src={cell.getValue() as string} alt="Artist" width={35} height={35} />
    ),
  },
  {
    accessorKey: "name",
    header: "Name",

  },
  {
    accessorKey: "created_at",
    header: "Created At",
  },
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <div className="flex gap-3">
        <TrackDialogEdit />
        <Button variant="outline" size={"icon"}>
          <Trash size={16} />
        </Button>
      </div>
    ),
  },
]
