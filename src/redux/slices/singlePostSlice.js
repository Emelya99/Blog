import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  post: {},
};

export const singlePostSlice = createSlice({
  name: 'singlePost',
  initialState,
  reducers: {
    setSinglePost(state, action) {
      state.post = action.payload;
    },
  },
});

export const { setSinglePost } = singlePostSlice.actions;

export default singlePostSlice.reducer;
