import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface VerState {
  value: boolean
}

const initialState: VerState = {
  value: true,
}

export const isVerSlice = createSlice({
  name: 'isVerified',
  initialState,
  reducers: {
      setIsVer: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setIsVer } = isVerSlice.actions

export default isVerSlice.reducer