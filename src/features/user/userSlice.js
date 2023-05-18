import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as service from '../../services/services';
const initialState = localStorage.getItem('user')
    ? {
          data: JSON.parse(localStorage.getItem('user')),
          isLoggedIn: false,
          status: 'idle',
          error: null,
      }
    : {
          data: {},
          isLoggedIn: false,
          status: 'idle',
          error: null,
      };
export const login = createAsyncThunk('user/login', async (credentials) => {
    const response = await service.Login(credentials.email, credentials.password);

    return response.user;
});
export const registerUser = createAsyncThunk('user/registerUser', async (userData) => {
    const response = await service.Register(userData.username, userData.email, userData.password);
    return response.user; // Trả về dữ liệu người dùng đã được đăng ký từ API
});
export const updateUser = createAsyncThunk('user/updateUser', async (userData) => {
    const response = await service.updateUser(userData.token, userData);
    console.log('userData: ', userData);
    return response.data;
});
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logOut: (state) => {
            state.isLoggedIn = false;
            state.data = {};
            localStorage.removeItem('user');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.isLoggedIn = true;
                state.data = action.payload;
                // Lưu thông tin người dùng vào localStorage
                localStorage.setItem('user', JSON.stringify(action.payload));
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(registerUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
                localStorage.setItem('user', JSON.stringify(action.payload));
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(updateUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
                localStorage.setItem('user', JSON.stringify(action.payload));
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const selectUser = (state) => state.user;

export const { logOut } = userSlice.actions;

export default userSlice.reducer;
