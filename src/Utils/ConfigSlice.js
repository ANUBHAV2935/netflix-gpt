import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        langlingo: "En"
    },
    reducers: {
        languageLingo: (state, action) => {
            state.langlingo = action.payload;
        },

    }
});
export default configSlice.reducer;
export const { languageLingo } = configSlice.actions;