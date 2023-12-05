// this is the Store section
// here we have imported some required module here
import { configureStore } from "@reduxjs/toolkit";
import { calculatorReducer } from "./Reducers/calculatorReducer";

// here assign the reducer in the store
export const store = configureStore({
    reducer:{
        calculatorReducer
    }
})