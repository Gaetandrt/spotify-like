import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ProfileForm } from "./Form/FormCreate"
import { Pencil } from "lucide-react"

export function TrackDialogEdit() {
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
        <ProfileForm />
      </DialogContent>
    </Dialog>
  )
}
