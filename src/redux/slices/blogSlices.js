import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  trending: false,
  searchValue: '',
};

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setTrending(state, action) {
      state.trending = action.payload;
    },
  },
});

export const blogSelector = (state) => state.blog;

export const { setSearchValue, setTrending } = blogSlice.actions;

export default blogSlice.reducer;
