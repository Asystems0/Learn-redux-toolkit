import { configureStore } from "@reduxjs/toolkit";
import actorReducer from "./actors";
import counterReducer from "./counter";
import profileReducer from "./profile";
import userReducer from "./user";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    // profile: profileReducer,
    actors: actorReducer,
  },
});
