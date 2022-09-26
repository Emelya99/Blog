import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  trending: false,
  loader: false,
  searchValue: '',
};

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
    setTrending(state, action) {
      state.trending = action.payload;
    },
    setLoader(state, action) {
      state.loader = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export const blogSelector = (state) => state.blog;

export const { setSearchValue, setTrending, setPosts, setLoader } = blogSlice.actions;

export default blogSlice.reducer;
