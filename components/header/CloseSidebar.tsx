import React from 'react'
import { X } from 'lucide-react'
import { useAppDispatch } from '@/utils/hooks'
import { openSidebar } from '@/reducer/sidebarSlice'

const CloseSidebar = () => {
  const dispatch = useAppDispatch()
  return (
    <X
      className="w-[2.2rem] h-[2.2rem] bg-transparent border-transparent text-red-600 transition-all ease-in-out duration-300 cursor-pointer hover:text-red-800"
      onClick={() => dispatch(openSidebar())}
    />
  )
}

export default CloseSidebar
