import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '.././axios'

export const getAllPosts = createAsyncThunk('user/getAllPosts', async() => {
    const {data} = await axios.get('/posts')
    return data
})

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        items: [],
        status: 'loading',
        userId: '',
    },
    reducers: {
        userPost (state,action) {
            state.userId = action.payload;
        },
    },
    extraReducers: {
        [getAllPosts.pending]: (state) => {
            state.status = 'loading';
            state.items = [];
        },
        [getAllPosts.fulfilled]: (state,action) => {
            state.status = 'loaded';
            state.items = action.payload;
        },
        [getAllPosts.rejected]: (state) => {
            state.status = 'error';
            state.items = [];
        },
    }
})

export const {userPost} = postsSlice.actions;

export const getPosts = ((state) => state.posts.items);

export const getUserId = ((state) => state.posts.userId);

export const postsReducer = postsSlice.reducer;
