import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  profile: null,
};

export const profileReducer = createSlice({
  name: "profile",
  initialState,
  reducers: {
    loadProfile: (state) => {
      state.loading = true;
    },
    profileSuccess: (state, action) => {
      state.loading = false;
      state.profile = action.payload;
    },
    profileOut: (state) => {
      state.loading = false;
      state.profile = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadProfile, profileSuccess, profileOut } =
  profileReducer.actions;

export default profileReducer.reducer;
