import { createSlice } from "@reduxjs/toolkit";

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: false,
    reducers:{
         isCalculatorOpen: (state, action) => {
            return true
        },
    }
})
export const { isCalculatorOpen } = calculatorSlice.actions
export default calculatorSlice.reducer