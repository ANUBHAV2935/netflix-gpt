import {configureStore} from "@reduxjs/toolkit";
import loginReducer from "./Slice";
import nowPlayingMoviesReducer from "./nowPlayingMovieSlice"
import gptReducer from "./GptSearchSlice"
import configsliceReducer from "./ConfigSlice"
const store = configureStore({
    reducer:{
       user:loginReducer,
       Movies:nowPlayingMoviesReducer,
       gptReducer:gptReducer,
       config:configsliceReducer,
    }
});
export default store;