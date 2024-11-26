import { createSlice } from "@reduxjs/toolkit";

const gptSearch = createSlice({
  name: "Gpt",
  initialState: {
    ShowGptSearch: false,
  },
  reducers: {
    toggleGptSearch:(state)=> {
      state.ShowGptSearch = !state.ShowGptSearch;
    },
  },
});

export const { toggleGptSearch } = gptSearch.actions;
export default gptSearch.reducer;