import { createSlice  } from "@reduxjs/toolkit";

const initialState = {postId: null};

export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        currentPost: (state, action) => {
            state.postId = action.payload.id
        }
    }
})

export const { currentPost } = postSlice.actions;

export default postSlice.reducer;   