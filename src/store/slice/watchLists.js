import { createSlice } from "@reduxjs/toolkit";

const watchListsMoviesSlice = createSlice({
  name: "favorites",
  initialState: {
    list: [],
  },
  reducers: {
    addFavMovie: (state, action) => {
      state.list.push(action.payload);
    },
    removeFavMovie: (state, action) => {
      return (state.list = state.list.filter(
        (movie) => movie !== action.payload
      ));
    },
  },
});

export const {addFavMovie,removeFavMovie}=watchListsMoviesSlice.actions
export default watchListsMoviesSlice.reducer;

