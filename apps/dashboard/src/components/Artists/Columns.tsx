"use client"

import moment from 'moment';
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, Trash } from "lucide-react";
import { ArtistDialogEdit } from "./DialogEdit";
import { Artist } from "@/types/Artist";
import ImageWithFallback from "../Image/ImageWithFallback";
import i18n from "@/translation/i18nInstance";
import ButtonToolTip from "../ui/button-tooltip";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { ArtistDialogDelete } from "./DialogDelete";

export const columns: ColumnDef<Artist>[] = [
  {
    id: "image_url",
    accessorKey: "image_url",
    header: i18n.t("ArtistDataGrid.Picture"),
    size: 25,
    cell: ({ cell }) => (
      <ImageWithFallback src={cell.getValue() as string} alt="Artist" width={35} height={35} fallbackSrc="/spotify-logo.svg" />
    ),
  },
  {
    id: "username",
    accessorKey: "username",
    header: i18n.t("ArtistDataGrid.Username"),
  },
  {
    id: "first_name",
    accessorKey: "first_name",
    header: i18n.t("ArtistDataGrid.Firstname"),
  },
  {
    id: "last_name",
    accessorKey: "last_name",
    header: i18n.t("ArtistDataGrid.Lastname"),
  },
  {
    id: "email",
    accessorKey: "email",
    header: i18n.t("ArtistDataGrid.Email"),
  },
  {
    id: "created_at",
    accessorKey: "created_at",
    header: i18n.t("ArtistDataGrid.CreatedAt"),
    cell: ({ cell }) => moment.utc(cell.getValue() as Date).format("DD/MM/YYYY hh:mm A"),
  },
  {
    id: "id",
    accessorKey: "id",
    header: "Id",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const artist = row.original

      return (
        <DropdownMenu>
          <ButtonToolTip variant="ghost" className="h-8 w-8 p-0" size={"icon"} toolText={i18n.t("ArtistDataGrid.ActionsButton")}>
            <DropdownMenuTrigger asChild>
              <MoreHorizontal className="h-4 w-4" />
            </DropdownMenuTrigger>
          </ButtonToolTip>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <ArtistDialogEdit data={artist} />
              <ArtistDialogDelete artist={artist} />
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  },
]