import React from 'react'
import Sidebar from './SideBar'
import Topbar from './TopBar'

type LayoutBarProps = {
  children: React.ReactNode
}

function LayoutBar({ children }: LayoutBarProps) {
  return (
    <div className='flex flex-row'>
      <Sidebar />
      <div className='flex flex-col w-full'>
        <Topbar />
        <div className='w-[100%] h-[100%] p-10'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default LayoutBar