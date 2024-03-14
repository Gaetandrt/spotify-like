import { Button } from "@/components/ui/button"
import { Home, Music, Speech, LibrarySquare, User } from 'lucide-react';
import Image from 'next/image'
import Link from "next/link";
import React from 'react'

type SidebarProps = {
}

function Sidebar({ }: SidebarProps) {
  return (
    <div className='h-[100vh] w-60 pt-10 flex flex-col items-center border-r'>
      <Image src="/spotify-logo.svg" alt="Spotify Logo" width={100} height={100} />
      <div className="mt-14 sidebar-buttons flex flex-col items-center gap-5">
        <Link href="/">
          <Button variant="outline">
            <Home size={16}/>
            <p>Dashboard</p>
          </Button>
        </Link>
        <Link href="/artists">
          <Button variant="outline">
            <Speech size={16}/>
            <p>Artists</p>
          </Button>
        </Link>
        <Link href="/tracks">
          <Button variant="outline">
            <Music size={16}/>
            <p>Tracks</p>
          </Button>
        </Link>
        <Link href="/playlists">
          <Button variant="outline">
            <LibrarySquare size={16}/>
            <p>Playlists</p>
          </Button>
        </Link>
        <Link href="/users">
          <Button variant="outline">
            <User size={16}/>
            <p>Users</p>
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar