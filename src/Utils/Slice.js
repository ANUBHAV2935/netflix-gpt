import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name:"LoginUser",
    initialState:null,
    
    reducers:{
       addUser:(state,action)=>{
          return action.payload;

       },
       RemoveUser:(state,action)=>{
          return null;

       },
       
    },

});
export  const {addUser,RemoveUser} = loginSlice.actions;
export default loginSlice.reducer;
