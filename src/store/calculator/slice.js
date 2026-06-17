import { createSlice } from "@reduxjs/toolkit";

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: false,
    reducers: {
        isCalculatorOpen: () => true,
        closeCalculator: () => false,
    }
})
export const { isCalculatorOpen, closeCalculator } = calculatorSlice.actions
export default calculatorSlice.reducer