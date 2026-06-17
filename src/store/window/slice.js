import { createSlice } from "@reduxjs/toolkit";

export const windowsSlice = createSlice({
    name: 'windows',
    initialState: [],
    reducers:{
        open: (state, action) => {
            const id = action.payload;
            if (!state.includes(id)) state.push(id);
        },
        close: (state, action) => {},
        minimize: (state, action) => {}
    }
})


export default windowsSlice.reducer

export const { open, close, minimize } = windowsSlice.actions