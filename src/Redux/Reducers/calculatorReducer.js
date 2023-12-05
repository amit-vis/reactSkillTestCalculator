import { createSlice } from "@reduxjs/toolkit";
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

export const calculatorReducer = calculatorSlice.reducer;

export const actions = calculatorSlice.actions;

export const calculatorSelector = (state)=> state.calculatorReducer.displayValue;
export const calculatorToggleSelector = (state)=> state.calculatorReducer.toggle