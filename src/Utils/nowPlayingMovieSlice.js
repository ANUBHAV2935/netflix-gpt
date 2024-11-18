import { createSlice } from "@reduxjs/toolkit";

const nowPlayingMovies = createSlice({
    name: "Movies",
    initialState: {
        nowPlaying: null,
        newMovieTrailer:null,
    },
    reducers: {
        addPlayingMovie: (state, action) => {
            state.nowPlaying = action.payload;
        },
        addnewTrailer: (state, action) => {
            state.newMovieTrailer = action.payload;
        }
    },
});

export const { addPlayingMovie ,addnewTrailer} = nowPlayingMovies.actions;
export default nowPlayingMovies.reducer;