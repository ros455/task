import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '.././axios'

export const getAllAlbums = createAsyncThunk('user/getAllAlbums', async() => {
    const {data} = await axios.get('/albums')
    return data
})

const albumsSlice = createSlice({
    name: 'albums',
    initialState: {
        items: [],
        status: 'loading',
    },
    extraReducers: {
        [getAllAlbums.pending]: (state) => {
            state.status = 'loading';
            state.items = [];
        },
        [getAllAlbums.fulfilled]: (state,action) => {
            state.status = 'loaded';
            state.items = action.payload;
        },
        [getAllAlbums.rejected]: (state) => {
            state.status = 'error';
            state.items = [];
        },
    }
})

export const getAlbums = ((state) => state.albums.items);

export const albumsReducer = albumsSlice.reducer;
