import { configureStore } from '@reduxjs/toolkit';
import blog from './slices/blogSlice';
import singlePost from './slices/singlePostSlice';

export const store = configureStore({
  reducer: {
    blog,
    singlePost,
  },
});
