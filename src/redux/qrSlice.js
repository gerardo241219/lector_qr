import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null
}

const qrSlice = createSlice({
    name: "qr",
    initialState,
    reducers: {
        readStart(state) {
            state.loading = true;
            state.error = null;
        },
        readSuccess(state) {
            state.loading = false;
            state.error = null;
        }
    }
});

export const { readStart, readSuccess } = qrSlice.actions;
export default qrSlice.reducer;