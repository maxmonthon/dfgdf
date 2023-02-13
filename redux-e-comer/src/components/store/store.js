import { configureStore } from "@reduxjs/toolkit";
import ItSlice from "./ItSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    userSlice: userSlice,
    ItSlice: ItSlice,
  },
});
