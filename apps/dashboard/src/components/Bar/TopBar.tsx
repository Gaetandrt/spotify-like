import React from 'react'
import { ModeToggle } from '../theme-button'

type TopbarProps = {}

function Topbar({ }: TopbarProps) {
  return (
    <div className='w-full h-16 border-b flex flex-row items-center p-2 justify-between'>
      <div></div>
      <ModeToggle />
    </div>
  )
}

export default Topbar