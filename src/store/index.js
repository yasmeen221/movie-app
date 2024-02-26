import { configureStore } from "@reduxjs/toolkit";
import watchListsMoviesSlice from "./slice/watchLists";

const reducerMovie=configureStore({
    reducer:{
        watchLists: watchListsMoviesSlice
    }
})

export default reducerMovie;