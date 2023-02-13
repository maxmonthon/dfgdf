import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "It Store",
  user: [],
  loading: false,
};

export const ItSlice = createSlice({
  name: "ItSlice",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = ItSlice.actions;

export default ItSlice.reducer;
