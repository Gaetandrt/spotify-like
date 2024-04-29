"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Trash } from "lucide-react";
import { Button } from "../ui/button";
import { ArtistDialogEdit } from "./DialogEdit";
import { Artist } from "@/types/Artist";
import ImageWithFallback from "../Image/ImageWithFallback";
import i18n from "@/translation/i18nInstance";

export const columns: ColumnDef<Artist>[] = [
  {
    accessorKey: "image_url",
    header: i18n.t("ArtistDataGrid.Picture"),
    size: 25,
    cell: ({ cell }) => (
      <ImageWithFallback src={cell.getValue() as string} alt="Artist" width={35} height={35} fallbackSrc="/spotify-logo.svg" />
    ),
  },
  {
    accessorKey: "username",
    header: i18n.t("ArtistDataGrid.Username"),

  },
  {
    accessorKey: "created_at",
    header: i18n.t("ArtistDataGrid.CreatedAt"),
  },
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const artist = row.original

      return (
        <div className="flex gap-3">
          <ArtistDialogEdit data={artist} />
          <Button variant="outline" size={"icon"}>
            <Trash size={16} />
          </Button>
        </div>
      )
    }
  },
]
