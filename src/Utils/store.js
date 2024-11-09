import {configureStore} from "@reduxjs/toolkit";
import loginReducer from "./Slice";
const store = configureStore({
    reducer:{
       user:loginReducer,
    }
});
export default store;