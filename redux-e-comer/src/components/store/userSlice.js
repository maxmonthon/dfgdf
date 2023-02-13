import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "hello max",
  user: [],
  loading: false,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = "hello login";
      state.user = action.payload;
      state.loading = true;
    },
    logout: (state) => {
      state.value = "hello logout";
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
