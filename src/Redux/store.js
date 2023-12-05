import { configureStore } from "@reduxjs/toolkit";
import { calculatorReducer } from "./Reducers/calculatorReducer";

export const store = configureStore({
    reducer:{
        calculatorReducer
    }
})