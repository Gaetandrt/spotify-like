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
import Track from "@/types/Track"
import { DropdownMenuItem } from "../ui/dropdown-menu"
import { Button } from "../ui/button"

type TrackDialogEditProps = {
  track: Track
}

export function TrackDialogDelete({ track }: TrackDialogEditProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => {
          e.preventDefault();
        }}>
          Delete
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">

        <DialogHeader>
          <DialogTitle>Delete track</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this track?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <div className="w-full flex justify-between">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button variant="destructive">Confirm</Button>
          </div>
        </DialogFooter>

      </DialogContent>
    </Dialog >
  )
}
