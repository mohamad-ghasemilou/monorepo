import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {Category} from "@monorepo/feature";

export interface CounterState {
  selected: Category
}

const initialState: CounterState = {
  selected: 'all',
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setSelected: (state, action: PayloadAction<Category>) => {
      state.selected = action.payload
    },
  },
})

export const { setSelected } = categorySlice.actions

export default categorySlice.reducer
