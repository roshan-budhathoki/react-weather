import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        value: {}
    },
    reducers: {
        updateWeather: (state, action) => {
            state.value = action.payload
        }
    }
});

export const { updateWeather } = weatherSlice.actions
export default weatherSlice.reducer