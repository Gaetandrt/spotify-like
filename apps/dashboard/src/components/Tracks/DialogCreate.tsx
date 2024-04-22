import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TrackForm } from "./Form/FromCreate"

export function TrackDialogCreate() {
  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button variant="outline">Create new track</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New track</DialogTitle>
          <DialogDescription>
            You can create a new track here. Click submit when you're done.
          </DialogDescription>
        </DialogHeader>
        <TrackForm />
      </DialogContent>
    </Dialog>
  )
}
