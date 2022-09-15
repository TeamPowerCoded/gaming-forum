import { createSlice  } from "@reduxjs/toolkit";

const initialState = [];

export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: (state, action) => {
            return [action.payload, ...state]
        }
    }
})

export const { addPost } = postSlice.actions;

export default postSlice.reducer;   