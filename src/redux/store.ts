import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import movieSlice from './movieSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    movie: movieSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch