import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface HandmsState {
  value: boolean
}

const initialState: HandmsState = {
  value: false,
}

export const handmsSlice = createSlice({
  name: 'handms',
  initialState,
  reducers: {
      setHandms: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setHandms } = handmsSlice.actions

export default handmsSlice.reducer