"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { EyeOff, Users } from "lucide-react"
import { CiSquarePlus } from "react-icons/ci"
import { Switch } from "../ui/switch"
import Image from "next/image"
import { Textarea } from "../ui/textarea"
import { useState } from "react"
import { CreatePlaylist } from "@/types/playlist"
import { createNewPlaylist } from "@/services/PlaylistService"
import { toast } from "sonner"

export function PlaylistModal() {
    const [isPrivate, setIsPrivate] = useState(false)
    const [isCollaborative, setIsCollaborative] = useState(false)
    const [playlistName, setPlaylistName] = useState("")
    const [playlistDescr, setPlaylistDescr] = useState("")
    const [open, setOpen] = useState(false)

    const submitPlaylist = async () => {
        const playlist: CreatePlaylist = {
            name: playlistName,
            description: playlistDescr,
            private: isPrivate,
            collaborative: isCollaborative,
        }

        const response = await createNewPlaylist(playlist)

        if (response.status === "success") {
            toast.success("Playlist créée !")
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button onClick={() => setOpen(true)} variant="secondary" className="p-0"><CiSquarePlus size={30}></CiSquarePlus></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[700px] border-none bg-[#1B191F]">
                <DialogHeader>
                    <DialogTitle>Créer ma playlist </DialogTitle>
                </DialogHeader>
                <div className="gap-4 py-4 font-light text-sm flex">
                    <Image src="/playlist-default.jpg" alt="logo" width={200} height={200} className="rounded-sm" />
                    <div className="w-full">
                        <Label>Nom</Label>
                        <Input value={playlistName} onChange={(e) => setPlaylistName(e.target.value)} className="bg-[#29282d] focus:border-violet-600 focus:border-2 border-0 mt-2" type="text" placeholder="Nom de la playlist" />
                        <div className="flex gap-2 justify-between mt-6 items-center">
                            <Users size={30} className="" />
                            <div className="flex-1 ml-2">
                                <Label className="text-base">Collaborative</Label>
                                <p className="text-[#6f6d71] text-xs">Tu peux inviter tes amis à ajouter des titres</p>
                            </div>
                            <Switch value={Number(isCollaborative)} onCheckedChange={(checked) => setIsCollaborative(checked)} />
                        </div>
                        <div className="flex gap-2 justify-between mt-6 items-center">
                            <EyeOff size={30} />
                            <div className="flex-1 ml-2">
                                <Label className="text-base">Privée</Label>
                                <p className="text-[#6f6d71] text-xs">Il n'y a que toi qui peu voir ta playlist</p>
                            </div>
                            <Switch value={Number(isPrivate)} onCheckedChange={(checked) => setIsPrivate(checked)} />
                        </div>
                    </div>
                </div>
                <Textarea value={playlistDescr} onChange={(e) => setPlaylistDescr(e.target.value)} className="bg-[#29282d] focus:border-violet-600 focus:border-2 border-0 mt-2" placeholder="Ajoute des titres ici"></Textarea>
                <DialogFooter>
                    <Button onClick={submitPlaylist} type="button" className="bg-violet-600 hover:bg-violet-500">Créer</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
