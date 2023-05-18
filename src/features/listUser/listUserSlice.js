import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
    data: [],
    status: 'idle',
    error: null,
};
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get('/api/users');
    return response.data;
});
export const listUserSlice = createSlice({
    name: 'listUser',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.listUser = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const selectUser = (state) => state.user;

export const {} = listUserSlice.actions;

export default listUserSlice.reducer;
