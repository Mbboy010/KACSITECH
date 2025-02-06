import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface HandmsState {
  value: boolean
}

const initialState: HandmsState = {
  value: true,
}

export const isAuthSlice = createSlice({
  name: 'isAuth',
  initialState,
  reducers: {
      setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setIsAuth } = isAuthSlice.actions

export default isAuthSlice.reducer