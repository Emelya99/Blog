import { configureStore } from '@reduxjs/toolkit';
import blog from './slices/blogSlice';
import singlePost from './slices/singlePostSlice';
import user from './slices/userSlice';

export const store = configureStore({
  reducer: {
    blog,
    singlePost,
    user,
  },
});
