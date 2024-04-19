import { createSlice } from "@reduxjs/toolkit";

export const windowsSlice = createSlice({
    name: 'windows',
    initialState: [],
    reducers:{
        open: (state, action) => {
            const id = action.payload;
            state.push(id)
            return console.log(state[id], 'open')
        },
        close: (state, action) => {},
        minimize: (state, action) => {}
    }
})


export default windowsSlice.reducer

export const { open, close, minimize } = windowsSlice.actions