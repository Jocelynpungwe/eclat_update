import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type SidebarStatus = {
  isOpenSidebar: boolean
}

const initialState: SidebarStatus = {
  isOpenSidebar: false,
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.isOpenSidebar = !state.isOpenSidebar
    },
  },
})

export const { openSidebar } = sidebarSlice.actions
export default sidebarSlice.reducer
