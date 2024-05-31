import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { TrackForm } from "./Form/FromCreate"
import Track from "@/types/Track"
import { DropdownMenuItem } from "../ui/dropdown-menu"

type TrackDialogEditProps = {
  track: Track
}

export function TrackDialogEdit({ track }: TrackDialogEditProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => {
          e.preventDefault();
        }}>
          Edit
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit track</DialogTitle>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>
        <TrackForm editTrack={track} />
      </DialogContent>
    </Dialog >
  )
}
