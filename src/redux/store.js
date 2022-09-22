import { configureStore } from '@reduxjs/toolkit';
import blog from './slices/blogSlices';

export const store = configureStore({
  reducer: {
    blog,
  },
});
