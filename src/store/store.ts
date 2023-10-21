import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";
import profileSlice from "./slices/profileSlice";

const store = configureStore({
 reducer: {
  productsSlice,
  profileSlice,
 }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispath = typeof store.dispatch