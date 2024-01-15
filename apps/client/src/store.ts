import { configureStore } from '@reduxjs/toolkit'
import {categorySlice} from "@monorepo/data-access";

export const store = configureStore({
  reducer: {
    category: categorySlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
//set selected category from sidebar
//get selected category in products
