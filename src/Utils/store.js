import {configureStore} from "@reduxjs/toolkit";
import loginReducer from "./Slice";
import nowPlayingMoviesReducer from "./nowPlayingMovieSlice"
const store = configureStore({
    reducer:{
       user:loginReducer,
       Movies:nowPlayingMoviesReducer,
    }
});
export default store;