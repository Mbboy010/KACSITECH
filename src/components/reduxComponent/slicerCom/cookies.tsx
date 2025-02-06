import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CocState {
  value: boolean
}

const initialState: CocState = {
  value: false,
}

export const isCocSlice = createSlice({
  name: 'isCoc',
  initialState,
  reducers: {
      setCoc: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCoc } = isCocSlice.actions

export default isCocSlice.reducer