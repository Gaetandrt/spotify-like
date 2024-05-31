import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DropdownMenuItem } from "../ui/dropdown-menu"
import { Button } from "../ui/button"
import { Artist } from "@/types/Artist"
import i18n from "@/translation/i18nInstance"
import { Trash2 } from "lucide-react"

type ArtistDialogEditProps = {
  artist: Artist
}

export function ArtistDialogDelete({ artist }: ArtistDialogEditProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => {
          e.preventDefault();
        }}>
          <div className="flex flex-row justify-between w-full">
            {i18n.t("Delete")}
            <Trash2 size={16} />
          </div>
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">

        <DialogHeader>
          <DialogTitle>{i18n.t("DeleteArtistModal.DeleteArtist")}</DialogTitle>
          <DialogDescription>
            {i18n.t("DeleteArtistModal.DeleteArtistDescr")}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div className="w-full flex justify-between">
            <DialogClose asChild>
              <Button variant="outline">{i18n.t("Cancel")}</Button>
            </DialogClose>
            <Button variant="destructive">{i18n.t("Confirm")}</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog >
  )
}
