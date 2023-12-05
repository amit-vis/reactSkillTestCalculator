// This is Reducer function here
import { createSlice } from "@reduxjs/toolkit";

// here creating a Slice
const calculatorSlice = createSlice({
    name: "calculator",
    initialState: {
        displayValue:"0",
        toggle: false
    },
    reducers:{
        updateDisplay: (state, action)=>{
            state.displayValue = action.payload;
        },
        isToggle:(state,action)=>{
            state.toggle = !state.toggle;
        }
    },
});

// here we have exported some required things from here
export const calculatorReducer = calculatorSlice.reducer;

export const actions = calculatorSlice.actions;

export const calculatorSelector = (state)=> state.calculatorReducer.displayValue;
export const calculatorToggleSelector = (state)=> state.calculatorReducer.toggle