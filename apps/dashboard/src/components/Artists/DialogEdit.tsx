"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ArtistForm } from "./Form/FormCreate"
import { Pencil } from "lucide-react"
import { useState } from "react";
import { Artist } from "@/types/Artist"
import i18n from "@/translation/i18nInstance"
import ButtonToolTip from "../ui/button-tooltip"
import { DropdownMenuItem } from "../ui/dropdown-menu"

type ArtistDialogEditProps = {
  data: Artist
}

export function ArtistDialogEdit({ data }: ArtistDialogEditProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
      <DropdownMenuItem onSelect={(e) => {
          e.preventDefault();
        }}>
          <div className="flex flex-row justify-between w-full">
            {i18n.t("Edit")}
            <Pencil size={16} />
          </div>
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit artist</DialogTitle>
          <DialogDescription>
            You can edit the artist here. Click submit when you &apos; re done.
          </DialogDescription>
        </DialogHeader>
        <ArtistForm setOpen={setOpen} editArtist={data} />
      </DialogContent>
    </Dialog>
  )
}
