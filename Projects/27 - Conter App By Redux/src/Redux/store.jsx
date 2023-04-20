import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./Slices/CounterSlice"

export const store = configureStore({
  reducer : {
    counter : CounterSlice
  },
})