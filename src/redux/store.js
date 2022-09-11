import { configureStore } from "@reduxjs/toolkit";
import postReducer from './reduxSlice/postSlice'

export const store = configureStore({
    reducer: {
        post: postReducer,
    }
})