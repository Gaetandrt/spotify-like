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
import { useState } from "react";
import i18n from "@/translation/i18nInstance";

export function ArtistDialogCreate() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
      <Button variant="outline">{i18n.t("CreateArtistModal.CreateNewArtist")}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{i18n.t("CreateArtistModal.CreateNewArtist")}</DialogTitle>
          <DialogDescription>
            {i18n.t("CreateArtistModal.CreateNewArtistDescr")}
          </DialogDescription>
        </DialogHeader>
        <ArtistForm setOpen={setOpen}/>
      </DialogContent>
    </Dialog>
  )
}
