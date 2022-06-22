import { createSlice } from "@reduxjs/toolkit";
const axios = require("axios");

const API_URL = "https://thronesapi.com/api/v2/Characters";
// const API_URL = "https://jsonplaceholder.typicode.com/todos";

const initialState = {
  data: [],
};

export const actorReducer = createSlice({
  name: "actors",
  initialState,

  reducers: {
    getAllActors: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const getAllActorsAsync = () => async (dispatch) => {
  try {
    const response = await axios.get(API_URL);
    // console.log(response.data);
    dispatch(
      getAllActors(
        response.data
        // .slice(
        //   initialState.numberOfItems,
        //   initialState.numberOfItems + 8
        // )
      )
    );
  } catch (err) {
    throw new Error(err);
  }
};

export const { getAllActors } = actorReducer.actions;

export default actorReducer.reducer;
