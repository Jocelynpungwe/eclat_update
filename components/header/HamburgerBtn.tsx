'use client'
import React from 'react'
import { Menu } from 'lucide-react'
import { useAppDispatch } from '@/utils/hooks'
import { openSidebar } from '@/reducer/sidebarSlice'
const HamburgerBtn = () => {
  const dispatch = useAppDispatch()

  return (
    <Menu
      className="w-[2.5rem] h-[2.5rem] cursor-pointer"
      onClick={() => dispatch(openSidebar())}
    />
  )
}

export default HamburgerBtn
