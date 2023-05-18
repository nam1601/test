import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../features/user/userSlice';
import articlesReducer from '../features/article/articleSlice';
export const store = configureStore({
    reducer: {
        user: userReducer,
        articles: articlesReducer,
    },
});
