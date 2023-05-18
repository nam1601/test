import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as service from '../../services/services';
const initialState = {
    data: [],
    status: 'idle',
    error: null,
};
export const fetchArticles = createAsyncThunk('articles/fetchArticles', async () => {
    const response = await service.getAllArticle();
    // console.log('fetch', response);
    return response.articles;
});
export const createArticle = createAsyncThunk('articles/createArticle', async (articleData) => {
    console.log(articleData);
    let temp = { ...articleData };
    delete temp.token;
    const response = await service.createAnArticle(articleData.token, temp);
    return response;
});
export const userSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(createArticle.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createArticle.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // Thêm bài viết mới vào mảng data
            })
            .addCase(createArticle.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const selectArticles = (state) => state.articles;

export const {} = userSlice.actions;

export default userSlice.reducer;
