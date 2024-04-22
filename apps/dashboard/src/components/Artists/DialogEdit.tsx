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

type ArtistDialogEditProps = {
  data: Artist
}

export function ArtistDialogEdit({ data }: ArtistDialogEditProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button variant="outline" size={"icon"}>
          <Pencil size={16} />
      </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit artist</DialogTitle>
          <DialogDescription>
            You can edit the artist here. Click submit when you're done.
          </DialogDescription>
        </DialogHeader>
        <ArtistForm setOpen={setOpen} editArtist={data}/>
      </DialogContent>
    </Dialog>
  )
}
