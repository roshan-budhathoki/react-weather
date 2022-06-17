import {configureStore} from '@reduxjs/toolkit'
import weatherSlice from '../features/weatherSlice'

export const store = configureStore({
    reducer: {
        weather: weatherSlice,
    },
})