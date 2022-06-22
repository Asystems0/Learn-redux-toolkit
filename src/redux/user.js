import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  loading: false,
  user: null,
};

// const dispatch = useDispatch();

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLoaded: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.loading = false;
      state.user = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { userLoaded, loginSuccess, logout } = userReducer.actions;

export default userReducer.reducer;
