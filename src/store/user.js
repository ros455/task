import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '.././axios'

export const getAllUsers = createAsyncThunk('user/getAllUsers', async() => {
    const {data} = await axios.get('/users')
    return data
})

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        items: [],
        status: 'loading'
    },
    extraReducers: {
        [getAllUsers.pending]: (state) => {
            state.status = 'loading';
            state.items = [];
        },
        [getAllUsers.fulfilled]: (state,action) => {
            state.status = 'loaded';
            state.items = action.payload;
        },
        [getAllUsers.rejected]: (state) => {
            state.status = 'error';
            state.items = [];
        },
    }
})

export const getUser = ((state) => state.users.items)

export const usersReducer = usersSlice.reducer;
