import { createSlice } from '@reduxjs/toolkit';
import {IPost} from "../types/post";

const INITIAL_STATE: { posts: IPost[] } = {
  posts: [],
};

const feedSlice = createSlice({
  name: 'feed',
  initialState: INITIAL_STATE,
  reducers: {
    setUrl(state, { payload }) {
      state.posts = payload;
    },
  },
});

export const FEED_ACTIONS = feedSlice.actions;
export default feedSlice.reducer;
