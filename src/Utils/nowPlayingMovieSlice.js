import { createSlice } from "@reduxjs/toolkit";

const nowPlayingMovies = createSlice({
    name: "Movies",
    initialState: {
        nowPlaying: null,
        newMovieTrailer:null,
        movieTrailer:null,
        tradingMovie:null,
        crimeMovie:null,
    },
    reducers: {
        addPlayingMovie: (state, action) => {
            state.nowPlaying = action.payload;
        },
        addPlayingPopular: (state, action) => {
            state.movieTrailer = action.payload;
        },
        addPlayingTranding: (state, action) => {
            state.tradingMovie = action.payload;
        },
        addPlayingCrime: (state, action) => {
            state.crimeMovie = action.payload;
        },
        addnewTrailer: (state, action) => {
            state.newMovieTrailer = action.payload;
        }
    },
});

export const { addPlayingMovie ,addnewTrailer,addPlayingPopular,addPlayingTranding,addPlayingCrime} = nowPlayingMovies.actions;
export default nowPlayingMovies.reducer;